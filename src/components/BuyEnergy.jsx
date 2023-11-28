import { useContext } from "react";

import { DltContext } from "../context/DltContext";

import { AiOutlineShoppingCart } from "react-icons/ai";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="1"
    disabled={false}
    min={0.0}
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="text-md font-thin w-full "
  />
);

const BuyEnergy = () => {
  const { marketMeters, ismyMeter, buyEnergy, handleChange, formData } =
    useContext(DltContext);
  const handleSubmit = (meterAddress, e) => {
    const { amountEnergy } = formData;
    e.preventDefault();
    if (!meterAddress && !amountEnergy) return;
    buyEnergy(meterAddress);
  };
  return (
    <div className="px-4 md:px-10 mx-auto w-full">
      <div>
        <div className="flex flex-wrap py-2.5">
          <div className="w-full px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-opacity-5 rounded mb-6 xl:mb-0 shadow-lg">
              <div className="flex-auto p-5">
                <h1 className="text-black text-start text-4xl">
                  Meters in the market
                </h1>
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
                            Rate
                            <p className=" text-xs text-center">NRG/kWh</p>
                          </th>
                          <th className="px-1 text-center text-white align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Selled
                            <p className="text-xs text-center">kwh</p>
                          </th>
                          <th className="px-1 text-center text-white align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Available
                            <p className="text-xs text-center">kwh</p>
                          </th>
                          <th className="px-1 text-center text-white align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Buy energy
                            <p className="text-xs text-center">kwh</p>
                          </th>
                          <th className="px-1 text-center text-white align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Send
                          </th>
                        </tr>
                      </thead>
                      {marketMeters.length > 0 ? (
                        <tbody>
                          {marketMeters.map((marketMeter, idx) => (
                            <tr key={idx}>
                              <th className=" text-white  border-t-0 px-1 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left">
                                {marketMeter.meterAddress}
                              </th>
                              <td className="text-white  border-t-0 px-1 align-middle text-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                {marketMeter.rate}
                              </td>
                              <td className="text-white border-t-0 px-1 align-middle text-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                {marketMeter.energyDelivered}
                              </td>
                              <td className="text-white border-t-0 px-1 align-middle text-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                {marketMeter.energyAvailable}
                              </td>
                              <td className="text-black border-t-0 px-1 align-middle text-center border-l-0 border-r-0 text-md whitespace-nowrap p-4">
                                <Input
                                  placeholder="0 kwh"
                                  name="amountEnergy"
                                  type="number"
                                  handleChange={handleChange}
                                />
                              </td>
                              <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <button
                                  className="bg-white text-violet-900 active:bg-violet-300 disabled:bg-slate-500 text-md rounded outline-none focus:outline-none p-3 ease-linear transition-all duration-150"
                                  type="button"
                                  disabled={
                                    marketMeter.energyAvailable <= 0 &&
                                    ismyMeter(marketMeter.meterAddress)
                                  }
                                  onClick={(e) =>
                                    handleSubmit(marketMeter.meterAddress, e)
                                  }
                                >
                                  <AiOutlineShoppingCart fontSize={20} />
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

export default BuyEnergy;
