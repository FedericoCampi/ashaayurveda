'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navItems } from '@/lib/data';
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { app } from '@/lib/firebase-clientApp';
import LoginModal from './LoginModal';
import { signOut } from "firebase/auth";

const NavBar = () => {

  const pathname = usePathname();

  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null)
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current); // Cancel any pending close timeout
    }
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
      setOpenSubDropdown(null);
    }, 300); // 300ms delay before closing the dropdown
  };

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className='border-gray-300 border-b w-full h-full flex justify-center'>
      <div className='flex w-[1200px] h-full items-center xl:px-0 px-10 '>
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
        <div className="w-[60%] space-x-5 text-sm flex justify-end">
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
                    <div
                      key={subItem.name}
                      className="relative"
                      onMouseEnter={() => setOpenSubDropdown(subItem.name)}
                      onMouseLeave={() => setOpenSubDropdown(null)}
                    >
                      <Link href={subItem.href} className='no-underline m-0'>
                        <p className="hover:bg-gray-100 m-1 px-2 py-2 cursor-pointer text-black flex items-center p_sin_interlineado">
                          {subItem.name}
                          {subItem.subItems && <IoIosArrowDown className="ml-2" />}
                        </p>
                      </Link>

                      {/* Sub-dropdown */}
                      {subItem.subItems && openSubDropdown === subItem.name && (
                        <div className="absolute top-0 left-full bg-white shadow-lg p-2 w-[150px] rounded-md transition-opacity duration-300 opacity-100 border-b-4 border-[#35b05a]">
                          {subItem.subItems.map((nestedItem) => (
                            <Link key={nestedItem.name} href={nestedItem.href} className='no-underline m-0'>
                              <p className="hover:bg-gray-100 m-1 px-2 py-2 cursor-pointer text-black">{nestedItem.name}</p>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>
        <div className='w-[10%] text-sm pl-2'>
          {user ? (
            <div
              onMouseEnter={() => setOpenDropdown("miCuenta")}
              className="relative"
            >
              <button className='border-green-500 border-1 p-2 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300 flex items-center justify-center whitespace-nowrap'>
                Mi cuenta
              </button>

              {openDropdown === "miCuenta" && (
                <div className="absolute top-full right-0 mt-2 bg-white shadow-lg p-2 w-[150px] rounded-md transition-opacity duration-300 opacity-100 border-b-4 border-[#35b05a] z-50">
                  <button
                    onClick={async () => {
                      const auth = getAuth(app);
                      await signOut(auth);
                      setUser(null);
                      setOpenDropdown(null);
                    }}
                    className="text-left w-full hover:bg-gray-100 m-1 px-2 py-2 cursor-pointer text-black"
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => setShowLoginModal(true)}
              className='border-green-500 border-1 p-2 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300 flex items-center justify-center whitespace-nowrap'>
              Iniciar sesión
            </button>
          )}
        </div>
      </div>
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />

    </div>
    
  )
}

export default NavBar