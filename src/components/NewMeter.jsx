import { useContext } from "react";

import { DltContext } from "../context/DltContext";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="1"
    value={value}
    min={0.0}
    onChange={(e) => handleChange(e, name)}
    className="justify-between text-md p-3 font-thin w-full "
  />
);

const NewMeter = () => {
  const { newMeter, handleChange, formData } = useContext(DltContext);
  const handleSubmit = (e) => {
    const { newMeterAddress, newRate } = formData;
    e.preventDefault();
    if (!newMeterAddress && !newRate) return;
    newMeter();
  };
  return (
    <div className="justify-center p-10 place-items-center roun">
      <Input
        placeholder="Meter Address"
        name="newMeterAddress"
        type="text"
        handleChange={handleChange}
      />
      <Input
        placeholder="Rate (NRG/kWh)"
        name="newRate"
        type="number"
        handleChange={handleChange}
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
      >
        Add meter
      </button>
    </div>
  );
};

export default NewMeter;
