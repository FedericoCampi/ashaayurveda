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
                    <p className='text-[14px]'>
                        <a href="/" className='text-black no-underline'>
                            Home
                        </a>
                    </p>
                    <Accordion type="single" collapsible className="w-full border-top border-gray-500">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <a href="/servicios" className='text-black no-underline'>
                                    Servicios
                                </a>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    <a href="/servicios/consulta" className='text-black no-underline'>
                                        Consulta Ayurveda
                                    </a>
                                </p>
                                <p>
                                    <a href="/servicios/yoga" className='text-black no-underline'>
                                        Yoga Ayurvédico
                                    </a>
                                </p>
                                <p>
                                    <a href="/servicios/educacion" className='text-black no-underline'>
                                        Educación
                                    </a>
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <a href="/servicios/masajes" className='text-black no-underline'>
                                    Masajes
                                </a>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>Pinda Sveda</p>
                                <p>Sirodhara</p>
                                <p>Abhyanga</p>
                                <p>Nasya karma</p>
                                <p>Basti</p>
                                <p>Sarasvati</p>
                                <p>Garshan</p>
                                <p>Facial kerala</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <a href="/articulos" className='text-black no-underline'>
                                    Artículos de ínteres
                                </a>
                            </AccordionTrigger>
                            <AccordionContent>
                                <a href="/articulos/universidad" className='text-black no-underline'>
                                    Universidad nacional de Catamarca
                                </a>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <p className='text-[14px] py-4 border-bottom border-gray-500'>
                        <a href="/articulos/universidad" className='text-black no-underline'>
                            Sobre nosotros
                        </a>
                    </p>
                    <p className='text-[14px] py-4 border-bottom border-gray-500'>
                        <a href="/galeria" className='text-black no-underline'>
                            Galería
                        </a>
                    </p>

                    <p className='text-[14px] py-4 border-bottom border-gray-500'>
                        <a href="/prensa-medios" className='text-black no-underline'>
                            Prensa y medios
                        </a>
                    </p>
                    <p className='text-[14px] py-4 border-bottom border-gray-500 invisible'>Prensa y medios</p>
                </div>
            </div>
        </div>
    )
}

export default OffCanvas
