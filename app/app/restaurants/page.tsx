"use client"

import { Layout } from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Clock, Phone, Sparkles } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const restaurants = [
  {
    id: 1,
    name: "Sakura Sushi",
    cuisine: "Japanese",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    reviews: 324,
    address: "123 Main St, Downtown",
    phone: "(555) 123-4567",
    hours: "11:00 AM - 10:00 PM",
    priceRange: "$$$",
    featured: true,
  },
  {
    id: 2,
    name: "Mama's Italian Kitchen",
    cuisine: "Italian",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    reviews: 189,
    address: "456 Oak Ave, Little Italy",
    phone: "(555) 234-5678",
    hours: "12:00 PM - 11:00 PM",
    priceRange: "$$",
  },
  {
    id: 3,
    name: "Green Garden Cafe",
    cuisine: "Vegetarian",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    reviews: 156,
    address: "789 Pine St, Arts District",
    phone: "(555) 345-6789",
    hours: "8:00 AM - 9:00 PM",
    priceRange: "$$",
  },
  {
    id: 4,
    name: "Spice Route",
    cuisine: "Indian",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    reviews: 203,
    address: "321 Elm St, Midtown",
    phone: "(555) 456-7890",
    hours: "11:30 AM - 10:30 PM",
    priceRange: "$$",
  },
  {
    id: 5,
    name: "The Burger Joint",
    cuisine: "American",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.4,
    reviews: 412,
    address: "654 Broadway, Downtown",
    phone: "(555) 567-8901",
    hours: "11:00 AM - 12:00 AM",
    priceRange: "$",
  },
  {
    id: 6,
    name: "Ocean Breeze",
    cuisine: "Seafood",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    reviews: 87,
    address: "987 Harbor Dr, Waterfront",
    phone: "(555) 678-9012",
    hours: "4:00 PM - 11:00 PM",
    priceRange: "$$$$",
  },
]

export default function RestaurantsPage() {
  const [activeFilter, setActiveFilter] = useState("All Cuisines")

  const filteredRestaurants = restaurants.filter(
    (restaurant) => activeFilter === "All Cuisines" || restaurant.cuisine === activeFilter,
  )

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-orange-500 mr-2" />
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
              Local Restaurants
            </h1>
            <Sparkles className="h-8 w-8 text-purple-500 ml-2" />
          </div>
          <p className="text-gray-600 text-lg">Discover amazing dining experiences in your area</p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {["All Cuisines", "Japanese", "Italian", "Indian", "American", "Vegetarian", "Seafood"].map((cuisine) => (
            <Badge
              key={cuisine}
              variant={activeFilter === cuisine ? "default" : "outline"}
              className={`cursor-pointer px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                activeFilter === cuisine
                  ? "bg-gradient-secondary text-white shadow-lg scale-105"
                  : "border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-300"
              }`}
              onClick={() => setActiveFilter(cuisine)}
            >
              {cuisine}
            </Badge>
          ))}
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-purple-100 rounded-2xl group hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={restaurant.image || "/placeholder.svg"}
                  alt={restaurant.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                {restaurant.featured && (
                  <Badge className="absolute top-3 left-3 bg-gradient-primary text-white border-0 shadow-lg">
                    ⭐ Featured
                  </Badge>
                )}
                <Badge className="absolute top-3 right-3 bg-white/90 text-gray-900 border-0 shadow-lg">
                  {restaurant.cuisine}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-purple-600 transition-colors">
                    {restaurant.name}
                  </h3>
                  <span className="text-lg font-bold text-orange-600">{restaurant.priceRange}</span>
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                    <span className="text-sm font-semibold">{restaurant.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({restaurant.reviews})</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-purple-500" />
                    {restaurant.address}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-purple-500" />
                    {restaurant.hours}
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-purple-500" />
                    {restaurant.phone}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:opacity-90 text-white font-semibold rounded-xl shadow-lg"
                  >
                    View Menu
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-white border-purple-200 text-purple-600 hover:bg-purple-50 rounded-xl"
                  >
                    Reserve
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}
