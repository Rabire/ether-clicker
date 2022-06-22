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
      console.log('metamask is not installed');
    }

    // get current Metamask account
    provider
      .request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        console.log(accounts);
      })
      .catch((error) => {
        console.log(error);
      });

    // listen account changement
    provider.on('accountsChanged', (accounts) => {
      console.log(accounts);
    });
  }, []);

  const connectToAccount = () => {
    //
  };

  return { connectToAccount };
};
