import { BuyTokens, ReturnTokens, SetTokenValue } from ".";

const FinancialSendOperations = () => {
  return (
    <div className="flex justify-center">
      <SetTokenValue />
      <BuyTokens />
      <ReturnTokens />
    </div>
  );
};

export default FinancialSendOperations;
