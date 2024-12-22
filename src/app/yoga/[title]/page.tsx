'use client'

import OtherServices from "@/components/OtherServices";
import { educationItems } from "@/lib/data";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Taller {
    titulo: string;
    ano: number;
    programa: string;
    modalidad: string;
    duracion: string;
    requisitos: string;
    aCargo: string;
    informacion: string;
}

interface EducationItemType {
    idtext: string;
    title: string;
    subTitle: string;
    image: string;
    image2?: string;
    tags: string[];
    shortDescription: string;
    description: string;
    taller?: Taller;
}

export default function YogaSection() {

    const [data, setData] = useState<EducationItemType | null>(null);
    const pathname = usePathname(); // Obtener la ruta actual

    useEffect(() => {
        const lastSegment = pathname.split('/').pop(); // Obtener el último segmento de la ruta
        console.log(lastSegment)
        // Filtrar el servicio que coincide con idtext
        const educacionData = educationItems.find(education => education.idtext === lastSegment);
        setData(educacionData || null); // Guardar el servicio en el estado
    }, [pathname]);

    if (!data) {
        return <p>Cargando...</p>; // Mostrar un mensaje de carga mientras se obtiene el servicio
    }

    return (
        <div className='mx-0 sm:mx-auto pt-8 '>
            <div className="flex justify-center">
                <div className="max-w-[800px]">
                    <h2 className="text-4xl font-bold text-center text-green-500 mb-8">
                        {data.title}
                    </h2>
                    <p>{data.subTitle}</p>
                    <Image
                        src={data.image}
                        alt={data.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                    />
                    {data.taller && typeof data.taller === 'object' && (
                        <div>
                            <p>{data.taller.titulo}</p>
                            <p>{data.taller.ano}</p>
                        </div>
                    )}
                    <p>{data.description}</p>

                    {data.taller && typeof data.taller === 'object' && (
                        <div>
                            <p>Programa:</p>
                            <p>{data.taller.programa}</p>
                            <p>Modalidad:</p>
                            <p>{data.taller.modalidad}</p>
                            <p>Duración:</p>
                            <p>{data.taller.duracion}</p>
                            <p>Requisitos:</p>
                            <p>{data.taller.requisitos}</p>
                            <p>A cargo de:</p>
                            <p>{data.taller.aCargo}</p>
                            <p>Información:</p>
                            <p>{data.taller.informacion}</p>
                        </div>
                    )}

                    {data.image2 && (
                        <Image
                            src={data.image2}
                            alt={data.title}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover"
                        />
                    )}
                </div>
                
            </div>
            
            <OtherServices />
        </div>
    );
};