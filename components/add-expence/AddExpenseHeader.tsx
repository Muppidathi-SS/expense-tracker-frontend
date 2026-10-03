"use client";
import { Icons } from "@/icons/icon";
import { ExpenseFormData, ExpenseType } from "@/types/types";
import { useState } from "react";

interface AddExpenseHeaderProps {
  data: ExpenseFormData;
  onTypeChange: (type: ExpenseType) => void;
}

export default function AddExpenseHeader({
  data,
  onTypeChange,
}: AddExpenseHeaderProps) {
  const [activeTab, setActiveTab] = useState<ExpenseType>(data.expense_type);

  const handleTypeChange = (type: ExpenseType) => {
    setActiveTab(type);
    onTypeChange(type);
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-center items-center gap-4 w-fit">
          <button
            className={`w-fit p-2 rounded-xl transition-all duration-300 ease-in ${activeTab === "expense" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
          >
            {activeTab === "expense" ? (
              <Icons.AddExpenseIcon fontSize="large" />
            ) : (
              <Icons.IncomeIcon fontSize="large" />
            )}
          </button>
          <div>
            <h1 className="text-[26px] font-medium">Add New Expense</h1>
            <p className="text-gray-500">
              Record a transaction to your guest ledger
            </p>
          </div>
        </div>
        <div className="relative flex w-fit gap-3 rounded-4xl border border-[#C1C6D6] bg-[#EFEDF1] p-2">
          <div
            className={`absolute top-2 bottom-2 w-35 rounded-4xl bg-white shadow-sm transition-transform duration-300 ease-in-out ${
              activeTab === "income"
                ? "translate-x-[calc(100%+12px)]"
                : "translate-x-0"
            }`}
          />

          <button
            onClick={() => handleTypeChange("expense")}
            className={`relative z-10 flex w-35 cursor-pointer items-center justify-center gap-2 rounded-4xl px-3 py-2 transition-colors duration-300 ${
              activeTab === "expense"
                ? "text-red-600 bg-red-50"
                : "text-gray-600"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                activeTab === "expense" ? "bg-red-600" : "bg-transparent"
              }`}
            />
            Expense
          </button>

          <button
            onClick={() => handleTypeChange("income")}
            className={`relative z-10 flex w-35 cursor-pointer items-center justify-center gap-2 rounded-4xl px-3 py-2 transition-colors duration-300 ${
              activeTab === "income"
                ? "text-green-600 bg-green-50"
                : "text-gray-600"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                activeTab === "income" ? "bg-green-600" : "bg-transparent"
              }`}
            />
            Income
          </button>
        </div>
      </div>
    </>
  );
}
