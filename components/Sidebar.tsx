"use client";

import { Icons } from "@/icons/icon";

type SidebarProps = {
  selected: string;
  setSelected: (value: string) => void;
};

export default function Sidebar({ selected, setSelected }: SidebarProps) {
  return (
    <aside className="w-89 min-h-screen bg-white border-r border-gray-200 px-2 py-4">
      <nav className="flex flex-col gap-2">
        <button
          onClick={() => setSelected("expenses")}
          className={`flex cursor-pointer items-center gap-3 w-full px-4 py-3 rounded-lg text-left transition ${
            selected === "expenses"
              ? "bg-indigo-600 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Icons.ExpenseIcon />
          <span className="font-medium">Expenses</span>
        </button>
      </nav>
    </aside>
  );
}
