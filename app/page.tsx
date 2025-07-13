// app/page.tsx
import { FreeConsultationForm } from "../components/FreeConsultationForm"

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-black px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center text-purple-100">
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-4">
          ゴールデンオラクルへようこそ
        </h1>
        <p className="text-base sm:text-lg text-purple-300 mb-6">
          あなたの眠れる金運を、神秘の力で開花させましょう。無料で今すぐ体験！
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <FreeConsultationForm />
      </div>
    </main>
  )
}
