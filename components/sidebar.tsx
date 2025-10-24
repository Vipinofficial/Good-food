"use client"

import {
  LayoutDashboard,
  ShoppingCart,
  Menu,
  MessageSquare,
  Settings,
  CreditCard,
  User,
  HelpCircle,
} from "lucide-react"

export default function Sidebar({ onClose }) {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: ShoppingCart, label: "Food Order", active: false },
    { icon: Menu, label: "Manage Menu", active: false },
    { icon: MessageSquare, label: "Customer Review", active: false },
  ]

  const otherItems = [
    { icon: Settings, label: "Settings", active: false },
    { icon: CreditCard, label: "Payment", active: false },
    { icon: User, label: "Accounts", active: false },
    { icon: HelpCircle, label: "Help", active: false },
  ]

  return (
    <aside className="w-56 bg-sidebar border-r border-sidebar-border flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 md:p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sidebar-primary rounded-full flex items-center justify-center">
            <span className="text-sidebar-primary-foreground font-bold text-sm">G</span>
          </div>
          <span className="font-bold text-sidebar-foreground tracking-wide text-sm md:text-base">GOODFOOD</span>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 md:px-4 py-4 md:py-6 overflow-y-auto">
        <div className="mb-6 md:mb-8">
          <p className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider px-3 md:px-4 mb-2 md:mb-3">
            Menu
          </p>
          <div className="space-y-1 md:space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={onClose}
                className={`w-full flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg transition text-sm md:text-base ${
                  item.active
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider px-3 md:px-4 mb-2 md:mb-3">
            Others
          </p>
          <div className="space-y-1 md:space-y-2">
            {otherItems.map((item) => (
              <button
                key={item.label}
                onClick={onClose}
                className="w-full flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition text-sm md:text-base"
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  )
}
