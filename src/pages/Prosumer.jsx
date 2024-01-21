import { ProsumerEnergy, Meters, NewMeter, MeterDisable } from "../components";

const Prosumer = () => {
  return (
    <div>
      <div>
        <h1 className="text-black text-center text-5xl">MY ACCOUNT</h1>
      </div>
      <div>
        <ProsumerEnergy />
        <Meters />
      </div>
      <div className="flex justify-center ">
        <NewMeter />
      </div>
      <div className="flex justify-center ">
        <MeterDisable />
      </div>
    </div>
  );
};

export default Prosumer;
