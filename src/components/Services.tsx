import React from 'react'
import { servicesData } from '@/lib/data';
import Image from 'next/image';

const Services = () => {
    return (
        <div className='w-full h-full flex flex-col items-center'>
            <p className='text-2xl'>Servicios</p>
            <p className='text-xl'>Ayurveda, Yoga y Educación</p>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 w-full h-full'>
                {servicesData.map((service, index) => (
                    <div key={index} className='w-full flex justify-center '>
                        <div className='relative h-full w-full'>
                            <div className='bg-slate-500 w-full min-h-[400px]'>
                                <Image
                                    src={service.image}
                                    alt={service.alt}
                                    width={1000}
                                    height={300}
                                    layout='responsive' // Esto asegura que la imagen se ajuste correctamente
                                />
                            </div>
                            <div className='absolute bottom-0 w-full p-2 text-center containerVidrio'>
                                <p className='text-lg font-semibold'>{service.title}</p>
                                <p>{service.description}</p>
                                <button className='bg-green-300 p-2'>Saber más</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className='bg-green-300 p-2 h-full'>
                Ver más servicios
            </button>
        </div>
    );
};

export default Services
