"use client"

import { Home, Utensils, PenTool, MapPin, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/app", icon: Home, label: "Home" },
  { href: "/app/recipes", icon: Utensils, label: "Recipes" },
  { href: "/app/blogs", icon: PenTool, label: "Blogs" },
  { href: "/app/restaurants", icon: MapPin, label: "Restaurants" },
  { href: "/app/community", icon: Users, label: "Community" },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-teal-100 z-50 shadow-2xl">
      <div className="flex justify-around items-center py-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center py-2 px-4 rounded-2xl transition-all duration-300 transform",
                isActive
                  ? "text-white bg-gradient-primary shadow-xl scale-110 -translate-y-1"
                  : "text-gray-600 hover:text-teal-600 hover:bg-teal-50 hover:scale-105",
              )}
            >
              <item.icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-semibold">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
