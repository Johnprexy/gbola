import { Link } from 'react-router-dom'
import { Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      alert('Thank you for subscribing! God bless you.')
      setEmail('')
    }
  }

  return (
    <footer className="bg-[#050d1a]">
      {/* Newsletter bar */}
      <div className="bg-[#c9a84c]">
        <div className="max-w-6xl mx-auto px-12 py-[4.5rem]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="font-serif text-[1.75rem] text-[#0a1628] font-semibold">
                Stay Connected to the Word
              </h2>
              <p className="text-[#0a1628]/65 text-sm mt-2">
                Receive sermon updates, event announcements, and devotionals from Rev. Gbola.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto md:min-w-[400px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-5 py-4 bg-[#0a1628] text-white text-sm placeholder-white/35 outline-none font-[DM Sans,sans-serif]"
              />
              <button
                type="submit"
                className="bg-[#112240] hover:bg-[#1a3358] text-[#c9a84c] px-7 py-4 text-[10px] tracking-[0.18em] uppercase font-semibold font-[DM Sans,sans-serif] transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-1">
              <span className="font-serif text-[1.2rem] font-semibold text-white block">
                Rev. Adegbola Oladosu
              </span>
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#c9a84c]">Ministry</span>
            </div>
            <p className="text-white/38 text-sm leading-[1.75] mt-5 max-w-[260px]">
              Ordained with Rhema Ministerial Association International. Teaching the Word. Raising
              Men of Prayer. Based in Abuja, Nigeria.
            </p>
            <div className="flex gap-1 mt-6">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' },
                { icon: Twitter, href: '#' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href + Icon.name}
                  href={href}
                  className="w-9 h-9 border border-white/12 flex items-center justify-center text-white/40 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-[10px] tracking-[0.28em] uppercase text-[#c9a84c] font-medium mb-5">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'Teachings', to: '/teachings' },
                { label: 'Events', to: '/events' },
                { label: 'Invite', to: '/invite' },
                { label: 'Contact', to: '/contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white/48 text-sm hover:text-[#e8c97a] transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Teaching Areas */}
          <div>
            <h4 className="text-[10px] tracking-[0.28em] uppercase text-[#c9a84c] font-medium mb-5">
              Teaching Areas
            </h4>
            <ul className="space-y-2.5">
              {['Prayer', 'Holy Spirit', 'Intimacy with God', 'Faith', 'Leadership', 'The Word'].map(
                (t) => (
                  <li key={t}>
                    <Link
                      to="/teachings"
                      className="text-white/48 text-sm hover:text-[#e8c97a] transition-colors duration-300"
                    >
                      {t}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.28em] uppercase text-[#c9a84c] font-medium mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={13} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                <span className="text-white/48 text-sm">revgbolaoladosu@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={13} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                <span className="text-white/48 text-sm">Abuja, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/08 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Rev. Adegbola Oladosu Ministry. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">Abuja, Nigeria · Rhema Ministerial Association International</p>
        </div>
      </div>
    </footer>
  )
}
