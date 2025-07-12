import Image from "next/image"
import { CheckCircle, Users, ShieldCheck, Star, TrendingUp, Award, DollarSign } from "lucide-react"

export function ServiceFeatures() {
  return (
    <section className="relative py-24 overflow-hidden cosmic-bg">
      <div className="absolute inset-0 z-0">
        <Image src="/images/mystic-pattern.jpg" alt="神秘的なパターン" fill className="object-cover opacity-10" />
      </div>

      {/* 宇宙の装飾要素 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/3 h-80 w-80 rounded-full bg-indigo-700 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 h-64 w-64 rounded-full bg-purple-700 opacity-10 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block px-5 py-2 mb-3 text-xs font-semibold tracking-wider text-yellow-300 uppercase bg-purple-900 bg-opacity-70 rounded-full backdrop-blur-sm">
            選ばれる理由
          </span>
          <h2 className="mb-6 mystic-text text-5xl font-bold md:text-6xl">
            <span className="text-purple-300">ゴールデンオラクル</span>が選ばれる理由
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-xl text-purple-100">
            10万人以上が体験し、98%の方が「金運が上がった」と実感。
            ゴールデンオラクルは、科学的根拠と東洋の叡智を融合させた唯一の金運占いです。
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl cosmic-card transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              <div className="relative z-10 rounded-xl bg-purple-900 bg-opacity-70 p-8 backdrop-blur-md">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-800 border border-yellow-400 pulse-glow">
                  <CheckCircle className="h-10 w-10 text-yellow-400" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-yellow-300">的中率98％！</h3>
                <p className="text-purple-100">
                  占星術と四柱推命による精密鑑定で、あなたの金運を正確に読み解きます。
                  10万人以上の鑑定実績から導き出された独自のアルゴリズムで、驚異の的中率を実現。
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-purple-800 bg-purple-900 shadow-sm">
                        <Star className="h-full w-full p-1 text-yellow-400" fill="currentColor" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl cosmic-card transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="relative z-10 rounded-xl bg-purple-900 bg-opacity-70 p-8 backdrop-blur-md">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-800 border border-blue-400 pulse-glow">
                  <Users className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-blue-300">10万人以上</h3>
                <p className="text-purple-100">
                  これまでに10万人以上が金運アップを実感。
                  「収入が1.5倍に」「投資で大きなリターン」「思いがけない臨時収入」など、
                  多くの方が金運の劇的な変化を体験しています。
                </p>
                {/* 5つの重なり合った円形（リング）をよりイメージしやすいアイコンに変更 */}
                <div className="mt-6 flex justify-center">
                  <div className="flex flex-col items-center">
                    <div className="flex space-x-2 mb-2">
                      <TrendingUp className="h-6 w-6 text-blue-400" />
                      <DollarSign className="h-6 w-6 text-blue-400" />
                      <Award className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="bg-purple-800 bg-opacity-50 px-4 py-1 rounded-full text-sm text-blue-300 border border-blue-700">
                      多くの成功事例
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl cosmic-card transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <div className="relative z-10 rounded-xl bg-purple-900 bg-opacity-70 p-8 backdrop-blur-md">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-800 border border-purple-400 pulse-glow">
                  <ShieldCheck className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-purple-300">無料鑑定</h3>
                <p className="text-purple-100">
                  初回の金運鑑定は完全無料。リスクゼロで、あなたの金運を知ることができます。
                  さらに、30日間の返金保証付きで、安心して金運開花の旅を始められます。
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="rounded-full bg-purple-800 bg-opacity-50 px-4 py-1 border border-purple-700">
                    <span className="text-sm font-medium text-purple-300">リスクゼロ</span>
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
