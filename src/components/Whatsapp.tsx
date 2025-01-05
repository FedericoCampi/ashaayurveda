import Image from 'next/image'
import React from 'react'

const Whatsapp = () => {

  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER; // Reemplaza con tu número
  const message = encodeURIComponent("Hola, me contacto desde la web de Asha Ayurveda, quería hacer una consulta.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`; 
  
  return (
    <div className=''>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <Image
          alt='icon'
          src='/iconWhatsapp.jpg'
          className='w-[80px] h-[80px] hover:scale-110 cursor-pointer rounded-full'
          width={70}
          height={70}
        />
      </a>
    </div>
  )
}

export default Whatsapp
