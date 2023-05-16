import { useCallback, useEffect, useState } from "react";
import { useTokenPrice } from "./useTokenPrice";
import { useBalance } from "wagmi";
import { getTargetNetwork } from "~~/utils/scaffold-eth";

export function useTokenBalance(tokenAddress: string, address?: string) {
  const [isSlashBalance, setIsSlashBalance] = useState(true);
  const [balance, setBalance] = useState<number | null>(null);
  const price = useTokenPrice(tokenAddress);

  const {
    data: fetchedBalanceData,
    isError,
    isLoading,
  } = useBalance({
    address,
    watch: true,
    chainId: getTargetNetwork().id,
    token: tokenAddress,
  });

  const onToggleBalance = useCallback(() => {
    setIsSlashBalance(!isSlashBalance);
  }, [isSlashBalance]);

  useEffect(() => {
    if (fetchedBalanceData?.formatted) {
      setBalance(Number(fetchedBalanceData.formatted));
    }
  }, [fetchedBalanceData]);

  return { balance, price, isError, isLoading, onToggleBalance, isSlashBalance };
}
