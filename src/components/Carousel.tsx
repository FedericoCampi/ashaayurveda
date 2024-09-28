import React from 'react'
import { imagesCarousel } from '@/lib/data'
import Image from 'next/image'

const Carousel = () => {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className='bg-gradient-to-br from-green-700 to-green-900 w-full h-[50px]'>
            </div>
                <div className="carousel-inner h-full">
                    {imagesCarousel.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''} relative h-full`}>
                            <Image
                                src={image.imagen}
                                alt={`carousel-${index}`}
                                width={1000}
                                height={280}
                                className='w-full'
                            />
                            <div className="absolute inset-x-0 bottom-2 flex items-center justify-center">
                                <button className="fade-in-bottom bg-gradient-to-br from-green-700 to-green-900 text-white py-2 px-4 rounded-lg">
                                    Saber más
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            <div className='bg-gradient-to-br from-green-700 to-green-900 w-full h-[50px]'>    
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
