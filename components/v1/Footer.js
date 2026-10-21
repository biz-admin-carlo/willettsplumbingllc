import { footerConfig, logoConfig } from '@/config/v1.config'  // ← add logoConfig

export default function Footer() {
  return (
    <footer className="bg-[#060a0e] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-1 h-8 bg-orange-500 rounded-sm" />
            <span className="font-barlow font-black text-xl tracking-tight">
              <span className="text-white">{logoConfig.part1}</span>
              <span className="text-orange-500">{logoConfig.part2}</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {footerConfig.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-dm text-sm text-white/30 hover:text-white/60 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-dm text-sm text-white/30">{footerConfig.copyright}</p>
        </div>
      </div>
    </footer>
  )
}