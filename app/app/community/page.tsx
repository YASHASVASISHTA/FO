import { Layout } from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Users, MessageCircle, Calendar, TrendingUp } from "lucide-react"

const groups = [
  {
    id: 1,
    name: "Healthy Cooking Enthusiasts",
    members: 1234,
    description: "Share healthy recipes and cooking tips for a better lifestyle",
    image: "/placeholder.svg?height=100&width=100",
    category: "Health",
    isJoined: true,
  },
  {
    id: 2,
    name: "Baking Masters",
    members: 856,
    description: "Perfect your baking skills with fellow pastry lovers",
    image: "/placeholder.svg?height=100&width=100",
    category: "Baking",
    isJoined: false,
  },
  {
    id: 3,
    name: "Asian Cuisine Lovers",
    members: 2341,
    description: "Explore the diverse flavors of Asian cooking",
    image: "/placeholder.svg?height=100&width=100",
    category: "Asian",
    isJoined: true,
  },
]

const discussions = [
  {
    id: 1,
    title: "What's your go-to weeknight dinner recipe?",
    author: "Sarah M.",
    avatar: "/placeholder.svg?height=32&width=32",
    replies: 23,
    time: "2 hours ago",
    group: "Healthy Cooking Enthusiasts",
  },
  {
    id: 2,
    title: "Help! My sourdough starter isn't rising",
    author: "Mike R.",
    avatar: "/placeholder.svg?height=32&width=32",
    replies: 15,
    time: "4 hours ago",
    group: "Baking Masters",
  },
  {
    id: 3,
    title: "Best places to buy authentic Asian ingredients?",
    author: "Lisa K.",
    avatar: "/placeholder.svg?height=32&width=32",
    replies: 31,
    time: "6 hours ago",
    group: "Asian Cuisine Lovers",
  },
]

const events = [
  {
    id: 1,
    title: "Virtual Cooking Class: Italian Pasta Making",
    date: "Dec 20, 2024",
    time: "7:00 PM EST",
    attendees: 45,
    host: "Chef Marco",
  },
  {
    id: 2,
    title: "Local Food Market Tour",
    date: "Dec 22, 2024",
    time: "10:00 AM EST",
    attendees: 12,
    host: "Emma G.",
  },
]

export default function CommunityPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Community</h1>
          <p className="text-gray-600">Connect with fellow food lovers and share your culinary journey</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Groups Section */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Your Groups</h2>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
                <div className="space-y-4">
                  {groups.map((group) => (
                    <div key={group.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
                      <div className="relative h-12 w-12 rounded-lg overflow-hidden">
                        <img
                          src={group.image || "/placeholder.svg"}
                          alt={group.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{group.name}</h3>
                        <p className="text-sm text-gray-600">{group.description}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <div className="flex items-center text-xs text-gray-500">
                            <Users className="h-3 w-3 mr-1" />
                            {group.members.toLocaleString()} members
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {group.category}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant={group.isJoined ? "outline" : "default"}
                        className={group.isJoined ? "" : "bg-red-500 hover:bg-red-600"}
                      >
                        {group.isJoined ? "Joined" : "Join"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Discussions */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Recent Discussions</h2>
                  <Button variant="outline" size="sm">
                    Start Discussion
                  </Button>
                </div>
                <div className="space-y-4">
                  {discussions.map((discussion) => (
                    <div key={discussion.id} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={discussion.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{discussion.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">{discussion.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>by {discussion.author}</span>
                            <span>in {discussion.group}</span>
                            <span>{discussion.time}</span>
                          </div>
                          <div className="flex items-center mt-2">
                            <MessageCircle className="h-4 w-4 mr-1 text-gray-400" />
                            <span className="text-sm text-gray-600">{discussion.replies} replies</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-5 w-5 mr-2 text-red-500" />
                  <h2 className="text-lg font-semibold">Trending Topics</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">#HolidayBaking</span>
                    <span className="text-xs text-gray-500">234 posts</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">#MealPrep</span>
                    <span className="text-xs text-gray-500">189 posts</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">#VeganRecipes</span>
                    <span className="text-xs text-gray-500">156 posts</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">#ComfortFood</span>
                    <span className="text-xs text-gray-500">143 posts</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 mr-2 text-red-500" />
                  <h2 className="text-lg font-semibold">Upcoming Events</h2>
                </div>
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="p-3 border rounded-lg">
                      <h3 className="font-medium text-sm mb-2">{event.title}</h3>
                      <div className="text-xs text-gray-600 space-y-1">
                        <div>
                          {event.date} at {event.time}
                        </div>
                        <div>Host: {event.host}</div>
                        <div>{event.attendees} attending</div>
                      </div>
                      <Button size="sm" className="w-full mt-3 bg-red-500 hover:bg-red-600">
                        Join Event
                      </Button>
                    </div>
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
