import Image from "next/image"
// 修正後（OK）
import { FreeConsultationForm } from "@/components/FreeConsultationForm"
import { Testimonials } from "@/components/testimonials"
import { UserConcerns } from "@/components/user-concerns"
import { Faq } from "@/components/faq"
import { HowItWorks } from "@/components/how-it-works"
import { SpecialBonuses } from "@/components/special-bonuses"
import { Guarantee } from "@/components/guarantee"
import { ExpertProfile } from "@/components/expert-profile"
import { Star, ChevronDown, Zap, Crown, Gift } from "lucide-react"
import Link from "next/link"
import { CountdownTimer } from "@/components/countdown-timer"

export default function DesktopLandingPage() {
  // 既存のページコンポーネントをそのまま使用
  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダーセクション - 豪華版 */}
      <header className="relative w-full overflow-hidden cosmic-bg py-20 md:py-32 luxury-bg">
        <div className="absolute inset-0 z-0">
          <Image src="/images/cosmic-bg.jpg" alt="宇宙背景" fill className="object-cover opacity-40" />
        </div>

        {/* 特別オファーリボン */}
        <div className="limited-ribbon"></div>

        {/* 宇宙の装飾要素 - 豪華版 */}
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

          {/* 追加の宇宙要素 */}
          <div
            className="absolute top-1/2 right-1/3 h-48 w-48 rounded-full bg-pink-700 opacity-10 blur-2xl"
            style={{ animationDelay: "1.5s", animationDuration: "6s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/4 h-72 w-72 rounded-full bg-cyan-700 opacity-15 blur-3xl"
            style={{ animationDelay: "0.5s", animationDuration: "9s" }}
          ></div>
        </div>

        {/* 星のきらめき効果 - より多くの星を追加 */}
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

          {/* 流れ星効果 */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i + 120}
              className="shooting-star"
              style={{
                top: `${Math.random() * 70}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 150 + 50}px`,
                opacity: 0.6,
                transform: `rotate(${Math.random() * 45 - 22.5}deg)`,
                animation: `shooting-star ${Math.random() * 10 + 10}s linear infinite ${Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>

        {/* 光の粒子効果 */}
        <div className="absolute inset-0 z-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i + 130}
              className="light-particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${Math.random() * 5 + 5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          {/* 特別オファーバッジ */}
          <div className="mb-6 flex justify-center">
            <div className="vip-badge">
              <Crown className="inline-block mr-2 h-5 w-5" /> 特別招待者限定オファー
            </div>
          </div>

          {/* 金運の鍵ヘッダー画像 - 豪華版 */}
          <div className="mb-10 flex justify-center">
            <div className="relative max-w-3xl w-full magic-particles-container">
              <Image
                src="/images/golden-key-header.png"
                alt="あなたの金運を引き寄せる運命の鍵"
                width={800}
                height={800}
                className="w-full h-auto pulse-glow floating"
              />

              {/* 魔法の粒子効果 */}
              {[...Array(20)].map((_, i) => (
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

              {/* キラキラ効果 */}
              {[...Array(10)].map((_, i) => (
                <div
                  key={i + 20}
                  className="sparkle"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `sparkle ${Math.random() * 2 + 1}s infinite ${Math.random() * 2}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          <h1 className="mb-8 mystic-text text-5xl font-extrabold sm:text-6xl md:text-7xl lg:text-8xl">
            あなたの
            <span className="relative inline-block">
              <span className="relative z-10 text-yellow-400">金運</span>
              <span className="absolute bottom-2 left-0 z-0 h-4 w-full bg-yellow-400 opacity-20"></span>
            </span>
            を解き放つ
            <br />
            <span className="text-purple-300">神秘の鑑定</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-xl text-purple-100 md:text-2xl">
            生年月日に秘められた<span className="text-yellow-300 font-semibold">金運の暗号</span>を解読し、
            あなたの人生に<span className="text-yellow-300 font-semibold">富と豊かさ</span>をもたらします
          </p>

          {/* 特別オファーカウントダウン */}
          <CountdownTimer isMobile={false} />

          <div className="mb-10 flex flex-wrap justify-center gap-4">
            <div className="flex items-center rounded-full bg-purple-900 bg-opacity-50 px-5 py-2.5 backdrop-blur-sm border border-purple-700 mystic-hover">
              <Star className="mr-2 h-5 w-5 text-yellow-300" fill="currentColor" />
              <span className="text-sm font-medium text-purple-100">的中率98%の金運鑑定</span>
            </div>
            <div className="flex items-center rounded-full bg-purple-900 bg-opacity-50 px-5 py-2.5 backdrop-blur-sm border border-purple-700 mystic-hover">
              <Zap className="mr-2 h-5 w-5 text-yellow-300" />
              <span className="text-sm font-medium text-purple-100">人生を変える秘密の知識</span>
            </div>
            <div className="flex items-center rounded-full bg-purple-900 bg-opacity-50 px-5 py-2.5 backdrop-blur-sm border border-purple-700 mystic-hover">
              <Gift className="mr-2 h-5 w-5 text-yellow-300" />
              <span className="text-sm font-medium text-purple-100">
                <span className="special-offer-text">豪華3大特典付き</span>
              </span>
            </div>
          </div>

          <div className="relative mb-12 inline-block special-offer-pulse">
            <a
              href="#free-consultation"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full gold-gradient p-0.5 text-xl font-medium text-white shadow-xl hover:shadow-2xl transition-all duration-300 mystic-button"
            >
              <span className="relative flex items-center space-x-2 rounded-full bg-purple-900 bg-opacity-80 px-10 py-5 transition-all duration-300 group-hover:bg-opacity-0">
                <span>今すぐ無料鑑定を受ける</span>
              </span>
            </a>
            <div className="absolute -bottom-4 left-0 right-0 mx-auto h-12 w-full bg-yellow-400 opacity-20 blur-xl"></div>
          </div>

          <div className="animate-bounce text-center">
            <a
              href="#user-concerns"
              className="inline-flex flex-col items-center text-purple-300 hover:text-yellow-300 transition-colors"
            >
              <span className="mb-2 text-sm font-medium">運命を変える秘密を見る</span>
              <ChevronDown className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* 神秘的な霧効果 */}
        <div className="mystic-fog"></div>
      </header>

      {/* ユーザーの課題セクション */}
      <div id="user-concerns">
        <UserConcerns />
      </div>

      {/* 鑑定の流れセクション */}
      <HowItWorks />

      {/* 専門家紹介セクション */}
      <ExpertProfile />

      {/* 成功事例セクション */}
      <Testimonials />

      {/* 特典セクション */}
      <SpecialBonuses />

      {/* 保証セクション */}
      <Guarantee />

      {/* 無料鑑定セクション - 豪華版 */}
      <section id="free-consultation" className="relative py-24 overflow-hidden cosmic-bg luxury-bg">
        <div className="absolute inset-0 z-0">
          <Image src="/images/sacred-geometry.png" alt="神聖幾何学" fill className="object-cover opacity-10" />
        </div>

        {/* 追加の宇宙効果 */}
        <div className="absolute inset-0 z-0 cosmic-wave"></div>

        {/* 星のきらめき効果 */}
        <div className="absolute inset-0 z-0">
          {[...Array(70)].map((_, i) => (
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
        </div>

        {/* 流れ星効果 */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i + 70}
            className="shooting-star"
            style={{
              top: `${Math.random() * 70}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 150 + 50}px`,
              opacity: 0.6,
              transform: `rotate(${Math.random() * 45 - 22.5}deg)`,
              animation: `shooting-star ${Math.random() * 10 + 10}s linear infinite ${Math.random() * 10}s`,
            }}
          ></div>
        ))}

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <span className="inline-block px-5 py-2 mb-3 text-xs font-semibold tracking-wider text-yellow-300 uppercase bg-purple-900 bg-opacity-70 rounded-full backdrop-blur-sm">
                運命の鑑定
              </span>
              <h2 className="mb-6 mystic-text text-5xl font-bold md:text-6xl">
                今だけ<span className="text-purple-300">無料</span>で金運の扉を開く
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-purple-100">
                通常<span className="line-through">5,800円</span>の鑑定が今だけ
                <span className="font-bold text-yellow-300">無料</span>。 さらに
                <span className="font-bold text-yellow-300">38,400円相当</span>の特典もプレゼント！
              </p>

              {/* 特別オファーカウントダウン */}
              <CountdownTimer isMobile={false} />
            </div>

            <div className="rounded-2xl cosmic-card p-1 mystic-border relative">
              {/* 特別オファーバッジ */}
              <div className="special-offer-badge" style={{ top: "-25px" }}>
                <Crown className="inline-block mr-1 h-4 w-4" /> VIP限定オファー
              </div>

              <div className="rounded-xl bg-purple-900 bg-opacity-70 p-8 pt-12 pb-12 backdrop-blur-md md:p-12 md:pt-16 rotating-light">
                {/* 指定の文章を残す */}
                <div className="mb-8 text-center mt-8">
                  <h3 className="mb-4 text-2xl font-bold text-yellow-300">
                    あなただけの<span className="text-white">金運の鍵</span>を受け取る
                  </h3>
                  <p className="mb-6 text-purple-100">
                    生年月日と名前を入力するだけで、あなたの金運を徹底分析。
                    眠っている金運を目覚めさせる方法を具体的にアドバイスします。 今なら
                    <span className="font-medium text-yellow-300">3つの豪華特典</span>も無料でプレゼント！
                  </p>
                </div>

                <FreeConsultationForm isMobile={false} />

                <div className="mt-6 text-center">
                  <p className="text-xs text-purple-200 opacity-70">
                    ※無料鑑定後、有料サービスへのご案内があります。ご利用は任意です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQセクション */}
      <Faq />

      {/* フッターセクション - 豪華版 */}
      <footer className="cosmic-bg py-12 text-purple-200">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <div className="flex items-center mb-2">
                <div className="relative w-40 h-20 rounded-lg overflow-hidden border border-yellow-400 pulse-glow mr-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-700 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-yellow-300 text-xl font-bold">Golden</div>
                      <div className="text-purple-200 text-sm">Oracle</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-sm">あなたの金運を最大化する神秘の占いサービス</p>
            </div>

            <div className="flex gap-8">
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase text-yellow-300">会社情報</h3>
                <ul className="space-y-2 text-sm">
                  <li>株式会社アシスト</li>
                  <li>東京都中央区銀座1丁目12番4号 N&E BLD.6F</li>
                  <li>お問い合わせ: info@golden-oracle.jp</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase text-yellow-300">リンク</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/terms" className="hover:text-yellow-300 hover:underline transition-colors">
                      利用規約
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-yellow-300 hover:underline transition-colors">
                      プライバシーポリシー
                    </Link>
                  </li>
                  <li>
                    <Link href="/tokusho" className="hover:text-yellow-300 hover:underline transition-colors">
                      特定商取引法に基づく表記
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mystic-separator w-full my-6"></div>

          <div className="pt-6 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} ゴールデンオラクル All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
