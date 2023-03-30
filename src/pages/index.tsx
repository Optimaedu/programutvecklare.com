import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Programutvecklare</title>
        <meta name="description" content="Generated by Programutvecklare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-full min-h-screen m-0 p-0 bg-slate-400'>
        <h1 className='text-xxl font-semibold'>Välkommen Till Programutvecklare</h1>
        <h1 className='text-xl text-yellow-50 font-semibold'>Site under construction</h1>
      </div>
    </>
  )
}