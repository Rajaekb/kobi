"use client"
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';


const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Portfolio", url: "/portfolio" },
  { id: 4, title: "Blog", url: "/blog" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
]

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const session = useSession();
  return (

    <nav className="w-full bg-[#030129] fixed top-0 left-0 right-0 z-10 border-b-[1px] border-gray-500 ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* LOGO */}
            <Link href="/">
              <h2 className="text-2xl font-bold ">Kobi Rajae.</h2>
            </Link>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image src="/close.svg" width={30} height={30} alt="logo" />
                ) : (
                  <Image
                    src="/hamburger-menu.svg"
                    width={30}
                    height={30}
                    alt="logo"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              {links.map((link) => (
                <li className="pb-6 text-sm tracking-[0.10em]  py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link key={link.id} href={link.url} onClick={() => setNavbar(!navbar)}>
                    {link.title}
                  </Link>
                </li>

              ))}

            </ul>
          </div>
        </div>
      </div>
    </nav>


  )
}

export default Navbar