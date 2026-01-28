const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const compression = require('compression')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.port || 3000
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      // Apply compression middleware
      compression()(req, res, () => {
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl
        const host = req.headers.host || ''
        
        // Handle www to non-www redirect
        if (host.startsWith('www.') && !host.includes('localhost')) {
          const newHost = host.slice(4)
          const redirectUrl = `http://${newHost}${req.url}`
          res.writeHead(301, { Location: redirectUrl })
          res.end()
          return
        }
        
        if (pathname === '/a') {
          app.render(req, res, '/a', query)
        } else if (pathname === '/b') {
          app.render(req, res, '/b', query)
        } else {
          handle(req, res, parsedUrl)
        }
      })
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
})