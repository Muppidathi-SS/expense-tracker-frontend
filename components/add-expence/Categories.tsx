import { CATEGORIES, COLORS } from "@/constants/constants";
import { Icons } from "@/icons/icon";
import { ExpenseFormData } from "@/types/types";
import { useEffect, useState } from "react";

interface CategoriesTypeProps {
  data: ExpenseFormData;
  onChange: (category_id: number) => void;
}

export default function Categories({ data, onChange }: CategoriesTypeProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    data.expense_category,
  );

  const getColor = (category_id: number) => {
    const color = COLORS.find((item) => item.id === category_id);
    return {
      bg: color?.iconColor ?? "#EA4335",
      iconColor: color?.bg ?? "#FCE8E6",
    };
  };

  useEffect(() => {
    setSelectedCategoryId(data.expense_category);
  }, [data.expense_category]);

  return (
    <>
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <h1 className="text-black text-[20px]">Category</h1>
          <button className="flex justify-between items-center gap-2 bg-[#1967D2] text-white text-[16px] font-medium px-4 py-2 rounded-xl">
            <Icons.AddIcon />
            New Category
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-5">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            const { bg, iconColor } = getColor(category.id);
            return (
              <div
                key={category.id}
                onClick={() => {
                  setSelectedCategoryId(category.id);
                  onChange(category.id);
                }}
                className={`w-full rounded-xl border p-3 mt-2 cursor-pointer ${selectedCategoryId === category.id ? "border-green-600 bg-green-50" : "border-[#C1C6D6]"} `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full`}
                      style={{ backgroundColor: iconColor }}
                    >
                      <Icon className={`h-5 w-5`} style={{ color: bg }} />
                    </div>
                    <div>
                      <h3 className="text-md font-medium text-slate-900">
                        {category.name}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {category.subName}
                      </p>
                    </div>
                  </div>
                  {selectedCategoryId === category.id && (
                    <Icons.CheckedIcon1 className="h-5 w-5 text-green-600" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
