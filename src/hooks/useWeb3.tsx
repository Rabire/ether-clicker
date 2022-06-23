/* eslint-disable dot-notation */
import { useEffect, useState } from 'react';
import { MetaMaskInpageProvider } from '@metamask/providers';
import { ethers } from 'ethers';
import { useContractCall, useContractFunction } from '@usedapp/core';
import { useGame } from 'hooks/useGame';

import { Contract } from '@ethersproject/contracts';

import ABI from 'data/ABI.json';
import { formatAddress } from 'utils/format';

const CONTRACT_ADDRESS = '0x3c0641d51a93e243ec350b3023bf8c02ba968c3f';

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

  const { coins, setCoins } = useGame();

  useEffect(() => {
    if (typeof window.ethereum === 'undefined') {
      setMetamaskInstalled(false);
    }
  }, []);

  const [bestPlayer]: any = useContractCall(getContractCall('bestPlayer')) || [];

  const [bestScore]: any = useContractCall(getContractCall('bestScore')) || [];

  const [history]: any = useContractCall(getContractCall('getHistory')) || [];

  const [myScore]: any = useContractCall(getContractCall('getMyScore')) || [];

  const contract = new Contract(CONTRACT_ADDRESS, simpleContractInterface) as any;

  const { send } = useContractFunction(contract, 'withdrawCoins', {});

  const actualWinner = bestScore &&
    bestPlayer && {
      score: parseInt(bestScore['_hex'], 16),
      player: formatAddress(bestPlayer)
    };

  const sendCoins = () => {
    setCoins(0);
    send([coins]);
  };

  return {
    actualWinner,
    history,
    sendCoins,
    isMetamaskInstalled,
    myScore
  };
};
