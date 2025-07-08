"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Utensils, Search, Menu, Home, PenTool, MapPin, Users, User, Settings, LogOut, Waves, Plus } from "lucide-react"
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

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white/90 backdrop-blur-xl shadow-lg sticky top-0 z-40 border-b border-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-teal-50 rounded-xl">
                  <Menu className="h-6 w-6 text-teal-600" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 bg-gradient-to-b from-teal-50 via-cyan-50 to-white">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="relative">
                    <div className="p-3 bg-gradient-primary rounded-2xl shadow-lg">
                      <Utensils className="h-6 w-6 text-white" />
                    </div>
                    <Waves className="absolute -top-1 -right-1 h-4 w-4 text-cyan-400 animate-float" />
                  </div>
                  <div>
                    <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      FoodieHive
                    </span>
                    <div className="text-xs text-teal-600 font-medium">Ocean Fresh Flavors</div>
                  </div>
                </div>
                <nav className="space-y-3">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center space-x-4 px-4 py-3 rounded-2xl transition-all duration-300 font-medium",
                          isActive
                            ? "text-white bg-gradient-primary shadow-xl transform scale-105"
                            : "text-gray-700 hover:bg-teal-100 hover:text-teal-700 hover:scale-105",
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    )
                  })}
                  <Link
                    href="/app/add-recipe"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-4 px-4 py-3 rounded-2xl transition-all duration-300 font-medium text-white bg-gradient-secondary shadow-xl hover:opacity-90"
                  >
                    <Plus className="h-5 w-5" />
                    <span>Add Recipe</span>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link href="/app" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="p-2.5 bg-gradient-primary rounded-2xl group-hover:scale-110 transition-transform shadow-lg">
                <Utensils className="h-6 w-6 text-white" />
              </div>
              <Waves className="absolute -top-1 -right-1 h-4 w-4 text-cyan-400 animate-float" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">FoodieHive</span>
              <div className="text-xs text-teal-600 font-medium hidden sm:block">Ocean Fresh Flavors</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2.5 rounded-2xl transition-all duration-300 font-semibold",
                    isActive
                      ? "text-white bg-gradient-primary shadow-xl transform scale-105"
                      : "text-gray-700 hover:text-teal-600 hover:bg-teal-50 hover:scale-105",
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-400 h-4 w-4" />
              <Input
                placeholder="Search delicious recipes..."
                className="pl-12 bg-teal-50/70 border-teal-200 focus:border-teal-400 focus:ring-teal-400 rounded-2xl h-12 font-medium"
              />
            </div>
          </div>

          {/* Add Recipe Button - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              className="bg-gradient-secondary hover:opacity-90 text-white font-semibold shadow-xl rounded-xl px-6"
              asChild
            >
              <Link href="/app/add-recipe">
                <Plus className="h-4 w-4 mr-2" />
                Add Recipe
              </Link>
            </Button>
          </div>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full hover:bg-teal-50">
                <Avatar className="h-10 w-10 ring-2 ring-teal-200 shadow-lg">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
                  <AvatarFallback className="bg-gradient-primary text-white font-bold">AJ</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-white/95 backdrop-blur-xl border-teal-100 shadow-2xl rounded-2xl"
              align="end"
              forceMount
            >
              <DropdownMenuItem asChild className="hover:bg-teal-50 rounded-xl m-1">
                <Link href="/app/profile" className="flex items-center">
                  <User className="mr-3 h-4 w-4 text-teal-600" />
                  <span className="font-medium">Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="hover:bg-teal-50 rounded-xl m-1">
                <Link href="/app/my-recipes" className="flex items-center">
                  <Utensils className="mr-3 h-4 w-4 text-teal-600" />
                  <span className="font-medium">My Recipes</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="hover:bg-teal-50 rounded-xl m-1">
                <Link href="/app/settings" className="flex items-center">
                  <Settings className="mr-3 h-4 w-4 text-teal-600" />
                  <span className="font-medium">Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-coral hover:bg-red-50 rounded-xl m-1" asChild>
                <Link href="/" className="flex items-center">
                  <LogOut className="mr-3 h-4 w-4" />
                  <span className="font-medium">Logout</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
