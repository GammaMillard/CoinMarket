import NavBar from '@/components/UserInfo'
import './globals.css'
import { Montserrat } from 'next/font/google'




export const metadata = {
  title: 'CoinMarket',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
       
        {children}
        </body>
    </html>
  )
}
