"use client"

import Image from "next/image"
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
  return (
    <div className="flex min-h-screen flex-col">
      {/* 豪華なヘッダーセクション - PC用 */}
      <header className="relative w-full overflow-hidden cosmic-bg py-24 luxury-bg">
        <div className="absolute inset-0 z-0">
          <Image src="/images/cosmic-bg.jpg" alt="宇宙背景" fill className="object-cover opacity-40" />
        </div>

        <div className="limited-ribbon"></div>

        {/* 星や流れ星 */}
        <div className="absolute inset-0 z-0">
          {[...Array(80)].map((_, i) => (
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
          {[...Array(5)].map((_, i) => (
            <div
              key={i + 100}
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
          <div className="mb-4 flex justify-center">
            <div className="vip-badge">
              <Crown className="inline-block mr-1 h-5 w-5" /> 特別招待者限定
            </div>
          </div>

          <div className="mb-6 flex justify-center">
            <div className="relative w-full max-w-md magic-particles-container">
              <Image
                src="/images/golden-key-header.png"
                alt="あなたの金運を引き寄せる運命の鍵"
                width={400}
                height={400}
                className="w-full h-auto pulse-glow floating"
              />
              {[...Array(15)].map((_, i) => (
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

          <h1 className="mb-4 mystic-text text-5xl font-extrabold leading-tight">
            あなたの
            <span className="relative inline-block">
              <span className="relative z-10 text-yellow-400">金運</span>
              <span className="absolute bottom-1 left-0 z-0 h-2 w-full bg-yellow-400 opacity-20"></span>
            </span>
            を解き放つ
            <br />
            <span className="text-purple-300">神秘の鑑定</span>
          </h1>

          <p className="mx-auto mb-6 max-w-2xl text-xl text-purple-100">
            生年月日に秘められた <span className="text-yellow-300 font-semibold">金運の暗号</span> を解読し、
            あなたの人生に <span className="text-yellow-300 font-semibold">富と豊かさ</span> をもたらします。
          </p>

          <CountdownTimer isMobile={false} />

          <div className="mb-6 flex flex-wrap justify-center gap-4">
            <div className="flex items-center rounded-full bg-purple-900 bg-opacity-50 px-4 py-2 backdrop-blur-sm border border-purple-700 mystic-hover">
              <Star className="mr-1 h-5 w-5 text-yellow-300" fill="currentColor" />
              <span className="text-sm font-medium text-purple-100">的中率98%</span>
            </div>
            <div className="flex items-center rounded-full bg-purple-900 bg-opacity-50 px-4 py-2 backdrop-blur-sm border border-purple-700 mystic-hover">
              <Zap className="mr-1 h-5 w-5 text-yellow-300" />
              <span className="text-sm font-medium text-purple-100">人生を変える秘密</span>
            </div>
            <div className="flex items-center rounded-full bg-purple-900 bg-opacity-50 px-4 py-2 backdrop-blur-sm border border-purple-700 mystic-hover">
              <Gift className="mr-1 h-5 w-5 text-yellow-300" />
              <span className="text-sm font-medium text-purple-100">豪華特典付き</span>
            </div>
          </div>

          <div className="relative mb-12 inline-block special-offer-pulse">
            <a
              href="#free-consultation"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full gold-gradient p-0.5 text-lg font-medium text-white shadow-xl hover:shadow-2xl transition-all duration-300 mystic-button"
            >
              <span className="relative flex items-center space-x-2 rounded-full bg-purple-900 bg-opacity-80 px-8 py-4 transition-all duration-300 group-hover:bg-opacity-0">
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
              <span className="mb-1 text-sm font-medium">運命を変える秘密を見る</span>
              <ChevronDown className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mystic-fog"></div>
      </header>

      {/* 残りのセクション */}
      <div id="user-concerns">
        <UserConcerns />
      </div>
      <HowItWorks />
      <ExpertProfile />
      <Testimonials />
      <SpecialBonuses />
      <Guarantee />

      <section id="free-consultation" className="relative py-24 overflow-hidden cosmic-bg luxury-bg">
        <div className="absolute inset-0 z-0">
          <Image src="/images/sacred-geometry.png" alt="神聖幾何学" fill className="object-cover opacity-10" />
        </div>
        <div className="absolute inset-0 z-0 cosmic-wave"></div>

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
                <span className="font-bold text-yellow-300">無料</span>。さらに
                <span className="font-bold text-yellow-300">38,400円相当</span>の特典もプレゼント！
              </p>
              <CountdownTimer isMobile={false} />
            </div>

            <div className="rounded-2xl cosmic-card p-1 mystic-border relative">
              <div className="special-offer-badge" style={{ top: "-25px" }}>
                <Crown className="inline-block mr-1 h-4 w-4" /> VIP限定オファー
              </div>

              <div className="rounded-xl bg-purple-900 bg-opacity-70 p-8 pt-12 pb-12 backdrop-blur-md md:p-12 md:pt-16 rotating-light">
                <div className="mb-8 text-center mt-8">
                  <h3 className="mb-4 text-2xl font-bold text-yellow-300">
                    あなただけの<span className="text-white">金運の鍵</span>を受け取る
                  </h3>
                  <p className="mb-6 text-purple-100">
                    生年月日と名前を入力するだけで、あなたの金運を徹底分析。
                    眠っている金運を目覚めさせる方法を具体的にアドバイスします。
                    今なら<span className="font-medium text-yellow-300">3つの豪華特典</span>も無料でプレゼント！
                  </p>
                </div>

                <FreeConsultationForm isMobile={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />

      <footer className="cosmic-bg py-8 text-purple-200">
        <div className="container mx-auto px-4">
          <div className="text-center text-xs">
            <p>&copy; {new Date().getFullYear()} ゴールデンオラクル All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
