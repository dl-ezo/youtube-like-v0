import type React from "react"
import { Settings, User, Shield, Bell, Download, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

// Switch コンポーネントの代替実装
function Switch({ defaultChecked = false, ...props }: { defaultChecked?: boolean }) {
  return (
    <button
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        defaultChecked ? "bg-blue-600" : "bg-gray-200"
      }`}
      {...props}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          defaultChecked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  )
}

// Select コンポーネントの代替実装
function Select({ children, defaultValue }: { children: React.ReactNode; defaultValue?: string }) {
  return (
    <div className="relative">
      <select className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
        {children}
      </select>
    </div>
  )
}

function SelectTrigger({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

function SelectValue() {
  return null
}

function SelectContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

function SelectItem({ value, children }: { value: string; children: React.ReactNode }) {
  return <option value={value}>{children}</option>
}

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <Settings className="h-6 w-6 text-gray-600" />
              <h1 className="text-2xl font-semibold">アカウント設定</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              プロフィール
            </TabsTrigger>
            <TabsTrigger value="account" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              アカウント
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              プライバシー
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              通知
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              データ
            </TabsTrigger>
          </TabsList>

          {/* プロフィールタブ */}
          <TabsContent value="profile">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>基本情報</CardTitle>
                  <CardDescription>あなたのプロフィール情報を編集できます</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-6">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" />
                      <AvatarFallback className="text-lg">YU</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <Button variant="outline">画像を変更</Button>
                      <p className="text-sm text-gray-600">JPG、PNG形式（最大2MB）</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="displayName">表示名</Label>
                      <Input id="displayName" placeholder="あなたの表示名" defaultValue="YouTube User" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">ユーザーID</Label>
                      <Input id="username" placeholder="@username" defaultValue="@youtubeuser" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">チャンネル説明</Label>
                    <Textarea
                      id="description"
                      placeholder="あなたのチャンネルについて説明してください"
                      defaultValue="こんにちは！プログラミングやテクノロジーについての動画を投稿しています。"
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">ウェブサイト</Label>
                    <Input id="website" placeholder="https://example.com" />
                  </div>

                  <Button>変更を保存</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* アカウントタブ */}
          <TabsContent value="account">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>ログイン情報</CardTitle>
                  <CardDescription>アカウントのセキュリティ設定を管理します</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス</Label>
                    <div className="flex gap-2">
                      <Input id="email" value="user@example.com" disabled />
                      <Button variant="outline">変更</Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>パスワード</Label>
                    <div className="flex gap-2">
                      <Input type="password" value="********" disabled />
                      <Button variant="outline">変更</Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>2段階認証</Label>
                      <p className="text-sm text-gray-600">アカウントのセキュリティを強化します</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>連携アカウント</CardTitle>
                  <CardDescription>他のサービスとの連携を管理します</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        G
                      </div>
                      <div>
                        <p className="font-medium">Google</p>
                        <p className="text-sm text-gray-600">連携済み</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      解除
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        G
                      </div>
                      <div>
                        <p className="font-medium">GitHub</p>
                        <p className="text-sm text-gray-600">未連携</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      連携
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* プライバシータブ */}
          <TabsContent value="privacy">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>チャンネルの公開設定</CardTitle>
                  <CardDescription>あなたのチャンネルの公開範囲を設定します</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>チャンネルの公開設定</Label>
                    <Select defaultValue="public">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">公開</SelectItem>
                        <SelectItem value="unlisted">限定公開</SelectItem>
                        <SelectItem value="private">非公開</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>登録チャンネルを公開</Label>
                      <p className="text-sm text-gray-600">他のユーザーがあなたの登録チャンネルを見ることができます</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>再生履歴を公開</Label>
                      <p className="text-sm text-gray-600">他のユーザーがあなたの再生履歴を見ることができます</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>コメント設定</CardTitle>
                  <CardDescription>あなたの動画に対するコメントの設定</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>コメント許可設定</Label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">すべてのユーザー</SelectItem>
                        <SelectItem value="subscribers">登録者のみ</SelectItem>
                        <SelectItem value="none">コメント無効</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>コメント承認制</Label>
                      <p className="text-sm text-gray-600">コメントを事前に確認してから公開します</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* 通知タブ */}
          <TabsContent value="notifications">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>メール通知</CardTitle>
                  <CardDescription>受信するメール通知の種類を選択します</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>新しいコメント</Label>
                      <p className="text-sm text-gray-600">あなたの動画に新しいコメントが投稿されたとき</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>新規チャンネル登録</Label>
                      <p className="text-sm text-gray-600">新しいユーザーがあなたのチャンネルに登録したとき</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>いいね通知</Label>
                      <p className="text-sm text-gray-600">あなたの動画にいいねが付いたとき</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>プッシュ通知</CardTitle>
                  <CardDescription>ブラウザでの通知設定</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>ブラウザ通知</Label>
                      <p className="text-sm text-gray-600">ブラウザでのプッシュ通知を受信します</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>ライブ配信通知</Label>
                      <p className="text-sm text-gray-600">登録チャンネルがライブ配信を開始したとき</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* データタブ */}
          <TabsContent value="data">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>データのダウンロード</CardTitle>
                  <CardDescription>あなたのアカウントデータをダウンロードできます</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">視聴履歴</p>
                      <p className="text-sm text-gray-600">これまでに視聴した動画の履歴</p>
                    </div>
                    <Button variant="outline" size="sm">
                      ダウンロード
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">検索履歴</p>
                      <p className="text-sm text-gray-600">これまでの検索クエリの履歴</p>
                    </div>
                    <Button variant="outline" size="sm">
                      ダウンロード
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">コメント履歴</p>
                      <p className="text-sm text-gray-600">投稿したコメントの履歴</p>
                    </div>
                    <Button variant="outline" size="sm">
                      ダウンロード
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>データの削除</CardTitle>
                  <CardDescription>特定のデータを削除できます</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">視聴履歴を削除</p>
                      <p className="text-sm text-gray-600">すべての視聴履歴を完全に削除します</p>
                    </div>
                    <Button variant="outline" size="sm">
                      削除
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">検索履歴を削除</p>
                      <p className="text-sm text-gray-600">すべての検索履歴を完全に削除します</p>
                    </div>
                    <Button variant="outline" size="sm">
                      削除
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600">アカウントの削除</CardTitle>
                  <CardDescription>アカウントとすべてのデータを完全に削除します</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    この操作は取り消すことができません。アカウントを削除すると、すべての動画、コメント、登録情報が完全に削除されます。
                  </p>
                  <Button variant="destructive">アカウントを削除</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
