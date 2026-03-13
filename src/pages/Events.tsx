import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CalendarCheck } from 'lucide-react'
import EventCard from '@/components/EventCard'
import { events } from '@/data/events'

export default function Events() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#050e1d] via-[#0a1628] to-[#0f2040] pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,168,76,0.4) 60px, rgba(201,168,76,0.4) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,168,76,0.4) 60px, rgba(201,168,76,0.4) 61px)`,
          }}
        />
        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">Calendar</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif font-semibold text-white leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Events & Meetings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-base max-w-xl leading-[1.75]"
          >
            Upcoming conferences, prayer summits, training days, and special meetings where Rev.
            Gbola will be ministering.
          </motion.p>
        </div>
      </section>

      {/* Events List */}
      <section className="bg-[#f8f6f0] py-24">
        <div className="max-w-5xl mx-auto px-8 lg:px-12">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-px bg-[#0a1628]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a1628] font-medium">Upcoming</span>
          </div>

          <div className="flex flex-col gap-4 mb-20">
            {events.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div className="bg-[#0a1628] px-10 py-12 text-center">
            <CalendarCheck size={32} className="text-[#c9a84c] mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-semibold text-white mb-3">
              Invite Rev. Gbola to Your Church
            </h3>
            <p className="text-white/50 text-sm leading-[1.75] max-w-md mx-auto mb-7">
              Would you like Rev. Adegbola Oladosu to minister at your church, conference, or
              special gathering? Submit an invitation request.
            </p>
            <Link
              to="/invite"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold text-[#0a1628] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,168,76,0.3)] transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c97a)' }}
            >
              Submit an Invitation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
