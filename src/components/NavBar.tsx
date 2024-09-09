import React from 'react'

const NavBar = () => {
  return (
    <div className='flex w-full generalPaddingX h-20 items-center border-b border-black'>
      <div className='w-[40%]'>
        Asha Ayurveda
      </div>
      <div className="w-[60%] space-x-5">
        <button>Bienvenidos</button>
        <button>Servicios</button>
        <button>Articulos de ínteres</button>
        <button>Sobre nosotros</button>
        <button>Galería</button>
        <button>Prensa y medios</button>
      </div>
    </div>
  )
}

export default NavBar
