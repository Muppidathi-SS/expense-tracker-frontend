import { QUICK_AMOUNTS } from "@/constants/constants";
import { Icons } from "@/icons/icon";
import { ExpenseFormData } from "@/types/types";

interface InputFieldsProps {
  data: ExpenseFormData;
  onChange: (data: ExpenseFormData) => void;
}

export default function InputFields({ data, onChange }: InputFieldsProps) {
  return (
    <>
      <div className="flex justify-between bg-[#F4F3F7] border border-[#e1e3eb] rounded-xl shadow px-5 py-3 mt-15">
        <div>
          <span className="text-gray-600 text-[20px]"> Expense Amount</span>
          <div className="flex items-center gap-2 my-2">
            <span className="text-[42px] font-bold">₹</span>
            <input
              type="number"
              value={data.expense_amount}
              onChange={(e) =>
                onChange({
                  ...data,
                  expense_amount: e.target.value,
                })
              }
              placeholder="0.00"
              className="text-[42px] font-bold leading-none h-12 w-150 outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          </div>
        </div>
        <div className="my-auto">
          <span className="text-gray-600 text-[20px]">Quick Add</span>
          <div className="flex gap-2 mt-4">
            {QUICK_AMOUNTS.map((amount, index) => (
              <button
                key={index}
                onClick={() => {
                  onChange({
                    ...data,
                    expense_amount: String(amount),
                  });
                }}
                className="bg-white px-4 py-2 rounded-3xl border border-gray-200 shadow cursor-pointer hover:bg-blue-50"
              >
                ₹{amount}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="flex flex-col gap-3">
          <span className="text-black text-[20px]">Description / Title</span>

          <div className="flex h-11 w-full items-center gap-2 rounded-md border border-gray-400 px-3 text-gray-400">
            <Icons.DescriptionIcon />
            <input
              type="text"
              value={data.expense_name}
              onChange={(e) => {
                onChange({
                  ...data,
                  expense_name: e.target.value,
                });
              }}
              placeholder="Enter the Description / Title"
              className="h-full w-full text-[15px] text-black outline-none"
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
                value={data.expense_date}
                onChange={(e) => {
                  onChange({
                    ...data,
                    expense_date: e.target.value,
                  });
                }}
                className="h-full w-full min-w-0 text-[15px] text-gray-500 outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-black text-[20px]">Time</span>

            <div className="flex h-11 w-full items-center gap-2 rounded-md border border-gray-400 px-3 text-gray-400">
              <Icons.TimeIcon />
              <input
                type="time"
                value={data.expense_time}
                onChange={(e) => {
                  onChange({
                    ...data,
                    expense_time: e.target.value,
                  });
                }}
                className="h-full w-full min-w-0 text-[15px] text-gray-500 outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
