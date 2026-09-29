import LogoIcon from "@/icons/svgIcons/Logo";
import { RingLoader } from "./RingLoader";

export default function Loading() {
  return (
    <>
      <section className="flex min-h-screen items-center justify-center bg-[#EEF2F7] px-4 py-6">
        <div className="flex w-full max-w-180 flex-col items-center justify-center rounded-2xl bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10 md:px-12">
          <LogoIcon size={400} className="h-auto w-full max-w-100" />
          <h1 className="mt-4 text-center text-xl font-medium text-black sm:text-2xl">
            Guest Profile Creating
          </h1>
          <p className="mt-3 max-w-xl text-center text-sm font-normal leading-relaxed text-gray-500 sm:text-base">
            Setting up your secure local expense ledger and offline database.
            Please hold on...
          </p>
          <div className="py-3 mt-10">
            <RingLoader />
          </div>
        </div>
      </section>
    </>
  );
}
