import React from 'react'
import { servicesData } from '@/lib/data';
import Image from 'next/image';
import FirstButton from './ui/firstButton';

const Services = () => {
    return (
        <div className='w-full h-full flex flex-col items-center pt-12'>
            <p className='text-4xl mainColorText'>Servicios</p>
            <p className='text-xl'>Ayurveda, Yoga y Educación</p>
            <div className='py-10 grid grid-cols-1 gap-10 md:grid-cols-2 w-full h-full'>
                {servicesData.map((service, index) => (
                    <div key={index} className='flex w-full justify-center'>
                        <div className='w-full md:max-w-[500px]'>
                            <div className='relative h-full w-full'>
                                <div className='bg-gray-300 w-full h-full'>
                                    <Image
                                        src={service.image}
                                        alt={service.alt}
                                        width={1000}
                                        height={300}
                                    />
                                </div>
                                <div className='absolute bottom-0 w-full p-2 text-center containerVidrio text-white'>
                                    <p className='text-lg font-semibold'>{service.title}</p>
                                    <p>{service.description}</p>
                                    <a href={service.to}>
                                        <FirstButton
                                        titulo="Saber más" 
                                        padding='p-2'
                                        tamano='text-lg'
                                    />
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services
