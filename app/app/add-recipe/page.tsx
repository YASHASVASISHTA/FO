"use client"

import type React from "react"

import { useState } from "react"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, X, Upload, DollarSign, Clock, Users, ChefHat } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AddRecipePage() {
  const [ingredients, setIngredients] = useState([""])
  const [instructions, setInstructions] = useState([""])
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [isPaid, setIsPaid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const addIngredient = () => {
    setIngredients([...ingredients, ""])
  }

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index))
  }

  const updateIngredient = (index: number, value: string) => {
    const updated = [...ingredients]
    updated[index] = value
    setIngredients(updated)
  }

  const addInstruction = () => {
    setInstructions([...instructions, ""])
  }

  const removeInstruction = (index: number) => {
    setInstructions(instructions.filter((_, i) => i !== index))
  }

  const updateInstruction = (index: number, value: string) => {
    const updated = [...instructions]
    updated[index] = value
    setInstructions(updated)
  }

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate recipe creation
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to my recipes page
    router.push("/app/my-recipes")
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-4">
            Create New Recipe
          </h1>
          <p className="text-gray-600 text-lg">Share your culinary masterpiece with the FoodieHive community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card className="border-teal-100 shadow-xl rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-lg font-semibold">
                  Recipe Title *
                </Label>
                <Input
                  id="title"
                  placeholder="Enter your recipe title"
                  required
                  className="border-teal-200 focus:border-teal-400 focus:ring-teal-400 rounded-xl h-12 text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-lg font-semibold">
                  Description *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe your recipe..."
                  required
                  rows={4}
                  className="border-teal-200 focus:border-teal-400 focus:ring-teal-400 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="prepTime" className="text-lg font-semibold">
                    <Clock className="h-4 w-4 inline mr-2" />
                    Prep Time (minutes)
                  </Label>
                  <Input
                    id="prepTime"
                    type="number"
                    placeholder="15"
                    required
                    className="border-teal-200 focus:border-teal-400 focus:ring-teal-400 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="servings" className="text-lg font-semibold">
                    <Users className="h-4 w-4 inline mr-2" />
                    Servings
                  </Label>
                  <Input
                    id="servings"
                    type="number"
                    placeholder="4"
                    required
                    className="border-teal-200 focus:border-teal-400 focus:ring-teal-400 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="difficulty" className="text-lg font-semibold">
                    <ChefHat className="h-4 w-4 inline mr-2" />
                    Difficulty
                  </Label>
                  <Select>
                    <SelectTrigger className="border-teal-200 focus:border-teal-400 focus:ring-teal-400 rounded-xl">
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Easy</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-lg font-semibold">Recipe Image</Label>
                <div className="border-2 border-dashed border-teal-200 rounded-xl p-8 text-center hover:border-teal-400 transition-colors">
                  <Upload className="h-12 w-12 text-teal-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                  <Button type="button" variant="outline" className="mt-4 border-teal-300 text-teal-700 bg-transparent">
                    Choose File
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ingredients */}
          <Card className="border-teal-100 shadow-xl rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Ingredients</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Input
                    placeholder={`Ingredient ${index + 1}`}
                    value={ingredient}
                    onChange={(e) => updateIngredient(index, e.target.value)}
                    className="border-teal-200 focus:border-teal-400 focus:ring-teal-400 rounded-xl"
                  />
                  {ingredients.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeIngredient(index)}
                      className="border-red-200 text-red-600 hover:bg-red-50"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={addIngredient}
                className="border-teal-300 text-teal-700 hover:bg-teal-50 bg-transparent"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Ingredient
              </Button>
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card className="border-teal-100 shadow-xl rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Instructions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {instructions.map((instruction, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-secondary text-white rounded-full flex items-center justify-center text-sm font-bold mt-2">
                    {index + 1}
                  </div>
                  <Textarea
                    placeholder={`Step ${index + 1} instructions...`}
                    value={instruction}
                    onChange={(e) => updateInstruction(index, e.target.value)}
                    rows={3}
                    className="border-teal-200 focus:border-teal-400 focus:ring-teal-400 rounded-xl flex-1"
                  />
                  {instructions.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeInstruction(index)}
                      className="border-red-200 text-red-600 hover:bg-red-50 mt-2"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={addInstruction}
                className="border-teal-300 text-teal-700 hover:bg-teal-50 bg-transparent"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Step
              </Button>
            </CardContent>
          </Card>

          {/* Tags and Pricing */}
          <Card className="border-teal-100 shadow-xl rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Tags & Pricing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Tags</Label>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="px-3 py-1 border-teal-200 text-teal-700 bg-teal-50">
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-teal-600 hover:text-red-600"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Add a tag..."
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                    className="border-teal-200 focus:border-teal-400 focus:ring-teal-400 rounded-xl"
                  />
                  <Button
                    type="button"
                    onClick={addTag}
                    variant="outline"
                    className="border-teal-300 text-teal-700 hover:bg-teal-50 bg-transparent"
                  >
                    Add
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-lg font-semibold">Premium Recipe</Label>
                    <p className="text-sm text-gray-600">Make this a paid recipe</p>
                  </div>
                  <Switch checked={isPaid} onCheckedChange={setIsPaid} />
                </div>

                {isPaid && (
                  <div className="space-y-4 p-4 bg-orange-50 rounded-xl border border-orange-200">
                    <div className="space-y-2">
                      <Label htmlFor="price" className="text-lg font-semibold text-orange-800">
                        <DollarSign className="h-4 w-4 inline mr-2" />
                        Price (USD)
                      </Label>
                      <Input
                        id="price"
                        type="number"
                        step="0.01"
                        placeholder="9.99"
                        className="border-orange-200 focus:border-orange-400 focus:ring-orange-400 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preview" className="text-lg font-semibold text-orange-800">
                        Preview Description
                      </Label>
                      <Textarea
                        id="preview"
                        placeholder="What will users see before purchasing?"
                        rows={3}
                        className="border-orange-200 focus:border-orange-400 focus:ring-orange-400 rounded-xl"
                      />
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl bg-transparent"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-secondary hover:opacity-90 text-white px-8 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {isLoading ? "Creating Recipe..." : "Publish Recipe"}
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
