import { Icons } from "@/icons/icon";
import LogoIcon from "@/icons/svgIcons/Logo";

type WelcomeProps = {
  onLogin: () => void;
};

export default function WelcomeCard({ onLogin }: WelcomeProps) {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-[#EEF2F7] px-4 py-6">
        <div className="flex w-full max-w-180 flex-col items-center justify-center rounded-2xl bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10 md:px-12">
          <LogoIcon size={400} className="h-auto w-full max-w-100" />

          <h1 className="mt-4 text-center text-xl font-semibold text-black sm:text-2xl">
            Welcome to Expense Tracker!
          </h1>

          <p className="mt-3 max-w-xl text-center text-sm font-normal leading-relaxed text-gray-500 sm:text-base">
            Get started in Guest Mode to track your expenses, manage your
            budget, and monitor your spending. No account is required.
          </p>

          <button
            onClick={onLogin}
            className="flex items-center justify-center gap-2 my-8 w-full max-w-xs cursor-pointer rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-blue-700 sm:w-auto"
          >
            <Icons.GuestIcon /> Login as Guest
          </button>
        </div>
      </main>
    </>
  );
}
