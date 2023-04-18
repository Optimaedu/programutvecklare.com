import { useState } from "react";

interface RangeInputProps {
  link: string;
}

const Range: React.FC<RangeInputProps> = ({ link }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);

    if (newValue === 100) {
      window.open(link, "_blank");
      setValue(0);
    }
  };

  return (
    <input
      type="range"
      min="0"
      max="100"
      value={value}
      onChange={handleChange}
      className="w-64 h-5 mt-7 mb-4 rounded-xl appearance-none bg-[#dea25d]"
    />
  );
};

export default Range;
