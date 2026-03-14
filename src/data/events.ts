export interface MinistryEvent {
  id: string
  day: string
  month: string
  year: string
  title: string
  location: string
  time: string
  tag: string
  flyer?: string          // optional path to flyer image
  featured?: boolean      // pin to top of list
  coSpeakers?: string[]   // other ministers on the bill
  host?: string           // hosting church / org
}

export const events: MinistryEvent[] = [
  // ─── REAL / CONFIRMED UPCOMING ────────────────────────────────
  {
    id: 'scripture-city-1',
    day: '27',
    month: 'Mar',
    year: '2026',
    title: 'ScriptureCity Prayer Conference',
    location: 'Charis Hub, Atlantic Mall, Utako, Abuja',
    time: 'Friday 5pm · Saturday 9am',
    tag: 'Prayer Conference',
    featured: true,
    host: 'ScriptureCity Church',
    coSpeakers: ['Min. Emmanuel Akin-Williams', 'Min. Obajuwon Adeboye', 'Min. Seyi Oke'],
  },
  {
    id: 'scripture-city-2',
    day: '29',
    month: 'Mar',
    year: '2026',
    title: 'ScriptureCity Prayer Conference — Sunday',
    location: 'Hall 3, Novare Central Mall, Plot 502 Dalaba Street, Wuse Zone 5, Abuja',
    time: 'Sunday 9am',
    tag: 'Prayer Conference',
    featured: true,
    host: 'ScriptureCity Church',
    coSpeakers: ['Min. Emmanuel Akin-Williams', 'Min. Obajuwon Adeboye', 'Min. Seyi Oke'],
  },
]
