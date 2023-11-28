import { useContext } from "react";

import { DltContext } from "../context/DltContext";

const FinancialMarket = () => {
  const { balanceEthersMarket, balanceTokensMarket } = useContext(DltContext);
  return (
    <div className="p-5 justify-between">
      <div className="py-10 ">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2">
            <div className="mx-auto flex max-w-xs flex-col gap-y-0">
              <dt className="text-base leading-7 text-white uppercase">
                Balance (ETH)
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white  sm:text-4xl uppercase">
                {balanceEthersMarket}
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-0">
              <dt className="text-base leading-7 text-white uppercase">
                Balance (NRG)
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white  sm:text-4xl">
                {balanceTokensMarket}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FinancialMarket;
