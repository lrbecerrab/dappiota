import { useContext } from "react";

import { DltContext } from "../context/DltContext";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="1"
    min={0.0}
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="justify-between text-md p-3 font-thin w-full "
  />
);

const ReturnTokens = () => {
  const { sendReturnTokens, handleChange, formData } = useContext(DltContext);
  const handleSubmit = (e) => {
    const { amountReturn } = formData;
    e.preventDefault();
    if (!amountReturn) return;
    sendReturnTokens();
  };
  return (
    <div className="p-10">
      <Input
        placeholder="Amount (NRG)"
        name="amountReturn"
        type="number"
        handleChange={handleChange}
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
      >
        Return NRG
      </button>
    </div>
  );
};

export default ReturnTokens;
