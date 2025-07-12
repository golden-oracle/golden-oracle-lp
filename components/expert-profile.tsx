import Image from "next/image"
import { Star, Award, BookOpen } from "lucide-react"

export function ExpertProfile() {
  return (
    <section className="relative py-24 overflow-hidden bg-purple-950">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image src="/images/sacred-geometry.png" alt="神聖幾何学" fill className="object-cover" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block px-5 py-2 mb-3 text-xs font-semibold tracking-wider text-yellow-300 uppercase bg-purple-900 bg-opacity-70 rounded-full backdrop-blur-sm">
            鑑定師紹介
          </span>
          <h2 className="mb-8 mystic-text text-5xl font-bold md:text-6xl">
            あなたの<span className="text-yellow-400">金運</span>を読み解く専門家
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-xl text-purple-100">
            ゴールデンオラクルの鑑定師は、占星術と四柱推命の第一人者。
            数々の著名人や経営者の金運を的中させてきた実績を持ちます。
          </p>

          <div className="grid gap-12 md:grid-cols-2">
            {/* 神月先生のプロフィール - 実写画像を復活 */}
            <div className="group">
              <div className="mb-6 relative mx-auto h-72 w-72 overflow-hidden rounded-full border-4 border-yellow-400 shadow-lg shadow-purple-900/50">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%A5%9E%E6%9C%88-JkiPRVwS4yivQnx0QPTiZU2A816gkv.png"
                  alt="神月 龍道先生"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: "50% 15%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-30"></div>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-yellow-300">
                神月 龍道<span className="ml-2 text-purple-300">先生</span>
              </h3>
              <p className="mb-4 text-sm font-medium text-purple-300">占星術・四柱推命鑑定歴25年</p>
              <p className="mb-6 text-purple-100">
                東洋占術と西洋占星術を融合させた独自の鑑定法で、 多くの実業家や著名人の金運を的中させてきました。
                特に「金運の流れ」を読み解く能力に長け、 眠っている金運を目覚めさせる秘術を伝授します。
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <div className="flex items-center rounded-full bg-purple-900 bg-opacity-50 px-4 py-2 text-sm text-purple-100">
                  <Star className="mr-2 h-4 w-4 text-yellow-400" fill="currentColor" />
                  <span>金運鑑定の第一人者</span>
                </div>
                <div className="flex items-center rounded-full bg-purple-900 bg-opacity-50 px-4 py-2 text-sm text-purple-100">
                  <Award className="mr-2 h-4 w-4 text-yellow-400" />
                  <span>的中率98.7%</span>
                </div>
                <div className="flex items-center rounded-full bg-purple-900 bg-opacity-50 px-4 py-2 text-sm text-purple-100">
                  <BookOpen className="mr-2 h-4 w-4 text-yellow-400" />
                  <span>著書多数</span>
                </div>
              </div>
            </div>

            {/* 星川先生のプロフィール - 実写画像を復活 */}
            <div className="group">
              <div className="mb-6 relative mx-auto h-72 w-72 overflow-hidden rounded-full border-4 border-yellow-400 shadow-lg shadow-purple-900/50">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%98%9F%E5%B7%9D-92aaWMCcg5joepUb2rVhMPNrKgBdux.png"
                  alt="星川 瑞穂先生"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: "50% 20%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-30"></div>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-yellow-300">
                星川 瑞穂<span className="ml-2 text-purple-300">先生</span>
              </h3>
              <p className="mb-4 text-sm font-medium text-purple-300">金運開花コンサルタント歴20年</p>
              <p className="mb-6 text-purple-100">
                数秘術と心理学を組み合わせた独自のアプローチで、 金運を阻む心理的ブロックを解放する専門家。
                多くの経営者や投資家の金運を劇的に改善させた実績を持ち、 具体的な金運開花プランを提案します。
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <div className="flex items-center rounded-full bg-purple-900 bg-opacity-50 px-4 py-2 text-sm text-purple-100">
                  <Star className="mr-2 h-4 w-4 text-yellow-400" fill="currentColor" />
                  <span>金運心理学の権威</span>
                </div>
                <div className="flex items-center rounded-full bg-purple-900 bg-opacity-50 px-4 py-2 text-sm text-purple-100">
                  <Award className="mr-2 h-4 w-4 text-yellow-400" />
                  <span>顧客満足度99.3%</span>
                </div>
                <div className="flex items-center rounded-full bg-purple-900 bg-opacity-50 px-4 py-2 text-sm text-purple-100">
                  <BookOpen className="mr-2 h-4 w-4 text-yellow-400" />
                  <span>メディア出演多数</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-purple-900 bg-opacity-30 p-8 backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-bold text-yellow-300">専門家からのメッセージ</h3>
            <p className="italic text-purple-100">
              「あなたの中には、まだ眠っている金運があります。 私たちの鑑定によって、その金運を目覚めさせ、
              人生を豊かに変えていくお手伝いをさせてください。 今、この瞬間があなたの金運の転機になるかもしれません。」
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
