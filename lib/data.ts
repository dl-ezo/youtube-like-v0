export interface Video {
  id: number
  title: string
  channel: string
  views: string
  time: string
  duration: string
  thumbnail: string
  description?: string
  type?: 'video' | 'channel' | 'playlist'
  subscribers?: string
  videoCount?: number
}

export const videos: Video[] = [
  {
    id: 1,
    title: "Next.js 15の新機能を完全解説！App Routerの最新アップデート",
    channel: "Tech Channel JP",
    views: "125万回視聴",
    time: "2日前",
    duration: "15:32",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    description: "Next.js 15で追加された新機能について詳しく解説します。App Routerの改善点、パフォーマンスの向上、新しいAPIなどを実際のコード例と共に紹介。"
  },
  {
    id: 2,
    title: "React Server Componentsの仕組みを分かりやすく解説",
    channel: "プログラミング学習",
    views: "89万回視聴",
    time: "1週間前",
    duration: "22:15",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    description: "React Server Componentsの基本概念から実装方法まで、初心者にも分かりやすく解説します。"
  },
  {
    id: 3,
    title: "TypeScriptで作る本格的なWebアプリケーション開発",
    channel: "コーディング道場",
    views: "234万回視聴",
    time: "3日前",
    duration: "45:20",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    description: "TypeScriptを使った実践的なWebアプリケーション開発のテクニックを紹介。型安全性を保ちながら効率的に開発する方法を学びます。"
  },
  {
    id: 4,
    title: "Tailwind CSSのプロテクニック集 - 美しいUIを効率的に作る方法",
    channel: "デザイン＆コード",
    views: "67万回視聴",
    time: "5日前",
    duration: "18:45",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    description: "Tailwind CSSを使って効率的に美しいUIを作成する方法とプロのテクニックを紹介します。"
  },
  {
    id: 5,
    title: "Vercelでのデプロイメント完全ガイド - 初心者から上級者まで",
    channel: "Web開発マスター",
    views: "156万回視聴",
    time: "1日前",
    duration: "28:10",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    description: "Vercelを使ったWebアプリケーションのデプロイメント方法を初心者から上級者まで分かりやすく解説。"
  },
  {
    id: 6,
    title: "JavaScript ES2024の新機能をいち早くチェック！",
    channel: "JS News",
    views: "92万回視聴",
    time: "4日前",
    duration: "12:30",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    description: "JavaScript ES2024で追加される最新機能について詳しく解説します。"
  },
  {
    id: 7,
    title: "フルスタック開発者になるためのロードマップ2024",
    channel: "キャリアアップ",
    views: "445万回視聴",
    time: "2週間前",
    duration: "35:55",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    description: "2024年にフルスタック開発者になるための完全ロードマップを紹介します。"
  },
  {
    id: 8,
    title: "Docker & Kubernetesで始めるコンテナ開発入門",
    channel: "インフラエンジニア",
    views: "178万回視聴",
    time: "1週間前",
    duration: "52:40",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    description: "DockerとKubernetesを使ったコンテナ開発の基礎から応用まで詳しく解説します。"
  },
  {
    id: 9,
    title: "プログラミング学習チャンネル",
    channel: "プログラミング学習",
    views: "",
    time: "",
    duration: "",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "channel",
    subscribers: "23.4万人のチャンネル登録者",
    description: "プログラミング初心者から上級者まで、幅広いレベルに対応した学習コンテンツを提供しています。"
  },
  {
    id: 10,
    title: "Next.js完全マスターコース",
    channel: "Web開発マスター",
    views: "",
    time: "",
    duration: "",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "playlist",
    videoCount: 24,
    description: "Next.jsを基礎から応用まで完全にマスターできるプレイリスト。実際のプロジェクトを作りながら学習できます。"
  },
  {
    id: 11,
    title: "JavaScript基礎講座 - 変数とデータ型",
    channel: "プログラミング初心者向け",
    views: "145万回視聴",
    time: "1ヶ月前",
    duration: "18:30",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    description: "JavaScript初心者向けの基礎講座。変数の宣言方法やデータ型について詳しく解説します。"
  },
  {
    id: 12,
    title: "Vue.js 3の新機能とComposition API完全ガイド",
    channel: "フロントエンド開発",
    views: "98万回視聴",
    time: "5日前",
    duration: "32:15",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    description: "Vue.js 3で導入されたComposition APIの使い方と新機能について解説。"
  },
  {
    id: 13,
    title: "Node.jsとExpress.jsでREST API開発",
    channel: "バックエンド開発者",
    views: "167万回視聴",
    time: "1週間前",
    duration: "40:25",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    description: "Node.jsとExpress.jsを使ったREST APIの開発方法を実践的に解説。"
  },
  {
    id: 14,
    title: "Docker入門 - コンテナ技術の基礎から実践まで",
    channel: "インフラエンジニア",
    views: "203万回視聴",
    time: "3日前",
    duration: "55:10",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    description: "Dockerの基礎概念から実際の開発環境構築まで、コンテナ技術を完全マスター。"
  },
  {
    id: 15,
    title: "GitHub Actions入門 - CI/CDパイプラインの構築",
    channel: "DevOps Engineer",
    views: "134万回視聴",
    time: "4日前",
    duration: "28:45",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    description: "GitHub Actionsを使ったCI/CDパイプラインの構築方法を詳しく解説。"
  },
  {
    id: 16,
    title: "AWS Lambda入門 - サーバーレス開発の基礎",
    channel: "クラウドエンジニア",
    views: "176万回視聴",
    time: "6日前",
    duration: "35:20",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    description: "AWS Lambdaを使ったサーバーレス開発の基礎から実践的な活用方法まで。"
  },
  {
    id: 17,
    title: "Python機械学習入門 - scikit-learnで始めるAI開発",
    channel: "AI・機械学習",
    views: "289万回視聴",
    time: "2週間前",
    duration: "42:30",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    description: "Pythonとscikit-learnを使った機械学習の基礎を初心者向けに解説。"
  },
  {
    id: 18,
    title: "MongoDB入門 - NoSQLデータベースの基礎",
    channel: "データベース専門",
    views: "156万回視聴",
    time: "1週間前",
    duration: "31:15",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    description: "MongoDBの基本的な使い方からクエリ操作まで、NoSQLデータベースを学習。"
  },
  {
    id: 19,
    title: "GraphQL入門 - RESTに代わる新しいAPI設計",
    channel: "API開発者",
    views: "123万回視聴",
    time: "5日前",
    duration: "26:40",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    description: "GraphQLの基本概念から実装方法まで、次世代API設計手法を解説。"
  },
  {
    id: 20,
    title: "Flutter入門 - クロスプラットフォームアプリ開発",
    channel: "モバイル開発",
    views: "198万回視聴",
    time: "3日前",
    duration: "38:25",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    description: "Flutterを使ったiOS/Androidアプリの開発方法を基礎から解説。"
  },

  // チャンネル
  {
    id: 101,
    title: "Tech Channel JP",
    channel: "Tech Channel JP",
    views: "",
    time: "",
    duration: "",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "channel",
    subscribers: "52.3万人のチャンネル登録者",
    description: "最新のテクノロジーやプログラミングに関する情報を分かりやすく解説するチャンネルです。"
  },
  {
    id: 102,
    title: "プログラミング学習",
    channel: "プログラミング学習",
    views: "",
    time: "",
    duration: "",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "channel",
    subscribers: "38.7万人のチャンネル登録者",
    description: "プログラミング初心者から上級者まで、学習に役立つコンテンツを提供しています。"
  },
  {
    id: 103,
    title: "フロントエンド開発",
    channel: "フロントエンド開発",
    views: "",
    time: "",
    duration: "",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "channel",
    subscribers: "29.5万人のチャンネル登録者",
    description: "React、Vue.js、Angular等のフロントエンド技術に特化したチャンネル。"
  },
  {
    id: 104,
    title: "AI・機械学習",
    channel: "AI・機械学習",
    views: "",
    time: "",
    duration: "",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "channel",
    subscribers: "67.2万人のチャンネル登録者",
    description: "人工知能と機械学習の最新情報や実践的なチュートリアルを提供。"
  },

  // プレイリスト
  {
    id: 201,
    title: "React完全マスターコース",
    channel: "プログラミング学習",
    views: "",
    time: "2週間前に更新",
    duration: "",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "playlist",
    videoCount: 24,
    description: "Reactの基礎から応用まで、完全にマスターできる包括的なプレイリスト。"
  },
  {
    id: 202,
    title: "JavaScript基礎からES6まで",
    channel: "プログラミング初心者向け",
    views: "",
    time: "1ヶ月前に更新",
    duration: "",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "playlist",
    videoCount: 18,
    description: "JavaScript初心者向けの基礎講座から最新のES6機能まで学べるプレイリスト。"
  },
  {
    id: 203,
    title: "Node.js実践開発シリーズ",
    channel: "バックエンド開発者",
    views: "",
    time: "1週間前に更新",
    duration: "",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "playlist",
    videoCount: 15,
    description: "Node.jsを使った実践的なWebアプリケーション開発を学べるシリーズ。"
  },
  {
    id: 204,
    title: "AWS入門・実践講座",
    channel: "クラウドエンジニア",
    views: "",
    time: "3日前に更新",
    duration: "",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "playlist",
    videoCount: 32,
    description: "AWSの基本サービスから実践的な活用方法まで、クラウド技術を総合的に学習。"
  }
]

export const popularKeywords = [
  'React', 'JavaScript', 'TypeScript', 'Next.js', 'Vue.js', 'Node.js',
  'Python', 'AWS', 'Docker', 'AI', '機械学習', 'Flutter', 'GraphQL'
]

export const trendingTopics = [
  'Next.js 15 新機能',
  'React Server Components',
  'TypeScript 実践',
  'Tailwind CSS',
  'Vue.js 3',
  'Node.js API開発',
  'Docker入門',
  'AWS Lambda',
  'Python 機械学習',
  'GraphQL API'
]

export function searchVideos(query: string, type?: string): Video[] {
  if (!query.trim()) {
    return videos
  }

  const normalizedQuery = query.toLowerCase().trim()
  const searchTerms = normalizedQuery.split(/\s+/)
  
  let results = videos.map(video => {
    let score = 0
    
    // タイトルマッチング（高いスコア）
    searchTerms.forEach(term => {
      if (video.title.toLowerCase().includes(term)) {
        score += video.title.toLowerCase().indexOf(term) === 0 ? 10 : 5
      }
    })
    
    // チャンネル名マッチング（中程度のスコア）
    searchTerms.forEach(term => {
      if (video.channel.toLowerCase().includes(term)) {
        score += 3
      }
    })
    
    // 説明文マッチング（低いスコア）
    searchTerms.forEach(term => {
      if (video.description?.toLowerCase().includes(term)) {
        score += 1
      }
    })
    
    return { ...video, score }
  }).filter(video => video.score > 0)

  // スコアで並び替え（降順）
  results.sort((a, b) => b.score - a.score)

  // タイプフィルタリング
  if (type && type !== 'all') {
    results = results.filter(video => video.type === type)
  }

  return results.map(({ score, ...video }) => video)
}
