import { useState, useCallback } from 'react'

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
    progress: 35,
  })

  const openSermon = useCallback((title: string, subtitle: string) => {
    setPlayer({ isOpen: true, isPlaying: true, title, subtitle, progress: 35 })
  }, [])

  const togglePlay = useCallback(() => {
    setPlayer((p) => ({ ...p, isPlaying: !p.isPlaying }))
  }, [])

  const closePlayer = useCallback(() => {
    setPlayer((p) => ({ ...p, isOpen: false, isPlaying: false }))
  }, [])

  const seek = useCallback((pct: number) => {
    setPlayer((p) => ({ ...p, progress: pct }))
  }, [])

  return { player, openSermon, togglePlay, closePlayer, seek }
}
