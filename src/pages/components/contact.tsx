function Contact() {
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
        <form className="2xl:mt-10 w-full md:w-[600px] flex flex-col items-center">
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
            className="resize-none w-full 2xl:w-[600px] h-[170px] rounded-xl text-xl 2xl:text-2xl bg-gray-800 px-4 2xl:px-10 py-5 2xl:py-5 mt-5"
            placeholder="Meddelande"
          ></textarea>
          <button
            type="submit"
            className="w-full 2xl:w-[600px] h-[90px] rounded-xl bg-[#48922E] mt-5 text-xl 2xl:text-2xl font-bold text-white hover:bg-[#55b133] transition duration-300 ease-in-out"
          >
            Skicka
          </button>
          <h2 className="text-gray-600 text-xl mt-3 text-center">
            Funkar inte ännu.
          </h2>
        </form>
      </section>
    </>
  );
}

export default Contact;
