import { useEffect } from "react";
import type { AppProps } from "next/app";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import { WagmiConfig } from "wagmi";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useEthPrice, useScaffoldContract, useTokenPrice } from "~~/hooks/scaffold-eth";
import { useAppStore } from "~~/services/store/store";
import { wagmiClient } from "~~/services/web3/wagmiClient";
import { appChains } from "~~/services/web3/wagmiConnectors";
import "~~/styles/globals.css";

const ScaffoldEthApp = ({ Component, pageProps }: AppProps) => {
  const ethPrice = useEthPrice();
  const setEthPrice = useAppStore(state => state.setEthPrice);
  const slashToken = useScaffoldContract({ contractName: "SlashToken" }).data?.address;
  //const slashToken = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const tokenPrice = useTokenPrice("SlashToken");
  const setTokenPrice = useAppStore(state => state.setTokenPrices);

  useEffect(() => {
    if (slashToken) {
      if (tokenPrice > 0) {
        setTokenPrice({ ["SlashToken"]: tokenPrice });
      }
    }
  }, [tokenPrice, setTokenPrice, slashToken]);
  // This variable is required for initial client side rendering of correct theme for RainbowKit

  useEffect(() => {
    if (ethPrice > 0) {
      setEthPrice(ethPrice);
    }
  }, [setEthPrice, ethPrice]);

  return (
    <WagmiConfig client={wagmiClient}>
      <NextNProgress />
      <RainbowKitProvider chains={appChains.chains} avatar={BlockieAvatar} theme={lightTheme()}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="relative flex flex-col flex-1">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
        <Toaster />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default ScaffoldEthApp;
