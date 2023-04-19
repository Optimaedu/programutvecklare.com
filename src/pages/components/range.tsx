import { useState } from "react";

interface RangeInputProps {
  link: string;
}

const Slider: React.FC<RangeInputProps> = ({ link }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
  };

  const handleMouseUp = () => {
    if (value === 20) {
      window.open(link, "_blank");
    }
    setValue(0);
  };

  return (
    <>
      <div className="flex flex-col items-center xl:flex-row xl:justify-center 2xl:justify-start">
        <div>
          <h1 className="sm:text-3xl sm:mt-10 xl:text-left text-center ml-0 mt-5">
            Ansökan
          </h1>
          <div className="flex items-center flex-col sm:flex-row">
            <input
              type="range"
              min="0"
              max="20"
              value={value}
              onChange={handleChange}
              onMouseUp={handleMouseUp}
              className="w-60 h-12 sm:w-72 sm:mt-3 mt-1 mb-3 bg-[#6b6b6b] appearance-none outline-none overflow-hidden rounded-full cursor-grab active:cursor-grabbing bg-gradient-to-r from-orange-800 via-orange-600 to-orange-400"
            />
            <span className="sm:ml-3 ml-0 text-sm">
              {value < 20 ? "Skjut åt höger" : "Släpp för att gå till länken"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
