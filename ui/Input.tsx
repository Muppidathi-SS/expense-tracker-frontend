type InputFieldProps = {
  type: string;
  name?: string;
  value?: string;
  placeholder: string;
  labelName?: string;
  required: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  type,
  name,
  value,
  placeholder,
  labelName,
  required,
  onChange,
}: InputFieldProps) {
  return (
    <>
      <section className="w-full">
        {labelName && (
          <label
            htmlFor="expense-title"
            className="block text-[18px] font-medium text-gray-700"
          >
            {labelName}
            {required && <span className="ml-1 text-red-700">*</span>}
          </label>
        )}
        <div className="w-full rounded-xl border border-gray-300 px-4 py-2.5 shadow-sm mt-3">
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full text-[18px] outline-none focus:outline-none"
          />
        </div>
        {/* <p className="text-blue-600 font-medium mt-2"> Already I have an Guest Profile?</p> */}
      </section>
    </>
  );
}
