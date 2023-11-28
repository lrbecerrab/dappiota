import { useContext } from "react";

import { DltContext } from "../context/DltContext";
import { AiFillEdit } from "react-icons/ai";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="1"
    value={value}
    min={0.0}
    onChange={(e) => handleChange(e, name)}
    className="text-md font-thin w-full "
  />
);

const Meters = () => {
  const { prosumerMeters, setRate, handleChange, formData } =
    useContext(DltContext);
  const handleSubmit = (meterAddress, e) => {
    const { rate } = formData;
    e.preventDefault();
    if (!meterAddress && !rate) return;
    setRate(meterAddress);
  };

  return (
    <div className="px-4 md:px-10 mx-auto w-full">
      <div>
        <div className="flex flex-wrap py-2.5">
          <div className="w-full px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-opacity-5 rounded mb-6 xl:mb-0 shadow-lg">
              <div className="flex-auto p-5">
                <h1 className="text-black text-start text-4xl"> My Meters</h1>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right"></div>
                <div className="flex flex-wrap p-10">
                  <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                      <thead>
                        <tr>
                          <th className="px-1 bg-bl text-white align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Meter
                            <p className="text-xs text-left">Address</p>
                          </th>
                          <th className="px-1 text-white text-center align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Energy Consumed
                            <p className="text-xs text-center">kwh</p>
                          </th>
                          <th className="px-1 text-white text-center align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Energy Produced
                            <p className="text-xs text-center">kwh</p>
                          </th>
                          <th className="px-1 text-white text-center align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Energy Selled
                            <p className="text-xs text-center">kwh</p>
                          </th>
                          <th className="px-1 text-white text-center align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Energy available
                            <p className="text-xs text-center">kwh</p>
                          </th>
                          <th className="px-1 text-white text-center align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Rate
                          </th>
                          <th className="px-1 text-white text-center align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Set rate
                          </th>
                        </tr>
                      </thead>
                      {prosumerMeters.length > 0 ? (
                        <tbody>
                          {prosumerMeters.map((prosumerMeter, idx) => (
                            <tr key={idx}>
                              <th className="text-white border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-left">
                                {prosumerMeter.meterAddress}
                              </th>
                              <td className="text-white border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-md whitespace-nowrap p-4">
                                {prosumerMeter.energyConsumed}
                              </td>
                              <td className="text-white border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-md whitespace-nowrap p-4">
                                {prosumerMeter.energyProduced}
                              </td>
                              <td className="text-white border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-md whitespace-nowrap p-4">
                                {prosumerMeter.energyDelivered}
                              </td>
                              <td className="text-white border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-md whitespace-nowrap p-4">
                                {prosumerMeter.energyAvailable}
                              </td>
                              <td className="text-white border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-md whitespace-nowrap p-4">
                                {prosumerMeter.rate}
                              </td>
                              <td className="px-10 w-1/8">
                                <Input
                                  placeholder={prosumerMeter.rate}
                                  name="rate"
                                  type="number"
                                  handleChange={handleChange}
                                />
                              </td>
                              <td className="border-t-0 align-middle text-center border-l-0 border-r-0 text-xs whitespace-nowrap">
                                <button
                                  className="bg-white text-violet-900 active:bg-violet-300 text-md rounded outline-none focus:outline-none p-3 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={(e) =>
                                    handleSubmit(prosumerMeter.meterAddress, e)
                                  }
                                >
                                  <AiFillEdit fontSize={15} />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      ) : (
                        <tbody>
                          <tr>
                            <td>No meters</td>
                          </tr>
                        </tbody>
                      )}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meters;
