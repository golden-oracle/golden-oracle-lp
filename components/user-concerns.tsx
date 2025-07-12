import { DollarSign, TrendingDown, Award, Zap, XCircle } from "lucide-react"
import Image from "next/image"

export function UserConcerns() {
  return (
    <section className="relative py-24 overflow-hidden cosmic-bg">
      <div className="absolute inset-0 z-0">
        <Image src="/images/galaxy-bg.jpg" alt="銀河背景" fill className="object-cover opacity-30" />
      </div>

      {/* 宇宙の波動効果 */}
      <div className="absolute inset-0 z-0 cosmic-wave"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block px-5 py-2 mb-3 text-xs font-semibold tracking-wider text-yellow-300 uppercase bg-purple-900 bg-opacity-70 rounded-full backdrop-blur-sm">
            あなたの悩み
          </span>
          <h2 className="mb-8 mystic-text text-5xl font-bold md:text-6xl">
            こんな<span className="text-purple-300">金運の壁</span>に阻まれていませんか？
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-xl text-purple-100">
            多くの方が抱える金銭的な悩み。それは、あなたの「金運」が封印されているサインかもしれません。
            ゴールデンオラクルは、そんなあなたの隠された金運の鍵を解き放ちます。
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl cosmic-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl mystic-hover">
              <div className="absolute -right-16 -top-16 h-40 w-40 bg-gradient-to-br from-red-400 to-red-600 opacity-20 transition-transform duration-500 group-hover:scale-150"></div>
              <div className="relative z-10 rounded-xl bg-purple-900 bg-opacity-70 p-8 backdrop-blur-md">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-900 border border-red-500 pulse-glow">
                  <TrendingDown className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-red-300">収支が赤字続き</h3>
                <p className="mb-6 text-purple-100">
                  毎月の収入よりも支出が多く、貯金ができない。いつも月末には財布が空っぽになってしまう。
                </p>
                <div className="flex items-center text-red-300">
                  <XCircle className="mr-2 h-5 w-5" />
                  <span className="text-sm font-medium">このままでは将来が不安...</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl cosmic-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl mystic-hover">
              <div className="absolute -right-16 -top-16 h-40 w-40 bg-gradient-to-br from-orange-400 to-orange-600 opacity-20 transition-transform duration-500 group-hover:scale-150"></div>
              <div className="relative z-10 rounded-xl bg-purple-900 bg-opacity-70 p-8 backdrop-blur-md">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-900 border border-orange-500 pulse-glow">
                  <DollarSign className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-orange-300">投資で成果が出ない</h3>
                <p className="mb-6 text-purple-100">
                  株や投資信託、暗号資産など、どんな投資をしても思うような結果が出ない。むしろ損失が増えていく。
                </p>
                <div className="flex items-center text-orange-300">
                  <XCircle className="mr-2 h-5 w-5" />
                  <span className="text-sm font-medium">資産が増える気配がない...</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl cosmic-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl mystic-hover">
              <div className="absolute -right-16 -top-16 h-40 w-40 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-20 transition-transform duration-500 group-hover:scale-150"></div>
              <div className="relative z-10 rounded-xl bg-purple-900 bg-opacity-70 p-8 backdrop-blur-md">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-900 border border-yellow-500 pulse-glow">
                  <Award className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-yellow-300">昇給のチャンスがない</h3>
                <p className="mb-6 text-purple-100">
                  どれだけ頑張っても昇給や昇進のチャンスに恵まれない。周りの人だけが評価されているように感じる。
                </p>
                <div className="flex items-center text-yellow-300">
                  <XCircle className="mr-2 h-5 w-5" />
                  <span className="text-sm font-medium">努力が報われない...</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 rounded-2xl gold-gradient p-1 shadow-xl mystic-border">
            <div className="rounded-xl bg-purple-900 bg-opacity-70 p-8 backdrop-blur-md md:p-12 rotating-light">
              <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8">
                <div className="mb-6 flex-shrink-0 md:mb-0">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-yellow-400 pulse-glow">
                    {/* 第三の目の画像のみを表示し、テキストラベルは削除 */}
                    <Image src="/images/mystic-eye.png" alt="第三の目" fill className="object-cover floating" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 to-transparent opacity-20"></div>

                    {/* 魔法の粒子効果 */}
                    <div className="absolute inset-0 magic-particles-container">
                      {[...Array(8)].map((_, i) => (
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
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <div className="mb-4 inline-flex items-center rounded-full bg-purple-800 bg-opacity-70 px-4 py-2 text-yellow-300 border border-purple-700 mystic-hover">
                    <Zap className="mr-2 h-4 w-4" />
                    <span className="text-sm font-medium">あなたの金運を解放します</span>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-yellow-300 md:text-3xl">
                    実は、あなたには<span className="text-white">眠っている金運</span>があります
                  </h3>
                  <p className="mb-6 text-lg text-purple-100">
                    ゴールデンオラクルは、あなたの生年月日と名前から、あなた本来の金運を読み解きます。
                    そして、その金運を最大限に引き出すための具体的な方法をお伝えします。
                    <span className="mt-2 block font-medium text-yellow-300">
                      あなただけの「金運の鍵」を見つけ出し、人生を好転させるお手伝いをします。
                    </span>
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                    <div className="flex items-center rounded-full bg-purple-800 bg-opacity-50 px-4 py-2 border border-purple-700 mystic-hover">
                      <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-purple-900">
                        ✓
                      </span>
                      <span className="text-sm font-medium text-purple-100">的中率98%の鑑定</span>
                    </div>
                    <div className="flex items-center rounded-full bg-purple-800 bg-opacity-50 px-4 py-2 border border-purple-700 mystic-hover">
                      <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-purple-900">
                        ✓
                      </span>
                      <span className="text-sm font-medium text-purple-100">具体的な金運アップ法</span>
                    </div>
                    <div className="flex items-center rounded-full bg-purple-800 bg-opacity-50 px-4 py-2 border border-purple-700 mystic-hover">
                      <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-purple-900">
                        ✓
                      </span>
                      <span className="text-sm font-medium text-purple-100">短期間で実感できる変化</span>
                    </div>
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
