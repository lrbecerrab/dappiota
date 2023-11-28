import { BuyEnergy, MarketEnergy } from "../components";

const Market = () => {
  return (
    <div>
      <div>
        <h1 className="text-black text-center text-5xl p-10">ENERGY MARKET DATA</h1>
      </div>
      <MarketEnergy />
      <BuyEnergy />
    </div>
  );
};

export default Market;
