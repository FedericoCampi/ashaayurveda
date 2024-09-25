import React from 'react'

const Welcome = () => {
  return (
    <div className='flex w-full min-h-[400px] py-4'>
      <div className='bg-blue-800 w-[40%] hidden md:block'></div>
      <div className='w-full md:w-[60%] px-4 flex flex-col items-center md:items-start text-center'>
        <h1 className='text-3xl py-4'>Asha Ayurveda desde 2017</h1>
        <p>¡Bienvenidos a Asha Ayurveda! Nuestro espacio fue creado hace seis años con el objetivo de compartir experiencias, trabajar en grupo y ofrecer otras miradas basadas en conocimientos ancestrales adaptados a tiempos actuales. Hemos llevado a cabo diversos eventos relacionados con el Ayurveda y el Yoga, inspirados por nuestra búsqueda constante desde lo profundo del ser. Con el nombre ASHA, palabra sánscrita que se traduce como esperanza, queremos plasmar anhelos para contribuir al cuidado general de la salud integral, mientras que la palabra AYURVEDA nos recuerda la importancia de chequear cómo estamos viviendo y cómo nos relacionamos con el entorno y sus cambios. Nuestro trabajo sincero, la fácil integración en nuestra comunidad y las ganas de seguir aprendiendo nos dan luz para continuar creciendo. ¡Gracias por visitar nuestra página web!</p>
        <button className='bg-green-300 p-2 mt-6'>Sobre Asha Ayurveda</button>
      </div>
    </div>
  )
}

export default Welcome
