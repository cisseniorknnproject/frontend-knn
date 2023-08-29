import Image from 'next/image'
import Listpay from './listpay'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      {/* import list crum */}
      <Listpay />
    </main>
  )
}
