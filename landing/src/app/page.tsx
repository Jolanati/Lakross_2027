'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import VideoHook from '@/components/VideoHook'
import Story from '@/components/Story'
import Kilometer from '@/components/Kilometer'
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

      <Hero />

      <VideoHook />

      <SectionWrapper sectionKey="story">
        <Story />
      </SectionWrapper>

      <div id="kilometer" className="h-screen overflow-y-auto" style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
        <SectionWrapper sectionKey="donate">
          <Kilometer />
        </SectionWrapper>
      </div>

      <SectionWrapper sectionKey="campaigns">
        <Campaigns />
      </SectionWrapper>

      <div style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
        <SectionWrapper sectionKey="footer">
          <Footer />
        </SectionWrapper>
      </div>

      {/* ===== ACADEMIC SECTIONS (Universitāte mode only) — after footer ===== */}
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
    </>
  )
}
