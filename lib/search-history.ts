// Search History Management
export class SearchHistory {
  private static readonly STORAGE_KEY = 'youtube_search_history'
  private static readonly MAX_HISTORY = 10

  static getHistory(): string[] {
    if (typeof window === 'undefined') return []
    
    try {
      const history = localStorage.getItem(this.STORAGE_KEY)
      return history ? JSON.parse(history) : []
    } catch {
      return []
    }
  }

  static addSearch(query: string): void {
    if (typeof window === 'undefined' || !query.trim()) return

    try {
      const history = this.getHistory()
      const normalizedQuery = query.trim()
      
      // Remove existing entry if it exists
      const filteredHistory = history.filter(item => item !== normalizedQuery)
      
      // Add to beginning
      const newHistory = [normalizedQuery, ...filteredHistory].slice(0, this.MAX_HISTORY)
      
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(newHistory))
    } catch (error) {
      console.error('Failed to save search history:', error)
    }
  }

  static removeSearch(query: string): void {
    if (typeof window === 'undefined') return

    try {
      const history = this.getHistory()
      const newHistory = history.filter(item => item !== query)
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(newHistory))
    } catch (error) {
      console.error('Failed to remove search history:', error)
    }
  }

  static clearHistory(): void {
    if (typeof window === 'undefined') return

    try {
      localStorage.removeItem(this.STORAGE_KEY)
    } catch (error) {
      console.error('Failed to clear search history:', error)
    }
  }
}
