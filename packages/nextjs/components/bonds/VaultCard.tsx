import { useState } from "react";
import { CopyIcon } from "./assets/CopyIcon";
import { DiamondIcon } from "./assets/DiamondIcon";
import { HareIcon } from "./assets/HareIcon";
import { BigNumber } from "ethers";
import { useAccount } from "wagmi";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const VaultCard = ({
  title,
  description,
  duration,
}: {
  title: string;
  description: string;
  duration: string;
}) => {
  //const [visible, setVisible] = useState(true);
  const [depositAmount, setDepositAmount] = useState(BigNumber.from(0));
  const [isDeposit, setIsDeposit] = useState(true); // added state for toggle

  const { writeAsync, isLoading } = useScaffoldContractWrite({
    contractName: "SlashVault",
    functionName: "deposit",
    args: [BigNumber.from(0), depositAmount, useAccount().address],
  });

  // const handleSubmit = () => {
  //   if (isDeposit) {
  //     // handle deposit
  //   } else {
  //     // handle withdrawal
  //   }
  // };

  const buttonText = isDeposit ? "Deposit" : "Withdraw";

  return (
    <div className="flex bg-base-300 relative pb-10">
      <DiamondIcon className="absolute top-24" />
      <CopyIcon className="absolute bottom-0 left-36" />
      <HareIcon className="absolute right-0 bottom-24" />
      <div className="flex flex-col w-full mx-5 sm:mx-8 2xl:mx-20">
        <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary">
          <span className="text-4xl sm:text-6xl text-black">{title}</span>
          <div className="tab justify-center">
            <button className="tablinks" onClick={() => setIsDeposit(true)}>
              Deposit
            </button>
            <button className="tablinks" onClick={() => setIsDeposit(false)}>
              Withdraw
            </button>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
            <input
              type="number"
              placeholder={buttonText}
              className="input font-bai-jamjuree w-full px-5 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border border-primary text-lg sm:text-2xl placeholder-white uppercase"
              onChange={e => setDepositAmount(BigNumber.from(e.target.value).pow(18))}
            />
            <div className="flex rounded-full border border-primary p-1 flex-shrink-0">
              <div className="flex rounded-full border-2 border-primary p-1">
                <button
                  className={`btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest ${
                    isLoading ? "loading" : ""
                  }`}
                  onClick={writeAsync}
                >
                  {!isLoading && (
                    <>
                      {buttonText} <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-2 items-start">
            <span className="text-sm leading-tight">
              {description} : {duration} Lock Up Period
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
