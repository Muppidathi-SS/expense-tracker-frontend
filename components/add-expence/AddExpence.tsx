"use client";

import { Icons } from "@/icons/icon";
import Categories from "./Categories";
import PaymentMethod from "./PaymentMethod";
import InputFields from "./InputFields";
import AddExpenseHeader from "./AddExpenseHeader";
import { useEffect, useState } from "react";
import { initialExpenseFormData } from "@/constants/constants";
import { ExpenseFormData } from "@/types/types";
import { DotsLoader } from "@/ui/DotsLoader";
import { toast } from "react-toastify";
import { tr } from "framer-motion/client";

export default function AddExpense() {
  const [expenseFormData, setExpenseFormData] = useState<ExpenseFormData>(
    initialExpenseFormData,
  );

  const [guestId, setGuestId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    const payload = {
      guest_id: guestId,
      expense_name: expenseFormData.expense_name,
      expense_amount: Number(expenseFormData.expense_amount),
      expense_date: expenseFormData.expense_date,
      expense_time: expenseFormData.expense_time,
      category_id: expenseFormData.expense_category,
      expense_type: expenseFormData.expense_type,
      expense_payment_method: expenseFormData.expense_payment_method,
      expense_notes: expenseFormData.expense_notes,
    };
    try {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/add-expense`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );
      const result = await response.json();
      setExpenseFormData(initialExpenseFormData);
      if (result.success) toast.success("Expense added successfully!");
      else toast.error("Failed to save");
    } catch (error) {
      console.error("Failed to save expense:", error);
      toast.error("Failed to save");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("guestId");
    setGuestId(id || "");
  }, []);

  return (
    <section className="min-h-[80vh]">
      <div className="mt-3">
        <AddExpenseHeader
          data={expenseFormData}
          onTypeChange={(type) => {
            setExpenseFormData((prev) => ({
              ...prev,
              expense_type: type,
            }));
          }}
        />
      </div>
      <div className="mt-3">
        <InputFields
          data={expenseFormData}
          onChange={(data) => {
            setExpenseFormData(data);
          }}
        />
      </div>
      <div className="mt-3">
        <Categories
          data={expenseFormData}
          onChange={(category_id) => {
            setExpenseFormData((pre) => ({
              ...pre,
              expense_category: category_id,
            }));
          }}
        />
      </div>
      <div className="mt-3">
        <PaymentMethod
          data={expenseFormData}
          onChange={(payment_id) => {
            setExpenseFormData((pre) => ({
              ...pre,
              expense_payment_method: payment_id,
            }));
          }}
        />
      </div>

      <div className="mt-8 flex flex-col justify-end border-t border-[#C1C6D6] pt-6 sm:flex-row">
        <div className="flex flex-wrap items-center justify-end gap-5">
          <button
            type="button"
            onClick={() => setExpenseFormData(initialExpenseFormData)}
            className="h-12 rounded-lg border border-[#C1C6D6] px-6 text-base text-[#202124] hover:bg-gray-50 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSave}
            className="flex h-12 items-center justify-center gap-2 font-medium rounded-lg bg-[#1967D2] px-6 text-base text-white hover:bg-blue-700 cursor-pointer"
          >
            <Icons.CheckedIcon1 className="h-5 w-5" />
            Save Expense
          </button>
        </div>
        {isLoading && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
              <DotsLoader />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
