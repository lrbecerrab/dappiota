import {
  FinancialMarket,
  FinancialSendOperations,
} from "../components";

import { useContext } from "react";

import { DltContext } from "../context/DltContext";

const Financial = () => {
  const { isLoading} =
  useContext(DltContext);
  return (
    <div>
      <div>
        <h1 className="text-black text-center text-5xl p-10">FINANCIAL DATA</h1>
      </div>
      {isLoading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div>
          <FinancialMarket />
          <FinancialSendOperations />
        </div>
      )}
    </div>
  );
};

export default Financial;
