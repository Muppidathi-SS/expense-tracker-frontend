import { Icons } from "@/icons/icon";
import { ExpenseFormData } from "@/types/types";

export const initialExpenseFormData: ExpenseFormData = {
  expense_type: "expense",
  expense_amount: "",
  expense_name: "",
  expense_date: "",
  expense_time: "",
  expense_category: -1,
  expense_payment_method: -1,
  expense_notes: "",
};
export const QUICK_AMOUNTS = [50, 100, 500, 1000];

export const CATEGORIES = [
  { id: 1, name: "Food & Dining", subName: "Default", icon: Icons.FoodIcon },
  { id: 2, name: "Travel & Cab", subName: "Transport", icon: Icons.CarIcon },
  { id: 3, name: "Shopping", subName: "Retail", icon: Icons.BagIcon },
  {
    id: 4,
    name: "Bills & Utilities",
    subName: "Recurring",
    icon: Icons.BillIcon,
  },
  {
    id: 5,
    name: "Entertainment",
    subName: "Leisure",
    icon: Icons.EntertainmentIcon,
  },
  { id: 6, name: "Health", subName: "Medical", icon: Icons.HealthIcon },
  { id: 7, name: "Tech & Tools", subName: "Software", icon: Icons.TechIcon },
  { id: 8, name: "Others", subName: "General", icon: Icons.OthersIcon },
];

export const COLORS = [
  {
    id: 1,
    bg: "#FCE8E6",
    iconColor: "#EA4335",
  },
  {
    id: 2,
    bg: "#E8F0FE",
    iconColor: "#005BBF",
  },
  {
    id: 3,
    bg: "#FEF7E0",
    iconColor: "#F9AB00",
  },
  {
    id: 4,
    bg: "#E6F4EA",
    iconColor: "#006E2C",
  },
  {
    id: 5,
    bg: "#F3E8FD",
    iconColor: "#9334E6",
  },
  {
    id: 6,
    bg: "#FEEFE3",
    iconColor: "#E8710A",
  },
  {
    id: 7,
    bg: "#E8EAED",
    iconColor: "#414754",
  },
  {
    id: 8,
    bg: "#EFEDF1",
    iconColor: "#727785",
  },
];

export const PAYMENT_METHODS = [
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
