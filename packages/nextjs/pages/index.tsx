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

        <div className="flex-grow bg-base-100 w-full mt-16 px-8 py-12">
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
          <div className="flex flex-col bg-base-300 px-20 py-20 text-center items-center max-w-md rounded-3xl">
            <BugAntIcon className="h-8 w-8 fill-secondary" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
              <Link href="/debug" passHref className="link">
                Lorem ipsum
              </Link>{" "}
              dolor.
            </p>
          </div>
          <div className="flex flex-col bg-base-300 px-20 py-20 text-center items-center max-w-md rounded-3xl">
            <SparklesIcon className="h-8 w-8 fill-secondary" />
            <p>
              Dolor sit amet{" "}
              <Link href="/example-ui" passHref className="link">
                Lorem ipsum
              </Link>{" "}
              consectetur adipiscing elit.
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
