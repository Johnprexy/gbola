import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, MessageSquare, CheckCircle, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#050e1d] via-[#0a1628] to-[#0f2040] pt-40 pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">Reach Out</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif font-semibold text-white leading-[1.1]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Contact the Ministry
          </motion.h1>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-[#f8f6f0] py-24">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Info Column */}
            <div className="lg:col-span-2 space-y-6">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'revgbolaoladosu@gmail.com',
                  sub: 'For general enquiries and partnerships',
                },
                {
                  icon: MapPin,
                  label: 'Ministry Base',
                  value: 'Abuja, Nigeria',
                  sub: 'Rhema Ministerial Association International',
                },
                {
                  icon: MessageSquare,
                  label: 'Speaking Bookings',
                  value: 'Use the Invite page',
                  sub: 'For church and conference invitations',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 p-6 bg-white border-l-[3px] border-[#c9a84c] shadow-sm"
                >
                  <item.icon size={18} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#c9a84c] font-medium mb-1">{item.label}</p>
                    <p className="text-sm font-medium text-[#0a1628]">{item.value}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              ))}

              {/* Social */}
              <div className="pt-4">
                <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400 font-medium mb-4">
                  Connect on Social
                </p>
                <div className="flex gap-2">
                  {[
                    { icon: Facebook, href: '#', label: 'Facebook' },
                    { icon: Instagram, href: '#', label: 'Instagram' },
                    { icon: Youtube, href: '#', label: 'YouTube' },
                    { icon: Twitter, href: '#', label: 'Twitter' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      title={label}
                      className="w-10 h-10 border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="bg-white p-12 text-center shadow-sm h-full flex flex-col items-center justify-center">
                  <CheckCircle size={48} className="text-[#c9a84c] mb-4" />
                  <h3 className="font-serif text-2xl font-semibold text-[#0a1628] mb-3">Message Sent!</h3>
                  <p className="text-[#555] text-sm leading-[1.75] max-w-sm">
                    Thank you for reaching out. We'll get back to you as soon as possible. God bless you!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 shadow-sm space-y-5">
                  <h3 className="font-serif text-xl font-semibold text-[#0a1628]">Send a Message</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] tracking-[0.18em] uppercase text-gray-400 mb-2">Full Name *</label>
                      <input required placeholder="Your name"
                        className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#c9a84c] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.18em] uppercase text-gray-400 mb-2">Email *</label>
                      <input type="email" required placeholder="your@email.com"
                        className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#c9a84c] transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.18em] uppercase text-gray-400 mb-2">Subject</label>
                    <input placeholder="What is this regarding?"
                      className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#c9a84c] transition-colors" />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.18em] uppercase text-gray-400 mb-2">Message *</label>
                    <textarea required rows={6} placeholder="Write your message here..."
                      className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#c9a84c] transition-colors resize-vertical" />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-[11px] tracking-[0.18em] uppercase font-semibold text-[#0a1628] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,168,76,0.3)] transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c97a)' }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
