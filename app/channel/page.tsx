import { Bell, Play, Grid3X3, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ChannelPage() {
  const channelVideos = [
    {
      id: 1,
      title: "Next.js 15の新機能を完全解説！App Routerの最新アップデート",
      views: "125万回視聴",
      time: "2日前",
      duration: "15:32",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 2,
      title: "React Server Componentsの仕組みを分かりやすく解説",
      views: "89万回視聴",
      time: "1週間前",
      duration: "22:15",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 3,
      title: "TypeScriptで作る本格的なWebアプリケーション開発",
      views: "234万回視聴",
      time: "3日前",
      duration: "45:20",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 4,
      title: "Tailwind CSSのプロテクニック集",
      views: "67万回視聴",
      time: "5日前",
      duration: "18:45",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
  ]

  const playlists = [
    {
      id: 1,
      title: "Next.js完全マスター",
      videoCount: 12,
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 2,
      title: "React基礎から応用まで",
      videoCount: 24,
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 3,
      title: "TypeScript入門シリーズ",
      videoCount: 8,
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Channel Header */}
      <div className="relative">
        {/* Banner */}
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>

        {/* Channel Info */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end gap-6 -mt-12 mb-6">
            <Avatar className="h-32 w-32 border-4 border-white">
              <AvatarImage src="/placeholder.svg?height=128&width=128" />
              <AvatarFallback className="text-2xl">TC</AvatarFallback>
            </Avatar>
            <div className="flex-1 pb-4">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold">Tech Channel JP</h1>
                <Badge variant="secondary">認証済み</Badge>
              </div>
              <div className="flex items-center gap-4 text-gray-600 mb-3">
                <span>@techchanneljp</span>
                <span>チャンネル登録者数 45.2万人</span>
                <span>動画 156本</span>
              </div>
              <p className="text-gray-700 mb-4 max-w-2xl">
                プログラミングとWeb開発に関する最新情報をお届けします。初心者から上級者まで、分かりやすい解説を心がけています。
                毎週火曜日と金曜日に新しい動画を投稿しています。
              </p>
              <div className="flex items-center gap-3">
                <Button className="gap-2">
                  <Bell className="h-4 w-4" />
                  チャンネル登録
                </Button>
                <Button variant="outline">参加</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Channel Content */}
      <div className="max-w-6xl mx-auto px-6">
        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="videos">動画</TabsTrigger>
            <TabsTrigger value="playlists">再生リスト</TabsTrigger>
            <TabsTrigger value="community">コミュニティ</TabsTrigger>
            <TabsTrigger value="about">概要</TabsTrigger>
          </TabsList>

          <TabsContent value="videos">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  最新
                </Button>
                <Button variant="ghost" size="sm">
                  人気
                </Button>
                <Button variant="ghost" size="sm">
                  古い順
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {channelVideos.map((video) => (
                <div key={video.id} className="group cursor-pointer">
                  <div className="relative mb-3">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm line-clamp-2 mb-2 group-hover:text-blue-600">{video.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {video.views} • {video.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="playlists">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {playlists.map((playlist) => (
                <div key={playlist.id} className="group cursor-pointer">
                  <div className="relative mb-3">
                    <img
                      src={playlist.thumbnail || "/placeholder.svg"}
                      alt={playlist.title}
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                      <div className="text-center text-white">
                        <Play className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-sm">{playlist.videoCount}本の動画</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-medium group-hover:text-blue-600">{playlist.title}</h3>
                  <p className="text-sm text-gray-600">再生リスト • {playlist.videoCount}本の動画</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="community">
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">コミュニティ投稿はありません</h3>
              <p className="text-gray-600">このチャンネルにはまだコミュニティ投稿がありません。</p>
            </div>
          </TabsContent>

          <TabsContent value="about">
            <div className="max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">説明</h3>
                  <p className="text-gray-700 mb-4">
                    Tech Channel JPは、プログラミングとWeb開発に関する最新情報をお届けするチャンネルです。
                    初心者から上級者まで、分かりやすい解説を心がけています。
                  </p>
                  <p className="text-gray-700 mb-4">
                    主なトピック： • JavaScript / TypeScript • React / Next.js • Node.js • Web開発のベストプラクティス
                  </p>
                  <p className="text-gray-700">
                    毎週火曜日と金曜日に新しい動画を投稿しています。
                    チャンネル登録と通知をオンにして、最新の動画をお見逃しなく！
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">統計</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">チャンネル登録者数:</span>
                      <span>45.2万人</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">総再生回数:</span>
                      <span>1,234万回</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">動画数:</span>
                      <span>156本</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">チャンネル開設日:</span>
                      <span>2020年3月15日</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
