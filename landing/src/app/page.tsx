'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Story from '@/components/Story'
import SWOT from '@/components/SWOT'
import Campaigns from '@/components/Campaigns'
import Merch from '@/components/Merch'
import PassTheStick from '@/components/PassTheStick'
import Events from '@/components/Events'
import Budget from '@/components/Budget'
import Timeline from '@/components/Timeline'
import KPIs from '@/components/KPIs'
import Donate from '@/components/Donate'
import Sponsors from '@/components/Sponsors'
import Team from '@/components/Team'
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

      {/* ===== INTEREST ===== */}
      <SectionWrapper sectionKey="story">
        <Story />
      </SectionWrapper>

      <SectionWrapper sectionKey="swot">
        <SWOT />
      </SectionWrapper>

      {/* ===== DESIRE ===== */}
      <SectionWrapper sectionKey="campaigns">
        <Campaigns />
      </SectionWrapper>

      <SectionWrapper sectionKey="merch">
        <Merch />
      </SectionWrapper>

      <SectionWrapper sectionKey="passTheStick">
        <PassTheStick />
      </SectionWrapper>

      <SectionWrapper sectionKey="events">
        <Events />
      </SectionWrapper>

      {/* ===== ACADEMIC SECTIONS ===== */}
      <SectionWrapper sectionKey="budget">
        <Budget />
      </SectionWrapper>

      <SectionWrapper sectionKey="timeline">
        <Timeline />
      </SectionWrapper>

      <SectionWrapper sectionKey="kpis">
        <KPIs />
      </SectionWrapper>

      {/* ===== ACTION ===== */}
      <SectionWrapper sectionKey="donate">
        <Donate />
      </SectionWrapper>

      <SectionWrapper sectionKey="sponsors">
        <Sponsors />
      </SectionWrapper>

      <SectionWrapper sectionKey="team">
        <Team />
      </SectionWrapper>

      <SectionWrapper sectionKey="footer">
        <Footer />
      </SectionWrapper>
    </>
  )
}
