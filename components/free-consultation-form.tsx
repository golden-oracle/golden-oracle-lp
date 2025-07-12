"use client"

import { Calendar, User, Mail, ArrowRight, Sparkles, Gift, Clock } from "lucide-react"

interface FreeConsultationFormProps {
  isMobile?: boolean
}

export function FreeConsultationForm({ isMobile = false }: FreeConsultationFormProps) {
  // 年の選択肢を生成（1940年〜現在年）
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 1939 }, (_, i) => currentYear - i)

  // 月の選択肢
  const months = [
    { value: "01", label: "1月" },
    { value: "02", label: "2月" },
    { value: "03", label: "3月" },
    { value: "04", label: "4月" },
    { value: "05", label: "5月" },
    { value: "06", label: "6月" },
    { value: "07", label: "7月" },
    { value: "08", label: "8月" },
    { value: "09", label: "9月" },
    { value: "10", label: "10月" },
    { value: "11", label: "11月" },
    { value: "12", label: "12月" },
  ]

  // 日の選択肢
  const days = Array.from({ length: 31 }, (_, i) => {
    const day = i + 1
    return { value: day.toString().padStart(2, "0"), label: `${day}日` }
  })

  return (
    <form action="/api/contact" method="POST" className={`space-y-${isMobile ? "4" : "6"}`}>
      {/* VIP特典リスト - パディングと高さを調整 */}
      <div
        className={`mb-${isMobile ? "6" : "8"} p-${isMobile ? "4" : "6"} rounded-lg bg-purple-900 bg-opacity-50 border border-yellow-500`}
      >
        <h4
          className={`text-yellow-300 font-semibold mb-${isMobile ? "2" : "3"} flex items-center ${isMobile ? "text-base" : "text-lg"}`}
        >
          <Gift className={`mr-2 ${isMobile ? "h-4 w-4" : "h-5 w-5"}`} />
          あなただけの特別特典
        </h4>
        <ul className={`space-y-${isMobile ? "2" : "3"}`}>
          <li className="flex items-start text-purple-100">
            <Sparkles className="mr-2 h-4 w-4 text-yellow-300 mt-1 flex-shrink-0" />
            <span className={`inline-block ${isMobile ? "text-sm" : ""}`}>
              通常5,800円の鑑定が<span className="text-yellow-300 font-semibold">完全無料</span>
            </span>
          </li>
          <li className="flex items-start text-purple-100">
            <Sparkles className="mr-2 h-4 w-4 text-yellow-300 mt-1 flex-shrink-0" />
            <span className={`inline-block ${isMobile ? "text-sm" : ""}`}>
              3つの豪華特典（38,400円相当）を<span className="text-yellow-300 font-semibold">無料進呈</span>
            </span>
          </li>
          <li className="flex items-start text-purple-100">
            <Sparkles className="mr-2 h-4 w-4 text-yellow-300 mt-1 flex-shrink-0" />
            <span className={`inline-block ${isMobile ? "text-sm" : ""}`}>
              VIP限定の<span className="text-yellow-300 font-semibold">金運アップ秘術</span>をプレゼント
            </span>
          </li>
        </ul>
      </div>

      {/* フォーム部分 - モバイル最適化版 */}
      <div className={`space-y-${isMobile ? "3" : "4"}`}>
        <div>
          <label
            htmlFor="name"
            className={`mb-${isMobile ? "1" : "2"} flex items-center text-sm font-medium text-yellow-300`}
          >
            <User className="mr-2 h-4 w-4" />
            お名前（フルネーム）
          </label>
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="例：山田太郎"
              required
              className={`w-full rounded-lg border border-purple-700 bg-purple-900 bg-opacity-50 px-4 py-${isMobile ? "2" : "3"} pl-10 text-purple-100 placeholder-purple-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-20 mystic-input ${isMobile ? "text-sm" : ""}`}
            />
            <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-purple-400" />
          </div>
        </div>

        <div>
          <label className={`mb-${isMobile ? "1" : "2"} flex items-center text-sm font-medium text-yellow-300`}>
            <Calendar className="mr-2 h-4 w-4" />
            生年月日
          </label>
          <div className={`grid grid-cols-3 gap-${isMobile ? "2" : "3"}`}>
            {/* 年の選択 */}
            <div>
              <select
                name="birth_year"
                required
                className={`w-full rounded-lg border border-purple-700 bg-purple-900 bg-opacity-50 px-3 py-${isMobile ? "2" : "3"} text-purple-100 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-20 mystic-input ${isMobile ? "text-sm" : ""}`}
              >
                <option value="">年</option>
                {years.map((year) => (
                  <option key={year} value={year} className="bg-purple-900 text-purple-100">
                    {year}年
                  </option>
                ))}
              </select>
            </div>

            {/* 月の選択 */}
            <div>
              <select
                name="birth_month"
                required
                className={`w-full rounded-lg border border-purple-700 bg-purple-900 bg-opacity-50 px-3 py-${isMobile ? "2" : "3"} text-purple-100 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-20 mystic-input ${isMobile ? "text-sm" : ""}`}
              >
                <option value="">月</option>
                {months.map((month) => (
                  <option key={month.value} value={month.value} className="bg-purple-900 text-purple-100">
                    {month.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 日の選択 */}
            <div>
              <select
                name="birth_day"
                required
                className={`w-full rounded-lg border border-purple-700 bg-purple-900 bg-opacity-50 px-3 py-${isMobile ? "2" : "3"} text-purple-100 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-20 mystic-input ${isMobile ? "text-sm" : ""}`}
              >
                <option value="">日</option>
                {days.map((day) => (
                  <option key={day.value} value={day.value} className="bg-purple-900 text-purple-100">
                    {day.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <p className={`mt-1 text-xs text-purple-300 ${isMobile ? "text-xs" : "text-sm"}`}>
            ※正確な鑑定のため、正しい生年月日をご入力ください
          </p>
        </div>

        <div>
          <label
            htmlFor="email"
            className={`mb-${isMobile ? "1" : "2"} flex items-center text-sm font-medium text-yellow-300`}
          >
            <Mail className="mr-2 h-4 w-4" />
            メールアドレス
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="例：sample@example.com"
              required
              className={`w-full rounded-lg border border-purple-700 bg-purple-900 bg-opacity-50 px-4 py-${isMobile ? "2" : "3"} pl-10 text-purple-100 placeholder-purple-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-20 mystic-input ${isMobile ? "text-sm" : ""}`}
            />
            <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-purple-400" />
          </div>
        </div>
      </div>

      {isMobile ? (
        // モバイル向けのシンプルなレイアウト
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            <div className="flex items-center rounded-full bg-purple-800 bg-opacity-50 px-3 py-1.5 border border-purple-700">
              <span className="mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-purple-900">
                ✓
              </span>
              <span className="text-xs font-medium text-purple-100">24時間以内</span>
            </div>
            <div className="flex items-center rounded-full bg-purple-800 bg-opacity-50 px-3 py-1.5 border border-purple-700">
              <span className="mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-purple-900">
                ✓
              </span>
              <span className="text-xs font-medium text-purple-100">完全無料</span>
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full gold-gradient px-6 py-2.5 text-base font-medium text-purple-900 shadow-lg hover:shadow-xl transition-all duration-300 mystic-button special-offer-pulse"
          >
            無料鑑定を受ける
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      ) : (
        // デスクトップ向けの元のレイアウト
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center rounded-full bg-purple-800 bg-opacity-50 px-4 py-2 border border-purple-700 mystic-hover">
              <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-purple-900">
                ✓
              </span>
              <span className="text-sm font-medium text-purple-100">24時間以内にお届け</span>
            </div>
            <div className="flex items-center rounded-full bg-purple-800 bg-opacity-50 px-4 py-2 border border-purple-700 mystic-hover">
              <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-purple-900">
                ✓
              </span>
              <span className="text-sm font-medium text-purple-100">完全無料・安心保証</span>
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center rounded-full gold-gradient px-6 py-3 text-base font-medium text-purple-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mystic-button special-offer-pulse"
          >
            無料鑑定を受ける
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      )}

      {/* 魔法の粒子効果 */}
      <div className={`relative h-${isMobile ? "8" : "10"} magic-particles-container`}>
        {[...Array(isMobile ? 3 : 5)].map((_, i) => (
          <div
            key={i}
            className="magic-particle"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "0",
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* 特別オファー期限メッセージ */}
      <div className={`text-center text-${isMobile ? "xs" : "sm"} text-yellow-300`}>
        <Clock className={`inline-block mr-1 h-${isMobile ? "3" : "4"} w-${isMobile ? "3" : "4"}`} />
        このVIP限定オファーは間もなく終了します。今すぐお申し込みください！
      </div>
    </form>
  )
}
