import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, MessageSquare, Phone, CheckCircle, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

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
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,168,76,0.4) 60px, rgba(201,168,76,0.4) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,168,76,0.4) 60px, rgba(201,168,76,0.4) 61px)`,
          }}
        />
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
            <div className="lg:col-span-2 space-y-5">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'revgbolaoladosu@gmail.com',
                  sub: 'For general enquiries and partnerships',
                  href: 'mailto:revgbolaoladosu@gmail.com',
                },
                {
                  icon: Phone,
                  label: 'Phone / WhatsApp',
                  value: '+234 813 851 9224',
                  sub: 'Available via call or WhatsApp',
                  href: 'tel:+2348138519224',
                },
                {
                  icon: MapPin,
                  label: 'Ministry Base',
                  value: 'Abuja, Nigeria',
                  sub: 'Rhema Ministerial Association International',
                  href: null,
                },
                {
                  icon: MessageSquare,
                  label: 'Speaking Bookings',
                  value: 'Use the Invite page',
                  sub: 'For church and conference invitations',
                  href: '/invite',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 p-6 bg-white border-l-[3px] border-[#c9a84c] shadow-sm group hover:shadow-md transition-shadow duration-300"
                >
                  <item.icon size={18} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#c9a84c] font-medium mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-[#0a1628] hover:text-[#c9a84c] transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-[#0a1628]">{item.value}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              ))}

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/2348138519224"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.36 }}
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-[11px] tracking-[0.18em] uppercase font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(37,211,102,0.3)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </motion.a>

              {/* Social */}
              <div className="pt-2">
                <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400 font-medium mb-4">
                  Connect on Social
                </p>
                <div className="flex gap-2 flex-wrap">
                  {[
                    { icon: Youtube, href: 'https://www.youtube.com/@gbola_oladosu', label: 'YouTube', color: 'hover:border-red-500 hover:text-red-500' },
                    { icon: Facebook, href: 'https://www.facebook.com/gbolaoladosu', label: 'Facebook', color: 'hover:border-[#1877f2] hover:text-[#1877f2]' },
                    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:border-[#e1306c] hover:text-[#e1306c]' },
                    { icon: Twitter, href: '#', label: 'Twitter/X', color: 'hover:border-[#c9a84c] hover:text-[#c9a84c]' },
                  ].map(({ icon: Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={label}
                      className={`w-10 h-10 border border-gray-200 flex items-center justify-center text-gray-400 transition-all duration-300 ${color}`}
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
                <div className="bg-white p-12 text-center shadow-sm h-full flex flex-col items-center justify-center gap-4">
                  <CheckCircle size={52} className="text-[#c9a84c]" />
                  <h3 className="font-serif text-2xl font-semibold text-[#0a1628]">Message Sent!</h3>
                  <p className="text-[#555] text-sm leading-[1.75] max-w-sm">
                    Thank you for reaching out. We'll get back to you as soon as possible. God bless you!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-[10px] tracking-[0.18em] uppercase text-[#c9a84c] hover:text-[#0a1628] transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 shadow-sm space-y-5">
                  <h3 className="font-serif text-xl font-semibold text-[#0a1628]">Send a Message</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] tracking-[0.18em] uppercase text-gray-400 mb-2">Full Name *</label>
                      <input
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#c9a84c] transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.18em] uppercase text-gray-400 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#c9a84c] transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.18em] uppercase text-gray-400 mb-2">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+234 800 000 0000"
                      className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#c9a84c] transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.18em] uppercase text-gray-400 mb-2">Subject</label>
                    <input
                      placeholder="What is this regarding?"
                      className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#c9a84c] transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.18em] uppercase text-gray-400 mb-2">Message *</label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#c9a84c] transition-colors duration-300 resize-vertical"
                    />
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
