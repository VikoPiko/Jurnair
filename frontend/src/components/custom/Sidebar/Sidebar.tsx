"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Home,
  Settings,
  Search,
  Book,
  FileClock,
  Cog,
  Wrench,
} from "lucide-react";

enum Tabs {
  Home = "Home",
  My_Journal = "My Journal",
  Settings = "Settings",
  History = "History",
}

const tabConfig = [
  { key: Tabs.Home, label: "Home", icon: Home },
  { key: Tabs.My_Journal, label: "My Journal", icon: Book },
  { key: Tabs.Settings, label: "Settings", icon: Settings },
  { key: Tabs.History, label: "History", icon: FileClock },
];

const Sidebar = ({
  selectedTab,
  onTabChange,
}: {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}) => {
  const handleTabSwitch = (tab: Tabs) => {
    onTabChange(tab);
    console.log("Tab is: ", tab);
  };

  return (
    <div className="fixed top-3 left-3 h-[95vh] w-[200px] rounded-lg shadow-xl bg-gray-50 dark:bg-[#242424] dark:text-gray-50">
      <div className="p-4 border-b border-gray-200 dark:border-gray-400">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-medium">KD</span>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Kevin Dukkon
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-300">
              hey@kevdu.co
            </div>
          </div>
          <div className="ml-auto">
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <Settings className="h-3 w-3 text-gray-400 dark:text-gray-200" />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-3 border-b border-gray-200 dark:border-gray-400">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search"
            className="pl-9 pr-8 h-9 bg-white border-gray-200 dark:border-gray-400 text-sm"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <kbd className="px-1.5 py-0.5 text-xs text-gray-400 dark:text-gray-300 bg-gray-100 dark:bg-[#606060] rounded border select-none flex items-center justify-center h-5">
              /
            </kbd>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-2">
        {tabConfig.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => handleTabSwitch(key)}
            className={`
              w-full flex items-center space-x-3 px-3 py-2.5 text-left text-sm font-medium rounded-md transition-colors duration-150
              ${
                selectedTab === key
                  ? "bg-white dark:bg-[#484848] dark:text-white text-gray-950 shadow-lg"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-gray-200 dark:hover:bg-[#484848]"
              }
            `}
          >
            <Icon className="h-4 w-4 text-gray-500 dark:text-gray-100" />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
