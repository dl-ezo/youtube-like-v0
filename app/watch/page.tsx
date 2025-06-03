import { ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal, Bell, User, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function WatchPage() {
  const relatedVideos = [
    {
      id: 1,
      title: "React Hooks完全ガイド - useState, useEffect, useContext",
      channel: "プログラミング学習",
      views: "45万回視聴",
      time: "3日前",
      duration: "18:32",
      thumbnail: "/placeholder.svg?height=94&width=168",
    },
    {
      id: 2,
      title: "TypeScript入門 - 型安全なJavaScript開発",
      channel: "コーディング道場",
      views: "78万回視聴",
      time: "1週間前",
      duration: "25:15",
      thumbnail: "/placeholder.svg?height=94&width=168",
    },
    {
      id: 3,
      title: "Next.js App Routerの使い方 - 最新機能解説",
      channel: "Web開発マスター",
      views: "123万回視聴",
      time: "2日前",
      duration: "32:40",
      thumbnail: "/placeholder.svg?height=94&width=168",
    },
  ]

  const comments = [
    {
      id: 1,
      user: "田中太郎",
      time: "2時間前",
      content: "とても分かりやすい解説でした！初心者にも理解しやすくて助かります。",
      likes: 24,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      user: "佐藤花子",
      time: "5時間前",
      content: "実際のコード例があるのが良いですね。早速試してみます！",
      likes: 18,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      user: "山田次郎",
      time: "1日前",
      content: "この動画のおかげでNext.js 15の新機能が理解できました。ありがとうございます！",
      likes: 42,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="flex gap-6 p-6 max-w-7xl mx-auto">
        {/* Main Video Section */}
        <div className="flex-1">
          {/* Video Player */}
          <div className="relative bg-black rounded-lg mb-4 aspect-video">
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                </div>
                <p className="text-lg">動画プレイヤー</p>
                <p className="text-sm text-gray-300">Next.js 15の新機能を完全解説！</p>
              </div>
            </div>
          </div>

          {/* Video Info */}
          <div className="mb-4">
            <h1 className="text-xl font-semibold mb-2">Next.js 15の新機能を完全解説！App Routerの最新アップデート</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>125万回視聴</span>
                <span>2日前</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ThumbsUp className="h-4 w-4" />
                  8.2K
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <ThumbsDown className="h-4 w-4" />
                  124
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Share className="h-4 w-4" />
                  共有
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Download className="h-4 w-4" />
                  保存
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Channel Info */}
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg mb-6">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder.svg?height=48&width=48" />
              <AvatarFallback>TC</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold">Tech Channel JP</h3>
                <Badge variant="secondary" className="text-xs">
                  認証済み
                </Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">チャンネル登録者数 45.2万人</p>
              <p className="text-sm mb-3">
                プログラミングとWeb開発に関する最新情報をお届けします。初心者から上級者まで、分かりやすい解説を心がけています。
              </p>
            </div>
            <Button className="gap-2">
              <Bell className="h-4 w-4" />
              チャンネル登録
            </Button>
          </div>

          {/* Comments Section */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-lg font-semibold">コメント 1,234件</h3>
              <Button variant="ghost" size="sm">
                並べ替え
              </Button>
            </div>

            {/* Add Comment */}
            <div className="flex gap-3 mb-6">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea
                  placeholder="コメントを追加..."
                  className="min-h-[80px] resize-none border-0 border-b-2 border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-blue-500"
                />
                <div className="flex justify-end gap-2 mt-2">
                  <Button variant="ghost" size="sm">
                    キャンセル
                  </Button>
                  <Button size="sm" className="gap-2">
                    <Send className="h-4 w-4" />
                    コメント
                  </Button>
                </div>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{comment.user.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{comment.user}</span>
                      <span className="text-xs text-gray-600">{comment.time}</span>
                    </div>
                    <p className="text-sm mb-2">{comment.content}</p>
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="gap-1 h-8 px-2">
                        <ThumbsUp className="h-3 w-3" />
                        {comment.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1 h-8 px-2">
                        <ThumbsDown className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                        返信
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Related Videos */}
        <div className="w-80">
          <h3 className="font-semibold mb-4">次の動画</h3>
          <div className="space-y-3">
            {relatedVideos.map((video) => (
              <div key={video.id} className="flex gap-2 cursor-pointer group">
                <div className="relative flex-shrink-0">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-42 h-24 object-cover rounded"
                  />
                  <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm line-clamp-2 mb-1 group-hover:text-blue-600">{video.title}</h4>
                  <p className="text-xs text-gray-600 mb-1">{video.channel}</p>
                  <p className="text-xs text-gray-600">
                    {video.views} • {video.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
