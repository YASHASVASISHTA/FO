"use client"

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2, Bookmark, Waves, Fish, Plus, ChefHat } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AppHomePage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="relative h-48 md:h-64 rounded-3xl overflow-hidden mb-8 shadow-2xl bg-gradient-ocean">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <div className="flex items-center justify-center mb-4">
                <Waves className="h-8 w-8 text-cyan-300 mr-3 animate-float" />
                <h1 className="text-2xl md:text-4xl font-bold">Welcome to Your Feed</h1>
                <Fish className="h-8 w-8 text-teal-300 ml-3 animate-float" />
              </div>
              <p className="text-lg md:text-xl text-teal-100 font-medium">Discover what's cooking in your community</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="border-teal-100 shadow-xl rounded-3xl bg-gradient-to-r from-teal-50 to-cyan-50 mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What would you like to do today?</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button
                className="bg-gradient-secondary hover:opacity-90 text-white font-semibold py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/app/add-recipe">
                  <Plus className="h-5 w-5 mr-2" />
                  Add Recipe
                </Link>
              </Button>
              <Button
                className="bg-gradient-primary hover:opacity-90 text-white font-semibold py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/app/recipes">Explore Recipes</Link>
              </Button>
              <Button
                variant="outline"
                className="border-teal-300 text-teal-700 hover:bg-teal-50 font-semibold py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="/app/restaurants">Find Restaurants</Link>
              </Button>
              <Button
                variant="outline"
                className="border-orange-300 text-orange-700 hover:bg-orange-50 font-semibold py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="/app/community">Join Community</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Feed */}
        <div className="space-y-8">
          {/* Post 1 */}
          <Card className="border-teal-100 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden transform hover:scale-[1.02]">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="ring-3 ring-teal-200 shadow-lg">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback className="bg-gradient-primary text-white font-bold">AJ</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold text-gray-900">Alex Johnson</h3>
                    <div className="flex items-center bg-gradient-secondary px-2 py-1 rounded-full">
                      <ChefHat className="h-3 w-3 text-white mr-1" />
                      <span className="text-xs text-white font-semibold">Chef</span>
                    </div>
                  </div>
                  <p className="text-sm text-teal-600 font-medium">2 hours ago</p>
                </div>
              </div>
              <p className="mb-6 text-gray-700 text-lg">
                Just created this incredible rainbow Buddha bowl! 🌈 Perfect harmony of fresh flavors and vibrant colors
                ✨
              </p>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6 shadow-xl">
                <Image src="/placeholder.svg?height=320&width=500" alt="Buddha Bowl" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-coral hover:bg-red-50 rounded-2xl font-semibold transition-all duration-300 hover:scale-110"
                    onClick={() => console.log("Liked!")}
                  >
                    <Heart className="h-5 w-5 mr-2" />
                    124
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-2xl font-semibold transition-all duration-300 hover:scale-110"
                    onClick={() => console.log("Comment!")}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    18
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-2xl font-semibold transition-all duration-300 hover:scale-110"
                    onClick={() => console.log("Shared!")}
                  >
                    <Share2 className="h-5 w-5 mr-2" />
                    Share
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-2xl transition-all duration-300 hover:scale-110"
                >
                  <Bookmark className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Post 2 */}
          <Card className="border-teal-100 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden transform hover:scale-[1.02]">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="ring-3 ring-orange-200 shadow-lg">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback className="bg-gradient-secondary text-white font-bold">MK</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold text-gray-900">Maria Kim</h3>
                    <div className="flex items-center bg-gradient-to-r from-pink-500 to-red-500 px-2 py-1 rounded-full">
                      <Heart className="h-3 w-3 text-white mr-1" />
                      <span className="text-xs text-white font-semibold">Food Lover</span>
                    </div>
                  </div>
                  <p className="text-sm text-teal-600 font-medium">4 hours ago</p>
                </div>
              </div>
              <p className="mb-6 text-gray-700 text-lg">
                Sunday brunch magic with these cloud-like pancakes! 🥞 Recipe secrets revealed in comments below 👇
              </p>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6 shadow-xl">
                <Image src="/placeholder.svg?height=320&width=500" alt="Pancakes" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-coral hover:bg-red-50 rounded-2xl font-semibold transition-all duration-300 hover:scale-110"
                    onClick={() => console.log("Liked!")}
                  >
                    <Heart className="h-5 w-5 mr-2" />
                    89
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-2xl font-semibold transition-all duration-300 hover:scale-110"
                    onClick={() => console.log("Comment!")}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    12
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-2xl font-semibold transition-all duration-300 hover:scale-110"
                    onClick={() => console.log("Shared!")}
                  >
                    <Share2 className="h-5 w-5 mr-2" />
                    Share
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-2xl transition-all duration-300 hover:scale-110"
                >
                  <Bookmark className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
