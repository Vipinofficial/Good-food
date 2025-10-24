"use client"

import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "Afternoon", value: 40, color: "#5B5BFF" },
  { name: "Evening", value: 32, color: "#7C7CFF" },
  { name: "Morning", value: 28, color: "#D4D4FF" },
]

export default function OrderTimeCard() {
  return (
    <Card>
      <CardHeader className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <CardTitle className="text-lg md:text-xl text-foreground">Order Time</CardTitle>
          <p className="text-xs md:text-sm text-muted-foreground mt-2">From 1-6 Dec, 2020</p>
        </div>
        <button className="text-primary hover:underline text-xs md:text-sm font-medium whitespace-nowrap">
          View Report
        </button>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200} minHeight={150}>
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={2} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend wrapperStyle={{ fontSize: "12px" }} />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-around mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border gap-2">
          {data.map((item) => (
            <div key={item.name} className="text-center">
              <div className="text-xs md:text-sm font-medium text-foreground">{item.name}</div>
              <div className="text-base md:text-lg font-bold text-foreground mt-1">{item.value}%</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
