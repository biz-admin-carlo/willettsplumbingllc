import { contactConfig } from '@/config/v1.config'

export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="font-dm text-xs font-semibold tracking-widest uppercase text-orange-500">
            {contactConfig.label}
          </span>
          <h2 className="font-barlow font-black text-5xl md:text-6xl text-white leading-tight mt-3">
            {contactConfig.h2.map((line, i) => (
              <span key={i} className={`block ${i === 1 ? 'text-orange-500' : ''}`}>
                {line}
              </span>
            ))}
          </h2>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <a
            href={contactConfig.primaryCta.href}
            data-aos="fade-up"
            data-aos-delay="0"
            className="bg-[#161b22] rounded-xl p-6 border border-white/10 hover:border-orange-500/50 transition-colors duration-300 group"
          >
            <p className="font-dm text-xs font-semibold tracking-widest uppercase text-orange-500 mb-2">
              Phone
            </p>
            <p className="font-barlow font-bold text-lg text-white group-hover:text-orange-400 transition-colors duration-300">
              {contactConfig.phone}
            </p>
          </a>

          <a
            href={`mailto:${contactConfig.email}`}
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-[#161b22] rounded-xl p-6 border border-white/10 hover:border-orange-500/50 transition-colors duration-300 group"
          >
            <p className="font-dm text-xs font-semibold tracking-widest uppercase text-orange-500 mb-2">
              Email
            </p>
            <p className="font-barlow font-bold text-lg text-white group-hover:text-orange-400 transition-colors duration-300 break-all">
              {contactConfig.email}
            </p>
          </a>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-[#161b22] rounded-xl p-6 border border-white/10"
          >
            <p className="font-dm text-xs font-semibold tracking-widest uppercase text-orange-500 mb-2">
              Address
            </p>
            <p className="font-barlow font-bold text-lg text-white leading-snug">
              {contactConfig.address}
            </p>
          </div>
        </div>

        {/* Directions card */}
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="bg-[#161b22] rounded-xl border border-white/10 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 md:p-8">
            <div>
              <p className="font-dm text-xs font-semibold tracking-widest uppercase text-orange-500 mb-1">
                Find Us
              </p>
              <p className="font-barlow font-bold text-xl text-white">{contactConfig.address}</p>
            </div>
            <a
              href={contactConfig.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm font-semibold bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-colors duration-300 flex-shrink-0 w-full md:w-auto text-center"
            >
              Get Directions ↗
            </a>
          </div>
          <div className="h-px bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0" />
        </div>

      </div>
    </section>
  )
}
