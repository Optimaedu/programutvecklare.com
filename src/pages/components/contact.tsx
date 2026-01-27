"use client"

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
// import { sendMail } from "@/lib/mailserver";





function Contact() {
  const [name, setName] = useState("")
  const [email, setMail] = useState("")
  const [message, setMessage] = useState("")
  const [captcha, setCaptcha] = useState()
  const [error, setError] = useState("")
  const [isDisabled, setState] = useState(false)

  async function handleSubmit(e:React.FormEvent) {
    e.preventDefault()
    const result = await fetch("/api/sendmail", {
      method: "post",
      body: JSON.stringify({name, email, message}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await result.json()
    if (data) {
      setState(true)
      setError(data.name)
      console.log(data)
    }
  }
  return (
    <>
      <section
        id="contact"
        className="flex flex-col justify-center items-center px-6 2xl:px-0"
      >
        <h1 className="text-3xl lg:text-5xl mt-10 2xl:mt-12 text-center">
          Kontakta oss
        </h1>
        <h2 className="text-gray-400 text-xl lg:text-3xl mt-1 lg:mt-3 text-center">
          Vi vill gärna höra från dig!
        </h2>
        <form className="2xl:mt-10 w-full md:w-[600px] flex flex-col items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Namn"
            className="w-full 2xl:w-[600px] h-[80px] rounded-xl text-xl 2xl:text-2xl bg-gray-800 px-4 2xl:px-10 mt-5"
            onChange={(e)=>setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full 2xl:w-[600px] h-[80px] rounded-xl text-xl 2xl:text-2xl bg-gray-800 px-4 2xl:px-10 mt-5"
            onChange={(e)=>setMail(e.target.value)}
            required
          />
          <textarea
            className="resize-none w-full 2xl:w-[600px] h-[170px] rounded-xl text-xl 2xl:text-2xl bg-gray-800 px-4 2xl:px-10 py-5 2xl:py-5 mt-5"
            placeholder="Meddelande"
            onChange={(e)=>setMessage(e.target.value)}
            required
          ></textarea>
          <ReCAPTCHA
          id="test"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} 
          className="mt-4"
          
          />
          <button
            type="submit"
            className="w-full 2xl:w-[600px] h-[90px] disabled:bg-green-700 disabled:hover:bg-green-900 rounded-xl bg-[#48922E] mt-5 text-xl 2xl:text-2xl font-bold text-white hover:bg-[#55b133] transition duration-300 ease-in-out"
            disabled={isDisabled}
          >
            Skicka
          </button>
          <span className="text-green-500 text-lg">{error}</span>
        </form>
      </section>
    </>
  );
}

export default Contact;
