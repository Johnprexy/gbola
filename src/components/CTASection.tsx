import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, CalendarCheck } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0a1628] via-[#0f1f3d] to-[#112240] py-28 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,168,76,0.07)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="w-8 h-px bg-[#c9a84c]" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">
            Partner with This Ministry
          </span>
          <div className="w-8 h-px bg-[#c9a84c]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif font-semibold text-white leading-[1.2] mb-5 max-w-2xl mx-auto"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}
        >
          Join Us in Advancing<br />the Kingdom of God
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/55 text-base leading-[1.75] max-w-lg mx-auto mb-11"
        >
          Every gift sows into the preaching of the Gospel, the training of ministers,
          and the raising of a generation of prayer warriors across Nigeria and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold text-[#0a1628] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,168,76,0.3)] transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c97a)' }}
          >
            <Heart size={13} fill="currentColor" />
            Give to This Ministry
          </Link>
          <Link
            to="/invite"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-[11px] tracking-[0.18em] uppercase font-medium text-white border border-white/35 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300 hover:-translate-y-0.5"
          >
            <CalendarCheck size={13} />
            Invite Rev. Gbola
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
