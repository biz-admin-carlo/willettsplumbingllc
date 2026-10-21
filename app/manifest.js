import { siteConfig } from '../config/v1.config.js'

export default function manifest() {
  return {
    name: siteConfig.businessName,
    short_name: siteConfig.businessName,
    description: siteConfig.description,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: siteConfig.backgroundColor,
    theme_color: siteConfig.themeColor,
    icons: [
      {
        src: '/bizSolutions-icon.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  }
}
