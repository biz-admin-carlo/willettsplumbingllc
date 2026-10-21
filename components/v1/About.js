import { aboutConfig, bizSolutionsConfig, mainwebsiteConfig } from '@/config/v1.config'

function initials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-orange-50 dark:bg-[#0d1117] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div data-aos="fade-up">
            <span className="font-dm text-xs font-semibold tracking-widest uppercase text-orange-500">
              {aboutConfig.label}
            </span>
            <h2 className="font-barlow font-black text-4xl md:text-5xl leading-tight mt-3 mb-6">
              <span className="block text-gray-900 dark:text-white transition-colors duration-300">
                {aboutConfig.h2[0]}
              </span>
              <span className="block text-orange-500">{aboutConfig.h2[1]}</span>
            </h2>
            <p className="font-dm text-gray-600 dark:text-white/65 mb-8 leading-relaxed transition-colors duration-300">
              {aboutConfig.desc}
            </p>
            <ul className="space-y-3">
              {aboutConfig.checklist.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 font-dm text-gray-700 dark:text-white/80 transition-colors duration-300"
                >
                  <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="150">

            {/* Founder card */}
            <div className="bg-white dark:bg-[#161b22] border border-orange-500/20 rounded-xl p-8 transition-colors duration-300">
              <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                <span className="font-barlow font-black text-lg text-white">
                  {initials(aboutConfig.founder.name)}
                </span>
              </div>
              <h3 className="font-barlow font-black text-2xl text-gray-900 dark:text-white transition-colors duration-300">
                {aboutConfig.founder.name}
              </h3>
              <p className="font-dm text-sm font-medium text-orange-500 mb-4">
                {aboutConfig.founder.role}
              </p>
              <p className="font-dm italic text-gray-600 dark:text-white/60 leading-relaxed transition-colors duration-300">
                {aboutConfig.founder.quote}
              </p>
            </div>

            {/* bizSolutions card */}
            <a
              href={bizSolutionsConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white dark:bg-[#161b22] rounded-xl border border-orange-500/20 hover:border-orange-500/60 transition-colors duration-300 group"
            >
              <img
                src="/bizSolutions-icon.png"
                alt="bizSolutions"
                className="w-10 h-10 rounded-lg object-contain flex-shrink-0"
              />
              <div>
                <span className="font-dm text-xs text-gray-400 dark:text-white/40 block transition-colors duration-300">
                  {bizSolutionsConfig.label}
                </span>
                <span className="font-dm font-semibold text-sm text-orange-500 group-hover:text-orange-400 transition-colors duration-300">
                  {bizSolutionsConfig.name} ↗
                </span>
              </div>
            </a>

            {/* Main website card */}
            <a
              href={mainwebsiteConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white dark:bg-[#161b22] rounded-xl border border-orange-500/20 hover:border-orange-500/60 transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div>
                <span className="font-dm text-xs text-gray-400 dark:text-white/40 block transition-colors duration-300">
                  {mainwebsiteConfig.label}
                </span>
                <span className="font-dm font-semibold text-sm text-orange-500 group-hover:text-orange-400 transition-colors duration-300">
                  {mainwebsiteConfig.name} ↗
                </span>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}
