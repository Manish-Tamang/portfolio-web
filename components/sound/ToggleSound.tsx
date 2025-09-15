"use client"

import { forwardRef, useImperativeHandle, useRef } from "react"

export type ToggleSoundHandle = {
  play: () => void
}

export default forwardRef<ToggleSoundHandle, { src?: string }>(function ToggleSound(
  { src = "/sound/light-switch-156813.mp3" },
  ref
) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useImperativeHandle(
    ref,
    () => ({
      play: () => {
        const audio = audioRef.current
        if (!audio) return
        try {
          audio.currentTime = 0
          void audio.play()
        } catch {}
      },
    }),
    []
  )

  return <audio ref={audioRef} src={src} preload="auto" />
})



