import {
  Home,
  Compass,
  PlaySquare,
  Clock,
  ThumbsUp,
  History,
  PlayCircle,
  Flame,
  Music,
  Gamepad2,
  Trophy,
  Lightbulb,
  Shirt,
  Podcast,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { videos } from "@/lib/data"
import Link from "next/link"

export default function YouTubePage() {
  const sidebarItems = [
    { icon: Home, label: "ホーム", active: true, href: "/" },
    { icon: Compass, label: "探索", href: "/search" },
    { icon: PlaySquare, label: "ショート", href: "/" },
    { icon: PlayCircle, label: "登録チャンネル", href: "/channel" },
  ]

  const libraryItems = [
    { icon: History, label: "履歴" },
    { icon: PlaySquare, label: "あなたの動画" },
    { icon: Clock, label: "後で見る" },
    { icon: ThumbsUp, label: "高く評価した動画" },
  ]

  const exploreItems = [
    { icon: Flame, label: "急上昇" },
    { icon: Music, label: "音楽" },
    { icon: Gamepad2, label: "ゲーム" },
    { icon: Trophy, label: "スポーツ" },
    { icon: Lightbulb, label: "学習" },
    { icon: Shirt, label: "ファッション・美容" },
    { icon: Podcast, label: "ポッドキャスト" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex pt-14">
        <aside className="fixed left-0 top-14 w-60 h-[calc(100vh-3.5rem)] overflow-y-auto bg-white border-r border-gray-200">
          <div className="p-3">
            <nav className="space-y-1">
              {sidebarItems.map((item, index) => (
                <Link key={index} href={item.href || "/"}>
                  <Button
                    variant={item.active ? "secondary" : "ghost"}
                    className="w-full justify-start gap-6 px-3 py-2 h-10"
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Button>
                </Link>
              ))}
            </nav>
            <hr className="my-3" />
            <div className="space-y-1">
              <h3 className="px-3 py-2 text-sm font-medium text-gray-600">ライブラリ</h3>
              {libraryItems.map((item, index) => (
                <Button key={index} variant="ghost" className="w-full justify-start gap-6 px-3 py-2 h-10">
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Button>
              ))}
            </div>
            <hr className="my-3" />
            <div className="space-y-1">
              <h3 className="px-3 py-2 text-sm font-medium text-gray-600">探索</h3>
              {exploreItems.map((item, index) => (
                <Button key={index} variant="ghost" className="w-full justify-start gap-6 px-3 py-2 h-10">
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </aside>
        <main className="ml-60 flex-1 p-6">
          <div className="mb-6">
            <div className="flex gap-3 overflow-x-auto pb-2">
              <Badge className="whitespace-nowrap bg-black text-white hover:bg-gray-800">
                すべて
              </Badge>
              <Badge variant="outline" className="whitespace-nowrap">
                プログラミング
              </Badge>
              <Badge variant="outline" className="whitespace-nowrap">
                Web開発
              </Badge>
              <Badge variant="outline" className="whitespace-nowrap">
                JavaScript
              </Badge>
              <Badge variant="outline" className="whitespace-nowrap">
                React
              </Badge>
              <Badge variant="outline" className="whitespace-nowrap">
                Next.js
              </Badge>
              <Badge variant="outline" className="whitespace-nowrap">
                TypeScript
              </Badge>
              <Badge variant="outline" className="whitespace-nowrap">
                チュートリアル
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videos.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <Link href="/watch">
                  <div className="relative mb-3">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full aspect-video object-cover rounded-lg group-hover:rounded-none transition-all duration-200"
                    />
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                      {video.duration}
                    </div>
                  </div>
                </Link>
                <div className="flex gap-3">
                  <Avatar className="h-9 w-9 flex-shrink-0">
                    <AvatarImage src="/placeholder.svg?height=36&width=36" />
                    <AvatarFallback className="text-xs">{video.channel.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <Link href="/watch">
                      <h3 className="font-medium text-sm line-clamp-2 mb-1 group-hover:text-blue-600">{video.title}</h3>
                    </Link>
                    <div className="text-gray-600 text-sm mb-1">
                      <Link href="/channel" className="hover:text-gray-800">
                        {video.channel}
                      </Link>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {video.views} • {video.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
