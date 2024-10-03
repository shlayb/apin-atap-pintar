'use client';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { use, useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import ModeToggle from './mode.toggle';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

function Header() {
  const myRef = useRef(null);

  const [Mobilenav, setMobileNav] = useState(true);

  useEffect(() => {
    const myRefCurrent = myRef.current;
    if (Mobilenav) {
      myRefCurrent?.classList.add('hidden');
    } else {
      myRefCurrent?.classList.remove('hidden');
    }
  }, [Mobilenav, myRef]);

  return (
    <>
      <nav className="fixed z-[9999] border-b-slate-400 border-b w-full bg-gray-100 font-Poppins dark:bg-dark dark:border-b dark:border-border dark:border-b-slate-600">
        <div className={`mx-auto max-w-6xl px-8 max-lg:mx-auto max-lg:px-4`}>
          <div className="flex">
            <div className="flex w-full justify-between">
              <div className="max-lg:item-start max-lg:mx-0">
                <a href="/" className="flex items-center px-2 py-4">
                  <span className={` ${poppins.className} poppins text-2xl font-bold text-dark dark:text-light`}>APIN : Atap Pintar</span>
                </a>
              </div>
              <div className={`font-Poppins hidden space-x-2 align-middle text-dark md:flex`}>
                <div className="px-2 py-4 text-lg font-semibold transition duration-300 dark:text-light hover:text-gray-900">
                  <ModeToggle />
                </div>
                <a href="/#Day1" className="px-2 py-4 text-lg font-semibold transition duration-300 dark:text-light  hover:text-gray-900">
                  Control
                </a>
              </div>
              <div id="mobile-menu" className="flex items-center dark:text-light md:hidden">
                <div className="px-3">
                  <ModeToggle />
                </div>
                <button
                  className="mobile-menu-button outline-none dark:text-light"
                  onClick={() => {
                    setMobileNav(!Mobilenav);
                  }}
                >
                  <svg className="h-7 w-7 text-gray-80" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div ref={myRef} className="mobile-menu hidden md:hidden">
          <ul className="mx-5">
            <li>
              <a href="/#Day1" className=" block border-b-[1px] border-dartext-dark px-2 py-4 text-sm font-semibold text-gray-600 dark:text-light transition duration-300 hover:bg-gray-200 ">
                Control
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="w-full h-16 bg-light dark:bg-dark"></div>
    </>
  );
}

export default Header;
