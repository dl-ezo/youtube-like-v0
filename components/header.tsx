'use client'

import { useState, FormEvent, useEffect, useRef } from 'react'
import { Search, Bell, User, Menu, Clock, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useSearch } from '@/hooks/use-search'
import { searchVideos, popularKeywords } from '@/lib/data'
import { SearchHistory } from '@/lib/search-history'
import Link from 'next/link'

export function Header() {
  const { query, setQuery, handleSearch } = useSearch()
  const [inputValue, setInputValue] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const suggestionRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setRecentSearches(SearchHistory.getHistory())
  }, [])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      SearchHistory.addSearch(inputValue.trim())
      setRecentSearches(SearchHistory.getHistory())
      handleSearch(inputValue)
      setShowSuggestions(false)
    }
  }

  const handleInputChange = (value: string) => {
    setInputValue(value)
    
    if (value.trim()) {
      // Generate suggestions based on search results and popular keywords
      const results = searchVideos(value)
      const titleSuggestions = [...new Set(results.slice(0, 5).map(video => video.title))]
      const keywordSuggestions = popularKeywords
        .filter(keyword => keyword.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 3)
      
      setSuggestions([...keywordSuggestions, ...titleSuggestions].slice(0, 8))
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    SearchHistory.addSearch(suggestion)
    setRecentSearches(SearchHistory.getHistory())
    handleSearch(suggestion)
    setShowSuggestions(false)
  }

  const handleRemoveSearch = (searchToRemove: string, e: React.MouseEvent) => {
    e.stopPropagation()
    SearchHistory.removeSearch(searchToRemove)
    setRecentSearches(SearchHistory.getHistory())
  }

  const handleInputFocus = () => {
    setShowSuggestions(true)
  }

  const handleInputBlur = () => {
    // Delay hiding suggestions to allow clicking
    setTimeout(() => setShowSuggestions(false), 200)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-14 px-4">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <Menu className="h-6 w-6" />
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">YT</span>
            </div>
            <span className="text-xl font-medium hidden sm:block">YouTube</span>
          </Link>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 max-w-2xl mx-4">
          <form onSubmit={onSubmit} className="flex">
            <div className="relative flex-1" ref={suggestionRef}>
              <Input
                ref={inputRef}
                type="text"
                placeholder="検索"
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className="rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              
              {/* Search Suggestions */}
              {showSuggestions && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                  {/* Recent Searches */}
                  {!inputValue.trim() && recentSearches.length > 0 && (
                    <div className="p-3">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-gray-500">最近の検索</p>
                        <button
                          className="text-xs text-blue-600 hover:text-blue-800"
                          onClick={() => {
                            SearchHistory.clearHistory()
                            setRecentSearches([])
                          }}
                        >
                          すべて削除
                        </button>
                      </div>
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-left group"
                          onClick={() => handleSuggestionClick(search)}
                        >
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-sm flex-1">{search}</span>
                          <button
                            className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded"
                            onClick={(e) => handleRemoveSearch(search, e)}
                          >
                            <X className="h-3 w-3 text-gray-400" />
                          </button>
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {/* Popular Keywords when no input */}
                  {!inputValue.trim() && recentSearches.length === 0 && (
                    <div className="p-3">
                      <p className="text-sm text-gray-500 mb-2">人気のキーワード</p>
                      <div className="flex flex-wrap gap-2">
                        {popularKeywords.slice(0, 6).map((keyword, index) => (
                          <button
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-sm rounded-full hover:bg-gray-200"
                            onClick={() => handleSuggestionClick(keyword)}
                          >
                            {keyword}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Search Suggestions */}
                  {inputValue.trim() && suggestions.length > 0 && (
                    <div className="p-3">
                      <p className="text-sm text-gray-500 mb-2">検索候補</p>
                      {suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded text-left"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          <Search className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">{suggestion}</span>
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {/* No suggestions */}
                  {inputValue.trim() && suggestions.length === 0 && (
                    <div className="p-3 text-sm text-gray-500">
                      検索候補が見つかりません
                    </div>
                  )}
                </div>
              )}
            </div>
            <Button 
              type="submit" 
              variant="outline" 
              className="rounded-l-none border-l-0 px-6"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Bell className="h-5 w-5" />
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
  )
}
