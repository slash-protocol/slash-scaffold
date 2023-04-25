import { getTargetNetwork } from "~~/utils/scaffold-eth";

const DEFAULT_NETWORK_COLOR: [string, string] = ["#666666", "#bbbbbb"];

/**
 * Gets the color of the target network
 */
export const useNetworkColor = () => {
  const colorConfig = getTargetNetwork().color ?? DEFAULT_NETWORK_COLOR;

  return Array.isArray(colorConfig) ? colorConfig[0] : colorConfig;
};
