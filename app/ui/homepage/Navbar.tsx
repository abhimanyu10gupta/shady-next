"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ShadyLogoWhite from '@/public/ShadyLogoWhite.png'
import Link from 'next/link'
import Sidebar from './Sidebar'
import logowhite from '@/public/logowhite1.png'
import logowhite2 from '@/public/logowhite2.png'

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scrolling down, hide the navbar
        setShow(false);
      } else {
        // if scrolling up, show the navbar
        setShow(true);
      }

      // remember the current page location for the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return ( 
    <header className={`top-0 transition-transform duration-700 transform 
    ${show ? 'translate-y-0' : '-translate-y-full'} fixed z-20  w-screen`}>
      {/* <div className="p-10 md:pl-20 md:pr-20"> */}
          <div className="hidden container relative py-6 md:flex md:p-10 pl-12 pr-12 mx-auto md:items-center justify-between ">
            <div className="">
              <Link href='/'>
                <Image 
                  src={logowhite2}
                  alt= "shady_logo"
                  height={160}
                  width={160}
                  className=''
                />
              </Link>
           </div>
           <div className="">
            <ul className="hidden md:flex justify-between my-auto gap-x-12">
              <li key={"one"}>
                <Link href="/">
                  <button>Whats On</button>
                </Link>
              </li>
              <li key={"two"}>
                <Link href="/menu">
                  <p>Menu</p>
                </Link>
              </li>
              <li key={"three"}>
                <Link href="/booking">
                  <p>Book a Table</p>
                </Link>
              </li>
              <li key={"four"}>
                <Link href="#footer">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
            </div>
          </div>

          <div className='container md:hidden py-6 relative flex justify-end'>
            <button type="button" className="" onClick={handleDrawerToggle}>
              {/* Menu icon */}
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24">
                    <path fill="#fff"
                          d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
                </svg>
            </button>
            <Sidebar isOpen={isDrawerOpen} toggle={handleDrawerToggle} />

          </div>
          {/* </div> */}

    </header>
  )
}

export default Navbar