'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import VideoHook from '@/components/VideoHook'
import Story from '@/components/Story'
import Kilometer from '@/components/Kilometer'
import Campaigns from '@/components/Campaigns'
import SWOT from '@/components/SWOT'
import Audiences from '@/components/Audiences'
import Budget from '@/components/Budget'
import KPIs from '@/components/KPIs'
import ContentPillars from '@/components/ContentPillars'
import Timeline from '@/components/Timeline'
import Risks from '@/components/Risks'
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
      {/* 1. Situation */ }
      <SectionWrapper sectionKey="swot">
        <SWOT />
      </SectionWrapper>

      {/* 2. Audiences */}
      <SectionWrapper sectionKey="audiences">
        <Audiences />
      </SectionWrapper>

      {/* 3. Budget */}
      <SectionWrapper sectionKey="budget">
        <Budget />
      </SectionWrapper>

      {/* 4. KPIs */}
      <SectionWrapper sectionKey="kpis">
        <KPIs />
      </SectionWrapper>

      {/* 5. Content pillars */}
      <SectionWrapper sectionKey="contentPillars">
        <ContentPillars />
      </SectionWrapper>

      {/* 6. Timeline */}
      <SectionWrapper sectionKey="timeline">
        <Timeline />
      </SectionWrapper>

      {/* 7. Risks */}
      <SectionWrapper sectionKey="risks">
        <Risks />
      </SectionWrapper>
    </>
  )
}
