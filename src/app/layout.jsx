import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kobi Web Dev',
  description: 'Front End developer , Freelancer ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='max-w-[450px] md:max-w-[1500px] px-10 overflow-x-hidden '>
          <Navbar />

          {children}
          <Footer />
        </div>


      </body>
    </html>
  )
}
