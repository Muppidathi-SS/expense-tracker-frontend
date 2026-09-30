"use client";

import { Icons } from "@/icons/icon";
import { useState } from "react";
import Categories from "./Categories";
import PaymentMethod from "./PaymentMethod";
import InputFields from "./InputFields";

export default function AddExpense() {
  const [activeTab, setActiveTab] = useState<"income" | "expense">("income");
  return (
    <section className="min-h-[80vh]">
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
            onClick={() => setActiveTab("expense")}
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
            onClick={() => setActiveTab("income")}
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
      <div className="flex justify-between bg-[#F4F3F7] border border-[#C1C6D6] rounded-xl shadow px-5 py-3 mt-15">
        <div>
          <span className="text-gray-600 text-[20px]"> Expense Amount</span>
          <div className="flex items-center gap-2 my-2">
            <span className="text-[42px] font-bold">₹</span>
            <input
              type="number"
              placeholder="0.00"
              className="text-[42px] font-bold leading-none h-12 w-150 outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          </div>
        </div>
        <div className="my-auto">
          <span className="text-gray-600 text-[20px]">Quick Add</span>
          <div className="flex gap-2 mt-4">
            <button className="bg-white px-4 py-2 rounded-3xl border border-gray-200 shadow cursor-pointer hover:bg-blue-50">
              ₹50
            </button>
            <button className="bg-white px-4 py-2 rounded-3xl border border-gray-200 shadow cursor-pointer hover:bg-blue-50">
              ₹100
            </button>
            <button className="bg-white px-4 py-2 rounded-3xl border border-gray-200 shadow cursor-pointer hover:bg-blue-50">
              ₹500
            </button>
            <button className="bg-white px-4 py-2 rounded-3xl border border-gray-200 shadow cursor-pointer hover:bg-blue-50">
              ₹1000
            </button>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <InputFields />
      </div>
      <div className="mt-3">
        <Categories />
      </div>
      <div className="mt-3">
        <PaymentMethod />
      </div>

      <div className="mt-8 flex flex-col justify-end border-t border-[#C1C6D6] pt-6 sm:flex-row">
        <div className="flex flex-wrap items-center justify-end gap-5">
          <button
            type="button"
            className="h-12 rounded-lg border border-[#C1C6D6] px-6 text-base text-[#202124] hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex h-12 items-center justify-center gap-2 rounded-lg bg-[#1967D2] px-6 text-base text-white hover:bg-blue-700"
          >
            <Icons.CheckedIcon1 className="h-5 w-5" />
            Save Expense
          </button>
        </div>
      </div>
    </section>
  );
}
