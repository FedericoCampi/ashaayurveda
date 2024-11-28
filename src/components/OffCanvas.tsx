'use client'

import Image from 'next/image';
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

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
                    <Image
                        src={'/icons/iconAsha.webp'}
                        alt='icon Asha ayurveda'
                        width={200}
                        height={100}
                    />
                    <button type="button" className="btn-close text-3xl" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body h-[400px]">
                    <p className='text-[14px]'>Home</p>
                    <Accordion type="single" collapsible className="w-full border-top border-gray-500">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Servicios</AccordionTrigger>
                            <AccordionContent>
                                <p>Consulta Ayurveda</p>
                                <p>Yoga Ayurvédico</p>
                                <p>Educación</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Masajes</AccordionTrigger>
                            <AccordionContent>
                                <p>Consulta Ayurveda</p>
                                <p>Yoga Ayurvédico</p>
                                <p>Educación</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Artículos de ínteres</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <p className='text-[14px] py-4 border-bottom border-gray-500'>Sobre nosotros</p>
                    <p className='text-[14px] py-4 border-bottom border-gray-500'>Galería</p>
                    <p className='text-[14px] py-4 border-bottom border-gray-500'>Prensa y medios</p>
                </div>
            </div>
        </div>
    )
}

export default OffCanvas
