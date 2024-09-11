import React from 'react'

const Carousel = () => {
    return (
        <div id="carouselExample" className="carousel slide h-[500px]">
            <div className="carousel-inner h-full">
                <div className="carousel-item active h-full">
                    <div className='bg-black h-full w-full'></div>
                </div>
                <div className="carousel-item h-full">
                    <div className='bg-blue-500 h-full w-full'></div>
                </div>
                <div className="carousel-item h-full">
                    <div className='bg-red-500 h-full w-full'></div>
                </div>
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
