import { Shield } from "lucide-react"

export function Guarantee() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 p-1 shadow-xl">
            <div className="rounded-xl bg-white p-8 md:p-12">
              <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8">
                <div className="mb-6 flex-shrink-0 md:mb-0">
                  <div className="relative h-32 w-32">
                    <Shield className="h-32 w-32 text-amber-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">100%</span>
                    </div>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <h2 className="mb-4 text-3xl font-bold text-gray-900">
                    <span className="text-amber-600">100%満足保証</span>で安心
                  </h2>
                  <p className="mb-6 text-lg text-gray-600">
                    私たちは、お客様の満足を最優先に考えています。無料鑑定の結果に満足いただけない場合は、
                    有料サービスへの勧誘は一切いたしません。また、有料サービスをご利用いただいた場合でも、
                    30日間の返金保証をご用意。リスクゼロで、あなたの金運アップを実現します。
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                    <div className="flex items-center rounded-full bg-amber-50 px-4 py-2">
                      <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                        ✓
                      </span>
                      <span className="text-sm font-medium text-gray-700">30日間返金保証</span>
                    </div>
                    <div className="flex items-center rounded-full bg-amber-50 px-4 py-2">
                      <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                        ✓
                      </span>
                      <span className="text-sm font-medium text-gray-700">無理な勧誘なし</span>
                    </div>
                    <div className="flex items-center rounded-full bg-amber-50 px-4 py-2">
                      <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                        ✓
                      </span>
                      <span className="text-sm font-medium text-gray-700">安心のサポート体制</span>
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
