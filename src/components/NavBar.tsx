'use client'

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navItems } from '@/lib/data';

const NavBar = () => {

  const pathname = usePathname();

  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current); // Cancel any pending close timeout
    }
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // 300ms delay before closing the dropdown
  };

  return (
    <div className='flex w-full px-10 h-full items-center border-b border-black'>
      <div className='w-[30%]'>
        <a href="/">
          <Image
            src={'/icons/iconAsha.webp'}
            alt='icon Asha ayurveda'
            width={200}
            height={100}
          />
        </a>
      </div>
      <div className="w-[70%] space-x-5 text-sm flex justify-end">
        {navItems.map((item) => (
          <div
          key={item.name}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
        >
          <Link href={item.href} className={`${pathname === item.href ? 'mainColorText' : 'text-black'} no-underline`}>
            <button className='flex items-center'>
              <p className='mr-[5px] mb-0'>{item.name}</p>
              {item.subItems && <IoIosArrowDown />}
            </button>
          </Link>

          {/* Dropdown */}
          {item.subItems && openDropdown === item.name && (
            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg p-2 w-[150px] rounded-md transition-opacity duration-300 opacity-100 border-b-4 border-[#35b05a]">
              {item.subItems.map((subItem) => (
                <Link key={subItem.name} href={subItem.href} className='no-underline m-0'>
                  <p className="hover:bg-gray-100 m-1 px-2 py-2 cursor-pointer text-black">{subItem.name}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
        ))}
        {/* <button className={pathname === '/' ? 'mainColorText' : 'text-black'}>
          Bienvenidos
        </button>
        <button className='flex items-center'>
          <p className='mr-[5px] mb-0'>Servicios</p><IoIosArrowDown/>
        </button>
        <button className='flex items-center'>
          <p className='mr-[5px] mb-0'>Articulos de ínteres</p><IoIosArrowDown/>
        </button>
        <button>Sobre nosotros</button>
        <button>Galería</button>
        <button>Prensa y medios</button> */}
      </div>
    </div>
  )
}

export default NavBar
