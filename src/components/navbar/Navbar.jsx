"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Portfolio", url: "/portfolio" },
  { id: 4, title: "Blog", url: "/blog" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
]

const Navbar = () => {
  const session = useSession();
  return (
    <div className='h-24 flex justify-between items-center'>
      <Link href="/" className='font-bold	text-3xl'>Kobidev.</Link>
      <div className='flex gap-4 items-center text-sm tracking-[0.10em]'>
        {links.map((link) => (
          <Link
            key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className='btn' onClick={signOut}>Logout</button>

        )}
      </div>
    </div>
  )
}

export default Navbar