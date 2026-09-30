import { Icons } from "@/icons/icon";

export default function InputFields() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      <div className="flex flex-col gap-3">
        <span className="text-black text-[20px]">
          Description / Title
        </span>

        <div className="flex h-11 w-full items-center gap-2 rounded-md border border-gray-400 px-3 text-gray-400">
          <Icons.DescriptionIcon />
          <input
            type="text"
            placeholder="Enter the Description / Title"
            className="h-full w-full text-[19px] text-black outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          <span className="text-black text-[20px]">Date</span>

          <div className="flex h-11 w-full items-center gap-2 rounded-md border border-gray-400 px-3 text-gray-400">
            <Icons.DateIcon />
            <input
              type="date"
              className="h-full w-full min-w-0 text-[16px] text-gray-500 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-black text-[20px]">Time</span>

          <div className="flex h-11 w-full items-center gap-2 rounded-md border border-gray-400 px-3 text-gray-400">
            <Icons.TimeIcon />
            <input
              type="time"
              className="h-full w-full min-w-0 text-[16px] text-gray-500 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}