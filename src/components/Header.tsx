'use client'

import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import OffCanvas from './OffCanvas'

const Header = () => {

  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cambia '100' al valor que consideres apropiado para el scroll
      setShrink(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`sticky top-0 bg-white z-30 w-full transition-all duration-300 ${shrink ? 'h-15' : 'h-16'}`}>
      <div className="hidden lg:block h-full">
        <NavBar />
      </div>

      {/* OffCanvas visible solo en pantallas pequeñas */}
      <div className="block lg:hidden h-full">
        <OffCanvas />
      </div>
    </div>
  )
}

export default Header
