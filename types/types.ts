export type ExpenseType = "income" | "expense";

export interface ExpenseFormData {
  expense_type: ExpenseType;
  expense_amount: string;
  expense_name: string;
  expense_date: string;
  expense_time: string;
  expense_category: number;
  expense_payment_method: number;
  expense_notes?: string;
}
