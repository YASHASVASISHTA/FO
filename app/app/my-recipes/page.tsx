"use client"

import { useState } from "react"
import { Layout } from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Eye, Edit, Trash2, DollarSign, Star, Clock, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const myRecipes = [
  {
    id: 1,
    title: "Rainbow Buddha Bowl",
    image: "/placeholder.svg?height=200&width=300",
    status: "published",
    views: 1234,
    likes: 89,
    isPaid: false,
    price: 0,
    earnings: 0,
    time: "25 min",
    servings: 2,
    rating: 4.8,
    reviews: 24,
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    title: "Premium Truffle Pasta",
    image: "/placeholder.svg?height=200&width=300",
    status: "published",
    views: 856,
    likes: 67,
    isPaid: true,
    price: 12.99,
    earnings: 155.88,
    time: "45 min",
    servings: 4,
    rating: 4.9,
    reviews: 18,
    createdAt: "2024-01-10",
  },
  {
    id: 3,
    title: "Chocolate Lava Cake",
    image: "/placeholder.svg?height=200&width=300",
    status: "draft",
    views: 0,
    likes: 0,
    isPaid: false,
    price: 0,
    earnings: 0,
    time: "30 min",
    servings: 6,
    rating: 0,
    reviews: 0,
    createdAt: "2024-01-12",
  },
]

export default function MyRecipesPage() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredRecipes = myRecipes.filter((recipe) => {
    if (activeTab === "published") return recipe.status === "published"
    if (activeTab === "drafts") return recipe.status === "draft"
    if (activeTab === "paid") return recipe.isPaid
    return true
  })

  const totalEarnings = myRecipes.reduce((sum, recipe) => sum + recipe.earnings, 0)
  const totalViews = myRecipes.reduce((sum, recipe) => sum + recipe.views, 0)
  const totalLikes = myRecipes.reduce((sum, recipe) => sum + recipe.likes, 0)

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">
              My Recipes
            </h1>
            <p className="text-gray-600 text-lg">Manage your culinary creations</p>
          </div>
          <Button
            className="bg-gradient-secondary hover:opacity-90 text-white font-semibold shadow-xl rounded-xl px-6 py-3 mt-4 md:mt-0"
            asChild
          >
            <Link href="/app/add-recipe">
              <Plus className="h-5 w-5 mr-2" />
              Add New Recipe
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-teal-100 shadow-lg rounded-2xl">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">{myRecipes.length}</div>
              <div className="text-sm text-gray-600">Total Recipes</div>
            </CardContent>
          </Card>
          <Card className="border-orange-100 shadow-lg rounded-2xl">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">{totalViews.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Views</div>
            </CardContent>
          </Card>
          <Card className="border-pink-100 shadow-lg rounded-2xl">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">{totalLikes}</div>
              <div className="text-sm text-gray-600">Total Likes</div>
            </CardContent>
          </Card>
          <Card className="border-green-100 shadow-lg rounded-2xl">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">${totalEarnings.toFixed(2)}</div>
              <div className="text-sm text-gray-600">Total Earnings</div>
            </CardContent>
          </Card>
        </div>

        {/* Recipe Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-teal-50 rounded-2xl">
            <TabsTrigger value="all" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">
              All Recipes
            </TabsTrigger>
            <TabsTrigger
              value="published"
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white"
            >
              Published
            </TabsTrigger>
            <TabsTrigger
              value="drafts"
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white"
            >
              Drafts
            </TabsTrigger>
            <TabsTrigger
              value="paid"
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white"
            >
              Premium
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            {filteredRecipes.length === 0 ? (
              <Card className="border-teal-100 shadow-lg rounded-3xl">
                <CardContent className="p-12 text-center">
                  <div className="text-gray-400 mb-4">
                    <Plus className="h-16 w-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No recipes found</h3>
                  <p className="text-gray-500 mb-6">Start creating your first recipe to share with the community</p>
                  <Button
                    className="bg-gradient-secondary hover:opacity-90 text-white font-semibold rounded-xl px-8"
                    asChild
                  >
                    <Link href="/app/add-recipe">Create Recipe</Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRecipes.map((recipe) => (
                  <Card
                    key={recipe.id}
                    className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-teal-100 rounded-3xl group hover:scale-105"
                  >
                    <div className="relative h-48">
                      <Image
                        src={recipe.image || "/placeholder.svg"}
                        alt={recipe.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 flex space-x-2">
                        <Badge
                          className={`${
                            recipe.status === "published" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                          } border-0 shadow-lg`}
                        >
                          {recipe.status}
                        </Badge>
                        {recipe.isPaid && (
                          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-lg">
                            <DollarSign className="h-3 w-3 mr-1" />${recipe.price}
                          </Badge>
                        )}
                      </div>
                      <div className="absolute top-3 right-3">
                        <div className="flex items-center bg-black/50 rounded-full px-2 py-1">
                          <Eye className="h-3 w-3 text-white mr-1" />
                          <span className="text-xs text-white">{recipe.views}</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-teal-600 transition-colors">
                        {recipe.title}
                      </h3>

                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-teal-500" />
                            <span>{recipe.time}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-teal-500" />
                            <span>{recipe.servings}</span>
                          </div>
                        </div>
                        {recipe.status === "published" && (
                          <div className="flex items-center">
                            <Star className="h-4 w-4 mr-1 text-yellow-500 fill-current" />
                            <span className="font-bold">{recipe.rating}</span>
                          </div>
                        )}
                      </div>

                      {recipe.isPaid && recipe.earnings > 0 && (
                        <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-green-700 font-medium">Earnings</span>
                            <span className="text-lg font-bold text-green-600">${recipe.earnings.toFixed(2)}</span>
                          </div>
                        </div>
                      )}

                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-teal-200 text-teal-600 hover:bg-teal-50 rounded-xl bg-transparent"
                          asChild
                        >
                          <Link href={`/app/recipe/${recipe.id}`}>
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-orange-200 text-orange-600 hover:bg-orange-50 rounded-xl bg-transparent"
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-200 text-red-600 hover:bg-red-50 rounded-xl bg-transparent"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
