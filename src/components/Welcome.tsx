import Image from 'next/image'
import React from 'react'
import FirstButton from './ui/firstButton'

const Welcome = () => {
  return (
    <div className='flex w-full min-h-[400px] sm:pt-16 lg:px-[5%] 2xl:px-[15%] md:space-x-6'>
      <div className='w-[40%] hidden md:block'>
        <Image
          src='/imagesFirstLanding/velas.webp'
          alt='velas'
          width={1000}
          height={300}
          className='max-h-[500px] object-cover'
          />
      </div>
      <div className='w-full md:w-[60%] px-4 flex flex-col items-center md:items-start'>
        <h1 className='text-4xl py-4 mainColorText text-start'>Origen de Asha Ayurveda</h1>
        {/* <p className='md:text-center text-start'>¡Bienvenidos a Asha Ayurveda! Nuestro espacio fue creado hace seis años con el objetivo de compartir experiencias, trabajar en grupo y ofrecer otras miradas basadas en conocimientos ancestrales adaptados a tiempos actuales. Hemos llevado a cabo diversos eventos relacionados con el Ayurveda y el Yoga, inspirados por nuestra búsqueda constante desde lo profundo del ser. Con el nombre ASHA, palabra sánscrita que se traduce como esperanza, queremos plasmar anhelos para contribuir al cuidado general de la salud integral, mientras que la palabra AYURVEDA nos recuerda la importancia de chequear cómo estamos viviendo y cómo nos relacionamos con el entorno y sus cambios. Nuestro trabajo sincero, la fácil integración en nuestra comunidad y las ganas de seguir aprendiendo nos dan luz para continuar creciendo. ¡Gracias por visitar nuestra página web!</p> */}
        <p className='md:text-center text-start'>
          ¡Bienvenidos a Asha Ayurveda! Desde hace seis años, nuestro espacio ofrece experiencias y conocimientos ancestrales adaptados a la actualidad, centrados en Ayurveda y Yoga. A través de eventos y trabajo grupal, buscamos contribuir al cuidado de la salud integral. 
        </p>
        <ul className='list-disc md:text-center text-start pl-6'>
          <li>Compartir experiencias y trabajar en grupo.</li>
          <li>Organizar eventos relacionados con Ayurveda y Yoga.</li>
          <li>Promover la salud integral y la conexión con el entorno.</li>
          <li>Crecer como comunidad, impulsados por la esperanza (ASHA).</li>
        </ul>
        <p className='md:text-center text-start'>
          Gracias por visitar nuestra página y ser parte de este camino de aprendizaje y crecimiento.
        </p>
        <a href='/sobrenosotros'>
          <FirstButton 
            titulo="Sobre Asha Ayurveda" 
            padding='p-3'
            tamano='text-2xl mt-3'
          />
        </a>
      </div>
    </div>
  )
}

export default Welcome
