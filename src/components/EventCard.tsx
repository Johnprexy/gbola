import { motion } from 'framer-motion'
import { MapPin, Clock } from 'lucide-react'
import { type MinistryEvent } from '@/data/events'

interface EventCardProps {
  event: MinistryEvent
  index?: number
}

export default function EventCard({ event, index = 0 }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.09 }}
      whileHover={{ x: 4 }}
      className="grid gap-8 items-center bg-white px-9 py-7 border-l-[3px] border-transparent hover:border-[#c9a84c] shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer"
      style={{ gridTemplateColumns: '72px 1fr auto' }}
    >
      {/* Date box */}
      <div className="text-center bg-[#112240] px-2 py-3">
        <div className="font-serif text-[2rem] font-bold text-[#c9a84c] leading-none">
          {event.day}
        </div>
        <div className="text-[9px] tracking-[0.22em] uppercase text-white/55 mt-1">
          {event.month} {event.year}
        </div>
      </div>

      {/* Info */}
      <div>
        <h3 className="font-serif text-[1.15rem] font-semibold text-[#0a1628] mb-1.5 leading-snug">
          {event.title}
        </h3>
        <div className="flex flex-wrap gap-4">
          <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
            <MapPin size={11} className="text-[#c9a84c]" />
            {event.location}
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
            <Clock size={11} className="text-[#c9a84c]" />
            {event.time}
          </span>
        </div>
      </div>

      {/* Tag */}
      <div className="hidden md:block text-[10px] tracking-[0.18em] uppercase text-[#c9a84c] border border-[#c9a84c]/40 px-4 py-1.5 whitespace-nowrap">
        {event.tag}
      </div>
    </motion.div>
  )
}
