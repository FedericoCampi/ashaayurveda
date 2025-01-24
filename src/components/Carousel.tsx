import React from 'react'
import { imagesCarousel } from '@/lib/data'
import Image from 'next/image'

const Carousel = () => {
    return (
        <div id="carouselExample" className="carousel slide">

            <div className="carousel-inner h-full ">

                {imagesCarousel.map((image, index) => (

                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''} relative md:max-h-[350px] xl:max-h-[450px]`}>

                        {/* Pilar izquierdo */}
                        <div className="absolute left-0 top-0 h-full w-0 md:w-16 xl:w-28 bg-green-500"></div>

                        {/* Pilar derecho */}
                        <div className="absolute right-0 top-0 h-full w-0 md:w-16 xl:w-28 bg-green-500"></div>

                        {/* Imagen con padding para que no se superponga con los pilares */}
                        <div className="h-full md:px-16 xl:px-28">
                            <Image
                                src={image.imagen}
                                alt={`carousel-${index}`}
                                width={2000}
                                height={680}
                                className="w-full h-[250px] sm:h-full object-cover"
                            />
                        </div>

                        <div className="absolute inset-x-0 bottom-5 flex items-center justify-center">
                            <a href={image.idText}>
                                <button className="fade-in-bottom text-xl bg-[#35b05a] text-white py-2 px-4 rounded-lg">
                                    {image.textbutton ? image.textbutton : "Ver más"}
                                </button>
                            </a>
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

export default Carousel
