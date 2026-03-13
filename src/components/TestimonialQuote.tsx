import { motion } from 'framer-motion'

interface TestimonialQuoteProps {
  quote: string
  author: string
}

export default function TestimonialQuote({ quote, author }: TestimonialQuoteProps) {
  return (
    <section className="relative bg-[#112240] py-28 text-center overflow-hidden">
      {/* Oversized background quote mark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif font-bold text-white/[0.02] pointer-events-none select-none leading-none"
        style={{ fontSize: '22rem' }}
      >
        "
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.4, scale: 1 }}
          viewport={{ once: true }}
          className="block font-serif text-[#c9a84c] leading-[0.5] mb-5"
          style={{ fontSize: '7rem' }}
        >
          "
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="font-serif italic font-light text-white leading-[1.55]"
          style={{ fontSize: 'clamp(1.55rem, 3vw, 2.6rem)' }}
        >
          {quote}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-4 mt-9"
        >
          <div className="w-10 h-px bg-[#c9a84c]" />
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#c9a84c]">{author}</span>
          <div className="w-10 h-px bg-[#c9a84c]" />
        </motion.div>
      </div>
    </section>
  )
}
