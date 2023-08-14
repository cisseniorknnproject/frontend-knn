import Image from 'next/image'
import Categorylist from './components/categorylist'
import Ads from './components/ads/ads'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      < Categorylist />
      < Ads/>
    </main>
  )
}
