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

export default function MobileLandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダーセクション - モバイル最適化版 */}
      <header className="relative w-full overflow-hidden cosmic-bg py-16 luxury-bg">
        <div className="absolute inset-0 z-0">
          <Image src="/images/cosmic-bg.jpg" alt="宇宙背景" fill className="object-cover opacity-40" />
        </div>

        {/* 特別オファーリボン */}
        <div className="limited-ribbon-mobile"></div>

        {/* 宇宙の装飾要素 - モバイル最適化版 */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 h-40 w-40 rounded-full bg-purple-700 opacity-20 blur-3xl animate-pulse"></div>
          <div
            className="absolute top-1/3 right-1/4 h-48 w-48 rounded-full bg-indigo-700 opacity-20 blur-3xl"
            style={{ animationDelay: "1s", animationDuration: "7s" }}
          ></div>
        </div>

        {/* 星のきらめき効果 - モバイル向けに数を削減 */}
        <div className="absolute inset-0 z-0">
          {[...Array(50)].map((_, i) => (
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

          {/* 流れ星効果 - モバイル向けに数を削減 */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i + 120}
              className="shooting-star"
              style={{
                top: `${Math.random() * 70}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                opacity: 0.6,
                transform: `rotate(${Math.random() * 45 - 22.5}deg)`,
                animation: `shooting-star ${Math.random() * 10 + 10}s linear infinite ${Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          {/* 特別オファーバッジ */}
          <div className="mb-4 flex justify-center">
            <div className="vip-badge-mobile">
              <Crown className="inline-block mr-1 h-4 w-4" /> 特別招待者限定
            </div>
          </div>

          {/* 金運の鍵ヘッダー画像 - モバイル最適化版 */}
          <div className="mb-6 flex justify-center">
            <div className="relative w-full max-w-xs magic-particles-container">
              <Image
                src="/images/golden-key-header.png"
                alt="あなたの金運を引き寄せる運命の鍵"
                width={300}
                height={300}
                className="w-full h-auto pulse-glow floating"
              />

              {/* 魔法の粒子効果 - モバイル向けに数を削減 */}
              {[...Array(10)].map((_, i) => (
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

          <h1 className="mb-4 mystic-text text-4xl font-extrabold">
            あなたの
            <span className="relative inline-block">
              <span className="relative z-10 text-yellow-400">金運</span>
              <span className="absolute bottom-1 left-0 z-0 h-2 w-full bg-yellow-400 opacity-20"></span>
            </span>
            を解き放つ
            <br />
            <span className="text-purple-300">神秘の鑑定</span>
          </h1>

          <p className="mx-auto mb-6 max-w-xs text-base text-purple-100">
            生年月日に秘められた<span className="text-yellow-300 font-semibold">金運の暗号</span>を解読し、
            あなたの人生に<span className="text-yellow-300 font-semibold">富と豊かさ</span>をもたらします
          </p>

          {/* 特別オファーカウントダウン - モバイル最適化版 */}
          <CountdownTimer isMobile={true} />

          <div className="mb-6 flex flex-wrap justify-center gap-2">
            <div className="flex items-center rounded-full bg-purple-900 bg-opacity-50 px-3 py-1.5 backdrop-blur-sm border border-purple-700 mystic-hover">
              <Star className="mr-1 h-4 w-4 text-yellow-300" fill="currentColor" />
              <span className="text-xs font-medium text-purple-100">的中率98%</span>
            </div>
            <div className="flex items-center rounded-full bg-purple-900 bg-opacity-50 px-3 py-1.5 backdrop-blur-sm border border-purple-700 mystic-hover">
              <Zap className="mr-1 h-4 w-4 text-yellow-300" />
              <span className="text-xs font-medium text-purple-100">人生を変える秘密</span>
            </div>
            <div className="flex items-center rounded-full bg-purple-900 bg-opacity-50 px-3 py-1.5 backdrop-blur-sm border border-purple-700 mystic-hover">
              <Gift className="mr-1 h-4 w-4 text-yellow-300" />
              <span className="text-xs font-medium text-purple-100">
                <span className="special-offer-text">豪華特典付き</span>
              </span>
            </div>
          </div>

          <div className="relative mb-8 inline-block special-offer-pulse">
            <a
              href="#free-consultation"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full gold-gradient p-0.5 text-base font-medium text-white shadow-xl hover:shadow-2xl transition-all duration-300 mystic-button"
            >
              <span className="relative flex items-center space-x-2 rounded-full bg-purple-900 bg-opacity-80 px-6 py-3 transition-all duration-300 group-hover:bg-opacity-0">
                <span>今すぐ無料鑑定を受ける</span>
              </span>
            </a>
            <div className="absolute -bottom-2 left-0 right-0 mx-auto h-6 w-full bg-yellow-400 opacity-20 blur-xl"></div>
          </div>

          <div className="animate-bounce text-center">
            <a
              href="#user-concerns"
              className="inline-flex flex-col items-center text-purple-300 hover:text-yellow-300 transition-colors"
            >
              <span className="mb-1 text-xs font-medium">運命を変える秘密を見る</span>
              <ChevronDown className="h-5 w-5" />
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

      {/* 無料鑑定セクション - モバイル最適化版 */}
      <section id="free-consultation" className="relative py-16 overflow-hidden cosmic-bg luxury-bg">
        <div className="absolute inset-0 z-0">
          <Image src="/images/sacred-geometry.png" alt="神聖幾何学" fill className="object-cover opacity-10" />
        </div>

        {/* 追加の宇宙効果 */}
        <div className="absolute inset-0 z-0 cosmic-wave"></div>

        {/* 星のきらめき効果 - モバイル向けに数を削減 */}
        <div className="absolute inset-0 z-0">
          {[...Array(30)].map((_, i) => (
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

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-sm">
            <div className="mb-8 text-center">
              <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-yellow-300 uppercase bg-purple-900 bg-opacity-70 rounded-full backdrop-blur-sm">
                運命の鑑定
              </span>
              <h2 className="mb-4 mystic-text text-3xl font-bold">
                今だけ<span className="text-purple-300">無料</span>で金運の扉を開く
              </h2>
              <p className="mx-auto mb-4 max-w-xs text-base text-purple-100">
                通常<span className="line-through">5,800円</span>の鑑定が今だけ
                <span className="font-bold text-yellow-300">無料</span>。 さらに
                <span className="font-bold text-yellow-300">38,400円相当</span>の特典もプレゼント！
              </p>

              {/* 特別オファーカウントダウン - モバイル最適化版 */}
              <CountdownTimer isMobile={true} />
            </div>

            <div className="rounded-2xl cosmic-card p-1 mystic-border relative">
              {/* 特別オファーバッジ - モバイル最適化版 */}
              <div className="special-offer-badge-mobile" style={{ top: "-20px" }}>
                <Crown className="inline-block mr-1 h-3 w-3" /> VIP限定
              </div>

              <div className="rounded-xl bg-purple-900 bg-opacity-70 p-6 pt-10 pb-8 backdrop-blur-md rotating-light">
                {/* 指定の文章を残す */}
                <div className="mb-6 text-center mt-4">
                  <h3 className="mb-3 text-xl font-bold text-yellow-300">
                    あなただけの<span className="text-white">金運の鍵</span>を受け取る
                  </h3>
                  <p className="mb-4 text-sm text-purple-100">
                    生年月日と名前を入力するだけで、あなたの金運を徹底分析。
                    眠っている金運を目覚めさせる方法を具体的にアドバイスします。 今なら
                    <span className="font-medium text-yellow-300">3つの豪華特典</span>も無料でプレゼント！
                  </p>
                </div>

                <FreeConsultationForm isMobile={true} />

                <div className="mt-4 text-center">
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

      {/* フッターセクション - モバイル最適化版 */}
      <footer className="cosmic-bg py-8 text-purple-200">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex flex-col items-center justify-center gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="relative w-32 h-16 rounded-lg overflow-hidden border border-yellow-400 pulse-glow">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-700 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-yellow-300 text-lg font-bold">Golden</div>
                      <div className="text-purple-200 text-xs">Oracle</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-xs">あなたの金運を最大化する神秘の占いサービス</p>
            </div>

            <div className="flex flex-col gap-6 text-center">
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase text-yellow-300">会社情報</h3>
                <ul className="space-y-1 text-xs">
                  <li>株式会社アシスト</li>
                  <li>東京都中央区銀座1丁目12番4号 N&E BLD.6F</li>
                  <li>お問い合わせ: info@golden-oracle.jp</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase text-yellow-300">リンク</h3>
                <ul className="flex justify-center space-x-4 text-xs">
                  <li>
                    <Link href="/terms" className="hover:text-yellow-300 hover:underline transition-colors">
                      利用規約
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-yellow-300 hover:underline transition-colors">
                      プライバシー
                    </Link>
                  </li>
                  <li>
                    <Link href="/tokusho" className="hover:text-yellow-300 hover:underline transition-colors">
                      特商法
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mystic-separator w-full my-4"></div>

          <div className="pt-4 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} ゴールデンオラクル All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
