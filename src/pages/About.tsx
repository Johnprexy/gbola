import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import portraitImg from '@/assets/portrait.jpg'
import coupleImg from '@/assets/couple.jpg'

const timeline = [
  {
    year: 'University Years',
    title: 'The Call Begins',
    desc: "Rev. Gbola's ministry journey began during his undergraduate years at Obafemi Awolowo University, Ile-Ife. It was here that the Lord's calling became unmistakably clear — a call to preach the Word and lead people into intimacy with God.",
  },
  {
    year: 'Rhema Nigeria',
    title: 'Ministerial Training',
    desc: 'He enrolled at the Rhema Bible Training Center Nigeria, where he pursued a Diploma in Ministerial Studies with emphasis on Spiritual and Supportive Leadership — deepening his knowledge of the Word and his understanding of Spirit-led ministry.',
  },
  {
    year: 'Ordination',
    title: 'Ordained & Credentialed',
    desc: 'Rev. Adegbola was ordained and credentialed with the Rhema Ministerial Association International (Kenneth Hagin Ministries), Nigeria — a recognition of his calling, character, and commitment to the Gospel.',
  },
  {
    year: 'Itinerant Ministry',
    title: 'Preaching the Gospel',
    desc: 'He began itinerating widely across Nigeria — preaching at conferences, prayer summits, and special services — carrying a clear teaching anointing and a strong ministry in prayer and the Holy Spirit.',
  },
  {
    year: 'Rhema Leadership',
    title: 'Serving in Leadership',
    desc: 'Rev. Gbola took on leadership and administrative roles within Rhema Nigeria, as well as an instructing role at the Bible Training Center — raising and equipping the next generation of ministers.',
  },
  {
    year: 'Today',
    title: 'Based in Abuja',
    desc: 'Together with his wife, Mrs. Deborah Oluwadamilola Oladosu, he is based in Abuja, Nigeria — continuing to preach the Word, train ministers, and lead believers into a life of prayer and Holy Spirit intimacy.',
  },
]

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-[#050e1d] via-[#0a1628] to-[#0f2040] pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,168,76,0.4) 60px, rgba(201,168,76,0.4) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,168,76,0.4) 60px, rgba(201,168,76,0.4) 61px)`,
          }}
        />
        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-5"
          >
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">The Minister</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif font-semibold text-white leading-[1.1]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            About Rev. Adegbola Oladosu
          </motion.h1>
        </div>
      </section>

      {/* Biography */}
      <section className="bg-[#f8f6f0] py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-28"
            >
              <div className="relative">
                <img
                  src={portraitImg}
                  alt="Rev. Adegbola Oladosu"
                  className="w-full aspect-[3/4] object-cover object-top"
                />
                <div className="absolute bottom-[-16px] right-[-16px] w-1/2 h-1/2 border-2 border-[#c9a84c] -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="font-serif font-semibold text-[#0a1628] leading-[1.1] mb-8"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
              >
                A Minister of the Word<br />and of Prayer
              </h2>
              <div className="space-y-5 text-[0.95rem] leading-[1.85] text-[#4a4a4a]">
                <p>
                  Rev. Adegbola Oladosu — fondly called "Brother Gbola" — is an ordained minister
                  of the Gospel, credentialed with the Rhema Ministerial Association International
                  (Kenneth Hagin Ministries), Nigeria.
                </p>
                <p>
                  His ministerial journey began in his undergraduate years, where the Lord's calling
                  became clear — a calling to teach the Word with precision, to build a life of prayer,
                  and to lead believers into deep intimacy with the Holy Spirit.
                </p>
                <p>
                  After completing his formal ministerial training at the Rhema Bible Training Center
                  Nigeria — earning a Diploma in Ministerial Studies with emphasis on Spiritual and
                  Supportive Leadership — he was ordained and credentialed with RMAI, the ministerial
                  arm of Kenneth Hagin Ministries.
                </p>
                <p>
                  Rev. Gbola serves within Rhema Nigeria in leadership and administrative roles, and
                  teaches at the Bible Training Center. His ministry emphases include prayer, intimacy
                  with God, following and flowing with the Holy Spirit, and teaching the Word with
                  clarity and practical application.
                </p>
                <p>
                  He holds a Bachelor's degree from Obafemi Awolowo University, Ile-Ife, and
                  professional certifications in Business Intelligence &amp; Data Analysis, Financial
                  Modeling, and Valuation Analysis from the Corporate Finance Institute (CFI).
                </p>
                <p>
                  He is married to Mrs. Deborah Oluwadamilola Oladosu, and they are based in Abuja,
                  Nigeria, where they continue to serve the Body of Christ faithfully.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { label: 'Organization', value: 'Rhema Ministerial Association International' },
                  { label: 'Base', value: 'Abuja, Nigeria' },
                  { label: 'Emphases', value: 'Prayer · Holy Spirit · The Word' },
                  { label: 'Role', value: 'Minister · Instructor · Leader' },
                ].map((item) => (
                  <div key={item.label} className="bg-white px-5 py-4 border-l-[3px] border-[#c9a84c] shadow-sm">
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#c9a84c] mb-1 font-medium">{item.label}</p>
                    <p className="text-sm text-[#0a1628] font-medium leading-snug">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#0a1628] py-28">
        <div className="max-w-4xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">The Journey</span>
              <div className="w-8 h-px bg-[#c9a84c]" />
            </div>
            <h2
              className="font-serif font-semibold text-white"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            >
              A Walk of Faithfulness
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-[#c9a84c]/20" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-8"
                >
                  {/* Dot */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#c9a84c]/40 bg-[#112240] flex items-center justify-center relative z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#c9a84c]" />
                  </div>
                  {/* Content */}
                  <div className="pb-2">
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#c9a84c] font-medium mb-1.5">
                      {item.year}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-white mb-2.5">{item.title}</h3>
                    <p className="text-white/52 text-sm leading-[1.8]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section className="bg-[#f8f6f0] py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-[#0a1628]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a1628] font-medium">Family</span>
              </div>
              <h2
                className="font-serif font-semibold text-[#0a1628] leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
              >
                Together in Ministry
              </h2>
              <p className="text-[#4a4a4a] text-[0.95rem] leading-[1.85] mb-5">
                Rev. Adegbola Oladosu is married to Mrs. Deborah Oluwadamilola Oladosu — a
                gracious partner in life and ministry. Together, they are based in Abuja, Nigeria,
                faithfully serving the Lord and the Body of Christ.
              </p>
              <p className="text-[#4a4a4a] text-[0.95rem] leading-[1.85]">
                Their home is a testimony of grace, prayer, and the presence of God — a foundation
                from which ministry flows.
              </p>
              <Link
                to="/invite"
                className="inline-flex items-center gap-2.5 mt-8 text-[#0a1628] text-[11px] tracking-[0.15em] uppercase font-semibold border-b border-[#c9a84c] pb-0.5 hover:text-[#c9a84c] transition-colors duration-300 group"
              >
                Invite Rev. Gbola to Minister
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={coupleImg}
                alt="Rev. Adegbola and Mrs. Deborah Oladosu"
                className="w-full object-cover rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              />
              <div className="absolute top-4 left-4 bg-[#0a1628]/80 backdrop-blur-sm px-4 py-2 border-l-2 border-[#c9a84c]">
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#c9a84c]">Rhema Conference</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teaching Section reference */}
      <section className="bg-[#112240] py-20 text-center">
        <div className="max-w-2xl mx-auto px-8">
          <h3
            className="font-serif font-semibold text-white mb-4"
            style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)' }}
          >
            Hear the Word Taught with Clarity
          </h3>
          <p className="text-white/50 text-sm leading-[1.8] mb-8">
            Access Rev. Gbola's growing library of sermons across prayer, the Holy Spirit, faith,
            and the Word of God.
          </p>
          <Link
            to="/teachings"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold text-[#0a1628] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,168,76,0.3)] transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c97a)' }}
          >
            Explore Teachings <ArrowRight size={12} />
          </Link>
        </div>
      </section>
    </>
  )
}
