/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Image
        src={"/background.png"}
        alt="Background"
        width={1920}
        height={1080}
        className="absolute w-full z-[-10]"
      />
      <nav id="main" className="flex items-center p-5 pt-12">
        <div className="fixed top-0 w-full py-4">
          <div className="flex justify-between">
            <a href="#main" className="flex flex-col mr-5">
              <Image
                src={"/logo.png"}
                width={1080}
                height={720}
                alt="Logo"
                className="w-24"
              />
              <p>programutvecklare</p>
            </a>
            <div className="flex flex-wrap justify-end pr-8">
              <a href="#info" className="pl-5 py-2">
                Info
              </a>
              <a href="#application" className="pl-5 py-2">
                Ansökan
              </a>
              <a href="#videos" className="pl-5 py-2">
                Videor
              </a>
              <a href="#contact" className="pl-5 py-2">
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center 2xl:flex-row 2xl:justify-around m-10 mb-32 mt-14 xl:mt-24 2xl:mt-56">
        <div className="text-center 2xl:text-left mt-6 2xl:mt-0">
          <h1 className="text-3xl xl:text-8xl bg-custom bg-[#db7d12] bg-clip-text text-transparent pb-2">
            programmering
          </h1>
          <h2 className="text-3xl xl:text-8xl">för allihopa</h2>
        </div>
        <Image
          src={"/main.png"}
          width={1920}
          height={1080}
          alt="Main Image"
          className="rounded-3xl w-full max-w-[655px] mt-6 2xl:mt-0"
        />
      </main>

      <section
        id="info"
        className="flex flex-col text-center mx-7 2xl:mx-36 2xl:text-left"
      >
        <h1 className="text-4xl 2xl:text-6xl mt-10 2xl:mt-40">
          Vad är det vi gör här?
        </h1>
        <h2 className="text-gray-400 text-4xl 2xl:text-6xl mt-3">
          Allt möjligt!
        </h2>
        <p className="mt-5">Lorem Ipsum is simply dummy text of the printing</p>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4 lg:mx-36 mt-10">
        <div>
          <img
            src={"/imagea.png"}
            alt="Image 1"
            className="w-full h-[200px] lg:h-[300px] 2xl:h-[400px] object-cover rounded-3xl"
          />
        </div>
        <div>
          <img
            src={"/imageb.png"}
            alt="Image 2"
            className="w-full h-[200px] lg:h-[300px] 2xl:h-[400px] object-cover rounded-3xl"
          />
        </div>
      </div>

      <section
        id="application"
        className="flex flex-col items-center 2xl:flex-row justify-between px-4 2xl:px-36 mt-44 mb-20"
      >
        <div className="2xl:w-[60%] 2xl:pr-8">
          <h1 className="text-4xl 2xl:text-6xl mt-20">Ansökan</h1>
          <h2 className="text-gray-400 text-xl mt-3 max-w-[1000px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to{" "}
          </h2>
          <div className="mt-5">
            <div className="w-full h-[80px] rounded-3xl bg-[#48922E] flex justify-center items-center">
              <div className="text-xl 2xl:text-2xl text-center flex flex-col 2xl:flex-row">
                <p className="2xl:mr-3">
                  Grunder inom informations- och kommunikationsteknik
                </p>
                <p className="2xl:mr-5 font-bold">25 kp</p>
              </div>
            </div>
            <div className="w-full 2xl:w-auto h-[80px] rounded-3xl mt-5 bg-[#925E2E] flex justify-center items-center">
              <div className="text-xl 2xl:text-2xl text-center flex flex-col 2xl:flex-row">
                <p className="2xl:mr-3">Programmering</p>
                <p className="2xl:mr-5 font-bold">20 kp</p>
              </div>
            </div>
            <div className="w-full 2xl:w-auto h-[80px] rounded-3xl mt-5 bg-[#925E2E] flex justify-center items-center">
              <div className="text-xl 2xl:text-2xl text-center flex flex-col 2xl:flex-row">
                <p className="2xl:mr-3">Utveckling av programvara</p>
                <p className="2xl:mr-5 font-bold">20 kp</p>
              </div>
            </div>
            <div className="w-full 2xl:w-auto h-[80px] rounded-3xl mt-5 bg-[#92402E] flex justify-center items-center">
              <div className="text-xl 2xl:text-2xl text-center flex flex-col 2xl:flex-row">
                <p className="2xl:mr-3">Lorem Ipsum</p>
                <p className="2xl:mr-5 font-bold">25 kp</p>
              </div>
            </div>
            <div className="w-full 2xl:w-auto h-[80px] rounded-3xl mt-5 bg-[#92402E]  flex justify-center items-center">
              <div className="text-xl 2xl:text-2xl text-center flex flex-col 2xl:flex-row">
                <p className="2xl:mr-3">Lorem Ipsum</p>
                <p className="2xl:mr-5 font-bold">25 kp</p>
              </div>
            </div>
            <div className="w-full 2xl:w-auto h-[80px] rounded-3xl mt-5 bg-[#2E7492] flex justify-center items-center">
              <div className="text-xl 2xl:text-2xl text-center flex flex-col 2xl:flex-row">
                <p className="2xl:mr-3">Lorem Ipsum</p>
                <p className="2xl:mr-5 font-bold">25 kp</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row 2xl:flex-col 2xl:justify-between 2xl:px-10 lg:px-20">
          <Image
            src={"/startup.svg"}
            width={1280}
            height={720}
            alt="Startup"
            className="w-1/2 2xl:w-auto 2xl:h-96"
          />
          <div className="2xl:ml-10 lg:ml-20 mt-5">
            <p className="text-2xl xl:text-4xl text-[#ACE0E7]">Du lär dig:</p>
            <ul className="list-disc text-sm xl:text-2xl mt-2">
              <li>HTML, CSS och JavaScript</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>och mera...</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="videos"
        className="flex flex-col items-center mx-6 2xl:mx-0 2xl:mb-56"
      >
        <h1 className="text-2xl 2xl:text-5xl text-center 2xl:mt-40">
          Vad gör vi vid programutvecklare?
        </h1>
        <div className="flex flex-col 2xl:flex-row mt-7">
          <div className="mx-auto 2xl:mx-10 flex items-center flex-col">
            <iframe
              className="rounded-3xl w-full h-48 2xl:w-[800px] 2xl:h-[450px] lg:w-[720px] lg:h-[405px]"
              src="https://www.youtube.com/embed/4CgciCxtwz4?controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <h2 className="text-gray-400 text-xl mt-7 max-w-[550px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </h2>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="flex flex-col justify-center items-center px-6 2xl:px-0"
      >
        <h1 className="text-3xl 2xl:text-6xl mt-20 2xl:mt-10 text-center">
          Kontakta oss
        </h1>
        <h2 className="text-gray-400 text-2xl 2xl:text-4xl mt-3 text-center">
          Vi vill gärna höra från dig!
        </h2>
        <form className="2xl:mt-10 w-full lg:w-[600px] flex flex-col items-center">
          <input
            type="text"
            placeholder="Namn"
            className="w-full 2xl:w-[600px] h-[80px] rounded-xl text-xl 2xl:text-2xl bg-gray-800 px-4 2xl:px-10 mt-5"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full 2xl:w-[600px] h-[80px] rounded-xl text-xl 2xl:text-2xl bg-gray-800 px-4 2xl:px-10 mt-5"
          />
          <textarea
            className="w-full 2xl:w-[600px] h-[200px] rounded-xl text-xl 2xl:text-2xl bg-gray-800 px-4 2xl:px-10 py-3 2xl:py-5 mt-5"
            placeholder="Meddelande"
          ></textarea>
          <button
            type="submit"
            className="w-full 2xl:w-[600px] h-[80px] rounded-3xl bg-[#48922E] mt-5 text-xl 2xl:text-2xl font-bold text-white hover:bg-[#55b133] transition duration-300 ease-in-out"
          >
            Skicka
          </button>
        </form>
      </section>

      <footer className="bg-gray-900 mt-10 2xl:mt-24 w-full">
        <div className="flex justify-between items-center px-3 py-6 2xl:px-7 2xl:py-5">
          <p className="text-[13px] 2xl:text-lg">© 2023 Optima</p>
          <a href="https://optimaedu.fi/sv/">
            <Image
              src={"/logo.png"}
              width={1280}
              height={720}
              alt="Logo"
              className="w-24"
            />
          </a>
          <div className="flex w-28 2xl:w-32">
            <a
              href="https://www.facebook.com/optimaedu.fi/"
              target="_blank"
              className="mr-1"
            >
              <Image
                src={"/facebook-logo-bold.svg"}
                width={32}
                height={32}
                alt="Facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/optimaedu/"
              target="_blank"
              className="mr-1"
            >
              <Image
                src={"/instagram-logo-bold.svg"}
                width={32}
                height={32}
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/optima-yrkesutbildning/"
              target="_blank"
              className="mr-1"
            >
              <Image
                src={"/linkedin-logo-bold.svg"}
                width={32}
                height={32}
                alt="linkedIn"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCqDRl3XxAuA-96pTAkf_lJw"
              target="_blank"
              className="mr-1"
            >
              <Image
                src={"/youtube-logo-bold.svg"}
                width={32}
                height={32}
                alt="YouTube"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
