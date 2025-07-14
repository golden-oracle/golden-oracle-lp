"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import DesktopLandingPage from "@/components/desktop"
import MobileLandingPage from "@/components/mobile"

export default function Page() {
  const isMobile = useIsMobile()

  // モバイルかPCかで表示するLPを切り替える
  return (
    <>
      {isMobile ? <MobileLandingPage /> : <DesktopLandingPage />}
    </>
  )
}
