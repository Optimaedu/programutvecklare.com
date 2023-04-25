import Image from "next/image";
import Slider from "./components/slider";
import Dropdown from "./components/dropdown";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <div className="bg-behind h-[200%] bg-no-repeat bg-cover w-full absolute z-[-999]" />
      <nav
        id="home"
        className="flex items-center pl-3 2xl:pl-4 2xl:p-5 2xl:pt-12"
      >
        <div className="fixed top-0 w-full py-3 z-10">
          <div className="flex items-start justify-end md:justify-between">
            <div className="hidden md:block">
              <a
                href="#home"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  src={"/logo.webp"}
                  width={1920}
                  height={1080}
                  alt="Logo"
                  className="w-10 pl-3 sm:pl-1 pt-2"
                />
                <div className="flex flex-col">
                  <Image
                    src={"/optima.webp"}
                    width={1920}
                    height={1080}
                    alt="Optima Logo"
                    className="w-20"
                  />
                  <p className="text-sm">Programutvecklare</p>
                </div>
              </a>
            </div>
            <Dropdown />
          </div>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center xl:flex-row xl:justify-between mx-5 lg:mx-36 mt-16 xl:mt-72 2xl:mt-44 mb-0 md:mb-32 xl:mb-[22rem]">
        <div className="text-center xl:text-left mt-6">
          <h1 className="text-4xl xl:text-7xl 2xl:text-8xl bg-custom bg-[#db7d12] bg-clip-text text-transparent pb-2">
            Programmering
          </h1>
          <h2 className="text-4xl xl:text-7xl 2xl:text-8xl">för allihopa</h2>
          <Slider href="https://opintopolku.fi/konfo/sv/toteutus/1.2.246.562.17.00000000000000010661" />
        </div>
        <div className="max-w-[500px] lg:max-w-[600px] w-full xl:ml-12 mt-5">
          <Image
            src="/main.webp"
            width={1920}
            height={1080}
            alt="Main Image"
            className="w-full rounded-3xl"
          />
        </div>
      </main>

      <section id="info" className="relative md:pt-20 pt-32">
        <div className="flex flex-col-reverse">
          <Image
            width={1920}
            height={1080}
            src="/image.webp"
            alt="Main Image"
            className="md:absolute md:bottom-0 md:left-0 w-full md:h-full object-cover z-[-9]"
          />
          <div className="flex justify-end">
            <div className="px-5 md:px-10 lg:px-36 py-0 md:py-36">
              <h1 className="drop-shadow-2xl text-2xl md:text-3xl lg:text-4xl md:bg-[#1f264d] md:p-6 rounded-t-xl md:px-8">
                Varför programutvecklare?
              </h1>
              <p className="text-gray-300 text-xl max-w-[800px] md:bg-[#1f264d] md:p-6 rounded-b-xl md:px-8 mb-10 md:mb-0">
                Inom branschen för informations- och kommunikationsteknik
                (programutvecklare, elektronikmontör) har du nytta av logiskt
                tänkande och kreativ problemlösning. <br /> <br />
                Du lär dig att programmera med olika programmeringsspråk, skapa
                och underhålla webbsidor samt utveckla webbapplikationer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="courses"
        className="flex flex-col items-center xl:flex-row justify-between px-4 xl:px-36"
      >
        <div className="xl:w-[60%] xl:pr-8">
          <h1 className="text-4xl lg:text-5xl mt-10 md:mt-20">Kurser</h1>
          <div className="mt-5 space-y-5 lg:space-y-3">
            <div className="w-auto max-h-42 p-4 rounded-3xl bg-[#48922E] flex justify-center items-center">
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
        <div className="flex flex-col sm:flex-row xl:flex-col xl:justify-between xl:px-0 lg:px-10">
          <Image
            src={"/teacher_flatline.svg"}
            width={1920}
            height={1080}
            alt="Teacher"
            className="w-full sm:w-1/2 xl:w-auto xl:h-96"
          />
          <div className="ml-10 sm:mt-10 xl:mt-0">
            <p className="text-2xl lg:text-4xl text-[#ACE0E7]">Vi lär dig:</p>
            <ul className="list-disc text-lg lg:text-xl mt-2">
              <li>HTML, CSS och JavaScript</li>
              <li>TypeScript</li>
              <li>Wordpress</li>
              <li>API, JSON</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>och mycket mer...</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="video"
        className="mt-12 lg:pt-5 2xl:mb-14 2xl:pt-20 mx-5 lg:mx-24 xl:mx-36 flex flex-col-reverse lg:flex-row"
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
          <h1 className="overflow-hidden text-2xl sm:text-3xl lg:text-4xl lg:ml-10 mb-3 text-left lg:text-right">
            Vad händer vid programutvecklare?
          </h1>
          <h2 className="text-gray-400 text-xl text-left lg:text-right mb-5 lg:ml-20 xl:mb-0 overflow-hidden">
            Med denna korta video intervjuas William, en programutvecklare.{" "}
            <br /> De förklarar vad vi gör vid branschen och visas hur vi
            programmerar.
          </h2>
        </div>
      </section>

      <Contact />

      <footer className="bg-gray-900 mt-10 2xl:mt-20 w-full">
        <div className="flex justify-between items-center px-3 py-6 2xl:px-7 2xl:py-5">
          <a href="https://optimaedu.fi/sv/" target="_blank">
            <Image
              src={"/optima.webp"}
              width={1920}
              height={1080}
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
