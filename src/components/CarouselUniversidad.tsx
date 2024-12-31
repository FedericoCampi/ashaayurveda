import React from 'react'
import { carouselUniversidad } from '@/lib/data'
import Image from 'next/image'

const CarouselUniversidad = () => {
    return (
        <div id="carouselExample" className="md:w-[800px] lg:w-[1000px] max-w-[1000px] carousel slide">

            <div className="carousel-inner w-full h-[600px]">

                {carouselUniversidad.map((articles, index) => (

                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''} relative h-full w-full`}>

                        {/* Imagen con padding para que no se superponga con los pilares */}
                        <div className="w-full h-full bg-black">
                            <Image
                                src={articles.imagen}
                                alt={`carousel-${index}`}
                                width={1000}
                                height={280}
                                className="w-full h-full object-cover opacity-40"
                            />
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className='max-w-[500px] text-center text-white p-12'>
                                <p className='text-3xl font-bold text-center leading-relaxed'>{articles.title}</p>
                                <p className='text-[12px] my-0'>{articles.faq}</p>
                                <p className='text-center'>{articles.text}</p>
                                <button className="fade-in-bottom text-xl bg-[#35b05a] text-white py-2 px-4 rounded-lg">
                                    Leer más
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default CarouselUniversidad
