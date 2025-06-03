import { Filter, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function SearchPage() {
  const searchResults = [
    {
      id: 1,
      type: "video",
      title: "Next.js 15の新機能を完全解説！App Routerの最新アップデート",
      channel: "Tech Channel JP",
      views: "125万回視聴",
      time: "2日前",
      duration: "15:32",
      description:
        "Next.js 15で追加された新機能について詳しく解説します。App Routerの改善点、パフォーマンスの向上、新しいAPIなどを実際のコード例と共に紹介。",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 2,
      type: "channel",
      title: "プログラミング学習チャンネル",
      subscribers: "23.4万人のチャンネル登録者",
      description: "プログラミング初心者から上級者まで、幅広いレベルに対応した学習コンテンツを提供しています。",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 3,
      type: "video",
      title: "React Server Componentsの仕組みを分かりやすく解説",
      channel: "プログラミング学習",
      views: "89万回視聴",
      time: "1週間前",
      duration: "22:15",
      description: "React Server Componentsの基本概念から実装方法まで、初心者にも分かりやすく解説します。",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 4,
      type: "video",
      title: "TypeScriptで作る本格的なWebアプリケーション開発",
      channel: "コーディング道場",
      views: "234万回視聴",
      time: "3日前",
      duration: "45:20",
      description:
        "TypeScriptを使った実践的なWebアプリケーション開発のテクニックを紹介。型安全性を保ちながら効率的に開発する方法を学びます。",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 5,
      type: "playlist",
      title: "Next.js完全マスターコース",
      channel: "Web開発マスター",
      videoCount: 24,
      description:
        "Next.jsを基礎から応用まで完全にマスターできるプレイリスト。実際のプロジェクトを作りながら学習できます。",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-6">
        {/* Search Filters */}
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            フィルタ
          </Button>
          <div className="flex gap-2">
            <Badge variant="secondary">すべて</Badge>
            <Badge variant="outline">動画</Badge>
            <Badge variant="outline">チャンネル</Badge>
            <Badge variant="outline">再生リスト</Badge>
          </div>
        </div>

        {/* Search Results */}
        <div className="space-y-6">
          {searchResults.map((result) => (
            <div key={result.id} className="flex gap-4 group cursor-pointer">
              <div className="relative flex-shrink-0">
                <img
                  src={result.thumbnail || "/placeholder.svg"}
                  alt={result.title}
                  className="w-80 h-45 object-cover rounded-lg"
                />
                {result.type === "video" && (
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                    {result.duration}
                  </div>
                )}
                {result.type === "playlist" && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                    <div className="text-center text-white">
                      <div className="text-sm">{result.videoCount}本の動画</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-medium mb-2 line-clamp-2 group-hover:text-blue-600">{result.title}</h3>

                {result.type === "video" && (
                  <>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <span>{result.views}</span>
                      <span>•</span>
                      <span>{result.time}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" />
                        <AvatarFallback className="text-xs">{result.channel?.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-600">{result.channel}</span>
                    </div>
                    <p className="text-sm text-gray-700 line-clamp-2">{result.description}</p>
                  </>
                )}

                {result.type === "channel" && (
                  <>
                    <div className="flex items-center gap-2 mb-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm text-gray-600">{result.subscribers}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 line-clamp-2">{result.description}</p>
                    <Button variant="outline" size="sm" className="mt-3">
                      チャンネル登録
                    </Button>
                  </>
                )}

                {result.type === "playlist" && (
                  <>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <span>再生リスト</span>
                      <span>•</span>
                      <span>{result.channel}</span>
                    </div>
                    <p className="text-sm text-gray-700 line-clamp-2">{result.description}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline">さらに読み込む</Button>
        </div>
      </div>
    </div>
  )
}
