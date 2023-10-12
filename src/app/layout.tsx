import './globals.css'
import { Montserrat, Kanit } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import Provider from './context/provider'
const montserrat = Montserrat({ subsets: ["latin"] })
const kanit = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" >
        <Provider>
      <body suppressHydrationWarning={true} className={`${montserrat.className}, ${kanit.className}`}>
          <Navbar />
          {children}
      </body>
        </Provider>
    </html>
  )
}
