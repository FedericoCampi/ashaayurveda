'use client'

import Image from 'next/image';
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const OffCanvas = () => {

    return (
        <div className='px-[3%]'>
            <div className='flex w-full justify-between p-2'>
                <div className='p-1'>
                    <Image
                        src={'/icons/iconAsha.webp'}
                        alt='icon Asha ayurveda'
                        width={200}
                        height={100}
                    />
                </div>
                <button className="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                    <GiHamburgerMenu className="text-3xl mainColorText" />
                </button>
            </div>


            <div className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    ...
                </div>
            </div>
        </div>
    )
}

export default OffCanvas
