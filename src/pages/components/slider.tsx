import { useState } from "react";

interface RangeInputProps {
  href: string;
}

const Slider: React.FC<RangeInputProps> = ({ href }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
  };

  const handleRelease = () => {
    if (value === 20) {
      window.open(href, "_blank");
    }
    setValue(0);
  };

  return (
    <>
      <div className="flex flex-col items-center xl:flex-row xl:justify-start">
        <div>
          <h1 className="sm:text-3xl sm:mt-10 xl:mt-5 xl:text-left text-center xl:ml-1 ml-0 mt-5">
            Ansökan
          </h1>
          <div className="flex items-center flex-col xl:flex-row">
            <input
              type="range"
              min={0}
              max={20}
              value={value}
              {...{
                onChange: handleChange,
                onMouseUp: handleRelease,
                onMouseDown: handleRelease,
                onTouchEnd: handleRelease,
                onTouchStart: handleRelease,
              }}
              className="w-60 h-12 sm:w-72 xl:mt-2 mt-1 mb-3 bg-[#6b6b6b] appearance-none outline-none overflow-hidden rounded-full cursor-grab active:cursor-grabbing bg-gradient-to-r from-orange-800 via-orange-600 to-orange-400 animate-custom bg-[length:200%]"
            />

            <span className="sm:ml-3 ml-0 xl:mb-0 mb-5 text-sm">
              {value < 20 ? "Dra till höger" : "Släpp för att gå till länken"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
