import { ProsumerEnergy, Meters, NewMeter } from "../components";

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
    </div>
  );
};

export default Prosumer;
