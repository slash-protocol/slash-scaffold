import create from "zustand";

/**
 * Zustand Store
 *
 * You can add global state to the app using this AppStore, to get & set
 * values from anywhere in the app.
 *
 * Think about it as a global useState.
 */

type TAppStore = {
  ethPrice: number;
  setEthPrice: (newEthPriceState: number) => void;
  slashPrice: number;
  setSlashPrice: (newSlashPriceState: number) => void;
  setSlashAddress: (newSlashAddressState: string) => void;
  tokenPrices: { [key: string]: number };
  setTokenPrices: (newTokenPricesState: { [key: string]: number }) => void;

  //statistics
  marketCap: number;
  setMarketCap: (newMarketCapState: number) => void;
  totalSupply: number;
  setTotalSupply: (newTotalSupplyState: number) => void;
  circulatingSupply: number;
  setCirculatingSupply: (newCirculatingSupplyState: number) => void;

  //addresses
  slashAddress: string;
  wethSlashPairAddress: string;
};

export const useAppStore = create<TAppStore>(set => ({
  ethPrice: 0,
  setEthPrice: (newValue: number): void => set(() => ({ ethPrice: newValue })),
  slashPrice: 0,
  setSlashPrice: (newValue: number): void => set(() => ({ slashPrice: newValue })),
  setSlashAddress: (newValue: string): void => set(() => ({ slashAddress: newValue })),
  tokenPrices: {},
  setTokenPrices: (newTokenPricesState: { [key: string]: number }): void =>
    set(() => ({ tokenPrices: newTokenPricesState })),

  //statistics
  marketCap: 0,
  setMarketCap: (newValue: number): void => set(() => ({ marketCap: newValue })),
  totalSupply: 0,
  setTotalSupply: (newValue: number): void => set(() => ({ totalSupply: newValue })),
  circulatingSupply: 0,
  setCirculatingSupply: (newValue: number): void => set(() => ({ circulatingSupply: newValue })),

  //addresses
  slashAddress: "",
  wethSlashPairAddress: "",
}));
