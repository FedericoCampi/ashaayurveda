import Image from 'next/image'
import React from 'react'

const Whatsapp = () => {
  return (
    <div>
      <Image 
        alt='icon'
        src='/iconWhatsapp.jpg'
        className='w-[70px] h-[70px]'
        width={70}
        height={70}
      />
    </div>
  )
}

export default Whatsapp
