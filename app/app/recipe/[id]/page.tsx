import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Clock, Users, Star, Heart, Bookmark, Share2, ChefHat } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock recipe data
const recipe = {
  id: 1,
  title: "Rainbow Buddha Bowl",
  description: "A colorful and nutritious bowl packed with fresh vegetables, quinoa, and a delicious tahini dressing.",
  image: "/placeholder.svg?height=400&width=600",
  author: {
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    username: "alexfoodie",
  },
  stats: {
    prepTime: "15 min",
    cookTime: "10 min",
    totalTime: "25 min",
    servings: 2,
    difficulty: "Easy",
    rating: 4.8,
    reviews: 124,
  },
  ingredients: [
    "1 cup quinoa, cooked",
    "2 cups mixed greens",
    "1/2 cup cherry tomatoes, halved",
    "1/2 cucumber, diced",
    "1/4 red cabbage, shredded",
    "1 carrot, julienned",
    "1/2 avocado, sliced",
    "2 hard-boiled eggs",
    "1/4 cup edamame",
    "2 tbsp pumpkin seeds",
    "Fresh herbs (cilantro, mint)",
  ],
  instructions: [
    "Cook quinoa according to package instructions and let cool.",
    "Prepare all vegetables by washing, chopping, and arranging them.",
    "Hard boil the eggs and slice them in half.",
    "In a large bowl, arrange the mixed greens as the base.",
    "Add quinoa to one section of the bowl.",
    "Arrange all other ingredients in colorful sections around the bowl.",
    "Drizzle with tahini dressing just before serving.",
    "Garnish with fresh herbs and pumpkin seeds.",
  ],
  dressing: {
    name: "Tahini Dressing",
    ingredients: [
      "3 tbsp tahini",
      "2 tbsp lemon juice",
      "1 tbsp maple syrup",
      "1 clove garlic, minced",
      "2-3 tbsp water",
      "Salt and pepper to taste",
    ],
  },
  nutrition: {
    calories: 420,
    protein: "18g",
    carbs: "45g",
    fat: "22g",
    fiber: "12g",
  },
  tags: ["Healthy", "Vegetarian", "Gluten-Free", "Quick", "Lunch"],
}

export default function RecipeDetailPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Recipe Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {recipe.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{recipe.description}</p>

          {/* Author Info */}
          <div className="flex items-center justify-between mb-6">
            <Link href="/profile" className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={recipe.author.avatar || "/placeholder.svg"} />
                <AvatarFallback>{recipe.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{recipe.author.name}</h3>
                <p className="text-sm text-gray-500">@{recipe.author.username}</p>
              </div>
            </Link>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-1" />
                Like
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-1" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recipe Image */}
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
              <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
            </div>

            {/* Recipe Stats */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <Clock className="h-5 w-5 mx-auto mb-2 text-red-500" />
                    <div className="text-sm font-medium">{recipe.stats.totalTime}</div>
                    <div className="text-xs text-gray-500">Total Time</div>
                  </div>
                  <div>
                    <Users className="h-5 w-5 mx-auto mb-2 text-red-500" />
                    <div className="text-sm font-medium">{recipe.stats.servings}</div>
                    <div className="text-xs text-gray-500">Servings</div>
                  </div>
                  <div>
                    <ChefHat className="h-5 w-5 mx-auto mb-2 text-red-500" />
                    <div className="text-sm font-medium">{recipe.stats.difficulty}</div>
                    <div className="text-xs text-gray-500">Difficulty</div>
                  </div>
                  <div>
                    <Star className="h-5 w-5 mx-auto mb-2 text-yellow-500 fill-current" />
                    <div className="text-sm font-medium">{recipe.stats.rating}</div>
                    <div className="text-xs text-gray-500">({recipe.stats.reviews} reviews)</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ingredients */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded border-gray-300 text-red-500 focus:ring-red-500" />
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>

                <Separator className="my-6" />

                <h3 className="text-lg font-semibold mb-3">{recipe.dressing.name}</h3>
                <ul className="space-y-2">
                  {recipe.dressing.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded border-gray-300 text-red-500 focus:ring-red-500" />
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <p className="pt-1">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Nutrition Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Nutrition Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Calories</span>
                    <span className="font-medium">{recipe.nutrition.calories}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Protein</span>
                    <span className="font-medium">{recipe.nutrition.protein}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Carbs</span>
                    <span className="font-medium">{recipe.nutrition.carbs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fat</span>
                    <span className="font-medium">{recipe.nutrition.fat}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fiber</span>
                    <span className="font-medium">{recipe.nutrition.fiber}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-red-500 hover:bg-red-600">Start Cooking</Button>
              <Button variant="outline" className="w-full bg-transparent">
                Add to Meal Plan
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                Print Recipe
              </Button>
            </div>

            {/* Similar Recipes */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Similar Recipes</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Link key={i} href={`/recipe/${i + 1}`} className="flex space-x-3 hover:bg-gray-50 p-2 rounded-lg">
                      <div className="relative h-16 w-16 rounded-lg overflow-hidden">
                        <Image src="/placeholder.svg?height=64&width=64" alt="Recipe" fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">Healthy Quinoa Salad</h4>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Star className="h-3 w-3 mr-1 text-yellow-500 fill-current" />
                          4.7 • 20 min
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}
