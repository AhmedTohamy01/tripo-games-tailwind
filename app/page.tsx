import HomeCompound from '@/compounds/HomeCompound'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Tripo Games | Play Beyond Limits',
    template: '%s | Tripo Games',
  },
  description:
    'Dive into the world of Tripo Games — mobile games crafted for fun, challenge, and excitement. Experience immersive gameplay, stunning visuals, and endless entertainment on the go.',
  openGraph: {
    title: 'Tripo Games | Play Beyond Limits',
    description:
      'Tripo Games creates captivating mobile games that bring joy and adventure to players around the world.',
    url: 'https://www.tripogames.com',
    siteName: 'Tripo Games',
    type: 'website',
  } satisfies Metadata['openGraph'],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.tripogames.com',
  },
}

export default function Home() {
  return <HomeCompound />
}
