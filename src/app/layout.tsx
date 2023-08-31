import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import Head from 'next/head'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title:'NPP-SHOP',
  description:'MainPage',
  icons: [
    {rel: 'icon', url: '/favicon-32x32.png'}
  ]
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
            <Navbar />
            {children}
            </body>
    </html>
  )
}
