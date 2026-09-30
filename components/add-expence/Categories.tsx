import { Icons } from "@/icons/icon";
import { useState } from "react";

const CATEGORIES = [
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

const colors = [
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

export default function Categories() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);

  const getColor = (category_id: number) => {
    const color = colors.find((item) => item.id === category_id);

    return {
      bg: color?.iconColor ?? "#EA4335",
      iconColor: color?.bg ?? "#FCE8E6",
    };
  };
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
            console.log(bg, " ", iconColor);
            return (
              <div
                key={category.id}
                onClick={() => setSelectedCategoryId(category.id)}
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
