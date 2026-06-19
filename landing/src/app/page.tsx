'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Hook from '@/components/Hook'
import Kilometer from '@/components/Kilometer'
import Campaigns from '@/components/Campaigns'
import Club100 from '@/components/Club100'
import Sponsors from '@/components/Sponsors'
import Merch from '@/components/Merch'
import Team from '@/components/Team'
import PassTheStick from '@/components/PassTheStick'
import Story from '@/components/Story'
import SWOT from '@/components/SWOT'
import Events from '@/components/Events'
import Budget from '@/components/Budget'
import Timeline from '@/components/Timeline'
import KPIs from '@/components/KPIs'
import Donate from '@/components/Donate'
import Footer from '@/components/Footer'
import SectionWrapper from '@/components/SectionWrapper'

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ===== ATTENTION ===== */}
      <SectionWrapper sectionKey="hero">
        <Hero />
      </SectionWrapper>

      {/* ===== EMOTIONAL HOOK ===== */}
      <Hook />

      {/* ===== KILOMETER PROGRESS ===== */}
      <SectionWrapper sectionKey="donate">
        <Kilometer />
      </SectionWrapper>

      {/* ===== 3 PATHS ===== */}
      <SectionWrapper sectionKey="campaigns">
        <Campaigns />
      </SectionWrapper>

      {/* ===== 100 CLUB ===== */}
      <SectionWrapper sectionKey="campaigns">
        <Club100 />
      </SectionWrapper>

      {/* ===== B2B SPONSORS ===== */}
      <SectionWrapper sectionKey="sponsors">
        <Sponsors />
      </SectionWrapper>

      {/* ===== AI MERCH ===== */}
      <SectionWrapper sectionKey="merch">
        <Merch />
      </SectionWrapper>

      {/* ===== TEAM ===== */}
      <SectionWrapper sectionKey="team">
        <Team />
      </SectionWrapper>

      {/* ===== INTEREST — deeper story ===== */}
      <SectionWrapper sectionKey="story">
        <Story />
      </SectionWrapper>

      {/* ===== PASS THE STICK ===== */}
      <SectionWrapper sectionKey="passTheStick">
        <PassTheStick />
      </SectionWrapper>

      {/* ===== ACADEMIC SECTIONS ===== */}
      <SectionWrapper sectionKey="swot">
        <SWOT />
      </SectionWrapper>

      <SectionWrapper sectionKey="events">
        <Events />
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

      {/* ===== FOOTER ===== */}
      <SectionWrapper sectionKey="footer">
        <Footer />
      </SectionWrapper>
    </>
  )
}
