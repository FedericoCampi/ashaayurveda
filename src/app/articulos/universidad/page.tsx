import CarouselUniversidad from '@/components/CarouselUniversidad'
import { carouselUniversidad } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div>
            <Image
                src={'/articulos/universidad/portada.webp'}
                alt={`Portada universidad`}
                width={1500}
                height={500}
                className="w-full h-[450px] object-cover"
            />
            <div className='flex flex-col items-center'>
                <div className='max-w-[1000px] pt-20'>
                    <CarouselUniversidad />
                </div>
                <div className='max-w-[800px] py-14'>
                    {carouselUniversidad.map((articles, index) => (
                        <div key={index} className={` w-full`}>
                            <Image
                                src={articles.imagen}
                                alt={`carousel-${index}`}
                                width={1000}
                                height={580}
                                className="w-full max-h-[500px] object-cover"
                            />
                            <div className="flex items-center justify-center">
                                <div className='text-center p-12'>

                                    <p className='text-2xl font-bold'>
                                        <a href={articles.to} className='no-underline text-green-600'>
                                            {articles.title}
                                        </a>
                                    </p>
                                    <p className='text-black text-[12px]'>{articles.faq}</p>
                                    <p className='text-black'>{articles.text}</p>
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
