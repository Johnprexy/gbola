import { motion } from 'framer-motion'
import { Play, Clock, Calendar, BookOpen } from 'lucide-react'
import { type Sermon, categoryColors } from '@/data/sermons'

interface SermonCardProps {
  sermon: Sermon
  onPlay: (title: string, subtitle: string) => void
  index?: number
}

export default function SermonCard({ sermon, onPlay, index = 0 }: SermonCardProps) {
  const bgColor = categoryColors[sermon.category]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="bg-white overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.15)] transition-shadow duration-400 cursor-pointer group"
    >
      {/* Header */}
      <div
        className="px-7 py-8 relative overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        <div className="absolute right-[-20px] bottom-[-20px] w-20 h-20 border border-[#c9a84c]/20 rounded-full" />
        <div className="text-[10px] tracking-[0.28em] uppercase text-[#c9a84c] font-medium mb-2.5">
          {sermon.category}
        </div>
        <h3 className="font-serif text-xl font-semibold text-white leading-snug">
          {sermon.title}
        </h3>
      </div>

      {/* Body */}
      <div className="px-7 py-6">
        <div className="flex gap-4 mb-3">
          <span className="flex items-center gap-1.5 text-[11px] text-gray-400">
            <Calendar size={11} />
            {sermon.date}
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-gray-400">
            <Clock size={11} />
            {sermon.duration}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-[#c9a84c] mb-3">
          <BookOpen size={11} />
          <span className="tracking-wide">{sermon.scripture}</span>
        </div>
        <p className="text-sm leading-[1.75] text-gray-500 mb-5">{sermon.excerpt}</p>
        <button
          onClick={() => onPlay(sermon.title, `${sermon.category} · ${sermon.date}`)}
          className="flex items-center gap-2.5 text-[#0a1628] text-[11px] font-semibold tracking-[0.1em] uppercase group-hover:text-[#c9a84c] transition-colors duration-300"
        >
          <div className="w-9 h-9 rounded-full border-[1.5px] border-current flex items-center justify-center">
            <Play size={12} fill="currentColor" />
          </div>
          Listen Now
        </button>
      </div>
    </motion.div>
  )
}
