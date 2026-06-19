// ============================================================
// SITE CONFIGURATION
// Flip switches here to show/hide sections.
// Toggle 'mode' to switch between academic and campaign view.
// ============================================================

export type SiteMode = 'academic' | 'campaign'

export const siteConfig = {
  // Default mode when page loads
  defaultMode: 'campaign' as SiteMode,

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
    zeffy: 'https://www.zeffy.com/en-US/donation-form/support-latvia-lacrosse-2026-wl-womens-championship-dii',
    paypal: 'https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=info@llf.lv&currency_code=EUR&item_name=Atbalsts+Latvijas+Sieviesu+Lakrosa+Izlasei',
    bankAccount: 'LV00HABA0000000000000',
    suggestedAmounts: [10, 25, 50, 100],
    highlightedAmount: 25,
    goalEur: 15000,
    raisedEur: 4015, // UPDATE THIS as donations come in
  },

  // Event: European Championship
  championship: {
    name: 'Eiropas Čempionāts Sixes',
    location: 'Spānija',
    date: '2026-11-01',
  },

  // Social links
  social: {
    instagram: 'https://www.instagram.com/lat_wlax/',
    tiktok: '',
    facebook: 'https://www.facebook.com/Lakrosaizlase',
    youtube: '',
    website: 'https://www.lacrosse.lv/lv',
  },
}
