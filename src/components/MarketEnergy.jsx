import { useContext } from "react";

import { DltContext } from "../context/DltContext";
const MarketEnergy = () => {
  const { marketMeasures } = useContext(DltContext);
  return (
    <div className="p-5 justify-between">
      <div className="py-10 ">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            <div className="mx-auto flex max-w-xs flex-col gap-y-0">
              <dt className="text-base leading-7 text-white uppercase">
                Energy Consumed (kWh)
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white  sm:text-4xl uppercase">
                {marketMeasures.energyConsumed}
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-0">
              <dt className="text-base leading-7 text-white uppercase">
                Energy Produced (kWh)
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white  sm:text-4xl">
                {marketMeasures.energyProduced}
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-0">
              <dt className="text-base leading-7 text-white uppercase">
                Energy Selled (kWh)
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white  sm:text-4xl">
                {marketMeasures.energyDelivered}
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-0">
              <dt className="text-base leading-7 text-white uppercase">
                Energy Available (kWh)
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white  sm:text-4xl">
                {marketMeasures.energyAvailable}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default MarketEnergy;
