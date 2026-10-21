import Navbar from '@/components/v1/Navbar'
import Hero from '@/components/v1/Hero'
import Services from '@/components/v1/Services'
import About from '@/components/v1/About'
import CTA from '@/components/v1/CTA'
import Footer from '@/components/v1/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <CTA />
      <Footer />
    </>
  )
}
