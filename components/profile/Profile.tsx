"use client";

import { Icons } from "@/icons/icon";
import LogoIcon from "@/icons/svgIcons/Logo";
import { DotsLoader } from "@/ui/DotsLoader";
import { useEffect, useState } from "react";

interface ProfileProps {
  onLogout: () => void;
}
export default function Profile({ onLogout }: ProfileProps) {
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("guestName");
    if (name) {
      setGuestName(name);
    }
  }, []);

  return (
    <>
      <section className="flex justify-center items-center flex-col min-h-[80vh] py-8 gap-3">
        <LogoIcon size={400} className="h-auto w-full max-w-100" />
        <div className="bg-purple-900 text-white flex justify-center items-center text-[54px] rounded-full p-2 h-25 w-25">
          {guestName.charAt(0).toUpperCase()}
        </div>
        <h1 className="text-[28px] font-medium">{guestName}</h1>
        <p>Welcome to Our Expense Tracker!</p>
        <div className="mt-12">
          <DotsLoader />
        </div>
        <button
          onClick={onLogout}
          className="flex items-center justify-center gap-2 my-8 w-full max-w-xs cursor-pointer rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-blue-700 sm:w-auto"
        >
          <Icons.LogoutIcon /> Sign Out
        </button>
      </section>
    </>
  );
}
