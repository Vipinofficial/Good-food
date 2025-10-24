"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingDown } from "lucide-react"

const data = [
  { day: "01", orders: 2400 },
  { day: "02", orders: 2210 },
  { day: "03", orders: 2290 },
  { day: "04", orders: 2000 },
  { day: "05", orders: 2181 },
  { day: "06", orders: 2500 },
]

export default function OrderTrendsCard({ dateRange }) {
  return (
    <Card>
      <CardHeader className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <CardTitle className="text-lg md:text-xl text-foreground">Order</CardTitle>
          <div className="mt-3 md:mt-4">
            <div className="text-2xl md:text-3xl font-bold text-foreground">2.568</div>
            <div className="flex items-center gap-1 mt-2 text-red-600">
              <TrendingDown className="w-4 h-4" />
              <span className="text-xs md:text-sm font-medium">2.1% vs last week</span>
            </div>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground mt-2 md:mt-3">Sales from 1-6 Dec, 2020</p>
        </div>
        <button className="text-primary hover:underline text-xs md:text-sm font-medium whitespace-nowrap">
          View Report
        </button>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 md:gap-4 mb-4 md:mb-6 flex-wrap">
          <button className="px-2 md:px-3 py-1 rounded text-xs md:text-sm font-medium bg-primary text-primary-foreground">
            Last 6 days
          </button>
          <button className="px-2 md:px-3 py-1 rounded text-xs md:text-sm font-medium bg-secondary text-foreground hover:bg-secondary/80">
            Last Week
          </button>
        </div>
        <ResponsiveContainer width="100%" height={200} minHeight={150}>
          <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
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
            <Line type="monotone" dataKey="orders" stroke="var(--color-chart-2)" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
