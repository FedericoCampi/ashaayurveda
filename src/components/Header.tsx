import React from 'react'
import NavBar from './NavBar'
import OffCanvas from './OffCanvas'

const Header = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <NavBar />
      </div>

      {/* OffCanvas visible solo en pantallas pequeñas */}
      <div className="block lg:hidden">
        <OffCanvas />
      </div>
    </div>
  )
}

export default Header
