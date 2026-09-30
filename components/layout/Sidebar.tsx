"use client";

import { useState } from "react";
import { Icons } from "@/icons/icon";
import LogoIcon from "@/icons/svgIcons/Logo";
import SecondaryLogoIcon from "@/icons/svgIcons/SecondaryLogo";

export type TabType = "dashboard" | "profile" | "add-expense";

interface SidebarProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onClose?: () => void;
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}
export default function Sidebar({
  activeTab,
  onSelectTab,
  onClose,
  isCollapsed,
  setIsCollapsed,
}: SidebarProps) {
  const menuItems: {
    id: TabType;
    name: string;
    icon: React.ElementType;
  }[] = [
    { id: "dashboard", name: "Dashboard", icon: Icons.DashboardIcon },
    { id: "profile", name: "Profile", icon: Icons.ProfileIcon },
  ];

  const handleSelect = (tab: TabType) => {
    onSelectTab(tab);
    onClose?.();
  };

  return (
    <aside
      className={`flex h-full flex-col justify-between bg-white p-4 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-full"
      }`}
    >
      <div>
        <div
          className={`mb-8 w-full flex items-center ${
            isCollapsed ? "justify-center" : "justify-between"
          }`}
        >
          {!isCollapsed && <LogoIcon className="h-12 w-auto" />}

          {isCollapsed && (
            <button
              onClick={() => setIsCollapsed(false)}
              className="cursor-pointer"
              title="Expand sidebar"
            >
              <SecondaryLogoIcon />
            </button>
          )}

          {!isCollapsed && (
            <button
              onClick={() => setIsCollapsed(true)}
              className="cursor-pointer rounded-full text-[#1967D2] shadow-md shadow-blue-600/25 bg-[#E8f0fe] p-2"
              title="Collapse sidebar"
            >
              <Icons.MenuIcon />
            </button>
          )}
        </div>
        <button
          onClick={() => handleSelect("add-expense")}
          className={`flex w-full cursor-pointer items-center rounded-xl py-3 text-md font-semibold transition-all duration-200 bg-[#1967D2] text-[#ffffff] shadow-md shadow-blue-600/25 ${
            isCollapsed ? "justify-center px-0" : "gap-3 px-4"
          } `}
        >
          <Icons.AddCircleIcon />
          {!isCollapsed && "Add Expense"}
        </button>
        <nav className="space-y-2 mt-10">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                title={isCollapsed ? item.name : undefined}
                className={`flex w-full cursor-pointer items-center rounded-xl py-3 text-sm font-semibold transition-all duration-200 ${
                  isCollapsed ? "justify-center px-0" : "gap-3 px-4"
                } ${
                  isActive
                    ? "bg-[#E8f0fe] text-[#1967D2] shadow-md shadow-blue-600/25"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <Icon
                  className={`shrink-0 ${
                    isActive ? "text-[#1967D2]" : "text-gray-500"
                  }`}
                />

                {!isCollapsed && <span>{item.name}</span>}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
