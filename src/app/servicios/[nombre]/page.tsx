'use client'

import FaqSection from "@/components/FaqSection";
import OtherServices from "@/components/OtherServices";
import { services } from "@/lib/data";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface ServiceType {
    idtext: string;
    title: string;
    introduction: {
        text: string;
    };
    professional: {
        name: string;
        image: string;
        credentials: string[];
    };
    faqs: {
        question: string;
        answer: string;
    }[];
    consultation: {
        title: string;
        subtitle: string;
    };
    imgServ: {
        url: string;
    }
}

export default function Service() {

    const [data, setData] = useState<ServiceType | null>(null);
    const pathname = usePathname(); // Obtener la ruta actual

    useEffect(() => {
        const lastSegment = pathname.split('/').pop(); // Obtener el último segmento de la ruta

        // Filtrar el servicio que coincide con idtext
        const serviceData = services.find(service => service.idtext === lastSegment);
        setData(serviceData || null); // Guardar el servicio en el estado
    }, [pathname]);

    if (!data) {
        return <p>Cargando...</p>; // Mostrar un mensaje de carga mientras se obtiene el servicio
    }

    return (
        <div className='mx-0 sm:mx-auto'>

            <div className='my-2 sm:my-8'>
                <h1 className='text-green-700 text-4xl font-bold text-center sm:pt-[40px]'>
                    {data.title}
                </h1>
                {/* Bloque de consulta */}
                <ConsultationSection urlImageserv={data.imgServ.url} />
            </div>

            <div className='w-full h-auto flex justify-center px-[20px]'>
                <div className='w-[700px] md:w-[1000px]'>
                    <IntroductionSection text={data.introduction.text}
                        url={data.professional.image}
                        name={data.professional.name}
                        credentials={data.professional.credentials}
                    />
                    <div className='mt-16'>
                        <FaqSection />
                    </div>
                </div>
            </div>

            <ReservationSection />

            <div>
                <OtherServices />
            </div>
        </div>
    );
};

// Componente para la sección de consulta
const ConsultationSection = ({urlImageserv}: { urlImageserv: string }) => (
    <div className='w-full h-[300px] flex justify-center'>
        <div className='flex h-full w-[1000px] mx-0 sm:mx-auto mt-6'>
            <div className='h-full w-[60%]'>
                <Image
                    width={400}
                    height={300}
                    src={urlImageserv}
                    alt='Consulta Ayurveda'
                    className='object-cover w-full h-full'
                />
            </div>
            <div className='h-full w-[40%] bg-[#3b0a03] text-white p-8 flex flex-col justify-between'>
                <ServiceInfo label='Días' value='Lunes a Viernes' />
                <ServiceInfo label='Hora' value='08:00 AM - 20:00 PM' />
                <button className='bg-green-600 text-white py-2 px-4 sm:mt-4 rounded hover:bg-green-700'>
                    Reserva tu turno
                </button>
            </div>
        </div>
    </div>
);

type ServiceInfoProps = {
    label: string;
    value: string;
};

const ServiceInfo: React.FC<ServiceInfoProps> = ({ label, value }) => (
    <div className="text-container-services">
        <p className='text-item-services'>{label}</p>
        <p className='text-item-services font-semibold'>{value}</p>
    </div>
);

// Componente para la introducción
const IntroductionSection = ({ text, url, name, credentials }: { name: string, text: string, url: string, credentials: string[] }) => (
    <div className='flex flex-wrap mt-12'>
        <div className='w-full md:w-[60%]'>
            <p className='mt-4 pr-2 sm:text-lg'>
                {text}
            </p>
        </div>
        <ProfessionalSection name={name} credentials={credentials} url={url} />
    </div>
);

// Componente para la información del profesional
const ProfessionalSection = ({ name, credentials, url }: { name: string, credentials: string[], url: string }) => {
    return (
        <div className='w-full md:w-[40%] flex flex-col items-center border-2 border-green-600 rounded-lg p-2'>
            <div className='bg-gray-600 w-[100px] h-auto rounded-full mt-4'>
                <Image
                    src={url}
                    alt={name}
                    width={100}
                    height={100}
                    className='rounded-full'
                />
            </div>
            <div className='mt-4 text-center'>
                <p className='font-bold text-lg mainColorText'>{name}</p>
                {credentials.map((credential, index) => (
                    <p key={index} className='text-sm sm:text-lg'>{credential}</p>
                ))}
            </div>
        </div>
    );
};

// Componente para la sección de reserva
const ReservationSection = () => {
    const data = services[0]; // Puedes usar el mismo array aquí
    return (
        <div className='bg-green-800 w-full h-[300px] flex flex-col justify-center items-center mt-4 sm:mt-16'>
            <p className='text-white text-3xl'>{data.consultation.title}</p>
            <p className='text-white text-lg'>{data.consultation.subtitle}</p>
            <button className='bg-green-600 text-white py-2 px-4 mt-4 rounded hover:bg-green-700'>
                Reserva tu sesión
            </button>
        </div>
    )
};