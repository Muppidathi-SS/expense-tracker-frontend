import { Icons } from "@/icons/icon";
import LogoIcon from "@/icons/svgIcons/Logo";
import Input from "@/ui/Input";
import { useState } from "react";

type GuestProfileFormProps = {
  onSubmit: (guestName: string) => void;
};

export default function GuestProfileForm({ onSubmit }: GuestProfileFormProps) {
  const [guestName, setGuestName] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuestName(e.target.value);
  };

  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-[#EEF2F7] px-4 py-6">
        <div className="flex w-full max-w-180 flex-col items-center justify-center rounded-2xl bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10 md:px-12">
          <LogoIcon size={400} className="h-auto w-full max-w-100" />
          <Input
            type="text"
            name="guestName"
            value={guestName}
            labelName="Enter the Guest Name"
            placeholder="Enter the Name"
            required={true}
            onChange={handleInputChange}
          />
          <div className="flex justify-end w-full">
            <button
              onClick={() => onSubmit(guestName)}
              className="flex items-center justify-center gap-2 my-8 w-full max-w-xs cursor-pointer rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-blue-700 sm:w-auto"
            >
              <Icons.GuestIcon /> Create Guest Profile
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
