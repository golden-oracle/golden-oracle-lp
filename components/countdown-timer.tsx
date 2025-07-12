"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

interface CountdownTimerProps {
  isMobile?: boolean
}

export function CountdownTimer({ isMobile = false }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          // タイマーが0になったら24時間にリセット
          return { hours: 23, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (isMobile) {
    return (
      <div className="mb-6">
        <p className="text-yellow-300 mb-1 text-sm font-semibold">
          <Clock className="inline-block mr-1 h-4 w-4" /> このオファーの終了まで
        </p>
        <div className="offer-countdown-mobile">
          <div className="countdown-item-mobile">
            <div className="countdown-number-mobile">{String(timeLeft.hours).padStart(2, "0")}</div>
            <div className="countdown-label-mobile">時間</div>
          </div>
          <div className="countdown-item-mobile">
            <div className="countdown-number-mobile">{String(timeLeft.minutes).padStart(2, "0")}</div>
            <div className="countdown-label-mobile">分</div>
          </div>
          <div className="countdown-item-mobile">
            <div className="countdown-number-mobile">{String(timeLeft.seconds).padStart(2, "0")}</div>
            <div className="countdown-label-mobile">秒</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-8">
      <p className="text-yellow-300 mb-2 font-semibold">
        <Clock className="inline-block mr-2 h-5 w-5" /> このオファーの終了まで
      </p>
      <div className="offer-countdown">
        <div className="countdown-item">
          <div className="countdown-number">{String(timeLeft.hours).padStart(2, "0")}</div>
          <div className="countdown-label">時間</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{String(timeLeft.minutes).padStart(2, "0")}</div>
          <div className="countdown-label">分</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{String(timeLeft.seconds).padStart(2, "0")}</div>
          <div className="countdown-label">秒</div>
        </div>
      </div>
    </div>
  )
}
