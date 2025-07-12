import type React from "react"
import "./globals.css"
import "./mobile.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ゴールデンオラクル | あなたの金運を最大化する占いサービス",
  description:
    "的中率98%！占星術と四柱推命による精密鑑定で、あなたの金運を劇的に向上させます。今だけ無料で鑑定を体験できます。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
