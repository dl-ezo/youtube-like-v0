"use client"

import { useState, useEffect, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Filter, User, SlidersHorizontal, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Header } from "@/components/header"
import { searchVideos, type Video } from "@/lib/data"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function SearchPageContent() {
  const searchParams = useSearchParams()
  const [searchResults, setSearchResults] = useState<Video[]>([])
  const [filteredResults, setFilteredResults] = useState<Video[]>([])
  const [activeFilter, setActiveFilter] = useState("all")
  const [sortBy, setSortBy] = useState("relevance")
  const [uploadDate, setUploadDate] = useState("any")
  const [duration, setDuration] = useState("any")

  // Memoize the search query to prevent unnecessary re-renders
  const searchQuery = useMemo(() => searchParams.get("q") || "", [searchParams])

  useEffect(() => {
    const results = searchVideos(searchQuery, activeFilter === "all" ? undefined : activeFilter)
    setSearchResults(results)
  }, [searchQuery, activeFilter])

  useEffect(() => {
    let filtered = [...searchResults]

    // Apply additional filters
    if (uploadDate !== "any") {
      // Filter by upload date (simplified logic)
      filtered = filtered.filter((video) => {
        if (uploadDate === "hour") return video.time?.includes("時間前")
        if (uploadDate === "today") return video.time?.includes("時間前") || video.time?.includes("分前")
        if (uploadDate === "week")
          return video.time?.includes("日前") || video.time?.includes("時間前") || video.time?.includes("分前")
        if (uploadDate === "month") return !video.time?.includes("年前")
        return true
      })
    }

    if (duration !== "any" && activeFilter !== "channel") {
      // Filter by duration (simplified logic)
      filtered = filtered.filter((video) => {
        if (!video.duration) return duration === "long" // Assume long for videos without duration
        const [minutes] = video.duration.split(":").map(Number)
        if (duration === "short") return minutes < 4
        if (duration === "medium") return minutes >= 4 && minutes <= 20
        if (duration === "long") return minutes > 20
        return true
      })
    }

    // Apply sorting
    if (sortBy === "upload_date") {
      filtered.sort((a, b) => {
        // Simple sorting by time string (newest first)
        const timeA = a.time || ""
        const timeB = b.time || ""
        return timeA.localeCompare(timeB)
      })
    } else if (sortBy === "view_count") {
      filtered.sort((a, b) => {
        const viewsA = Number.parseInt(a.views?.replace(/[^\d]/g, "") || "0")
        const viewsB = Number.parseInt(b.views?.replace(/[^\d]/g, "") || "0")
        return viewsB - viewsA
      })
    } else if (sortBy === "rating") {
      // For rating, we'll use a random sort as placeholder
      filtered.sort(() => Math.random() - 0.5)
    }
    // 'relevance' keeps the original search order

    setFilteredResults(filtered)
  }, [searchResults, uploadDate, duration, sortBy, activeFilter])

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
  }

  // ハイライト機能を追加
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text

    const searchTerms = query.toLowerCase().trim().split(/\s+/)
    let highlightedText = text

    searchTerms.forEach((term) => {
      const regex = new RegExp(`(${term})`, "gi")
      highlightedText = highlightedText.replace(regex, '<mark class="bg-yellow-200 px-0.5">$1</mark>')
    })

    return highlightedText
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-6">
        {/* Search Query Display */}
        {searchQuery && (
          <div className="mb-4">
            <p className="text-lg">
              <span className="text-gray-600">検索結果: </span>
              <span className="font-medium">{searchQuery}</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">約 {filteredResults.length} 件の結果</p>
          </div>
        )}

        {/* Search Filters */}
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              フィルタ
            </Button>

            {/* Sort Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  並び替え
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSortBy("relevance")}>関連度順</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("upload_date")}>アップロード日時</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("view_count")}>視聴回数</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("rating")}>評価</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Upload Date Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  アップロード日時
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setUploadDate("any")}>すべて</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setUploadDate("hour")}>過去1時間</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setUploadDate("today")}>今日</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setUploadDate("week")}>今週</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setUploadDate("month")}>今月</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Duration Filter */}
            {activeFilter !== "channel" && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    時間
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setDuration("any")}>すべて</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setDuration("short")}>4分未満</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setDuration("medium")}>4-20分</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setDuration("long")}>20分以上</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          <div className="flex gap-2">
            <button
              className={`px-3 py-1 rounded-full text-sm ${
                activeFilter === "all" ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => handleFilterChange("all")}
            >
              すべて
            </button>
            <button
              className={`px-3 py-1 rounded-full text-sm ${
                activeFilter === "video" ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => handleFilterChange("video")}
            >
              動画
            </button>
            <button
              className={`px-3 py-1 rounded-full text-sm ${
                activeFilter === "channel" ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => handleFilterChange("channel")}
            >
              チャンネル
            </button>
            <button
              className={`px-3 py-1 rounded-full text-sm ${
                activeFilter === "playlist" ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => handleFilterChange("playlist")}
            >
              再生リスト
            </button>
          </div>
        </div>

        {/* No Results */}
        {filteredResults.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 mb-2">検索結果が見つかりませんでした</p>
            <p className="text-sm text-gray-500">別のキーワードで検索してみるか、フィルタを変更してください</p>
          </div>
        )}

        {/* Search Results */}
        <div className="space-y-6">
          {filteredResults.map((result) => (
            <article
              key={result.id}
              className="flex flex-col sm:flex-row gap-4 group cursor-pointer p-4 rounded-lg hover:bg-gray-50 transition-colors"
              role="article"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  // Navigate to video/channel/playlist
                }
              }}
            >
              <div className="relative flex-shrink-0 w-full sm:w-80">
                <img
                  src={result.thumbnail || "/placeholder.svg"}
                  alt={`${result.title}のサムネイル`}
                  className="w-full h-45 sm:w-80 sm:h-45 object-cover rounded-lg"
                  loading="lazy"
                />
                {result.type === "video" && result.duration && (
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                    {result.duration}
                  </div>
                )}
                {result.type === "playlist" && result.videoCount && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                    <div className="text-center text-white">
                      <div className="text-sm">{result.videoCount}本の動画</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h3
                  className="text-lg font-medium mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors"
                  dangerouslySetInnerHTML={{ __html: highlightText(result.title, searchQuery) }}
                />

                {result.type === "video" && (
                  <>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <span>{result.views}</span>
                      <span>•</span>
                      <span>{result.time}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" alt={`${result.channel}のアバター`} />
                        <AvatarFallback className="text-xs">{result.channel?.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span
                        className="text-sm text-gray-600"
                        dangerouslySetInnerHTML={{ __html: highlightText(result.channel || "", searchQuery) }}
                      />
                    </div>
                    <p
                      className="text-sm text-gray-700 line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: highlightText(result.description || "", searchQuery) }}
                    />
                  </>
                )}

                {result.type === "channel" && (
                  <>
                    <div className="flex items-center gap-2 mb-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt={`${result.title}のアバター`} />
                        <AvatarFallback>
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm text-gray-600">{result.subscribers}</p>
                      </div>
                    </div>
                    <p
                      className="text-sm text-gray-700 line-clamp-2 mb-3"
                      dangerouslySetInnerHTML={{ __html: highlightText(result.description || "", searchQuery) }}
                    />
                    <Button variant="outline" size="sm" className="mt-3" aria-label={`${result.title}チャンネルに登録`}>
                      チャンネル登録
                    </Button>
                  </>
                )}

                {result.type === "playlist" && (
                  <>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <span>再生リスト</span>
                      <span>•</span>
                      <span dangerouslySetInnerHTML={{ __html: highlightText(result.channel || "", searchQuery) }} />
                    </div>
                    <p
                      className="text-sm text-gray-700 line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: highlightText(result.description || "", searchQuery) }}
                    />
                  </>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        {filteredResults.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline">さらに読み込む</Button>
          </div>
        )}
      </div>
    </div>
  )
}
