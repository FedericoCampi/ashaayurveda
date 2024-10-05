import FaqSection from '@/components/FaqSection';
import OtherServices from '@/components/OtherServices';
import Image from 'next/image'; // para optimizar imágenes
import React from 'react';

const Page = () => {
  return (
    <div className='mx-0 sm:mx-auto'>
      {/* Header */}
      <div className='my-2 sm:my-8'>
        <h1 className='text-green-700 text-4xl font-bold text-center sm:pt-[40px]'>
          Consulta Ayurveda
        </h1>
        {/* Bloque de consulta */}
        <ConsultationSection />
      </div>

      {/* Introducción */}
      <div className='w-full h-auto flex justify-center px-[20px]'>
        <div className='w-[700px] md:w-[900px]'>
          <IntroductionSection />
        </div>
      </div>

      {/* Preguntas Frecuentes */}
      <div className='mt-16'>
        <FaqSection />
      </div>

      {/* Reserva */}
      <ReservationSection />

      {/* Otros Servicios */}
      <div>
        <OtherServices />
      </div>
    </div>
  );
};

// Componente para la sección de consulta
const ConsultationSection = () => (
  <div className='w-full h-[300px] flex justify-center'>
    <div className='flex h-full w-[900px] mx-0 sm:mx-auto mt-6'>
      <div className='h-full w-[60%]'>
        <img
          src='/pageServices/consultaMedica.webp'
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
const IntroductionSection = () => (
  <div className='flex flex-wrap mt-12'>
    <div className='w-full md:w-[75%]'>
      <p className='font-bold text-xl'>INTRODUCCIÓN:</p>
      <p className='mt-4 sm:text-lg'>
        En Asha Ayurveda, nos enorgullece ofrecerte nuestros servicios de
        consulta tanto en persona como en línea, para que puedas acceder a
        la sabiduría milenaria del Ayurveda desde cualquier lugar del mundo.
        Con una atención personalizada y detallada, nuestro objetivo es
        ayudarte a encontrar la armonía y el bienestar en todas las áreas de
        tu vida.
      </p>
    </div>
    <ProfessionalSection />
  </div>
);

// Componente para la información del profesional
const ProfessionalSection = () => (
  <div className='w-full md:w-[25%] flex flex-col items-center border-2 border-green-800 rounded-lg p-2'>
    <p className='font-bold mt-6 md:mt-0 text-xl'>PROFESIONAL</p>
    <div className='bg-gray-600 w-[100px] h-auto rounded-full mt-4'>
      <Image
        src='/pageServices/doctorRafa.webp'
        alt='Doctor Rafael Campi'
        width={100}
        height={100}
        className='rounded-full'
      />
    </div>
    <div className='mt-4 text-center'>
      <p className='font-bold text-lg mainColorText'>RAFAEL GUSTAVO</p>
      <p className='text-sm sm:text-lg'>
        Médico MP 1200 (Otorgada por colegio Médico de Catamarca)
      </p>
      <p className='text-sm sm:text-lg'>Postgrado Medicina Ayurveda</p>
    </div>
  </div>
);

// Componente para la sección de reserva
const ReservationSection = () => (
  <div className='bg-green-800 w-full h-[300px] flex flex-col justify-center items-center mt-4 sm:mt-16'>
    <p className='text-white text-3xl'>Consulta Ayurveda</p>
    <button className='bg-green-600 text-white py-2 px-4 mt-4 rounded hover:bg-green-700'>
      Reserva tu sesión
    </button>
  </div>
);

export default Page;