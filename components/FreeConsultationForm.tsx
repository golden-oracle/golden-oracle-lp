"use client"

import { Mail, Calendar, User } from "lucide-react"

export function FreeConsultationForm({ isMobile }: { isMobile: boolean }) {
  return (
    <form
      action="https://formsubmit.co/info@golden-oracle.jp"
      method="POST"
      className="space-y-6"
    >
      {/* FormSubmit設定 */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://golden-oracle-lp.vercel.app/thanks" />
      <input type="hidden" name="_autoresponse" value="ご入力ありがとうございます。24時間以内に鑑定結果をご連絡いたします。" />
      <input type="hidden" name="_subject" value="新しい鑑定依頼が届きました" />

      {/* 名前 */}
      <div>
        <label className="block text-sm font-bold text-yellow-300 mb-1 flex items-center gap-2">
          <User className="w-4 h-4" />
          お名前（フルネーム）
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="例：山田太郎"
          className="w-full rounded-lg bg-purple-800 bg-opacity-60 text-white placeholder-purple-300 p-3 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* 生年月日（カレンダー入力） */}
      <div>
        <label className="block text-sm font-bold text-yellow-300 mb-1 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          生年月日
        </label>
        <input
          type="date"
          name="birthday"
          required
          className="w-full rounded-lg bg-purple-800 bg-opacity-60 text-white placeholder-purple-300 p-3 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* メールアドレス */}
      <div>
        <label className="block text-sm font-bold text-yellow-300 mb-1 flex items-center gap-2">
          <Mail className="w-4 h-4" />
          メールアドレス
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="例：sample@example.com"
          className="w-full rounded-lg bg-purple-800 bg-opacity-60 text-white placeholder-purple-300 p-3 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* アピールポイント */}
      <div className="flex flex-wrap gap-2 text-sm text-yellow-300">
        <div className="flex items-center gap-1 bg-purple-700 bg-opacity-60 px-3 py-1 rounded-full">
          ✅ 24時間以内にお届け
        </div>
        <div className="flex items-center gap-1 bg-purple-700 bg-opacity-60 px-3 py-1 rounded-full">
          ✅ 完全無料・安心保証
        </div>
      </div>

      {/* 送信ボタン */}
      <div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-900 font-bold py-3 rounded-full transition flex items-center justify-center gap-2"
        >
          無料鑑定を受ける
          <span className="inline-block transform rotate-[-45deg]">→</span>
        </button>
      </div>
    </form>
  )
}
