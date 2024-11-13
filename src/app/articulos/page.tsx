import CarouselArticles from '@/components/CarouselArticless'
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
            <div className='md:flex md:items-center md:justify-center'>
                <div className='md:max-w-[300px] flex flex-col items-center'>
                    <Image
                        width={100}
                        alt='barras'
                        height={50}
                        src={'/articulos/recorteBarras.png'}
                        className='w-[100px] h-auto'
                    />
                    <p>
                        ¡Bienvenido a nuestra sección de Artículos de Interés de Asha Ayurveda!
                        <br /> <br />
                        Aquí encontrarás una amplia variedad de contenidos informativos y enriquecedores relacionados con el mundo del Ayurveda, el yoga y las últimas novedades de nuestra institución. Nos complace compartir contigo valiosos conocimientos y experiencias que te ayudarán a alcanzar un mayor bienestar y equilibrio en tu vida diaria.
                    </p>
                </div>
                <div className='min-w-[500px]'>
                    <CarouselArticles/>
                </div>
            </div>

        </div>
    )
}

export default page
