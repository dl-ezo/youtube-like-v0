"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export function useSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState("")

  useEffect(() => {
    const q = searchParams.get("q")
    // Only update if the query is actually different
    if (q && q !== query) {
      setQuery(q)
    } else if (!q && query) {
      setQuery("")
    }
  }, [searchParams]) // Remove query from dependencies to avoid infinite loop

  const handleSearch = useCallback(
    (searchQuery: string) => {
      if (searchQuery.trim()) {
        router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      }
    },
    [router],
  )

  return {
    query,
    setQuery,
    handleSearch,
  }
}
