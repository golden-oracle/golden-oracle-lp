import Image from "next/image"
import { ArrowRight, User, Eye, Sparkles } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="relative py-24 overflow-hidden bg-purple-950">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image src="/images/sacred-geometry.png" alt="神聖幾何学" fill className="object-cover" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block px-5 py-2 mb-3 text-xs font-semibold tracking-wider text-yellow-300 uppercase bg-purple-900 bg-opacity-70 rounded-full backdrop-blur-sm">
            簡単3ステップ
          </span>
          <h2 className="mb-8 mystic-text text-5xl font-bold md:text-6xl">
            あなたの<span className="text-yellow-400">金運</span>を解放する方法
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-xl text-purple-100">
            ゴールデンオラクルの鑑定プロセスは、シンプルかつ効果的。たった3ステップで
            あなたの眠っている金運ポテンシャルを最大限に引き出します。
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center border-4 border-yellow-300 pulse-glow">
                  <User className="h-12 w-12 text-purple-900" />
                  <div className="absolute -top-2 -right-2">
                    <div className="h-6 w-6 rounded-full bg-purple-900 text-yellow-300 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-0 pt-16 pb-8 px-6 rounded-xl bg-white bg-opacity-5 backdrop-blur-sm border border-purple-800 transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="mb-4 text-xl font-bold text-yellow-300">簡単情報入力</h3>
                <p className="text-purple-100">
                  あなたの生年月日と名前を入力するだけ。これだけで、あなただけの金運パターンを解析します。
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center border-4 border-purple-300 pulse-glow">
                  <Eye className="h-12 w-12 text-white" />
                  <div className="absolute -top-2 -right-2">
                    <div className="h-6 w-6 rounded-full bg-yellow-400 text-purple-900 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-0 pt-16 pb-8 px-6 rounded-xl bg-white bg-opacity-5 backdrop-blur-sm border border-purple-800 transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="mb-4 text-xl font-bold text-yellow-300">専門家による鑑定</h3>
                <p className="text-purple-100">
                  占星術と四柱推命の専門家が、あなたの金運を徹底分析。眠っている運気を見つけ出します。
                </p>
              </div>
              <div className="absolute top-1/2 -right-4 hidden md:block">
                <ArrowRight className="h-8 w-8 text-yellow-400" />
              </div>
            </div>

            <div className="group relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center border-4 border-yellow-300 pulse-glow">
                  <Sparkles className="h-12 w-12 text-purple-900" />
                  <div className="absolute -top-2 -right-2">
                    <div className="h-6 w-6 rounded-full bg-purple-900 text-yellow-300 flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-0 pt-16 pb-8 px-6 rounded-xl bg-white bg-opacity-5 backdrop-blur-sm border border-purple-800 transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="mb-4 text-xl font-bold text-yellow-300">金運開花プラン</h3>
                <p className="text-purple-100">
                  あなた専用の金運開花プランをお届け。具体的な行動指針に従うだけで、金運が劇的に変化します。
                </p>
              </div>
              <div className="absolute top-1/2 -right-4 hidden md:block">
                <ArrowRight className="h-8 w-8 text-yellow-400" />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <a
              href="#free-consultation"
              className="inline-flex items-center rounded-full bg-purple-900 bg-opacity-50 px-8 py-3 text-lg font-medium text-yellow-300 border border-yellow-500 hover:bg-opacity-70 transition-all duration-300"
            >
              今すぐ無料鑑定を受ける
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
