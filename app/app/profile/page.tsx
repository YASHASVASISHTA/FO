import { Layout } from "@/components/layout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Settings, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const userRecipes = [
  { id: 1, image: "/placeholder.svg?height=200&width=200", title: "Rainbow Buddha Bowl" },
  { id: 2, image: "/placeholder.svg?height=200&width=200", title: "Fluffy Pancakes" },
  { id: 3, image: "/placeholder.svg?height=200&width=200", title: "Spicy Ramen" },
  { id: 4, image: "/placeholder.svg?height=200&width=200", title: "Avocado Toast" },
  { id: 5, image: "/placeholder.svg?height=200&width=200", title: "Chocolate Cake" },
  { id: 6, image: "/placeholder.svg?height=200&width=200", title: "Greek Salad" },
]

export default function ProfilePage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative">
                <Avatar className="h-24 w-24 md:h-32 md:w-32 ring-4 ring-red-500">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" />
                  <AvatarFallback className="text-2xl">AJ</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Alex Johnson</h1>
                    <p className="text-gray-600 mb-2">@alexfoodie</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/settings">
                        <Settings className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 max-w-2xl">
                  Food enthusiast | Home chef | Sharing my culinary adventures and favorite recipes with the world 🍳✨
                </p>

                <div className="flex justify-center md:justify-start space-x-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">142</div>
                    <div className="text-sm text-gray-600">Recipes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">5.3k</div>
                    <div className="text-sm text-gray-600">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">872</div>
                    <div className="text-sm text-gray-600">Following</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="recipes" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="recipes" className="data-[state=active]:text-red-500">
              Recipes
            </TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
            <TabsTrigger value="liked">Liked</TabsTrigger>
          </TabsList>

          <TabsContent value="recipes">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {userRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="aspect-square relative rounded-lg overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-200" />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved">
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No saved recipes yet</p>
              <Button variant="outline" asChild>
                <Link href="/recipes">Browse Recipes</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="liked">
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No liked recipes yet</p>
              <Button variant="outline" asChild>
                <Link href="/recipes">Discover Recipes</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
