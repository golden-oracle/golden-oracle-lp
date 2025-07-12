"use client"

import { useState } from "react"

export function FreeConsultationForm() {
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 1939 }, (_, i) => currentYear - i)
  const months = Array.from({ length: 12 }, (_, i) => i + 1)
  const days = Array.from({ length: 31 }, (_, i) => i + 1)

  return (
    <form
      action="https://formsubmit.co/info@golden-oracle.jp"
      method="POST"
      className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">無料金運鑑定フォーム</h2>

      <div className="space-y-2">
        <label className="block text-gray-700 font-semibold">お名前</label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          placeholder="例）山田 太郎"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-gray-700 font-semibold">生年月日</label>
        <div className="flex gap-2">
          <select name="birth_year" required className="flex-1 p-2 border rounded-lg">
            <option value="">年</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}年</option>
            ))}
          </select>
          <select name="birth_month" required className="flex-1 p-2 border rounded-lg">
            <option value="">月</option>
            {months.map((m) => (
              <option key={m} value={String(m).padStart(2, "0")}>{m}月</option>
            ))}
          </select>
          <select name="birth_day" required className="flex-1 p-2 border rounded-lg">
            <option value="">日</option>
            {days.map((d) => (
              <option key={d} value={String(d).padStart(2, "0")}>{d}日</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-gray-700 font-semibold">メールアドレス</label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          placeholder="例）example@example.com"
        />
      </div>

      {/* スパム対策：ユーザーには見えません */}
      <input type="text" name="_honey" style={{ display: "none" }} />

      {/* サンクスページに遷移 */}
      <input type="hidden" name="_next" value="https://golden-oracle-lp.vercel.app/thanks" />

      <button
        type="submit"
        className="w-full py-3 mt-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold rounded-lg hover:opacity-90 transition"
      >
        無料鑑定を申し込む
      </button>
    </form>
  )
}
