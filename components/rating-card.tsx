"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ratingData = [
  { name: "Hygiene", value: 85, color: "#5B5BFF" },
  { name: "Food Taste", value: 85, color: "#FFA500" },
  { name: "Packaging", value: 92, color: "#4ECDC4" },
]

export default function RatingCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg md:text-xl text-foreground">Your Rating</CardTitle>
        <p className="text-xs md:text-sm text-muted-foreground mt-2">Lorem ipsum dolor sit amet, consectetur</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200} minHeight={150}>
          <PieChart>
            <Pie data={ratingData} cx="50%" cy="50%" dataKey="value" outerRadius={60}>
              {ratingData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="space-y-2 md:space-y-3 mt-4 md:mt-6">
          {ratingData.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs md:text-sm text-foreground">{item.name}</span>
              </div>
              <span className="text-sm md:text-base font-bold text-foreground">{item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
