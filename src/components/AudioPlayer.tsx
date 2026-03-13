import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, SkipBack, SkipForward, X } from 'lucide-react'
import { type PlayerState } from '@/hooks/useAudioPlayer'
import portraitImg from '@/assets/portrait.jpg'

interface AudioPlayerProps {
  player: PlayerState
  onTogglePlay: () => void
  onClose: () => void
  onSeek: (pct: number) => void
}

export default function AudioPlayer({ player, onTogglePlay, onClose, onSeek }: AudioPlayerProps) {
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = e.currentTarget
    const rect = bar.getBoundingClientRect()
    const pct = ((e.clientX - rect.left) / rect.width) * 100
    onSeek(Math.max(0, Math.min(100, pct)))
  }

  return (
    <AnimatePresence>
      {player.isOpen && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[200] flex items-center gap-6 px-12 py-3.5 bg-[#0a1628]/96 backdrop-blur-xl border-t border-[#c9a84c]/30"
        >
          {/* Thumb */}
          <div className="w-11 h-11 overflow-hidden flex-shrink-0">
            <img src={portraitImg} alt="" className="w-full h-full object-cover object-top" />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-white truncate">{player.title}</div>
            <div className="text-[11px] text-white/40 mt-0.5">Rev. Adegbola Oladosu · {player.subtitle}</div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button className="text-[#c9a84c]/60 hover:text-[#c9a84c] transition-colors">
              <SkipBack size={16} />
            </button>
            <button
              onClick={onTogglePlay}
              className="w-11 h-11 rounded-full bg-[#c9a84c] hover:bg-[#e8c97a] flex items-center justify-center text-[#0a1628] transition-colors"
            >
              {player.isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
            </button>
            <button className="text-[#c9a84c]/60 hover:text-[#c9a84c] transition-colors">
              <SkipForward size={16} />
            </button>
          </div>

          {/* Progress */}
          <div className="hidden md:flex items-center gap-3 flex-1 max-w-sm">
            <span className="text-[11px] text-white/35 tabular-nums">0:00</span>
            <div
              className="flex-1 h-[3px] bg-white/15 rounded-full cursor-pointer relative"
              onClick={handleProgressClick}
            >
              <div
                className="h-full bg-[#c9a84c] rounded-full transition-all duration-100"
                style={{ width: `${player.progress}%` }}
              />
            </div>
            <span className="text-[11px] text-white/35 tabular-nums">52:00</span>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="text-white/35 hover:text-white transition-colors ml-2"
          >
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
