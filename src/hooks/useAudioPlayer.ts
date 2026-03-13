import { useState, useCallback, useRef, useEffect } from 'react'

export interface PlayerState {
  isOpen: boolean
  isPlaying: boolean
  title: string
  subtitle: string
  progress: number
}

export function useAudioPlayer() {
  const [player, setPlayer] = useState<PlayerState>({
    isOpen: false,
    isPlaying: false,
    title: '',
    subtitle: '',
    progress: 0,
  })

  // Use a ref to drive the progress interval without stale closures
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const clearTick = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  // Advance progress by ~0.05% every 200ms (simulates ~55 min sermon)
  const startTick = useCallback(() => {
    clearTick()
    intervalRef.current = setInterval(() => {
      setPlayer((p) => {
        if (!p.isPlaying || p.progress >= 100) {
          clearTick()
          return p
        }
        return { ...p, progress: Math.min(100, p.progress + 0.05) }
      })
    }, 200)
  }, [])

  const openSermon = useCallback(
    (title: string, subtitle: string) => {
      setPlayer({ isOpen: true, isPlaying: true, title, subtitle, progress: 0 })
      startTick()
    },
    [startTick]
  )

  const togglePlay = useCallback(() => {
    setPlayer((p) => {
      const next = { ...p, isPlaying: !p.isPlaying }
      if (next.isPlaying) {
        // Will be started by the effect below
      } else {
        clearTick()
      }
      return next
    })
  }, [])

  // Re-start tick whenever isPlaying flips to true
  useEffect(() => {
    if (player.isPlaying && player.isOpen) {
      startTick()
    }
    return clearTick
  }, [player.isPlaying, player.isOpen, startTick])

  const closePlayer = useCallback(() => {
    clearTick()
    setPlayer({ isOpen: false, isPlaying: false, title: '', subtitle: '', progress: 0 })
  }, [])

  const seek = useCallback((pct: number) => {
    setPlayer((p) => ({ ...p, progress: Math.max(0, Math.min(100, pct)) }))
  }, [])

  // Format progress as mm:ss for a 55-minute sermon
  const TOTAL_SECONDS = 55 * 60
  const elapsed = Math.floor((player.progress / 100) * TOTAL_SECONDS)
  const elapsedStr = `${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, '0')}`
  const totalStr = '55:00'

  return { player, openSermon, togglePlay, closePlayer, seek, elapsedStr, totalStr }
}
