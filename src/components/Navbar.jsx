import { Link } from "react-router-dom";
import { useContext } from "react";
import logo from "../assets/img/logo.png";
import { DltContext } from "../context/DltContext";
import { shortenAddress } from "../utils/shortenAddress";

const Navbar = () => {
  const { currentAccount, connectWallet } = useContext(DltContext);
  return (
    <div>
      <div>
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        <h1 className="text-white text-7xl font-extrabold ">NRG</h1>
        <span className="text-white">Sell your energy with Iota</span>
      </div>
      <div className="navbar text-end">
        <Link className="text-white p-5" to="/">
          Welcome
        </Link>
        <Link className="text-white p-5" to="/Financial">
          Financial
        </Link>
        <Link className="text-white p-5" to="/Market">
          Market
        </Link>
        <Link className="text-white p-5" to="/Prosumer">
          Account
        </Link>
        {currentAccount ? (
          <button
            href={`https://etherscan.io/address/${currentAccount}`}
            className="text-white font-bold p-2"
          >
            {shortenAddress(currentAccount)}
          </button>
        ) : (
          <button
            type="button"
            onClick={connectWallet}
            className="text-white font-bold p-2"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
