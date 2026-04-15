import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Differentials } from "@/components/differentials"
import { CaseStudy } from "@/components/case-study"
import { Timeline } from "@/components/timeline"
import { Tools } from "@/components/tools"
import { Deliverables } from "@/components/deliverables"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <CaseStudy />
        <Timeline />
        <Tools />
        <Deliverables />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
