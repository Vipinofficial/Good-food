"use client"

import { useState } from "react"
import { Search, Bell, ChevronDown, Menu, X } from "lucide-react"
import Sidebar from "@/components/sidebar"
import RevenueCard from "@/components/revenue-card"
import OrderTimeCard from "@/components/order-time-card"
import RatingCard from "@/components/rating-card"
import MostOrderedCard from "@/components/most-ordered-card"
import OrderTrendsCard from "@/components/order-trends-card"

export default function Dashboard() {
  const [dateRange, setDateRange] = useState("week")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <div
        className={`fixed md:relative z-50 h-full transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      <main className="flex-1 overflow-auto flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-background border-b border-border px-4 md:px-8 py-4 flex items-center justify-between gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition"
          >
            {sidebarOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
          </button>

          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 bg-secondary text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4 ml-auto">
            <button className="p-2 hover:bg-secondary rounded-lg transition">
              <Bell className="w-5 h-5 text-foreground" />
            </button>
            <button className="hidden sm:flex items-center gap-2 px-3 md:px-4 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition">
              <span className="text-lg">🍔</span>
              <span className="text-foreground font-medium text-sm md:text-base">Delicious Burger</span>
              <ChevronDown className="w-4 h-4 text-foreground" />
            </button>
            <button className="sm:hidden p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition">
              <span className="text-lg">🍔</span>
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-auto p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8">Dashboard</h1>

          {/* Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
            <div className="lg:col-span-2">
              <RevenueCard dateRange={dateRange} setDateRange={setDateRange} />
            </div>
            <OrderTimeCard />
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <RatingCard />
            <MostOrderedCard />
            <OrderTrendsCard dateRange={dateRange} />
          </div>
        </div>
      </main>
    </div>
  )
}
