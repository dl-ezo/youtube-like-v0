import {
  Search,
  Bell,
  User,
  Menu,
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
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function YouTubePage() {
  const videos = [
    {
      id: 1,
      title: "Next.js 15の新機能を完全解説！App Routerの最新アップデート",
      channel: "Tech Channel JP",
      views: "125万回視聴",
      time: "2日前",
      duration: "15:32",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 2,
      title: "React Server Componentsの仕組みを分かりやすく解説",
      channel: "プログラミング学習",
      views: "89万回視聴",
      time: "1週間前",
      duration: "22:15",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 3,
      title: "TypeScriptで作る本格的なWebアプリケーション開発",
      channel: "コーディング道場",
      views: "234万回視聴",
      time: "3日前",
      duration: "45:20",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 4,
      title: "Tailwind CSSのプロテクニック集 - 美しいUIを効率的に作る方法",
      channel: "デザイン＆コード",
      views: "67万回視聴",
      time: "5日前",
      duration: "18:45",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 5,
      title: "Vercelでのデプロイメント完全ガイド - 初心者から上級者まで",
      channel: "Web開発マスター",
      views: "156万回視聴",
      time: "1日前",
      duration: "28:10",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 6,
      title: "JavaScript ES2024の新機能をいち早くチェック！",
      channel: "JS News",
      views: "92万回視聴",
      time: "4日前",
      duration: "12:30",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 7,
      title: "フルスタック開発者になるためのロードマップ2024",
      channel: "キャリアアップ",
      views: "445万回視聴",
      time: "2週間前",
      duration: "35:55",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 8,
      title: "Docker & Kubernetesで始めるコンテナ開発入門",
      channel: "インフラエンジニア",
      views: "178万回視聴",
      time: "1週間前",
      duration: "52:40",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
  ]

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
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <PlayCircle className="h-5 w-5 text-white fill-current" />
              </div>
              <span className="text-xl font-semibold">YouTube</span>
            </div>
          </div>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="flex">
              <div className="flex-1 relative">
                <Input
                  placeholder="検索"
                  className="rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button className="rounded-l-none px-6 bg-gray-50 hover:bg-gray-100 text-gray-600 border border-l-0">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-6 w-6" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="fixed left-0 top-16 w-60 h-[calc(100vh-4rem)] overflow-y-auto bg-white border-r border-gray-200">
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

        {/* Main Content */}
        <main className="ml-60 flex-1 p-6">
          <div className="mb-6">
            <div className="flex gap-3 overflow-x-auto pb-2">
              <Badge variant="secondary" className="whitespace-nowrap bg-black text-white hover:bg-gray-800">
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
              <Link key={video.id} href="/watch" className="group cursor-pointer">
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
                <div className="flex gap-3">
                  <Avatar className="h-9 w-9 flex-shrink-0">
                    <AvatarImage src="/placeholder.svg?height=36&width=36" />
                    <AvatarFallback className="text-xs">{video.channel.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm line-clamp-2 mb-1 group-hover:text-blue-600">{video.title}</h3>
                    <Link href="/channel" className="text-gray-600 text-sm mb-1 hover:text-gray-800">
                      {video.channel}
                    </Link>
                    <p className="text-gray-600 text-sm">
                      {video.views} • {video.time}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
