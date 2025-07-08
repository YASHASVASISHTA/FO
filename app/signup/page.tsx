"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Utensils, Eye, EyeOff, Sparkles, Heart, ChefHat, Store, Users } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const userRoles = [
  {
    id: "foodlover",
    label: "Food Lover",
    icon: Heart,
    description: "Discover and share amazing recipes",
    color: "bg-gradient-to-r from-pink-500 to-red-500",
  },
  {
    id: "chef",
    label: "Professional Chef",
    icon: ChefHat,
    description: "Share your culinary expertise",
    color: "bg-gradient-to-r from-orange-500 to-yellow-500",
  },
  {
    id: "restaurant",
    label: "Restaurant Owner",
    icon: Store,
    description: "Promote your restaurant and menu",
    color: "bg-gradient-to-r from-purple-500 to-indigo-500",
  },
  {
    id: "blogger",
    label: "Food Blogger",
    icon: Users,
    description: "Create content and build community",
    color: "bg-gradient-to-r from-teal-500 to-cyan-500",
  },
]

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedRole, setSelectedRole] = useState("")
  const [step, setStep] = useState(1) // 1: role selection, 2: signup form
  const router = useRouter()

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId)
    setStep(2)
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate signup process
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Redirect to main app
    router.push("/app")
  }

  const selectedRoleData = userRoles.find((role) => role.id === selectedRole)

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-orange-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 group">
            <div className="p-3 bg-gradient-primary rounded-2xl group-hover:scale-105 transition-transform shadow-lg">
              <Utensils className="h-8 w-8 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">FoodieHive</span>
              <div className="flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-teal-400 mr-1" />
                <span className="text-sm text-teal-600">Ocean Fresh Flavors</span>
                <Sparkles className="h-4 w-4 text-teal-400 ml-1" />
              </div>
            </div>
          </Link>
        </div>

        {/* Role Selection or Signup Form */}
        <Card className="border-teal-200 shadow-2xl rounded-2xl overflow-hidden backdrop-blur-sm bg-white/95">
          {step === 1 ? (
            <>
              <CardHeader className="bg-gradient-primary text-white text-center py-8">
                <CardTitle className="text-2xl font-bold">Join FoodieHive!</CardTitle>
                <p className="text-teal-100 mt-2">Choose your role to get started</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {userRoles.map((role) => {
                    const IconComponent = role.icon
                    return (
                      <button
                        key={role.id}
                        onClick={() => handleRoleSelect(role.id)}
                        className="w-full p-4 rounded-2xl border-2 border-teal-100 hover:border-teal-300 transition-all duration-300 hover:scale-105 group"
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl ${role.color} group-hover:scale-110 transition-transform`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="text-left">
                            <h3 className="font-bold text-gray-900 group-hover:text-teal-600">{role.label}</h3>
                            <p className="text-sm text-gray-600">{role.description}</p>
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>

                <p className="mt-8 text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/login" className="text-teal-600 hover:text-teal-800 font-semibold">
                    Sign in
                  </Link>
                </p>
              </CardContent>
            </>
          ) : (
            <>
              <CardHeader className="bg-gradient-primary text-white text-center py-6">
                <div className="flex items-center justify-center mb-4">
                  {selectedRoleData && (
                    <div className={`p-3 rounded-xl ${selectedRoleData.color} mr-3`}>
                      <selectedRoleData.icon className="h-6 w-6 text-white" />
                    </div>
                  )}
                  <div>
                    <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
                    <p className="text-teal-100 mt-1">as {selectedRoleData?.label}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setStep(1)}
                  className="text-teal-100 hover:text-white hover:bg-white/10"
                >
                  ← Change Role
                </Button>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSignup} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-700 font-medium">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        className="border-teal-200 focus:border-teal-400 focus:ring-teal-400 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-700 font-medium">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        className="border-teal-200 focus:border-teal-400 focus:ring-teal-400 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-gray-700 font-medium">
                      Username
                    </Label>
                    <Input
                      id="username"
                      placeholder="johndoe"
                      required
                      className="border-teal-200 focus:border-teal-400 focus:ring-teal-400 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="border-teal-200 focus:border-teal-400 focus:ring-teal-400 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700 font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        required
                        className="border-teal-200 focus:border-teal-400 focus:ring-teal-400 rounded-xl pr-12"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-teal-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-teal-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        required
                        className="border-teal-200 focus:border-teal-400 focus:ring-teal-400 rounded-xl pr-12"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4 text-teal-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-teal-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      id="terms"
                      type="checkbox"
                      className="rounded border-teal-300 text-teal-500 focus:ring-teal-500"
                      required
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the{" "}
                      <Link href="#" className="text-teal-600 hover:text-teal-800 font-medium">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-teal-600 hover:text-teal-800 font-medium">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </form>

                <div className="mt-8">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-teal-200" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="bg-white border-teal-200 hover:bg-teal-50 rounded-xl"
                      onClick={() => router.push("/app")}
                    >
                      <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      Google
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-white border-teal-200 hover:bg-teal-50 rounded-xl"
                      onClick={() => router.push("/app")}
                    >
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Facebook
                    </Button>
                  </div>
                </div>

                <p className="mt-8 text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/login" className="text-teal-600 hover:text-teal-800 font-semibold">
                    Sign in
                  </Link>
                </p>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </div>
  )
}
