'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Kilometer from '@/components/Kilometer'
import Team from '@/components/Team'
import Story from '@/components/Story'
import Campaigns from '@/components/Campaigns'
import SWOT from '@/components/SWOT'
import Budget from '@/components/Budget'
import Timeline from '@/components/Timeline'
import KPIs from '@/components/KPIs'
import Footer from '@/components/Footer'
import SectionWrapper from '@/components/SectionWrapper'

export default function Home() {
  return (
    <>
      <Navbar />

      <SectionWrapper sectionKey="hero">
        <Hero />
      </SectionWrapper>

      <SectionWrapper sectionKey="donate">
        <Kilometer />
      </SectionWrapper>

      <SectionWrapper sectionKey="team">
        <Team />
      </SectionWrapper>

      <SectionWrapper sectionKey="story">
        <Story />
      </SectionWrapper>

      <SectionWrapper sectionKey="campaigns">
        <Campaigns />
      </SectionWrapper>

      {/* ===== ACADEMIC SECTIONS (Universitāte mode only) ===== */}
      <SectionWrapper sectionKey="swot">
        <SWOT />
      </SectionWrapper>

      <SectionWrapper sectionKey="budget">
        <Budget />
      </SectionWrapper>

      <SectionWrapper sectionKey="timeline">
        <Timeline />
      </SectionWrapper>

      <SectionWrapper sectionKey="kpis">
        <KPIs />
      </SectionWrapper>

      <SectionWrapper sectionKey="footer">
        <Footer />
      </SectionWrapper>
    </>
  )
}
