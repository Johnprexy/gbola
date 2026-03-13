export interface MinistryEvent {
  id: string
  day: string
  month: string
  year: string
  title: string
  location: string
  time: string
  tag: string
}

export const events: MinistryEvent[] = [
  {
    id: '1',
    day: '22',
    month: 'Mar',
    year: '2025',
    title: 'Word & Spirit Conference — Abuja',
    location: 'Rhema Bible Training Center, Abuja',
    time: '9:00 AM — 6:00 PM',
    tag: 'Conference',
  },
  {
    id: '2',
    day: '05',
    month: 'Apr',
    year: '2025',
    title: 'Prayer Summit — Lagos',
    location: 'Victory Grace Centre, Lagos',
    time: 'Friday Night — Saturday Morning',
    tag: 'Prayer Gathering',
  },
  {
    id: '3',
    day: '18',
    month: 'Apr',
    year: '2025',
    title: 'Ministers\' Training Day',
    location: 'Rhema Bible Training Center, Abuja',
    time: '10:00 AM — 4:00 PM',
    tag: 'Training',
  },
  {
    id: '4',
    day: '10',
    month: 'May',
    year: '2025',
    title: 'Intimacy with God Retreat — Abuja',
    location: 'Hilton Hotel, Abuja',
    time: 'Two-Day Retreat for Believers',
    tag: 'Retreat',
  },
]
