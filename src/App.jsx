import { Footer, Navbar, FinancialAccount } from "./components";
import { Financial, Market, Prosumer, Setting, Welcome } from "./pages";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="gradient-bg-welcome">
      <Navbar />
      <FinancialAccount />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Financial" element={<Financial />} />
        <Route path="/Market" element={<Market />} />
        <Route path="/Prosumer" element={<Prosumer />} />
        <Route path="/Setting" element={<Setting />} />
        <Route
          path="*"
          element={
            <h1 className="text-white text-6xl p-20 text-center">
              Upsss... page not found
            </h1>
          }
        />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
