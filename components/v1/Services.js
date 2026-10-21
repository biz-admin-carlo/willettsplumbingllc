import { servicesConfig } from '@/config/v1.config'

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-gray-50 dark:bg-[#161b22] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12" data-aos="fade-up">
          <span className="font-dm text-xs font-semibold tracking-widest uppercase text-orange-500">
            {servicesConfig.label}
          </span>
          <h2 className="font-barlow font-black text-4xl md:text-5xl text-gray-900 dark:text-white mt-3 transition-colors duration-300">
            {servicesConfig.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {servicesConfig.cards.map((card, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              className="bg-white dark:bg-[#1f2937] rounded-xl overflow-hidden border-2 border-transparent hover:border-orange-500 transition-colors duration-300"
            >
              {card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-36 md:h-40 object-cover"
                />
              )}
              <div className="p-5 md:p-6">
                <div className="w-8 h-0.5 bg-orange-500 rounded-full mb-4" />
                <h3 className="font-barlow font-bold text-base md:text-lg text-gray-900 dark:text-white mb-2 transition-colors duration-300 leading-tight">
                  {card.title}
                </h3>
                <p className="font-dm text-xs md:text-sm text-gray-500 dark:text-white/60 leading-relaxed transition-colors duration-300">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
