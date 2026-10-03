"use client";

import { useState } from "react";
import Sidebar, { TabType } from "./Sidebar";
import Dashboard from "@/components/dashboard/Dashboard";
import Profile from "@/components/profile/Profile";
import { Icons } from "@/icons/icon";
import AddExpense from "../add-expence/AddExpence";

interface LogoutProps {
  onLogout: () => void;
}
export default function Layout({ onLogout }: LogoutProps) {
  const [activeTab, setActiveTab] = useState<TabType>("add-expense");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-[#EEF2F7]">
      <header className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 sticky top-0 z-30 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-pointer"
            aria-label="Open navigation menu"
          >
            <Icons.MenuIcon />
          </button>
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-xs shadow-xs">
              ET
            </div>
            <span className="font-bold text-gray-900 capitalize text-sm sm:text-base">
              {activeTab}
            </span>
          </div>
        </div>

        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
          Guest Mode
        </span>
      </header>

      <aside
        className={`hidden md:block fixed left-0 top-0 z-50 h-screen border-r border-gray-200 bg-white transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-102"
        }`}
      >
        <Sidebar
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      </aside>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative z-10 flex h-full w-4/5 max-w-xs flex-col bg-white shadow-2xl">
            <Sidebar
              activeTab={activeTab}
              onSelectTab={setActiveTab}
              onClose={() => setIsMobileMenuOpen(false)}
              isCollapsed={false}
              setIsCollapsed={() => {}}
            />
          </div>
        </div>
      )}

      <main
        className={`relative min-w-0 flex-1 p-4 bg-white overflow-y-auto transition-all duration-300 ${
          isCollapsed ? "md:ml-20" : "md:ml-102"
        }`}
      >
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "profile" && <Profile onLogout={onLogout} />}
        {activeTab === "add-expense" && <AddExpense />}
      </main>
    </div>
  );
}
