import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export function Faq() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <span className="inline-block px-4 py-1.5 mb-3 text-xs font-semibold tracking-wider text-amber-700 uppercase bg-amber-100 rounded-full">
              よくある質問
            </span>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              <span className="text-amber-600">ご不明点</span>にお答えします
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              ゴールデンオラクルについてよくいただくご質問をまとめました。
              その他のご質問は、お気軽にお問い合わせください。
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="mb-4 rounded-xl border border-gray-200 px-6 shadow-sm">
              <AccordionTrigger className="text-left font-medium py-4">
                <div className="flex items-center">
                  <HelpCircle className="mr-3 h-5 w-5 text-amber-500 flex-shrink-0" />
                  <span>本当に無料ですか？</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4 pt-0">
                <div className="pl-8">
                  はい、初回鑑定は完全無料です。お客様に私たちのサービスの質を体験していただくために、
                  無料で詳細な鑑定結果をお届けしています。その後、より詳しい有料サービスのご案内をさせていただくことがありますが、
                  ご利用は完全に任意です。
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="mb-4 rounded-xl border border-gray-200 px-6 shadow-sm">
              <AccordionTrigger className="text-left font-medium py-4">
                <div className="flex items-center">
                  <HelpCircle className="mr-3 h-5 w-5 text-amber-500 flex-shrink-0" />
                  <span>鑑定結果はいつ届きますか？</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4 pt-0">
                <div className="pl-8">
                  お申し込み後、24時間以内にご登録いただいたメールアドレスに鑑定結果をお送りいたします。
                  迷惑メールフォルダに振り分けられる場合もありますので、ご確認ください。
                  また、メールが届かない場合は、お問い合わせフォームからご連絡ください。
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="mb-4 rounded-xl border border-gray-200 px-6 shadow-sm">
              <AccordionTrigger className="text-left font-medium py-4">
                <div className="flex items-center">
                  <HelpCircle className="mr-3 h-5 w-5 text-amber-500 flex-shrink-0" />
                  <span>鑑定結果に満足できなかった場合はどうなりますか？</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4 pt-0">
                <div className="pl-8">
                  初回鑑定は無料ですので、リスクはございません。有料サービスについては、
                  ご満足いただけない場合の30日間返金保証制度を設けております。
                  詳細は利用規約をご確認ください。お客様の満足を最優先に考えております。
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="mb-4 rounded-xl border border-gray-200 px-6 shadow-sm">
              <AccordionTrigger className="text-left font-medium py-4">
                <div className="flex items-center">
                  <HelpCircle className="mr-3 h-5 w-5 text-amber-500 flex-shrink-0" />
                  <span>金運が上がる保証はありますか？</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4 pt-0">
                <div className="pl-8">
                  鑑定結果に基づいたアドバイスを実践することで、多くのお客様が金運の向上を実感されています。
                  ただし、結果には個人差があり、すべての方に同じ効果をお約束するものではありません。
                  最大限の効果を得るためには、アドバイスに従った行動が重要です。
                  なお、98%のお客様が何らかの金運アップを実感されています。
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="mb-4 rounded-xl border border-gray-200 px-6 shadow-sm">
              <AccordionTrigger className="text-left font-medium py-4">
                <div className="flex items-center">
                  <HelpCircle className="mr-3 h-5 w-5 text-amber-500 flex-shrink-0" />
                  <span>どのような内容の鑑定結果が届きますか？</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4 pt-0">
                <div className="pl-8">
                  鑑定結果には、あなたの金運の現状分析、金運を阻害している要因、金運アップのための具体的なアドバイス、
                  金運が高まる時期や行動などが含まれます。あなた専用にカスタマイズされた内容で、
                  すぐに実践できる具体的なアドバイスをお届けします。
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
