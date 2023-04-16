import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-bg h-[200%] bg-no-repeat bg-cover w-full absolute z-[-10]" />
      <nav id="main" className="flex items-center p-5 pt-12">
        <div className="fixed top-0 w-full py-4">
          <div className="flex justify-between">
            <a href="#main" className="flex flex-col mr-5 ml-1">
              <Image
                src={"/logo.webp"}
                width={1080}
                height={720}
                alt="Logo"
                className="w-24"
              />
              <p>programutvecklare</p>
            </a>
            <div className="flex flex-wrap justify-end pr-10">
              <a href="#info">
                <p className="hover:text-[#9f9f9f] pl-5 pt-2">Info</p>
              </a>
              <a href="#application">
                <p className="hover:text-[#9f9f9f] pl-5 pt-2">Kurser</p>
              </a>
              <a href="#videos">
                <p className="hover:text-[#9f9f9f] pl-5 pt-2">Video</p>
              </a>
              <a href="#contact">
                <p className="hover:text-[#9f9f9f] pl-5 pt-2">Kontakt</p>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center 2xl:flex-row 2xl:justify-around mx-24 mb-32 mt-20 xl:mt-24 2xl:mt-56">
        <div className="text-center 2xl:text-left mt-6 2xl:mt-0">
          <h1 className="text-4xl xl:text-8xl bg-custom bg-[#db7d12] bg-clip-text text-transparent pb-2">
            programmering
          </h1>
          <h2 className="text-4xl xl:text-8xl">för allihopa</h2>
        </div>
        <button></button>
        <Image
          src={"/main.webp"}
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
        <h1 className="text-4xl 2xl:text-6xl mt-32 2xl:mt-40">
          Vad är det vi gör här?
        </h1>
        <h2 className="text-gray-400 text-4xl 2xl:text-6xl mt-3">
          Allt möjligt!
        </h2>
        <p className="mt-5">
          Vid denna bransch arbetar du med webbapplikationer och kommer att lära
          dig full stack.
        </p>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4 lg:mx-36 mt-10">
        <div>
          <img
            src={"/imagea.webp"}
            alt="Image 1"
            className="w-full h-[200px] lg:h-[300px] 2xl:h-[400px] object-cover rounded-3xl"
          />
        </div>
        <div>
          <img
            src={"/imageb.webp"}
            alt="Image 2"
            className="w-full h-[200px] lg:h-[300px] 2xl:h-[400px] object-cover rounded-3xl"
          />
        </div>
      </div>

      <section
        id="application"
        className="flex flex-col items-center xl:flex-row justify-between px-4 xl:px-36 xl:mt-44 mb-20"
      >
        <div className="xl:w-[60%] xl:pr-8">
          <h1 className="text-4xl xl:text-6xl mt-24">Kurser</h1>
          <h2 className="text-gray-400 text-xl mt-3 max-w-[1000px]">
            Här är allt vi lär oss vid programutvecklare.
          </h2>
          <div className="mt-5 space-y-5 lg:space-y-3">
            <div className="w-full h-20 rounded-3xl bg-[#b55912] flex justify-center items-center">
              <div className="text-base lg:text-xl text-center mx-4 lg:mx-8">
                <p>Grundexamen i informations- och kommunikationsteknik</p>
                <p className="font-bold">180 kp</p>
              </div>
            </div>
            <div className="w-full h-20 rounded-3xl bg-[#48922E] flex justify-center items-center">
              <div className="text-base lg:text-xl text-center mx-4 lg:mx-8">
                <p>
                  Grundläggande uppgifter inom informations- och
                  kommunikationsteknik
                </p>
                <p className="font-bold">25 kp</p>
              </div>
            </div>
            <div className="w-full h-20 rounded-3xl bg-[#48922E] flex justify-center items-center">
              <div className="text-base lg:text-xl text-center mx-4 lg:mx-8">
                <p>Programmering</p>
                <p className="font-bold">45 kp</p>
              </div>
            </div>
            <div className="w-full h-20 rounded-3xl bg-[#48922E] flex justify-center items-center">
              <div className="text-base lg:text-xl text-center mx-4 lg:mx-8">
                <p>Arbete som programvaruutvecklare</p>
                <p className="font-bold">45 kp</p>
              </div>
            </div>
            <div className="w-full h-20 rounded-3xl bg-[#2E7492] flex justify-center items-center">
              <div className="text-base lg:text-xl text-center mx-4 lg:mx-8">
                <p>Implementering av programvara med komponentbibliotek</p>
                <p className="font-bold">30 kp</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row xl:flex-col xl:justify-between xl:px-10 lg:px-20">
          <Image
            src={"/startup.svg"}
            width={1280}
            height={720}
            alt="Startup"
            className="w-1/2 xl:w-auto xl:h-96"
          />
          <div className="xl:ml-10 lg:ml-20 mt-5">
            <p className="text-xl lg:text-4xl text-[#ACE0E7]">Vi lär dig:</p>
            <ul className="list-disc text-sm lg:text-xl mt-2">
              <li>HTML, CSS och JavaScript</li>
              <li>Node.js</li>
              <li>Next.js m.m</li>
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
          Vad händer vid programutvecklare?
        </h1>
        <div className="flex flex-col 2xl:flex-row mt-7">
          <div className="mx-auto 2xl:mx-10 flex items-center flex-col">
            <iframe
              className="rounded-3xl w-full h-48 2xl:w-[800px] 2xl:h-[450px] lg:w-[720px] lg:h-[405px]"
              src="https://www.youtube.com/embed/4CgciCxtwz4?controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <h2 className="text-gray-400 text-xl mt-7">
              Här är en programutvecklare som jobbar på en uppgift.
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
        <h2 className="text-gray-600 text-xl mt-3 text-center">
          Funkar inte ännu.
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
            className="w-full 2xl:w-[600px] h-[170px] rounded-xl text-xl 2xl:text-2xl bg-gray-800 px-4 2xl:px-10 py-3 2xl:py-5 mt-5"
            placeholder="Meddelande"
          ></textarea>
          <button
            type="submit"
            className="w-full 2xl:w-[600px] h-[90px] rounded-3xl bg-[#48922E] mt-5 text-xl 2xl:text-2xl font-bold text-white hover:bg-[#55b133] transition duration-300 ease-in-out"
          >
            Skicka
          </button>
        </form>
      </section>

      <footer className="bg-gray-900 mt-10 2xl:mt-20 w-full">
        <div className="flex justify-between items-center px-3 py-6 2xl:px-7 2xl:py-5">
          <p className="text-[13px] 2xl:text-lg text-[#ffffe6de]">
            © 2023 Optima
          </p>
          <a href="https://optimaedu.fi/sv/">
            <Image
              src={"/logo.webp"}
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
