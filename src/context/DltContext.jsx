import React, { useMemo, useEffect, useState } from "react";

import { ethers } from "ethers";

import {
  energyTransactAbi,
  microgridAbi,
  etContractAddress,
  mgContractAddress,
} from "../utils/constants";

export const DltContext = React.createContext();

const { ethereum } = window;

const decimals = Math.pow(10, 18);

const createContract = (name, contractAddres, contractAbi) => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddres, contractAbi, signer);
  console.log(`Contrato ${name}: ${contract.address} desplegado`);
  return contract;
};

export const DltProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  // Datos del mercado
  const [token, setToken] = useState("COIN");
  const [balanceEthersMarket, setBalanceEthersMarket] = useState(0);
  const [balanceTokensMarket, setBalanceTokensMarket] = useState(0);
  const [tokenValue, setTokenValue] = useState(0);

  // Datos del prosumidor
  const [currentAccount, setCurrentAccount] = useState("");
  const [balanceTokensProsumer, setBalanceTokensProsumer] = useState(0);

  // Mecanismo para enviar datos a una transacción
  const [formData, setFormData] = useState({
    addressTo: "",
    exchangeRate: 0,
    amountBuy: 0,
    amountReturn: 0,
    amountEnergy: 0,
    newMeterAddress: "",
    newRate: 0,
    rate: 0,
  });

  // Medidas totalizadas del mercado
  const [prosumerMeasures, setProsumerMeasures] = useState({
    energyConsumed: 0,
    energyProduced: 0,
    energyAvailable: 0,
    energyDelivered: 0,
  });

  // Medidas totalizadas del prosumidor
  const [marketMeasures, setMarketMeasures] = useState({
    energyConsumed: 0,
    energyProduced: 0,
    energyAvailable: 0,
    energyDelivered: 0,
  });
  // lista de medidores del prosumidor
  const [prosumerMeters, setProsumerMeters] = useState([]);
  const [marketMeters, setMarketMeters] = useState([]);

  // Cambios en los formularios
  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  // Contratos

  const energyTransact = useMemo(() => {
    return createContract(
      "energyTransact",
      etContractAddress,
      energyTransactAbi
    );
  }, []);
  const microgrid = useMemo(() => {
    return createContract("microgrid", mgContractAddress, microgridAbi);
  }, []);
  // Valida si está instalada la billetera-Metamask

  const isWalletConnected = async () => {
    try {
      if (!ethereum)
        return alert("Metamask no está instalada, por favor instálela");
      ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          if (accounts[0] !== currentAccount) {
            setCurrentAccount(accounts[0]);
            console.log(`Cuenta ${accounts[0]} seleccionada`);
          }
        } else {
          console.log("No hay cuentas disponibles");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const loadMarketData = async () => {
    try {
      if (ethereum) {
        const _token = await energyTransact.symbol();
        setToken(_token);
        const _balanceEthersMarket = await energyTransact.balanceEthers();
        setBalanceEthersMarket(
          ethers.utils.formatEther(_balanceEthersMarket, "ethers")
        );
        const _balanceTokensMarket = await energyTransact.balanceTokens();
        setBalanceTokensMarket(_balanceTokensMarket.toString());
        const _tokenValue = await energyTransact.tokenValue();
        setTokenValue(ethers.utils.formatEther(_tokenValue));
        getMarketMeters();
      }
    } catch (error) {
      console.log(error);
      throw new Error(
        "El contrato no existe por favor valide la dirección configurada"
      );
    }
  };

  const loadProsumerData = async () => {
    try {
      if (ethereum) {
        if (!currentAccount) return;
        const _balanceTokensProsumer = await energyTransact.balanceOf(
          currentAccount
        );
        setBalanceTokensProsumer(_balanceTokensProsumer.toString());
        getProsumerMeters();
      }
    } catch (error) {
      console.log(error);

      throw new Error(
        "El contrato no existe por favor valide la dirección configurada"
      );
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum)
        return alert("Metamask no está instalada, por favor instálela");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  const getProsumerMeters = async () => {
    try {
      if (ethereum) {
        const meters = await microgrid.getProsumerMeters();
        const measureMeters = [];
        var _energyConsumed = 0;
        var _energyProduced = 0;
        var _energyAvailable = 0;
        var _energyDelivered = 0;

        for (let i = 0; i < meters.length; i++) {
          let measures = await microgrid.meterMeasures(meters[i]);
          _energyConsumed +=
            ethers.utils.formatEther(measures.energyConsumed) * decimals;
          _energyProduced +=
            ethers.utils.formatEther(measures.energyProduced) * decimals;
          _energyAvailable +=
            ethers.utils.formatEther(measures.energyAvailable) * decimals;
          _energyDelivered +=
            ethers.utils.formatEther(measures.energyDelivered) * decimals;
          measureMeters.push({
            meterAddress: meters[i],
            rate: ethers.utils.formatEther(measures.rate) * decimals,
            energyConsumed:
              ethers.utils.formatEther(measures.energyConsumed) * decimals,
            energyProduced:
              ethers.utils.formatEther(measures.energyProduced) * decimals,
            energyAvailable:
              ethers.utils.formatEther(measures.energyAvailable) * decimals,
            energyDelivered:
              ethers.utils.formatEther(measures.energyDelivered) * decimals,
          });
        }
        setProsumerMeasures({
          energyConsumed: _energyConsumed,
          energyProduced: _energyProduced,
          energyAvailable: _energyAvailable,
          energyDelivered: _energyDelivered,
        });
        setProsumerMeters(measureMeters);
      }
    } catch (error) {
      console.log(error);

      throw new Error(
        "El contrato no existe por favor valide la dirección configurada"
      );
    }
  };

  const getMarketMeters = async () => {
    try {
      if (ethereum) {
        const meters = await microgrid.getAllMeters();
        const measureMeters = [];
        var _energyConsumed = 0;
        var _energyProduced = 0;
        var _energyAvailable = 0;
        var _energyDelivered = 0;
        for (let i = 0; i < meters.length; i++) {
          let measures = await microgrid.meterMeasures(meters[i]);
          _energyConsumed +=
            ethers.utils.formatEther(measures.energyConsumed) * decimals;
          _energyProduced +=
            ethers.utils.formatEther(measures.energyProduced) * decimals;
          _energyAvailable +=
            ethers.utils.formatEther(measures.energyAvailable) * decimals;
          _energyDelivered +=
            ethers.utils.formatEther(measures.energyDelivered) * decimals;
          measureMeters.push({
            meterAddress: meters[i],
            rate: ethers.utils.formatEther(measures.rate) * decimals,
            energyConsumed:
              ethers.utils.formatEther(measures.energyConsumed) * decimals,
            energyProduced:
              ethers.utils.formatEther(measures.energyProduced) * decimals,
            energyAvailable:
              ethers.utils.formatEther(measures.energyAvailable) * decimals,
            energyDelivered:
              ethers.utils.formatEther(measures.energyDelivered) * decimals,
          });
        }
        setMarketMeasures({
          energyConsumed: _energyConsumed,
          energyProduced: _energyProduced,
          energyAvailable: _energyAvailable,
          energyDelivered: _energyDelivered,
        });
        setMarketMeters(measureMeters);
      }
    } catch (error) {
      console.log(error);

      throw new Error(
        "El contrato no existe por favor valide la dirección configurada"
      );
    }
  };

  const sendTokenValue = async () => {
    try {
      if (ethereum) {
        const { exchangeRate } = formData;
        const transactionHash = await energyTransact.setTokenValue(
          exchangeRate
        );
        setIsLoading(true);
        console.log(`Transacción actualizar tasa cambio a ${exchangeRate}`);
        console.log(`${transactionHash.hash}-Cargando transacción`);
        await transactionHash.wait();
        console.log(`${transactionHash.hash}-Transacción exitosa`);
        setIsLoading(false);
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const sendBuyTokens = async () => {
    try {
      if (ethereum) {
        const { amountBuy } = formData;
        const _tokenValue = await energyTransact.tokenValue();
        const payment = amountBuy * _tokenValue;
        const transactionHash = await energyTransact.buyTokens(amountBuy, {
          value: ethers.utils.formatUnits(payment, "wei"),
        });
        setIsLoading(true);
        console.log(`Transacción comprando tokens: ${amountBuy}NRG`);
        console.log(`${transactionHash.hash}-Cargando transacción`);
        await transactionHash.wait();
        console.log(`${transactionHash.hash}-Transacción exitosa`);
        setIsLoading(false);
      } else {
        console.log("No existe billetera");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No existe billetera");
    }
  };

  const sendReturnTokens = async () => {
    try {
      if (ethereum) {
        const { amountReturn } = formData;
        const transactionHash = await energyTransact.returnTokens(amountReturn);
        setIsLoading(true);
        console.log(`Transacción devolver tokens: ${amountReturn}NRG`);
        console.log(`${transactionHash.hash}-Cargando transacción`);
        await transactionHash.wait();
        console.log(`${transactionHash.hash}-Transacción exitosa`);
        setIsLoading(false);
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const newMeter = async () => {
    try {
      if (ethereum) {
        const { newMeterAddress, newRate } = formData;

        const transactionHash = await microgrid.createMeter(
          newMeterAddress,
          newRate
        );
        setIsLoading(true);
        console.log(`Transacción crear el medidor: ${newMeterAddress}`);
        console.log(`${transactionHash.hash}-Cargando transacción`);
        await transactionHash.wait();
        console.log(`${transactionHash.hash}-Transacción exitosa`);
        setIsLoading(false);
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const ismyMeter = async (meterAddress) => {
    if (ethereum) {
      const _prosumer = await microgrid.meterProsumer(meterAddress);
      if (_prosumer === currentAccount) return true;
    } else {
      throw new Error("No ethereum object");
    }
    return false;
  };
  const setRate = async (meterAddress) => {
    try {
      if (ethereum) {
        const { rate } = formData;

        const transactionHash = await microgrid.setRate(meterAddress, rate);
        setIsLoading(true);
        console.log(
          `Transacción actualizar tarifa al medidor ${meterAddress}: ${rate} NRG/kwh`
        );
        console.log(`${transactionHash.hash}-Cargando transacción`);
        await transactionHash.wait();
        console.log(`${transactionHash.hash}-Transacción exitosa`);
        setIsLoading(false);
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const buyEnergy = async (meterAddress) => {
    try {
      if (ethereum) {
        const { amountEnergy } = formData;
        const transactionHash = await energyTransact.buyEnergy(
          meterAddress,
          amountEnergy
        );
        console.log(
          `Transacción comprando energía al medidor ${meterAddress}: ${amountEnergy}kwh`
        );
        setIsLoading(true);
        console.log(`${transactionHash.hash}-Cargando transacción`);
        await transactionHash.wait();
        console.log(`${transactionHash.hash}-Transacción exitosa`);
        setIsLoading(false);
      } else {
        console.log("No existe billetera");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No existe billetera");
    }
  };

  useEffect(() => {
    isWalletConnected();
  }, []);

  useEffect(() => {
    loadMarketData();
    loadProsumerData();
  });

  return (
    <DltContext.Provider
      value={{
        // Interfaz
        isLoading,
        // Datos del enlace a la billetera
        currentAccount,
        connectWallet,
        // Datos del mercado
        token,
        balanceEthersMarket,
        balanceTokensMarket,
        balanceTokensProsumer,
        tokenValue,
        // Funciones del mercado
        sendBuyTokens,
        sendReturnTokens,
        sendTokenValue,
        buyEnergy,
        // Datos del prosumidor
        prosumerMeters,
        marketMeters,
        prosumerMeasures,
        marketMeasures,
        ismyMeter,
        // Funciones del prosumidor
        newMeter,
        setRate,
        // Formularios
        formData,
        handleChange,
      }}
    >
      {children}
    </DltContext.Provider>
  );
};
