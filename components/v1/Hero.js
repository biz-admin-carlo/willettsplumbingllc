import { heroConfig } from '@/config/v1.config'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-[#fff7ed] to-[#fef3c7] dark:from-[#0d1117] dark:to-[#1a2535] transition-colors duration-300"
    >
      {/* Background photo */}
      {heroConfig.backgroundImage && (
        <>
          <img
            src={heroConfig.backgroundImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/80 dark:bg-[#0d1117]/80 transition-colors duration-300" />
        </>
      )}

      {/* Radial blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-orange-500/5 blur-3xl translate-y-1/3 translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8" data-aos="fade-up">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-dm text-xs font-semibold tracking-widest uppercase text-gray-600 dark:text-white/60 transition-colors duration-300">
            {heroConfig.badge}
          </span>
        </div>

        {/* H1 */}
        <h1
          className="font-barlow font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className="block text-gray-900 dark:text-white transition-colors duration-300">
            {heroConfig.h1[0]}
          </span>
          <span className="block text-orange-500">{heroConfig.h1[1]}</span>
          <span className="block text-gray-900 dark:text-white transition-colors duration-300">
            {heroConfig.h1[2]}
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="font-dm text-lg text-gray-600 dark:text-white/65 max-w-xl mb-10 leading-relaxed transition-colors duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {heroConfig.subtext}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 mb-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            href={heroConfig.primaryCta.href}
            className="font-dm font-semibold bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-center transition-colors duration-300"
          >
            {heroConfig.primaryCta.label}
          </a>
          <a
            href={heroConfig.secondaryCta.href}
            className="font-dm font-semibold border-2 border-gray-300 dark:border-white/30 text-gray-700 dark:text-white hover:border-orange-500 hover:text-orange-500 dark:hover:border-orange-500 dark:hover:text-orange-500 px-8 py-4 rounded-full text-center transition-colors duration-300"
          >
            {heroConfig.secondaryCta.label}
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap gap-8 md:gap-16"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {heroConfig.stats.map((stat, i) => (
            <div key={i}>
              <div className="font-barlow font-black text-4xl text-orange-500">{stat.value}</div>
              <div className="font-dm text-sm text-gray-500 dark:text-white/50 mt-1 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
