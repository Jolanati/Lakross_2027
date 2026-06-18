// ============================================================
// SITE CONFIGURATION
// Flip switches here to show/hide sections.
// Toggle 'mode' to switch between academic and campaign view.
// ============================================================

export type SiteMode = 'academic' | 'campaign'

export const siteConfig = {
  // Default mode when page loads
  defaultMode: 'academic' as SiteMode,

  // Default language
  defaultLocale: 'lv' as 'lv' | 'en',

  // Sections visibility per mode
  sections: {
    hero:           { academic: true,  campaign: true  },
    story:          { academic: true,  campaign: true  },
    swot:           { academic: true,  campaign: false },
    campaigns:      { academic: true,  campaign: true  },
    merch:          { academic: true,  campaign: true  },
    passTheStick:   { academic: true,  campaign: true  },
    events:         { academic: true,  campaign: true  },
    budget:         { academic: true,  campaign: false },
    timeline:       { academic: true,  campaign: false },
    kpis:           { academic: true,  campaign: false },
    donate:         { academic: true,  campaign: true  },
    sponsors:       { academic: true,  campaign: true  },
    team:           { academic: true,  campaign: true  },
    footer:         { academic: true,  campaign: true  },
  },

  // Donation config
  donate: {
    // Replace with real links
    zeffy: 'https://www.zeffy.com/REPLACE_ME',
    paypal: 'https://paypal.me/REPLACE_ME',
    bankAccount: 'LV00HABA0000000000000',
    suggestedAmounts: [10, 25, 50, 100],
    highlightedAmount: 25,
    goalEur: 15000,
    raisedEur: 300, // UPDATE THIS as donations come in
  },

  // Event: European Championship
  championship: {
    name: 'Eiropas Čempionāts Sixes',
    location: 'Spānija',
    date: '2026-11-01', // Update with exact date
  },

  // Social links
  social: {
    instagram: 'https://instagram.com/REPLACE_ME',
    tiktok: 'https://tiktok.com/@REPLACE_ME',
    facebook: 'https://facebook.com/REPLACE_ME',
    youtube: '',
    website: 'https://lacrosse.lv',
  },
}
// Site configuration — flip switches to show/hide sections
// Toggle 'mode' to switch between academic presentation and live campaign

export type SiteMode = 'academic' | 'campaign'

export const siteConfig = {
  // Default mode on load
  defaultMode: 'academic' as SiteMode,

  // Default language
  defaultLocale: 'lv' as 'lv' | 'en',

  // Sections visible per mode
  sections: {
    hero: { academic: true, campaign: true },
    story: { academic: true, campaign: true },
    swot: { academic: true, campaign: false },
    budget: { academic: true, campaign: false },
    campaigns: { academic: true, campaign: true },
    merch: { academic: true, campaign: true },
    passTheStick: { academic: true, campaign: true },
    events: { academic: true, campaign: true },
    timeline: { academic: true, campaign: false },
    kpis: { academic: true, campaign: false },
    donate: { academic: true, campaign: true },
    team: { academic: true, campaign: true },
  },

  // External links
  links: {
    donate: 'https://www.zeffy.com/donation-form/PLACEHOLDER', // Replace with actual Zeffy link
    instagram: 'https://instagram.com/latvialacrosse',
    tiktok: 'https://tiktok.com/@latvialacrosse',
    facebook: 'https://facebook.com/latvialacrosse',
    website: 'https://lacrosse.lv',
    sponsorPdf: '/sponsors.pdf', // Upload to /public/sponsors.pdf
  },

  // Fundraising progress (update regularly)
  fundraising: {
    goal: 15000,
    raised: 300,
    currency: 'EUR',
    deadline: '2026-11-01',
  },

  // Donation amount presets
  donationAmounts: [10, 25, 50, 100],
  recommendedAmount: 25,
}
