import { useState, useRef, useEffect } from "react";
import Image from "next/image";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: { target: any }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownRef]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="md:block hidden">
        <div className="flex flex-wrap justify-end mr-5">
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
      <div className="md:hidden flex justify-center mr-5">
        <div className="relative inline-block mb-20" ref={dropdownRef}>
          <button
            className="relative z-10 flex items-center p-2 rounded-md bg-gray-800"
            onClick={toggleDropdown}
          >
            <Image
              src={"/list-bold.svg"}
              width={1920}
              height={1080}
              alt="Dropdown"
              className="w-7"
            ></Image>
          </button>
          {isOpen && (
            <div className="absolute right-0 z-20 w-52 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
              <a
                href="#info"
                className="block px-4 py-3 text-md text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={handleClose}
              >
                Info
              </a>
              <a
                href="#courses"
                className="block px-4 py-3 text-md text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={handleClose}
              >
                Kurser
              </a>
              <a
                href="#video"
                className="block px-4 py-3 text-md text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={handleClose}
              >
                Video
              </a>
              <hr className="border-gray-200 dark:border-gray-700 " />
              <a
                href="#contact"
                className="block px-4 py-3 text-mdss text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={handleClose}
              >
                Kontakt
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dropdown;
