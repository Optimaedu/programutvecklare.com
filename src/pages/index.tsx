import Image from "next/image";
import Slider from "./components/slider";

export default function Home() {
  return (
    <>
      <div className="bg-behind h-[200%] bg-no-repeat bg-cover w-full absolute z-[-10]" />
      <nav
        id="main"
        className="flex items-center pl-3 2xl:pl-4 2xl:p-5 2xl:pt-12"
      >
        <div className="2xl:fixed top-0 w-full py-3">
          <div className="flex items-start justify-between">
            <a href="#main" className="flex justify-center items-center gap-3">
              <Image
                src={"/logo.webp"}
                width={1080}
                height={720}
                alt="Logo"
                className="w-10 pl-3 sm:pl-1 pt-2"
              />
              <div className="flex flex-col">
                <Image
                  src={"/optima.webp"}
                  width={1080}
                  height={720}
                  alt="Optima Logo"
                  className="w-20"
                />
                <p className="text-sm">Programutvecklare</p>
              </div>
            </a>
            <div className="flex flex-wrap justify-end sm:pr-3.5 2xl:pr-6">
              <a href="#info" className="m-2">
                <p className="hover:text-[#9f9f9f] transition duration-300 ease-in-out">
                  Info
                </p>
              </a>
              <a href="#courses" className="m-2">
                <p className="hover:text-[#9f9f9f] transition duration-300 ease-in-out">
                  Kurser
                </p>
              </a>
              <a href="#video" className="m-2">
                <p className="hover:text-[#9f9f9f] transition duration-300 ease-in-out">
                  Video
                </p>
              </a>
              <a href="#contact" className="m-2">
                <p className="hover:text-[#9f9f9f] transition duration-300 ease-in-out">
                  Kontakt
                </p>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center 2xl:flex-row 2xl:justify-between mx-5 lg:mx-36 mt-0 xl:mt-12 2xl:mt-56 xl:mb-16">
        <div className="text-center 2xl:text-left mt-6 2xl:mt-0">
          <h1 className="text-4xl xl:text-8xl bg-custom bg-[#db7d12] bg-clip-text text-transparent pb-2">
            Programmering
          </h1>
          <h2 className="text-4xl xl:text-8xl">för allihopa</h2>
          <Slider href="https://opintopolku.fi/konfo/sv/koulutus/1.2.246.562.13.00000000000000000176" />
        </div>
        <div className="max-w-[655px] w-full lg:w-auto lg:max-w-none 2xl:ml-12 mt-5">
          <Image
            src="/main.webp"
            width={1920}
            height={1080}
            alt="Main Image"
            className="w-full rounded-3xl"
          />
        </div>
      </main>

      <section
        id="info"
        className="mx-5 mt-20 2xl:mt-0 lg:mx-36 flex flex-col-reverse items-center lg:items-start lg:flex-row lg:justify-between xl:pt-48"
      >
        <div className="max-w-[655px] w-[50%] 2xl:w-[40%] lg:max-w-none lg:mr-12 mt-10">
          <Image
            src="/image.webp"
            width={1920}
            height={1080}
            alt="Image"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="mt-10">
          <h1 className="text-3xl lg:text-4xl text-center lg:text-right lg:mb-3 max-w-[655px]">
            Vad är det vi gör här?
          </h1>
          <p className="mt-5 text-xl text-center lg:text-right max-w-[655px]">
            Vid denna bransch arbetar du med webbapplikationer och kommer att
            lära dig full stack.
          </p>
        </div>
      </section>

      <section
        id="courses"
        className="flex flex-col items-center xl:flex-row justify-between px-4 xl:px-36 mb-0"
      >
        <div className="xl:w-[60%] xl:pr-8">
          <h1 className="text-4xl lg:text-5xl mt-24">Kurser</h1>
          <div className="mt-5 space-y-5 lg:space-y-3">
            <div className="w-full max-h-42 p-4 rounded-3xl bg-[#48922E] flex justify-center items-center">
              <div className="text-lg lg:text-xl text-center mx-4 lg:mx-8">
                <p>Grundexamen i informations- och kommunikationsteknik</p>
                <p className="font-bold">180 kp</p>
              </div>
            </div>
            <div className="w-full max-h-42 p-4 rounded-3xl bg-[#b55912] flex justify-center items-center">
              <div className="text-lg lg:text-xl text-center mx-4 lg:mx-8">
                <p>
                  Grundläggande uppgifter inom informations- och
                  kommunikationsteknik
                </p>
                <p className="font-bold">25 kp</p>
              </div>
            </div>
            <div className="w-full max-h-42 p-4 rounded-3xl bg-[#b55912] flex justify-center items-center">
              <div className="text-lg lg:text-xl text-center mx-4 lg:mx-8">
                <p>Programmering</p>
                <p className="font-bold">45 kp</p>
              </div>
            </div>
            <div className="w-full max-h-42 p-4 rounded-3xl bg-[#b55912] flex justify-center items-center">
              <div className="text-lg lg:text-xl text-center mx-4 lg:mx-8">
                <p>Arbete som programvaruutvecklare</p>
                <p className="font-bold">45 kp</p>
              </div>
            </div>
            <div className="w-full max-h-42 p-4 rounded-3xl bg-[#2E7492] flex justify-center items-center">
              <div className="text-lg lg:text-xl text-center mx-4 lg:mx-8">
                <p>Implementering av programvara med komponentbibliotek</p>
                <p className="font-bold">30 kp</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row xl:flex-col xl:justify-between xl:px-0 lg:px-10">
          <Image
            src={"/teacher_flatline.svg"}
            width={1920}
            height={1080}
            alt="Teacher"
            className="w-1/2 xl:w-auto xl:h-96"
          />
          <div className="ml-10 mt-10 xl:mt-0">
            <p className="text-2xl lg:text-4xl text-[#ACE0E7]">Vi lär dig:</p>
            <ul className="list-disc text-lg lg:text-xl mt-2">
              <li>HTML, CSS och JavaScript</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>och mera...</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="video"
        className="mt-10 lg:pt-5 2xl:mb-12 2xl:pt-20 mx-5 sm:mx-20 lg:mx-24 xl:mx-36 flex flex-col-reverse lg:flex-row"
      >
        <div className="flex-1">
          <div className="relative pb-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full rounded-3xl"
              src="https://www.youtube.com/embed/4CgciCxtwz4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl lg:ml-3 mb-3 text-left lg:text-right">
            Vad händer vid programutvecklare?
          </h1>
          <h2 className="text-gray-400 text-xl text-left lg:text-right mb-5 lg:ml-3 xl:mb-0">
            Här är en programutvecklare som jobbar på en uppgift.
          </h2>
        </div>
      </section>

      <section
        id="contact"
        className="flex flex-col justify-center items-center px-6 2xl:px-0"
      >
        <h1 className="text-3xl 2xl:text-5xl mt-20 2xl:mt-12 text-center">
          Kontakta oss
        </h1>
        <h2 className="text-gray-400 text-2xl 2xl:text-4xl mt-3 text-center">
          Vi vill gärna höra från dig!
        </h2>
        <form className="2xl:mt-10 w-full sm:w-[600px] flex flex-col items-center">
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
          <h2 className="text-gray-600 text-xl mt-3 text-center">
            Funkar inte ännu.
          </h2>
        </form>
      </section>

      <footer className="bg-gray-900 mt-10 2xl:mt-20 w-full">
        <div className="flex justify-between items-center px-1.5 lg:px-3 py-6 2xl:px-7 2xl:py-5">
          <p className="text-[15px] 2xl:text-lg text-[#ffffe6de] font-bold">
            © 2023 Optima
          </p>
          <a href="https://optimaedu.fi/sv/" target="_blank">
            <Image
              src={"/optima.webp"}
              width={1280}
              height={720}
              alt="Optima Logo"
              className="w-24"
            />
          </a>
          <div className="flex w-28 2xl:w-32">
            <a
              href="https://www.facebook.com/optimaedu.fi/"
              target="_blank"
              className="mr-1 hover:bg-[#9f9f9f48] rounded-full transition duration-300 ease-in-out"
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
              className="mr-1 hover:bg-[#9f9f9f48] rounded-full transition duration-300 ease-in-out"
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
              className="mr-1 hover:bg-[#9f9f9f48] rounded-full transition duration-300 ease-in-out"
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
              className="hover:bg-[#9f9f9f48] rounded-full transition duration-300 ease-in-out"
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
