import { useEffect, useState } from 'react';
import { MetaMaskInpageProvider } from '@metamask/providers';
import { ethers } from 'ethers';
import { useContractCall, useContractFunction } from '@usedapp/core';
// import { Contract } from '@ethersproject/contracts';

import ABI from 'data/ABI.json';

const CONTRACT_ADDRESS = '0x01d6511624e46f93e955387aa3dd35410b2a2a84';

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

const simpleContractInterface = new ethers.utils.Interface(ABI);

const getContractCall = (method: string) => ({
  abi: simpleContractInterface,
  address: CONTRACT_ADDRESS,
  method,
  args: []
});

export const useWeb3 = () => {
  const [isMetamaskInstalled, setMetamaskInstalled] = useState(true);

  useEffect(() => {
    if (typeof window.ethereum === 'undefined') {
      setMetamaskInstalled(false);
    }
  }, []);

  const [bestPlayer]: any = useContractCall(getContractCall('bestPlayer')) || [];

  const [bestScore]: any = useContractCall(getContractCall('bestScore')) || [];

  const [history]: any = useContractCall(getContractCall('getHistory')) || [];

  //   const contract = new Contract(CONTRACT_ADDRESS, simpleContractInterface);

  //   const { state, send } = useContractFunction(contract, 'setCoins', {});

  //   const sendCoins = (coins: number) => send({});

  return {
    bestPlayer,
    bestScore,
    history,
    // sendCoins
    isMetamaskInstalled
  };
};
