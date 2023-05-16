import { useEffect, useState } from "react";
import { useInterval } from "usehooks-ts";
import { useProvider } from "wagmi";
import scaffoldConfig from "~~/scaffold.config";
import { useAppStore } from "~~/services/store/store";
import { fetchPriceFromUniswap } from "~~/utils/scaffold-eth";

const enablePolling = false;

/**
 * Get the price of SLASH based on SLASH/DAI trading pair from Uniswap SDK
 * @returns tokenPrice: number
 */
export const useTokenPrice = (tokenAddress: string) => {
  const provider = useProvider({ chainId: 1 });
  const [tokenPrice, setTokenPrice] = useState(0);
  const ethPrice = useAppStore(store => store.ethPrice);

  // Get the price of any token from Uniswap on mount
  useEffect(() => {
    (async () => {
      const tokenPriceInEth = await fetchPriceFromUniswap(provider, tokenAddress);
      const price = tokenPriceInEth * ethPrice;
      setTokenPrice(price);
    })();
  }, [provider, tokenAddress, ethPrice]);

  // Get the price of SLASH from Uniswap at a given interval
  useInterval(
    async () => {
      const tokenPriceInEth = await fetchPriceFromUniswap(provider);
      const price = tokenPriceInEth * ethPrice;
      setTokenPrice(price);
    },
    enablePolling ? scaffoldConfig.pollingInterval : null,
  );

  return tokenPrice;
};
