import CarouselArticles from '@/components/CarouselArticless'
import { carouselArticles } from '@/lib/data'
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
                    src={'/articulos/ashaPlaya.webp'}
                    className='w-full object-cover h-[400px] opacity-50'
                />
                <p className='absolute inset-0 flex items-center justify-center text-white text-[40px] text-center'>
                    Artículos <br />
                    de interés
                </p>
            </div>
            <div>
                <div className='md:flex md:items-center md:justify-center py-10'>
                    <div className='md:max-w-[300px] flex flex-col items-start'>
                        <Image
                            width={100}
                            alt='barras'
                            height={50}
                            src={'/articulos/recorteBarras.png'}
                            className='w-[100px] h-auto pb-10'
                        />
                        <p>
                            ¡Bienvenido a nuestra sección de Artículos de Interés de Asha Ayurveda!
                            <br /> <br />
                            Aquí encontrarás una amplia variedad de contenidos informativos y enriquecedores relacionados con el mundo del Ayurveda, el yoga y las últimas novedades de nuestra institución. Nos complace compartir contigo valiosos conocimientos y experiencias que te ayudarán a alcanzar un mayor bienestar y equilibrio en tu vida diaria.
                        </p>
                    </div>
                    <div className=''>
                        <CarouselArticles />
                    </div>
                </div>
            </div>
            <div className='p-10'>
                {carouselArticles.map((articles, index) => (

                    <div key={index} className={`h-full w-full`}>
                        <Image
                            src={articles.imagen}
                            alt={`carousel-${index}`}
                            width={1000}
                            height={280}
                            className="w-full max-h-[500px] object-cover"
                        />
                        <div className="flex items-center justify-center">
                            <div className='text-center p-12'>
                                
                                <p className='text-2xl font-bold'>
                                    <a href="" className='no-underline text-green-600'>
                                        {articles.title}
                                    </a>
                                </p>
                               
                                <p className='text-black'>{articles.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page
