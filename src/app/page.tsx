"use client"

import { useTheme } from "next-themes";
import { IssuesTable } from "./components/IssueTable/IssuesTable";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";

export default function Home() {
  const { theme,setTheme } = useTheme();


  return (
    <main className="flex flex-col min-h-screen p-8">
      <div className=" flex justify-between">
      <h1 className="text-2xl font-bold mb-8 text-left flex items-center gap-2"><LayoutDashboard className="w-6 h-6" />Advanced Issue Management Dashboard </h1>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-4 items-center justify-between ">
        <Button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-3 py-1  rounded-3xl border cursor-pointer"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </Button>
      </div>
      </div>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <IssuesTable />
      </div>
    </main>
  );
}
