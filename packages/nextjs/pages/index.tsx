import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, SparklesIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Slash Protocol</title>
        <meta name="description" content="Created with 🏗 scaffold-eth-2" />
      </Head>

      <div className="flex bg-base-100 items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Slash Protocol</span>
          </h1>
          <p className="text-center text-lg">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold">packages/nextjs/pages/index.tsx</code>
          </p>
          <p className="text-center text-lg">
            Edit your smart contract <code className="italic bg-base-300 text-base font-bold">YourContract.sol</code> in{" "}
            <code className="italic bg-base-300 text-base font-bold">packages/hardhat/contracts</code>
          </p>
        </div>

        <div className="flex bg-base-100 items-center flex-col flex-grow pt-10">
          <div className="px-5">
            <p className="text-center mb-1">
              <span className="block text-4xl font-bold">Slash Stats</span>
            </p>
          </div>
        </div>

        <div className="bg-base-300 md:flex-row rounded-xl min-w-[95%] md:min-w-[95%] sm:min-w-[90%] my-8">
          <div className="grid grid-cols-1 py-4 px-4 gap-8 gap-x-20 md:grid-cols-3 justify-center">
            <div className="bg-base-200 py-6 rounded-xl mb-2 text-center">
              <p className="hover:text-size">Total TVL</p>
              <p className="hover:text-size">Object 1</p>
            </div>
            <div className="bg-base-200 py-6 rounded-xl mb-2 text-center">
              <p className="hover:text-size">Marketcap (Fully Diluted)</p>
              <p className="hover:text-size">Object 2</p>
            </div>
            <div className="bg-base-200 py-6 rounded-xl mb-2 text-center">
              <p className="hover:text-size">Total Liquidity</p>
              <p className="hover:text-size">Object 3</p>
            </div>
            <div className="bg-base-200 py-6 rounded-xl mb-2 text-center">
              <p className="hover:text-size">Total Supply</p>
              <p className="hover:text-size">Object 4</p>
            </div>
            <div className="bg-base-200 py-6 rounded-xl mb-2 text-center">
              <p className="hover:text-size">Supply in Vaults</p>
              <p className="hover:text-size">Object 5</p>
            </div>
            <div className="bg-base-200 py-6 rounded-xl mb-2 text-center">
              <p className="hover:text-size">Circulating Supply</p>
              <p className="hover:text-size">Object 6</p>
            </div>
          </div>
        </div>

        <div className="flex-grow bg-base-100 w-full mt-1 px-2 py-4">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-300 px-20 py-20 text-center items-center max-w-md rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contract
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-300 px-20 py-20 text-center items-center max-w-md rounded-3xl">
              <SparklesIcon className="h-8 w-8 fill-secondary" />
              <p>
                Experiment with{" "}
                <Link href="/example-ui" passHref className="link">
                  Example UI
                </Link>{" "}
                to build your own UI.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow bg-base-100 w-full mt-25 px-8 py-12">
        <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
          <div className="flex flex-col bg-base-300 px-64 py-20 text-center items-center w-full rounded-3xl">
            <BugAntIcon className="h-8 w-8 fill-secondary" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
              <Link href="/debug" passHref className="link">
                Lorem ipsum
              </Link>{" "}
              dolor.
            </p>
          </div>
        </div>

        <iframe
          src="https://app.uniswap.org/#/swap?theme=darkexactField=input&exactAmount=10&inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f"
          height="660px"
          width="75%"
        />
      </div>
    </>
  );
};

export default Home;
