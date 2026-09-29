import Input from "@/ui/Input";

export default function Expenses() {
  return (
    <section className="px-2 py-4">
      <h1 className="font-medium text-[24px]">Add Expenses</h1>
      <p className="font-normal text-gray-600">
        Record a new transaction to your expense ledger
      </p>
      <div>
        <Input
          type="text"
          placeholder="e.g. Team Lunch, Medical, Food, etc..."
          labelName="expense-title"
          required={true}
        />
      </div>
    </section>
  );
}
