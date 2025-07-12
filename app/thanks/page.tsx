import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Crown, Gift, Sparkles } from "lucide-react"

export default function ThanksPage() {
  return (
    <div className="min-h-screen cosmic-bg luxury-bg relative overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/cosmic-bg.jpg" alt="宇宙背景" fill className="object-cover opacity-40" />
      </div>

      {/* 宇宙の装飾要素 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-purple-700 opacity-20 blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-indigo-700 opacity-20 blur-3xl"
          style={{ animationDelay: "1s", animationDuration: "7s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 h-80 w-80 rounded-full bg-blue-700 opacity-20 blur-3xl"
          style={{ animationDelay: "2s", animationDuration: "8s" }}
        ></div>
      </div>

      {/* 星のきらめき効果 */}
      <div className="absolute inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `pulse-glow ${Math.random() * 3 + 2}s infinite`,
            }}
          ></div>
        ))}

        {/* 大きな星も追加 */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i + 100}
            className="absolute h-2 w-2 rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `pulse-glow ${Math.random() * 4 + 3}s infinite`,
            }}
          ></div>
        ))}

        {/* キラキラ効果 */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i + 120}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles
              className="h-4 w-4 text-yellow-300"
              style={{
                animation: `sparkle ${Math.random() * 2 + 1}s infinite ${Math.random() * 2}s`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          {/* ヘッダーテキスト */}
          <h1 className="mb-8 mystic-text text-4xl font-bold md:text-5xl">
            あなただけの<span className="text-yellow-400">金運の鍵</span>を受け取る
          </h1>

          <p className="mx-auto mb-12 max-w-xl text-lg text-purple-100">
            生年月日と名前を入力するだけで、あなたの金運を徹底分析。眠っている金運を目覚めさせる方法を具体的にアドバイスします。
            今なら<span className="font-semibold text-yellow-300">3つの豪華特典</span>も無料でプレゼント！
          </p>

          {/* メインカード */}
          <div className="rounded-2xl cosmic-card p-1 mystic-border mb-8">
            <div className="rounded-xl bg-purple-900 bg-opacity-70 p-8 md:p-12 backdrop-blur-md">
              {/* 成功アイコン */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-500 pulse-glow">
                    <CheckCircle className="h-12 w-12 text-white" />
                  </div>
                  {/* 周りのキラキラ効果 */}
                  <div className="absolute -top-2 -left-2">
                    <Sparkles className="h-6 w-6 text-yellow-300 animate-pulse" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="h-6 w-6 text-yellow-300 animate-pulse" style={{ animationDelay: "0.5s" }} />
                  </div>
                  <div className="absolute -bottom-2 -left-2">
                    <Sparkles className="h-6 w-6 text-yellow-300 animate-pulse" style={{ animationDelay: "1s" }} />
                  </div>
                  <div className="absolute -bottom-2 -right-2">
                    <Sparkles className="h-6 w-6 text-yellow-300 animate-pulse" style={{ animationDelay: "1.5s" }} />
                  </div>
                </div>
              </div>

              <h2 className="mb-6 text-3xl font-bold text-yellow-300">鑑定申込みを受け付けました</h2>

              <p className="mb-8 text-lg text-purple-100">
                ご入力いただいたメールアドレスに、詳細な鑑定結果と特典をお送りします。24時間以内にお届けしますので、今しばらくお待ちください。
              </p>

              {/* 特別特典メッセージ */}
              <div className="rounded-lg border border-yellow-500 bg-purple-800 bg-opacity-50 p-6 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Crown className="mr-2 h-6 w-6 text-yellow-300" />
                  <span className="text-lg font-bold text-yellow-300">特別招待者限定の特典が確保されました！</span>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-center justify-center rounded-lg bg-purple-900 bg-opacity-50 p-4">
                    <Gift className="mr-2 h-5 w-5 text-yellow-300" />
                    <span className="text-sm text-purple-100">無料鑑定結果</span>
                  </div>
                  <div className="flex items-center justify-center rounded-lg bg-purple-900 bg-opacity-50 p-4">
                    <Gift className="mr-2 h-5 w-5 text-yellow-300" />
                    <span className="text-sm text-purple-100">7つの秘術</span>
                  </div>
                  <div className="flex items-center justify-center rounded-lg bg-purple-900 bg-opacity-50 p-4">
                    <Gift className="mr-2 h-5 w-5 text-yellow-300" />
                    <span className="text-sm text-purple-100">30日実践プログラム</span>
                  </div>
                </div>
              </div>

              {/* 注意事項 */}
              <div className="rounded-lg bg-purple-800 bg-opacity-30 p-4 mb-8">
                <h3 className="mb-2 text-sm font-semibold text-yellow-300">重要なお知らせ</h3>
                <ul className="space-y-1 text-sm text-purple-100">
                  <li>• メールが届かない場合は、迷惑メールフォルダをご確認ください</li>
                  <li>• Gmail、Yahoo!メールなどのフリーメールでも受信可能です</li>
                  <li>• 24時間以内に届かない場合は、お問い合わせください</li>
                </ul>
              </div>

              {/* ホームに戻るボタン */}
              <Link
                href="/"
                className="inline-flex items-center rounded-full gold-gradient px-8 py-3 text-lg font-medium text-purple-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mystic-button"
              >
                ホームに戻る
              </Link>
            </div>
          </div>

          {/* 魔法の粒子効果 */}
          <div className="relative h-16 magic-particles-container">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="magic-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: "0",
                  animationDelay: `${Math.random() * 4}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* 神秘的な霧効果 */}
      <div className="mystic-fog"></div>
    </div>
  )
}
