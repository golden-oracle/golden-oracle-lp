import Image from "next/image"
import { Star, TrendingUp, DollarSign } from "lucide-react"

export function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden bg-purple-950">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image src="/images/sacred-geometry.png" alt="神聖幾何学" fill className="object-cover" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block px-5 py-2 mb-3 text-xs font-semibold tracking-wider text-yellow-300 uppercase bg-purple-900 bg-opacity-70 rounded-full backdrop-blur-sm">
            成功事例
          </span>
          <h2 className="mb-8 mystic-text text-5xl font-bold md:text-6xl">
            実際に<span className="text-yellow-400">金運</span>が劇的に変わった方々
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-xl text-purple-100">
            ゴールデンオラクルの鑑定を受けた多くの方が、 金運の劇的な変化を体験しています。 その一部をご紹介します。
          </p>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Aさんの成功事例 - 実写画像を復活 */}
            <div className="group">
              <div className="mb-6 relative mx-auto h-64 w-64 overflow-hidden rounded-full border-4 border-yellow-400 shadow-lg shadow-purple-900/50">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%E3%81%95%E3%82%93-6S3PY5r8iQ4HtWS7qdegymWQ8KdyaZ.png"
                  alt="Aさん（30代女性）"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: "50% 30%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-30"></div>
              </div>
              <div className="mb-4 flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <h3 className="mb-2 text-2xl font-bold text-yellow-300">
                Aさん<span className="ml-2 text-purple-300">（30代女性）</span>
              </h3>
              <p className="mb-6 text-purple-100">
                「この占いを受ける前は、いつも月末にはお金が足りなくなる状態でした。
                鑑定後に教えていただいた金運アップの方法を実践したところ、
                <span className="font-medium text-yellow-300">副業収入が月10万円増え</span>、
                さらに思いがけない臨時収入にも恵まれるようになりました！」
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <div className="flex items-center rounded-full bg-purple-900 bg-opacity-50 px-4 py-2 text-sm text-purple-100">
                  <TrendingUp className="mr-2 h-4 w-4 text-yellow-400" />
                  <span>収入アップ</span>
                </div>
                <div className="flex items-center rounded-full bg-purple-900 bg-opacity-50 px-4 py-2 text-sm text-purple-100">
                  <DollarSign className="mr-2 h-4 w-4 text-yellow-400" />
                  <span>臨時収入</span>
                </div>
              </div>
            </div>

            {/* Bさんの成功事例 - 実写画像を復活 */}
            <div className="group">
              <div className="mb-6 relative mx-auto h-64 w-64 overflow-hidden rounded-full border-4 border-yellow-400 shadow-lg shadow-purple-900/50">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B%E3%81%95%E3%82%93-EGLAAW49sfE6AwRFSrcMZcyx5AFpqh.png"
                  alt="Bさん（40代男性）"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: "50% 20%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-30"></div>
              </div>
              <div className="mb-4 flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <h3 className="mb-2 text-2xl font-bold text-yellow-300">
                Bさん<span className="ml-2 text-purple-300">（40代男性）</span>
              </h3>
              <p className="mb-6 text-purple-100">
                「長年昇給がなかった私ですが、鑑定結果に基づいて行動を変えたところ、
                <span className="font-medium text-yellow-300">半年後に昇進</span>することができました。
                さらに投資の運気も上昇し、資産が1年で30%増えました。 家族との時間も増え、本当に人生が変わりました。」
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <div className="flex items-center rounded-full bg-purple-900 bg-opacity-50 px-4 py-2 text-sm text-purple-100">
                  <TrendingUp className="mr-2 h-4 w-4 text-yellow-400" />
                  <span>昇進・昇給</span>
                </div>
                <div className="flex items-center rounded-full bg-purple-900 bg-opacity-50 px-4 py-2 text-sm text-purple-100">
                  <DollarSign className="mr-2 h-4 w-4 text-yellow-400" />
                  <span>資産増加</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-purple-900 bg-opacity-30 p-8 backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-bold text-yellow-300">鑑定後の変化</h3>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl bg-white bg-opacity-5 p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 mx-auto">
                  <span className="text-2xl font-bold text-purple-900">93%</span>
                </div>
                <p className="text-purple-100">鑑定後3ヶ月以内に金運の好転を実感</p>
              </div>
              <div className="rounded-xl bg-white bg-opacity-5 p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 mx-auto">
                  <span className="text-2xl font-bold text-purple-900">78%</span>
                </div>
                <p className="text-purple-100">収入が増加または臨時収入を獲得</p>
              </div>
              <div className="rounded-xl bg-white bg-opacity-5 p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 mx-auto">
                  <span className="text-2xl font-bold text-purple-900">85%</span>
                </div>
                <p className="text-purple-100">投資や資産運用の成果が向上</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
