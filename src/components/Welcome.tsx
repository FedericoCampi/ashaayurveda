import Image from 'next/image'
import React from 'react'
import FirstButton from './ui/firstButton'

const Welcome = () => {
  return (
    <div className='flex w-full min-h-[400px] py-4'>
      <div className='w-[40%] hidden md:block'>
        <Image
          src='/imagesFirstLanding/velas.webp'
          alt='velas'
          width={1000}
          height={300}
          className='max-h-[500px] object-cover'
          />
      </div>
      <div className='w-full md:w-[60%] px-4 flex flex-col items-center md:items-start text-center'>
        <h1 className='text-4xl py-4 mainColorText text-start'>Asha Ayurveda desde 2017</h1>
        <p className='text-center md:text-start'>¡Bienvenidos a Asha Ayurveda! Nuestro espacio fue creado hace seis años con el objetivo de compartir experiencias, trabajar en grupo y ofrecer otras miradas basadas en conocimientos ancestrales adaptados a tiempos actuales. Hemos llevado a cabo diversos eventos relacionados con el Ayurveda y el Yoga, inspirados por nuestra búsqueda constante desde lo profundo del ser. Con el nombre ASHA, palabra sánscrita que se traduce como esperanza, queremos plasmar anhelos para contribuir al cuidado general de la salud integral, mientras que la palabra AYURVEDA nos recuerda la importancia de chequear cómo estamos viviendo y cómo nos relacionamos con el entorno y sus cambios. Nuestro trabajo sincero, la fácil integración en nuestra comunidad y las ganas de seguir aprendiendo nos dan luz para continuar creciendo. ¡Gracias por visitar nuestra página web!</p>
        <FirstButton 
          titulo="Sobre Asha Ayurveda" 
          padding='p-3'
          tamano='text-2xl'
        />
      </div>
    </div>
  )
}

export default Welcome
