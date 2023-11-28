import { useContext } from "react";
import { DltContext } from "../context/DltContext";
import { shortenAddress } from "../utils/shortenAddress";
const FinancialAccount = () => {
  const { token, currentAccount, balanceTokensProsumer, tokenValue } =
    useContext(DltContext);
  return (
    <div className="p-5 md:px-10 mx-auto w-full">
      <div className="py-10 sm:py-2 ">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            <div className="mx-auto flex max-w-xs flex-col gap-y-0">
              <dt className="text-base leading-7 text-white uppercase">
                my Account
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white  sm:text-2xl uppercase">
                {shortenAddress(currentAccount)}
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-0">
              <dt className="text-base leading-7 text-white uppercase">Coin</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white  sm:text-2xl">
                {token}
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-0">
              <dt className="text-base leading-7 text-white uppercase">
                Exchange rate (ETH/NRG)
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white  sm:text-2xl">
                {tokenValue}
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-0">
              <dt className="text-base leading-7 text-white uppercase">
                Balance (NRG)
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white  sm:text-2xl">
                {balanceTokensProsumer}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FinancialAccount;
