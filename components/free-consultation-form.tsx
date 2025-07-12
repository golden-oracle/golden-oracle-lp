"use client"

interface FreeConsultationFormProps {
  isMobile?: boolean
}

export function FreeConsultationForm({ isMobile = false }: FreeConsultationFormProps) {
  return (
    <form action="https://formsubmit.co/info@golden-oracle.jp" method="POST">
      <input type="text" name="name" placeholder="お名前" required />
      <input type="text" name="birthday" placeholder="生年月日" required />
      <input type="email" name="email" placeholder="メールアドレス" required />

      {/* スパム対策（ユーザーには見えません） */}
      <input type="text" name="_honey" style={{ display: "none" }} />

      {/* 送信後に飛ばすページ（thanksページ） */}
      <input type="hidden" name="_next" value="https://golden-oracle-lp-2tkw.vercel.app/thanks" />

      <button type="submit">送信する</button>
    </form>
  )
}
