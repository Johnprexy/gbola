export interface YoutubeVideo {
  id: string
  title: string
  category: string
  description: string
}

// Real videos from https://www.youtube.com/@gbola_oladosu
// Titles auto-load from YouTube via iframe — titles below are display fallbacks
export const youtubeVideos: YoutubeVideo[] = [
  {
    id: 'HSY6mnleBSk',
    title: 'Teaching 1',
    category: 'Teaching',
    description: 'A powerful message from Rev. Adegbola Oladosu.',
  },
  {
    id: 'dpLajwi2nMs',
    title: 'Teaching 2',
    category: 'Teaching',
    description: 'A powerful message from Rev. Adegbola Oladosu.',
  },
  {
    id: 'cAlknNe1oiM',
    title: 'Teaching 3',
    category: 'Teaching',
    description: 'A powerful message from Rev. Adegbola Oladosu.',
  },
  {
    id: '6t7YH4TnHIc',
    title: 'Teaching 4',
    category: 'Teaching',
    description: 'A powerful message from Rev. Adegbola Oladosu.',
  },
  {
    id: 'i7sSAp1R9mE',
    title: 'Teaching 5',
    category: 'Teaching',
    description: 'A powerful message from Rev. Adegbola Oladosu.',
  },
]

export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@gbola_oladosu'
export const YOUTUBE_CHANNEL_HANDLE = '@gbola_oladosu'
