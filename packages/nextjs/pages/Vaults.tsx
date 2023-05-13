import Head from "next/head";
import type { NextPage } from "next";
import { VaultCard } from "~~/components/bonds/VaultCard";
import { ContractData } from "~~/components/vaults/ContractData";

const Vaults: NextPage = () => {
  return (
    <>
      <Head>
        <title>Slash Protocol - Vaults</title>
        <meta name="description" content="Supported by 🏗 scaffold-eth-2" />
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </Head>
      <div className="grid lg:grid-cols-2 flex-grow" data-theme="vaults">
        <div>
          <VaultCard
            title="./ZeroSlash"
            description="Stake and lock up SLASH for 7 days to be fully protected from debase"
            duration="7 days"
          />
          <VaultCard
            title="http://DoubleSlash"
            description="Provide WETH-SLASH LP to protect from debase by earning yield on staking"
            duration="24 hours"
          />
          <VaultCard
            title="Stable Slash"
            description="Provide USDT-SLASH LP to protect from debase by earning yield on staking"
            duration="24 hours"
          />
        </div>
        <ContractData />
      </div>
    </>
  );
};

export default Vaults;
