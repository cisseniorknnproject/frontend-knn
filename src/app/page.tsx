import Listpay from './products/listpay'
import { Suspense } from 'react'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        <Listpay />
    </main>
  )
}
