import Head from "next/head";
import type { NextPage } from "next";
import { ContractData } from "~~/components/vaults/ContractData";
import { ContractInteraction } from "~~/components/vaults/ContractInteraction";

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Scaffold-ETH 2 Example Ui</title>
        <meta name="description" content="Created with 🏗 scaffold-eth-2" />
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </Head>
      <div className="grid lg:grid-cols-2 flex-grow" data-theme="aboutUs">
        <ContractInteraction />
        <ContractData />
      </div>
    </>
  );
};

export default AboutUs;
