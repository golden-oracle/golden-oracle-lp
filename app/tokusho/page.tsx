import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TokushoPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            ホームに戻る
          </Link>
        </div>

        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">特定商取引法に基づく表記</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">事業者名</h2>
              <p className="text-gray-700">株式会社アシスト</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">代表者</h2>
              <p className="text-gray-700">代表取締役 田中太郎</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">所在地</h2>
              <p className="text-gray-700">
                〒104-0061
                <br />
                東京都中央区銀座1丁目12番4号 N&E BLD.6F
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">連絡先</h2>
              <p className="text-gray-700">
                電話番号：03-1234-5678
                <br />
                メールアドレス：info@golden-oracle.jp
                <br />
                営業時間：平日10:00～18:00（土日祝日を除く）
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">販売価格</h2>
              <div className="text-gray-700">
                <p className="mb-4">■ 無料鑑定サービス</p>
                <p className="mb-4">料金：無料</p>

                <p className="mb-4">■ 有料鑑定サービス（オプション）</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>詳細金運鑑定：9,800円（税込）</li>
                  <li>プレミアム金運鑑定：19,800円（税込）</li>
                  <li>VIP金運鑑定：39,800円（税込）</li>
                </ul>
                <p className="mt-4 text-sm">※価格は予告なく変更される場合があります。</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">支払方法</h2>
              <div className="text-gray-700">
                <ul className="list-disc list-inside space-y-2">
                  <li>クレジットカード決済（VISA、MasterCard、JCB、AMEX、Diners）</li>
                  <li>銀行振込</li>
                  <li>コンビニ決済</li>
                  <li>PayPal</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">支払時期</h2>
              <div className="text-gray-700">
                <ul className="list-disc list-inside space-y-2">
                  <li>クレジットカード決済：お申し込み時</li>
                  <li>銀行振込：お申し込み後7日以内</li>
                  <li>コンビニ決済：お申し込み後7日以内</li>
                  <li>PayPal：お申し込み時</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">サービス提供時期</h2>
              <p className="text-gray-700">
                お申し込み及びお支払い確認後、24時間以内にメールにて鑑定結果をお送りいたします。
                <br />
                ※土日祝日、年末年始等の当社休業日を除く
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">返品・交換・キャンセル</h2>
              <div className="text-gray-700">
                <p className="mb-4">■ 返品・交換について</p>
                <p className="mb-4">
                  本サービスはデジタルコンテンツのため、原則として返品・交換はお受けできません。
                  ただし、以下の場合に限り、30日間の返金保証を適用いたします。
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>システムの不具合により鑑定結果が正常に配信されなかった場合</li>
                  <li>明らかに当社の過失による内容の誤りがあった場合</li>
                </ul>

                <p className="mb-4">■ キャンセルについて</p>
                <p className="mb-4">
                  鑑定結果配信前であれば、お申し込みのキャンセルが可能です。
                  配信後のキャンセルはお受けできませんので、予めご了承ください。
                </p>

                <p className="mb-4">■ 返金について</p>
                <p>
                  返金が認められた場合、お支払い方法に応じて以下の方法で返金いたします。
                  <br />
                  ・クレジットカード決済：カード会社を通じた返金
                  <br />
                  ・銀行振込：指定口座への振込返金
                  <br />
                  ・その他：個別にご相談
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">個人情報の取扱い</h2>
              <p className="text-gray-700">
                お客様の個人情報については、当社のプライバシーポリシーに基づき、適切に管理・保護いたします。 詳細は
                <Link href="/privacy" className="text-purple-600 hover:underline">
                  プライバシーポリシー
                </Link>
                をご確認ください。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">その他</h2>
              <div className="text-gray-700">
                <p className="mb-4">
                  ■ 鑑定結果について
                  <br />
                  鑑定結果は娯楽の範囲内でお楽しみください。
                  鑑定結果に基づく行動により生じた損害について、当社は一切の責任を負いません。
                </p>

                <p className="mb-4">
                  ■ 著作権について
                  <br />
                  鑑定結果の内容に関する著作権は当社に帰属します。 無断での複製、転載、配布等は禁止されています。
                </p>

                <p>
                  ■ 準拠法・管轄裁判所
                  <br />
                  本取引に関する準拠法は日本法とし、紛争が生じた場合は東京地方裁判所を専属的合意管轄裁判所とします。
                </p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                制定日：2024年1月1日
                <br />
                最終更新日：2024年1月1日
                <br />
                株式会社アシスト
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
