export type SermonCategory = 'Prayer' | 'Holy Spirit' | 'Intimacy with God' | 'Faith' | 'Leadership' | 'The Word'

export interface Sermon {
  id: string
  title: string
  category: SermonCategory
  date: string
  duration: string
  excerpt: string
  scripture: string
}

export const sermons: Sermon[] = [
  {
    id: '1',
    title: 'The Prayer Life That Commands Heaven',
    category: 'Prayer',
    date: 'February 12, 2025',
    duration: '52 min',
    excerpt: 'Discover the kind of prayer that does not just knock on heaven\'s door — it lays hold of the promises of God and refuses to let go until they manifest in the earth.',
    scripture: 'Matthew 18:18',
  },
  {
    id: '2',
    title: 'Flowing with the Holy Spirit',
    category: 'Holy Spirit',
    date: 'January 28, 2025',
    duration: '47 min',
    excerpt: 'The Holy Spirit is not a force — He is a Person. Learn to recognize His voice, yield to His promptings, and walk in perfect step with the Third Person of the Trinity.',
    scripture: 'John 16:13',
  },
  {
    id: '3',
    title: 'The Secret Place: Encountering God in Intimacy',
    category: 'Intimacy with God',
    date: 'December 8, 2024',
    duration: '61 min',
    excerpt: 'Psalm 91 promises a dwelling in the shadow of the Almighty. This message opens the door to that habitation — where God speaks clearly and you hear with precision.',
    scripture: 'Psalm 91:1',
  },
  {
    id: '4',
    title: 'Faith That Does Not Waver',
    category: 'Faith',
    date: 'November 15, 2024',
    duration: '44 min',
    excerpt: 'Abraham\'s faith did not stagger at the promise of God. This teaching unpacks the anatomy of unwavering faith and how every believer can build and operate in it.',
    scripture: 'Romans 4:20',
  },
  {
    id: '5',
    title: 'Raised Up: Understanding Spiritual Authority',
    category: 'Leadership',
    date: 'October 20, 2024',
    duration: '58 min',
    excerpt: 'God raises up men and women for Kingdom purpose. Learn what spiritual authority truly is, where it comes from, and how to walk in it for the glory of God.',
    scripture: 'Luke 10:19',
  },
  {
    id: '6',
    title: 'The Word at Work: Meditating on Scripture',
    category: 'The Word',
    date: 'September 5, 2024',
    duration: '49 min',
    excerpt: 'Joshua 1:8 commands meditation — not as religious routine, but as the gateway to supernatural success. Discover how to let the living Word of God work mightily in you.',
    scripture: 'Joshua 1:8',
  },
]

export const categoryColors: Record<SermonCategory, string> = {
  Prayer: '#1a2f4a',
  'Holy Spirit': '#1a2a4a',
  'Intimacy with God': '#0e2238',
  Faith: '#1c2e1a',
  Leadership: '#2a1a0e',
  'The Word': '#1a0e2a',
}
