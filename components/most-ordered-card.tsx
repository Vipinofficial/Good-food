"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const foods = [
  { name: "Fresh Salad Bowl", price: "IDR 45.000", emoji: "🥗" },
  { name: "Chicken Noodles", price: "IDR 75.000", emoji: "🍜" },
  { name: "Smoothie Fruits", price: "IDR 45.000", emoji: "🥤" },
  { name: "Hot Chicken Wings", price: "IDR 45.000", emoji: "🍗" },
]

export default function MostOrderedCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg md:text-xl text-foreground">Most Ordered Food</CardTitle>
        <p className="text-xs md:text-sm text-muted-foreground mt-2">Adipiscing elit, sed do eiusmod tempor</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 md:space-y-4">
          {foods.map((food, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 md:p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition cursor-pointer gap-2"
            >
              <div className="flex items-center gap-2 md:gap-3 min-w-0">
                <span className="text-xl md:text-2xl flex-shrink-0">{food.emoji}</span>
                <span className="font-medium text-foreground text-xs md:text-sm truncate">{food.name}</span>
              </div>
              <span className="text-xs md:text-sm font-semibold text-foreground whitespace-nowrap">{food.price}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
