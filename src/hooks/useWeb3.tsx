import { useEffect } from 'react';
import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

export const useWeb3 = () => {
  const provider = window.ethereum;

  useEffect(() => {
    if (typeof provider === 'undefined') {
      console.log('Metamask is not installed');
    }
  }, []);

  const connectToAccount = () => {
    provider
      ?.request({ method: 'eth_requestAccounts' })
      .then((account) => {
        console.log(account);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { connectToAccount };
};
