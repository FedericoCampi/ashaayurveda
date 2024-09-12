import React from 'react'

const Services = () => {
  return (
    <div className='w-full h-full flex flex-col items-center'>
        <p>Servicios</p>
        <p>Ayurveda, Yoga y Educación</p>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 w-full h-full'>
            <div className='w-full h-[400px]'>
                <div className='bg-slate-500 w-full max-h-[160px] h-[40%]'></div>
                <div className='w-full h-[60%]'>
                    <p>Consulta ayurveda</p>
                    <p>Evaluación integral y personalizada según los principios de la medicina ayurvédica para mejorar tu salud y equilibrio. Se puede realizar de manera presencial u online.</p>
                    <button className='bg-green-300 p-2'>Saber más</button>
                </div>
            </div>
            <div className='w-full h-[400px]'>
                <div className='bg-slate-500 w-full max-h-[160px] h-[40%]'></div>
                <div className='w-full h-[60%]'>
                    <p>Yoga</p>
                    <p>Integración de los principios del yoga y la medicina ayurvédica para promover la salud y el bienestar holísticos.</p>
                    <button className='bg-green-300 p-2'>Saber más</button>
                </div>
            </div>
            <div className='w-full h-[450px]'>
                <div className='bg-slate-500 w-full max-h-[160px] h-[40%]'></div>
                <div className='w-full h-[60%]'>
                    <p>Educación</p>
                    <p>Conoce las actividades relacionadas a Educación que realizamos, permitiéndonos aprender de las experiencias que suceden en nuestra comunidad y compartir desde Ayurveda conceptos fácilmente aplicables a nuestras vidas y en consonancia con nuestros ecosistemas, cultura, creencias y salud, produciendo una verdadera y maravillosa integración.</p>
                    <button className='bg-green-300 p-2'>Saber más</button>
                </div>
            </div>
            <div className='w-full h-[400px]'>
                <div className='bg-slate-500 w-full max-h-[160px] h-[40%]'></div>
                <div className='w-full h-[60%]'>
                    <p>Masajes</p>
                    <p>Descubre una variedad de tratamientos de masaje diseñados para revitalizar cuerpo y mente en nuestra página de masajes.</p>
                    <button className='bg-green-300 p-2'>Saber más</button>
                </div>
            </div>
        </div>
        <button className='bg-green-300 p-2 h-full'>
            Ver más
        </button>
    </div>
  )
}

export default Services
