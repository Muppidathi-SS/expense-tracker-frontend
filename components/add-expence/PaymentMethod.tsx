import { Icons } from "@/icons/icon";
import { useState } from "react";

const PAYMENT_METHODS = [
  {
    id: 1,
    name: "UPI / GPay",
    icon: Icons.UPIIcon,
  },
  {
    id: 2,
    name: "Credit Card",
    icon: Icons.CreditCardIcon,
  },
  {
    id: 3,
    name: "Debit Card",
    icon: Icons.DebitCardIcon,
  },
  {
    id: 4,
    name: "Cash",
    icon: Icons.CashIcon,
  },
  {
    id: 5,
    name: " Net Banking",
    icon: Icons.BankIcon,
  },
];

export default function PaymentMethod() {
  const [selectedPaymentId, setSelectedPaymentId] = useState(0);
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
                onClick={() => setSelectedPaymentId(payment.id)}
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
