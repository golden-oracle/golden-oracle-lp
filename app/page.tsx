"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import DesktopLandingPage from "./desktop"
import MobileLandingPage from "./mobile"

export default function Home() {
  const isMobile = useIsMobile()

  return isMobile ? <MobileLandingPage /> : <DesktopLandingPage />
}
