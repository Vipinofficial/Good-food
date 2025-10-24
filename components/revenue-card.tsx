"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

const data = [
  { day: "01", last6days: 45000, lastWeek: 52000 },
  { day: "02", last6days: 52000, lastWeek: 48000 },
  { day: "03", last6days: 48000, lastWeek: 61000 },
  { day: "04", last6days: 61000, lastWeek: 55000 },
  { day: "05", last6days: 55000, lastWeek: 67000 },
  { day: "06", last6days: 67000, lastWeek: 72000 },
  { day: "07", last6days: 72000, lastWeek: 68000 },
  { day: "08", last6days: 68000, lastWeek: 75000 },
  { day: "09", last6days: 75000, lastWeek: 71000 },
  { day: "10", last6days: 71000, lastWeek: 78000 },
  { day: "11", last6days: 78000, lastWeek: 82000 },
  { day: "12", last6days: 82000, lastWeek: 85000 },
]

export default function RevenueCard({ dateRange, setDateRange }) {
  return (
    <Card>
      <CardHeader className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <CardTitle className="text-lg md:text-xl text-foreground">Revenue</CardTitle>
          <div className="mt-3 md:mt-4">
            <div className="text-2xl md:text-3xl font-bold text-foreground">IDR 7.852.000</div>
            <div className="flex items-center gap-1 mt-2 text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs md:text-sm font-medium">2.1% vs last week</span>
            </div>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground mt-2 md:mt-3">Sales from 1-12 Dec, 2020</p>
        </div>
        <button className="text-primary hover:underline text-xs md:text-sm font-medium whitespace-nowrap">
          View Report
        </button>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 md:gap-4 mb-4 md:mb-6 flex-wrap">
          <button
            onClick={() => setDateRange("6days")}
            className={`px-2 md:px-3 py-1 rounded text-xs md:text-sm font-medium transition ${
              dateRange === "6days"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            Last 6 days
          </button>
          <button
            onClick={() => setDateRange("week")}
            className={`px-2 md:px-3 py-1 rounded text-xs md:text-sm font-medium transition ${
              dateRange === "week"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            Last Week
          </button>
        </div>
        <ResponsiveContainer width="100%" height={250} minHeight={200}>
          <BarChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="day" stroke="var(--color-muted-foreground)" tick={{ fontSize: 12 }} />
            <YAxis stroke="var(--color-muted-foreground)" tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "var(--color-foreground)" }}
            />
            <Bar
              dataKey={dateRange === "6days" ? "last6days" : "lastWeek"}
              fill="var(--color-chart-2)"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
