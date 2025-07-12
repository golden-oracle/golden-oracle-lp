import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get("name") as string
    const birth_year = formData.get("birth_year") as string
    const birth_month = formData.get("birth_month") as string
    const birth_day = formData.get("birth_day") as string
    const email = formData.get("email") as string

    console.log("フォームデータ受信:", { name, birth_year, birth_month, birth_day, email })

    // Resendでメール送信（テスト用に認証済みメールアドレスに送信）
    const { data, error } = await resend.emails.send({
      from: "ゴールデンオラクル <onboarding@resend.dev>",
      to: ["baaaaabachan17@gmail.com"], // テスト用：認証済みメールアドレス
      subject: "ゴールデンオラクル - 新しい鑑定申込み",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8a2be2; border-bottom: 2px solid #f9d423; padding-bottom: 10px;">
            新しい鑑定申込みが届きました
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">お客様情報</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">お名前:</td>
                <td style="padding: 8px 0; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">生年月日:</td>
                <td style="padding: 8px 0; color: #333;">${birth_year}年${birth_month}月${birth_day}日</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">メールアドレス:</td>
                <td style="padding: 8px 0; color: #333;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">申込み日時:</td>
                <td style="padding: 8px 0; color: #333;">${new Date().toLocaleString("ja-JP")}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #856404;">
              <strong>対応が必要です:</strong><br>
              24時間以内にお客様へ鑑定結果をお送りください。
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      throw error
    }

    console.log("Email sent successfully:", data)

    // 成功時はthanksページにリダイレクト
    const params = new URLSearchParams({
      name,
      birth_year,
      birth_month,
      birth_day,
      email,
    })

    return NextResponse.redirect(new URL(`/thanks?${params.toString()}`, request.url))
  } catch (error) {
    console.error("メール送信エラー:", error)

    // エラー時もthanksページにリダイレクト（ユーザー体験を損なわないため）
    // フォームデータを再取得せずに、既存の変数を使用
    const params = new URLSearchParams({
      name: "エラー",
      birth_year: "2024",
      birth_month: "01",
      birth_day: "01",
      email: "error@example.com",
    })

    return NextResponse.redirect(new URL(`/thanks?${params.toString()}`, request.url))
  }
}
