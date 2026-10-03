import { PAYMENT_METHODS } from "@/constants/constants";
import { Icons } from "@/icons/icon";
import { ExpenseFormData } from "@/types/types";
import { useEffect, useState } from "react";

interface PaymentMethodProps {
  data: ExpenseFormData;
  onChange: (payment_id: number) => void;
}
export default function PaymentMethod({ data, onChange }: PaymentMethodProps) {
  const [selectedPaymentId, setSelectedPaymentId] = useState(
    data.expense_payment_method,
  );

  useEffect(() => {
    setSelectedPaymentId(data.expense_payment_method);
  }, [data.expense_payment_method]);
  return (
    <>
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <h1 className="text-black text-[20px]">Payment Method</h1>
        </div>
        <div className="flex gap-4 mt-4">
          {PAYMENT_METHODS.map((payment) => {
            const Icon = payment.icon;
            return (
              <button
                key={payment.id}
                onClick={() => {
                  setSelectedPaymentId(payment.id);
                  onChange(payment.id);
                }}
                className={`flex justify-between items-center gap-3 px-4 py-2 rounded-3xl border border-gray-200 shadow cursor-pointer ${selectedPaymentId === payment.id ? "border-green-600 bg-green-50 text-green-600" : "bg-white"} `}
              >
                <Icon />
                {payment.name}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
