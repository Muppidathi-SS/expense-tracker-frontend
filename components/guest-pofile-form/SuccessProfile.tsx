import { Icons } from "@/icons/icon";
import LogoIcon from "@/icons/svgIcons/Logo";
import SuccessIcon from "@/icons/svgIcons/SuccessIcon";
import { useState } from "react";

type SuccessProfileProps = {
  id: string;
  onContinue: () => void;
};

export default function SuccessProfile({
  id,
  onContinue,
}: SuccessProfileProps) {
  const [copyButtonLabel, setCopyButtonLabel] = useState<string>("Copy ID");
  
  const handleCopyId = async () => {
    setCopyButtonLabel("Copied");
    await navigator.clipboard.writeText(id);
    setTimeout(() => {
      setCopyButtonLabel("Copy ID");
    }, 1000);
  };

  return (
    <>
      <section className="flex min-h-screen items-center justify-center bg-[#EEF2F7] px-4 py-6 sm:px-6">
        <div className="flex w-full max-w-3xl flex-col items-center justify-center rounded-2xl bg-white px-4 py-8 shadow-sm sm:px-8 sm:py-10 md:px-12">
          <LogoIcon size={400} className="h-auto w-full max-w-100" />
          <SuccessIcon height={100} width={100} />
          <h1 className="mt-4 text-center text-xl font-medium text-black sm:text-2xl">
            Profile Created Successfully!
          </h1>
          <p className="mt-3 max-w-xl text-center text-sm font-normal leading-relaxed text-gray-500 sm:text-base">
            Setting up your secure local expense ledger and offline database.
            Please hold on...
          </p>
          <div className="mt-4 w-full rounded-md border border-[#C1C6D6] bg-[#F4F3F7] p-2 sm:p-3">
            <div className="flex flex-col items-stretch gap-3 rounded-md bg-white p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4">
              <p className="min-w-0 break-all text-sm font-semibold text-gray-800 sm:text-base md:text-lg">
                {id || "NOT"}
              </p>
              <button
                onClick={handleCopyId}
                className="flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 sm:text-base"
              >
                {copyButtonLabel === "Copied" ? (
                  <Icons.CheckedIcon />
                ) : (
                  <Icons.CopyIcon />
                )}
                {copyButtonLabel}
              </button>
            </div>
          </div>
          <div className="mt-4 flex w-full items-start gap-2 rounded-md border border-[#C1C6D6] bg-[#F4F3F7] p-3 text-sm leading-relaxed text-gray-500 sm:text-base">
            <span className="mt-0.5 shrink-0">
              <Icons.InfoIcon />
            </span>
            <p>
              Note: Copy this ID to use or recover your guest data on other
              devices. No personal login is tied to this ledger.
            </p>
          </div>
          <button
            onClick={onContinue}
            className="my-8 flex w-full max-w-xs cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-blue-700"
          >
            Continue
            <Icons.NextArrowIcon />
          </button>
        </div>
      </section>
    </>
  );
}
