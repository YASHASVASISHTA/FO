import { Layout } from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Eye } from "lucide-react"
import Image from "next/image"

const blogs = [
  {
    id: 1,
    title: "10 Essential Kitchen Tools Every Home Chef Needs",
    excerpt:
      "Discover the must-have tools that will transform your cooking experience and help you create restaurant-quality meals at home.",
    image: "/placeholder.svg?height=200&width=400",
    author: "Sarah Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "Dec 15, 2024",
    views: "2.3k",
    category: "Kitchen Tips",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Art of Meal Prep: Save Time and Eat Better",
    excerpt:
      "Learn how to efficiently plan and prepare your meals for the week ahead, saving time while maintaining a healthy diet.",
    image: "/placeholder.svg?height=200&width=400",
    author: "Mike Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "Dec 12, 2024",
    views: "1.8k",
    category: "Meal Planning",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Exploring Global Flavors: A Journey Through Asian Cuisine",
    excerpt:
      "Take a culinary journey through Asia and discover the unique flavors, techniques, and ingredients that make each cuisine special.",
    image: "/placeholder.svg?height=200&width=400",
    author: "Lisa Park",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "Dec 10, 2024",
    views: "3.1k",
    category: "Culture",
    readTime: "8 min read",
  },
  {
    id: 4,
    title: "Sustainable Cooking: How to Reduce Food Waste",
    excerpt:
      "Learn practical tips and creative recipes to minimize food waste in your kitchen while saving money and helping the environment.",
    image: "/placeholder.svg?height=200&width=400",
    author: "Emma Green",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "Dec 8, 2024",
    views: "1.5k",
    category: "Sustainability",
    readTime: "6 min read",
  },
]

export default function BlogsPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Food Blog</h1>
          <p className="text-gray-600">Stories, tips, and insights from our culinary community</p>
        </div>

        {/* Featured Article */}
        <Card className="mb-8 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image src="/placeholder.svg?height=300&width=500" alt="Featured" fill className="object-cover" />
            </div>
            <div className="md:w-1/2 p-6">
              <Badge className="mb-3 bg-red-500">Featured</Badge>
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                The Science Behind Perfect Pasta: Why Technique Matters More Than You Think
              </h2>
              <p className="text-gray-600 mb-4">
                Discover the scientific principles that separate good pasta from great pasta, and learn the techniques
                that professional chefs use to achieve perfect results every time.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Dec 18, 2024
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  4.2k views
                </div>
                <span>10 min read</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative h-48">
                <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
                <Badge className="absolute top-3 left-3 bg-white text-gray-900">{blog.category}</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={blog.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{blog.author[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{blog.author}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}
