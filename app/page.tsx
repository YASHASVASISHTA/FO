"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Users, BookOpen, MapPin, Heart, Waves, Fish, ChefHat, Camera } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-xl shadow-lg sticky top-0 z-40 border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="p-2.5 bg-gradient-primary rounded-2xl shadow-lg">
                  <Utensils className="h-6 w-6 text-white" />
                </div>
                <Waves className="absolute -top-1 -right-1 h-4 w-4 text-cyan-400 animate-float" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">FoodieHive</span>
                <div className="text-xs text-teal-600 font-medium hidden sm:block">Ocean Fresh Flavors</div>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                Features
              </a>
              <a href="#community" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                Community
              </a>
              <a href="#about" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                About
              </a>
            </nav>

            {/* Sign In Button */}
            <Button
              className="bg-gradient-primary hover:opacity-90 text-white font-semibold shadow-xl rounded-xl px-6"
              asChild
            >
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Waves className="h-12 w-12 text-teal-500 mr-4 animate-float" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
              FoodieHive
            </h1>
            <Fish className="h-12 w-12 text-cyan-500 ml-4 animate-float" />
          </div>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium">
            Dive into an ocean of culinary adventures
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of food enthusiasts sharing recipes, discovering restaurants, and building a vibrant
            community around the love of great food. Your culinary journey starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white px-12 py-4 text-xl font-bold shadow-2xl rounded-2xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/login">Start Your Journey</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-teal-300 text-teal-700 hover:bg-teal-50 px-12 py-4 text-xl font-semibold rounded-2xl bg-transparent"
            >
              Learn More
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-4xl">
            <Image src="/hero-salad.jpg" alt="Delicious Food" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-6">
              Why Choose FoodieHive?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to explore, create, and share your culinary passion in one beautiful platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-teal-100 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-gradient-primary rounded-2xl w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recipe Discovery</h3>
                <p className="text-gray-600">
                  Explore thousands of recipes from our vibrant community of home chefs and food enthusiasts
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-100 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-gradient-secondary rounded-2xl w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
                <p className="text-gray-600">
                  Connect with fellow food lovers, share your creations, and learn from experienced chefs
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-100 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-gradient-primary rounded-2xl w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Restaurant Guide</h3>
                <p className="text-gray-600">
                  Discover amazing local restaurants and hidden culinary gems in your area
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-100 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-gradient-secondary rounded-2xl w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Share & Inspire</h3>
                <p className="text-gray-600">
                  Share your culinary creations, get feedback, and inspire others with your cooking journey
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section id="community" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-ocean bg-clip-text text-transparent mb-12">
            Join Our Growing Community
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8">
              <div className="text-5xl font-bold text-teal-600 mb-4">50K+</div>
              <div className="text-xl text-gray-700 font-semibold">Active Foodies</div>
              <div className="text-gray-600">Passionate food lovers sharing daily</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-orange-600 mb-4">25K+</div>
              <div className="text-xl text-gray-700 font-semibold">Recipes Shared</div>
              <div className="text-gray-600">Delicious recipes from around the world</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-cyan-600 mb-4">1K+</div>
              <div className="text-xl text-gray-700 font-semibold">Restaurants</div>
              <div className="text-gray-600">Curated dining experiences</div>
            </div>
          </div>

          <Card className="border-teal-100 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-r from-teal-50 to-cyan-50">
            <CardContent className="p-12">
              <div className="flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-coral mr-3" />
                <h3 className="text-3xl font-bold text-gray-900">Ready to Start Cooking?</h3>
                <ChefHat className="h-8 w-8 text-teal-600 ml-3" />
              </div>
              <p className="text-xl text-gray-700 mb-8">
                Join FoodieHive today and become part of a community that celebrates the art of cooking
              </p>
              <Button
                size="lg"
                className="bg-gradient-secondary hover:opacity-90 text-white px-12 py-4 text-xl font-bold shadow-2xl rounded-2xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/signup">Join FoodieHive Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-ocean text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Utensils className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">FoodieHive</span>
              </div>
              <p className="text-teal-100">
                Your ultimate destination for culinary inspiration, community, and delicious discoveries.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-teal-100">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Recipes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Restaurants
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-teal-100">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-teal-100">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-teal-400/30 pt-8 text-center text-teal-100">
            <p>&copy; 2024 FoodieHive. All rights reserved. Made with ❤️ for food lovers everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
