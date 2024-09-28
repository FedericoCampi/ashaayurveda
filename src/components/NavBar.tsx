'use client'

import Image from 'next/image'
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { usePathname  } from 'next/navigation';

const NavBar = () => {

  const pathname = usePathname ();

  return (
    <div className='flex w-full px-10 h-20 items-center border-b border-black'>
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
      <div className="w-[70%] space-x-5 text-sm flex">
        <button className={pathname === '/' ? 'mainColorText' : 'text-black'}>
          Bienvenidos
        </button>
        <button className='flex items-center'>
          <p className='mr-[5px] mb-0'>Servicios</p><IoIosArrowDown/></button>
        <button className='flex items-center'>
          <p className='mr-[-15px] mb-0'>Articulos de ínteres</p><IoIosArrowDown/>
        </button>
        <button>Sobre nosotros</button>
        <button>Galería</button>
        <button>Prensa y medios</button>
      </div>
    </div>
  )
}

export default NavBar
