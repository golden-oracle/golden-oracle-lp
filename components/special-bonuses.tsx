import Image from "next/image"
import { Gift, Check, FileText, Calendar } from "lucide-react"

export function SpecialBonuses() {
  return (
    <section className="relative py-24 overflow-hidden bg-purple-950">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image src="/images/sacred-geometry.png" alt="神聖幾何学" fill className="object-cover" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block px-5 py-2 mb-3 text-xs font-semibold tracking-wider text-yellow-300 uppercase bg-purple-900 bg-opacity-70 rounded-full backdrop-blur-sm">
            豪華特典
          </span>
          <h2 className="mb-8 mystic-text text-5xl font-bold md:text-6xl">
            今だけの<span className="text-yellow-400">3大特典</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-xl text-purple-100">
            無料鑑定を受けると、通常<span className="text-yellow-300 font-semibold">29,800円相当</span>の
            金運アップ特典が無料でついてきます。 今だけの期間限定チャンスをお見逃しなく！
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* 特典1 */}
            <div className="group relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center border-4 border-yellow-300 pulse-glow">
                  <FileText className="h-12 w-12 text-purple-900" />
                </div>
              </div>
              <div className="relative z-0 pt-16 pb-8 px-6 rounded-xl bg-white bg-opacity-5 backdrop-blur-sm border border-purple-800 transition-transform duration-300 group-hover:-translate-y-2">
                <div className="absolute -top-3 -right-3 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-purple-900">
                  特典1
                </div>
                <h3 className="mb-4 text-xl font-bold text-yellow-300">無料鑑定結果</h3>
                <p className="mb-6 text-purple-100">
                  あなた専用の詳細な金運分析結果と、金運を開花させるための具体的なプランをお届けします。
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-yellow-400" />
                    <span className="text-sm text-purple-100">あなたの金運の現状分析</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-yellow-400" />
                    <span className="text-sm text-purple-100">金運を阻む要因の特定</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-yellow-400" />
                    <span className="text-sm text-purple-100">金運開花のタイミング</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <span className="inline-block rounded-full bg-purple-900 bg-opacity-50 px-4 py-2 text-sm font-medium text-yellow-300 line-through">
                    通常価格: 12,800円
                  </span>
                </div>
              </div>
            </div>

            {/* 特典2 */}
            <div className="group relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center border-4 border-purple-300 pulse-glow">
                  <Gift className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="relative z-0 pt-16 pb-8 px-6 rounded-xl bg-white bg-opacity-5 backdrop-blur-sm border border-purple-800 transition-transform duration-300 group-hover:-translate-y-2">
                <div className="absolute -top-3 -right-3 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-purple-900">
                  特典2
                </div>
                <h3 className="mb-4 text-xl font-bold text-yellow-300">特別特典</h3>
                <p className="mb-6 text-purple-100">
                  古来より伝わる金運開花の秘術を7つの実践法としてまとめた特別マニュアル。
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-yellow-400" />
                    <span className="text-sm text-purple-100">金運を引き寄せる7つの秘術</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-yellow-400" />
                    <span className="text-sm text-purple-100">日常で実践できる開運法</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-yellow-400" />
                    <span className="text-sm text-purple-100">金運パワーを高める習慣</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <span className="inline-block rounded-full bg-purple-900 bg-opacity-50 px-4 py-2 text-sm font-medium text-yellow-300 line-through">
                    通常価格: 9,800円
                  </span>
                </div>
              </div>
            </div>

            {/* 特典3 */}
            <div className="group relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center border-4 border-green-300 pulse-glow">
                  <Calendar className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="relative z-0 pt-16 pb-8 px-6 rounded-xl bg-white bg-opacity-5 backdrop-blur-sm border border-purple-800 transition-transform duration-300 group-hover:-translate-y-2">
                <div className="absolute -top-3 -right-3 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-purple-900">
                  特典3
                </div>
                <h3 className="mb-4 text-xl font-bold text-yellow-300">30日間実践プログラム</h3>
                <p className="mb-6 text-purple-100">
                  30日間で金運を段階的に開花させる実践プログラム。毎日のアクションが明確に示されています。
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-yellow-400" />
                    <span className="text-sm text-purple-100">30日間の詳細アクションプラン</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-yellow-400" />
                    <span className="text-sm text-purple-100">毎日の金運開花ワーク</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-yellow-400" />
                    <span className="text-sm text-purple-100">進捗確認チェックシート</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <span className="inline-block rounded-full bg-purple-900 bg-opacity-50 px-4 py-2 text-sm font-medium text-yellow-300 line-through">
                    通常価格: 15,800円
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="rounded-2xl gold-gradient p-1 shadow-xl">
              <div className="rounded-xl bg-purple-900 bg-opacity-70 p-8 backdrop-blur-md">
                <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8">
                  <div className="mb-6 flex-shrink-0 md:mb-0">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-yellow-400 pulse-glow">
                      <div className="absolute inset-0 flex items-center justify-center bg-yellow-400">
                        <Gift className="h-12 w-12 text-purple-900" />
                      </div>
                    </div>
                  </div>

                  <div className="text-center md:text-left">
                    <h3 className="mb-4 text-2xl font-bold text-yellow-300">
                      3大特典の総額<span className="text-white ml-2">38,400円相当</span>
                    </h3>
                    <p className="mb-6 text-purple-100">
                      今なら無料鑑定を受けるだけで、これらの特典が
                      <span className="font-medium text-yellow-300">すべて無料</span>でもらえます。
                      この機会をお見逃しなく！
                    </p>
                    <a
                      href="#free-consultation"
                      className="inline-flex items-center rounded-full gold-gradient px-8 py-3 text-lg font-medium text-purple-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      今すぐ無料鑑定を受ける
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
