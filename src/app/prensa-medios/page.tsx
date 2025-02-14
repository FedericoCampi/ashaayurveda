import CarouselPrensa from '@/components/CarouselPrensa'
import { carouselPrensa } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='bg-black relative'>
        <Image
          width={1000}
          alt='plasha'
          height={500}
          src={'/prensaymedios/encabezado.webp'}
          className='w-full object-cover h-[400px] opacity-50'
        />
        <p className='absolute inset-0 flex flex-col items-center justify-center text-white text-[40px] text-center px-2'>
          PARTICIPACIÓN EN <br />
          MEDIOS <br />
          PERIODÍSTICOS
        </p>
      </div>
      <div>
        <div className='md:flex md:items-center md:justify-center py-10'>
          <div className='md:max-w-[400px] flex flex-col items-start'>
            <Image
              width={100}
              alt='barras'
              height={50}
              src={'/articulos/recorteBarras.png'}
              className='w-[100px] h-auto pb-8 pl-6 '
            />
            <p className='px-4'>
              Estamos agradecidos por las invitaciones que hemos recibido de programas de radio, televisión y revistas en nuestra ciudad. Consideramos que participar en estos medios de comunicación es una forma de colaborar y aportar a la sociedad en su conjunto, beneficiando a diversos grupos de interlocutores: profesionales, vecinos, artistas, organizaciones, movimientos sociales, niños, niñas, jóvenes, hombres y mujeres que eligen acompañar una radio en su vida cotidiana.<br /><br />

              Nos complace embarcarnos en este viaje que nos permite explorar, mediante la imaginación y el deseo de escuchar, diferentes momentos, sensaciones y ritmos de nuestra comunidad. Nuestro objetivo es poner nuestros contenidos al servicio de los temas que se requieren en cada emisión, utilizando un lenguaje sencillo y ameno. De esta manera, mostramos a las personas los múltiples beneficios y la facilidad de incorporar el Ayurveda y el Yoga en diferentes situaciones para cuidar su bienestar general.<br /><br />

              Seguimos abiertos a nuevas invitaciones, convencidos de que esta hermosa tarea nos ayuda a generar conciencia y contribuir a una vida y un planeta mejores.
            </p>
          </div>
          <div className='sm:pl-6'>
            <CarouselPrensa />
          </div>
        </div>
      </div>
      <div className='p-6 sm:p-10 flex justify-center'>
            <div className='max-w-[700px]'>
                {carouselPrensa.map((prensa, index) => (
                    <div key={index} className={` w-full`}>
                        <Image
                            src={prensa.imagen}
                            alt={`carousel-${index}`}
                            width={1000}
                            height={280}
                            className="w-full max-h-[500px] object-cover"
                        />
                        <div className="flex items-center justify-center">
                            <div className='text-center p-8 sm:p-12'>

                                <p className='text-2xl font-bold'>
                                    <a href={prensa.to} className='no-underline text-green-600'>
                                        {prensa.title}
                                    </a>
                                </p>

                                <p className='text-black'>{prensa.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default page
