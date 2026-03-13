import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Youtube } from 'lucide-react'
import type { YoutubeVideo } from '@/data/videos'

interface VideoCardProps {
  video: YoutubeVideo
  index?: number
  featured?: boolean
}

export default function VideoCard({ video, index = 0, featured = false }: VideoCardProps) {
  const [playing, setPlaying] = useState(false)
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`
  const sdThumbnail = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group overflow-hidden bg-[#0a1628] shadow-[0_4px_32px_rgba(0,0,0,0.3)] ${
        featured ? 'col-span-2 row-span-1' : ''
      }`}
    >
      {/* Video embed or thumbnail */}
      <div className={`relative overflow-hidden ${featured ? 'aspect-video' : 'aspect-video'}`}>
        {playing ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div
            className="relative w-full h-full cursor-pointer"
            onClick={() => setPlaying(true)}
          >
            {/* Thumbnail — tries maxres first, falls back to hqdefault */}
            <img
              src={thumbnailUrl}
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                ;(e.target as HTMLImageElement).src = sdThumbnail
              }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/20 to-transparent" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                {/* Pulsing ring */}
                <div className="absolute inset-0 rounded-full bg-[#c9a84c]/20 animate-ping scale-150" />
                <div className="relative w-16 h-16 rounded-full bg-[#c9a84c] flex items-center justify-center shadow-[0_0_40px_rgba(201,168,76,0.5)]">
                  <Play size={22} fill="#0a1628" className="text-[#0a1628] ml-1" />
                </div>
              </motion.div>
            </div>

            {/* YouTube badge */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-sm">
              <Youtube size={12} className="text-red-500" />
              <span className="text-[9px] tracking-wider uppercase text-white/80 font-medium">YouTube</span>
            </div>
          </div>
        )}
      </div>

      {/* Card footer */}
      <div className="px-5 py-4 border-t border-white/08">
        <div className="text-[9px] tracking-[0.22em] uppercase text-[#c9a84c] font-medium mb-1.5">
          Rev. Adegbola Oladosu
        </div>
        <h3 className="font-serif text-white font-semibold leading-snug text-[0.95rem]">
          {video.title}
        </h3>
        {!playing && (
          <button
            onClick={() => setPlaying(true)}
            className="mt-3 flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-[#c9a84c] hover:text-[#e8c97a] transition-colors duration-300 font-medium"
          >
            <Play size={11} fill="currentColor" /> Watch Now
          </button>
        )}
      </div>
    </motion.div>
  )
}
