import React from 'react'
import { carouselArticles } from '@/lib/data'
import Image from 'next/image'

const CarouselArticles = () => {
    return (
        <div id="carouselExample" className="w-[500px] carousel slide">

            <div className="carousel-inner h-full">

                {carouselArticles.map((articles, index) => (

                    <div key={index} className={`carousel-item w-[500px] h-full ${index === 0 ? 'active' : ''} relative `}>

                        {/* Imagen con padding para que no se sup erponga con los pilares */}
                        <div className="w-[500px] h-full bg-black ">
                            <Image
                                src={articles.imagen}
                                alt={`carousel-${index}`}
                                width={1000}
                                height={280}
                                className="w-full h-full object-cover opacity-40"
                            />
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center w-[500px]">
                            <div className=' h-full text-center flex flex-col items-center justify-around text-white p-12'>
                                <p className='text-2xl font-bold p_sin_interlineado'>{articles.title}</p>
                                <p className='p_sin_interlineado'>{articles.text}</p>
                                <a href={articles.to}>
                                   <button className="fade-in-bottom text-xl bg-[#35b05a] text-white py-2 px-4 rounded-lg">
                                        Leer más
                                    </button> 
                                </a>
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

export default CarouselArticles
