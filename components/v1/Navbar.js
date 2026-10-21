'use client'

import { useState } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { navConfig, logoConfig } from '@/config/v1.config'  

function Logo({ part1, part2 }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-1 h-8 bg-orange-500 rounded-sm" />
      <span className="font-barlow font-black text-xl tracking-tight">
        <span className="text-gray-900 dark:text-white transition-colors duration-300">
          {part1}
        </span>
        {" "}
        <span className="text-orange-500">{part2}</span>
      </span>
    </div>
  )
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`relative w-[44px] h-[24px] rounded-full cursor-pointer transition-colors duration-300 flex-shrink-0 ${
        isDark ? 'bg-orange-500' : 'bg-gray-400'
      }`}
    >
      <span
        className={`absolute w-[20px] h-[20px] top-[2px] rounded-full bg-white flex items-center justify-center text-[10px] transition-all duration-300 ${
          isDark ? 'left-[22px]' : 'left-[2px]'
        }`}
      >
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#0d1117] border-b-2 border-orange-500 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between h-16">
          <Logo part1={logoConfig.part1} part2={logoConfig.part2} />
          <div className="flex items-center gap-8">
            {navConfig.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-dm text-sm font-medium text-gray-700 dark:text-white/80 hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href={navConfig.cta.href}
              className="font-dm text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full transition-colors duration-300"
            >
              {navConfig.cta.label}
            </a>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center h-16 relative">
          <ThemeToggle />
          <div className="absolute left-1/2 -translate-x-1/2">
            <Logo />
          </div>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="ml-auto text-gray-700 dark:text-white transition-colors duration-300 p-1"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-[#0d1117] border-t border-orange-500/20 transition-colors duration-300">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navConfig.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-dm text-base font-medium text-gray-700 dark:text-white/80 hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300 py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href={navConfig.cta.href}
              onClick={() => setOpen(false)}
              className="font-dm text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full text-center transition-colors duration-300 w-full mt-1"
            >
              {navConfig.cta.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
