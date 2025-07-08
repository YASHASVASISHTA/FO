"use client"

import { useState } from "react"
import { Layout } from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, Waves, Fish } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const recipes = [
  {
    id: 1,
    title: "Rainbow Buddha Bowl",
    image: "/placeholder.svg?height=200&width=300",
    time: "25 min",
    servings: 2,
    rating: 4.8,
    difficulty: "Easy",
    category: "Healthy",
  },
  {
    id: 2,
    title: "Fluffy Pancakes",
    image: "/placeholder.svg?height=200&width=300",
    time: "15 min",
    servings: 4,
    rating: 4.9,
    difficulty: "Easy",
    category: "Breakfast",
  },
  {
    id: 3,
    title: "Spicy Ramen Bowl",
    image: "/placeholder.svg?height=200&width=300",
    time: "30 min",
    servings: 2,
    rating: 4.7,
    difficulty: "Medium",
    category: "Asian",
  },
  {
    id: 4,
    title: "Avocado Toast",
    image: "/placeholder.svg?height=200&width=300",
    time: "10 min",
    servings: 1,
    rating: 4.6,
    difficulty: "Easy",
    category: "Quick",
  },
  {
    id: 5,
    title: "Chocolate Cake",
    image: "/placeholder.svg?height=200&width=300",
    time: "60 min",
    servings: 8,
    rating: 4.9,
    difficulty: "Hard",
    category: "Dessert",
  },
  {
    id: 6,
    title: "Greek Salad",
    image: "/placeholder.svg?height=200&width=300",
    time: "15 min",
    servings: 3,
    rating: 4.5,
    difficulty: "Easy",
    category: "Healthy",
  },
]

export default function RecipesPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredRecipes = recipes.filter((recipe) => activeFilter === "All" || recipe.category === activeFilter)

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center mb-6">
            <Waves className="h-10 w-10 text-teal-500 mr-3 animate-float" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
              Ocean of Recipes
            </h1>
            <Fish className="h-10 w-10 text-cyan-500 ml-3 animate-float" />
          </div>
          <p className="text-gray-600 text-xl font-medium">Dive deep into our sea of delicious discoveries</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-10 justify-center">
          {["All", "Healthy", "Quick", "Breakfast", "Dessert", "Asian"].map((category) => (
            <Badge
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              className={`cursor-pointer px-8 py-3 text-base font-bold rounded-full transition-all duration-300 transform ${
                activeFilter === category
                  ? "bg-gradient-primary text-white shadow-2xl scale-110"
                  : "border-teal-200 text-teal-700 hover:bg-teal-50 hover:border-teal-300 hover:scale-105"
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-teal-100 rounded-3xl group hover:scale-105 transform">
                <div className="relative h-52">
                  <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-gradient-secondary text-white border-0 shadow-xl font-bold">
                    {recipe.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-teal-600 transition-colors">
                    {recipe.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-teal-500" />
                        <span className="font-semibold">{recipe.time}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 mr-2 text-teal-500" />
                        <span className="font-semibold">{recipe.servings}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 mr-1 text-yellow-500 fill-current" />
                      <span className="font-bold text-lg">{recipe.rating}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-sm border-teal-200 text-teal-700 bg-teal-50 font-semibold">
                    {recipe.difficulty}
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
