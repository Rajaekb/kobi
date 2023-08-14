import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kobi Web Dev',
  description: 'Front End developer , Freelancer ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className='max-w-[400px] md:max-w-[1462px] px-5 overflow-x-hidden '>
            <Navbar />
            {children}
            <Footer />
          </div>
        </AuthProvider>


      </body>
    </html>
  )
}
