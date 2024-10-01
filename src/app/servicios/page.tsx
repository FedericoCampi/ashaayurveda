import FaqSection from '@/components/FaqSection'
import OtherServices from '@/components/OtherServices'
import React from 'react'

const page = () => {
  return (
    <div>
      <div>
        <p>Consulta ayurveda</p>
        <div className='flex h-[300px] max-w-[600px]'>
            <div className='h-full w-[70%] bg-gray-500'>

            </div>
            <div className='h-full w-[30%] bg-gray-700'>
                <p>Días</p>
                <p>LUNES A VIERNES</p>
                <p>Hora</p>
                <p>08:00 AM - 20:00 PM</p>
                <button>Reserva tu turno</button>
            </div>
        </div>
        <div className='flex'>
            <div >
                <p>INTRODUCCIÓN:</p>
                <p>En Asha Ayurveda, nos enorgullece ofrecerte nuestros servicios de consulta tanto en persona como en línea, para que puedas acceder a la sabiduría milenaria del Ayurveda desde cualquier lugar del mundo. Con una atención personalizada y detallada, nuestro objetivo es ayudarte a encontrar la armonía y el bienestar en todas las áreas de tu vida.</p>
            </div>
            <div>
                <p>PROFESIONAL</p>
                <div className='bg-gray-600 w-20 h-20 rounded-full'>

                </div>
                <div>
                    <p>RAFAEL GUSTAVO</p>
                    <p>Médico MP 1200(Otorgada por colegio Médico de Catamarca)</p>
                    <p>Postgrado Medicina Ayurveda</p>
                </div>
            </div>
        </div>
        <div>
            <p>PREGUNTAS FRECUENTES</p>
            <div>
                <FaqSection/>
            </div>
        </div>
      </div>
      <div className='bg-green-800 w-full h-[300px] flex flex-col justify-center items-center'>
            <p>Consulta Ayurveda</p>
            <button>Reserva tu sesión</button>
      </div>
      <div>
        <OtherServices />
      </div>
    </div>
  )
}

export default page
