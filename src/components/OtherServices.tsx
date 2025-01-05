import { otherServices } from '@/lib/data'
import Image from 'next/image'

export default function OtherServices() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-8 text-green-700 py-3">Otros Servicios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {otherServices.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <a href={service.to} className='no-underline text-black w-full'>
               <div className="relative w-full aspect-square mb-2">
              <Image
                src={service.image}
                alt={service.name}
                fill={true}
                objectFit="cover"
                className="rounded-lg"
              />
              </div>
              <h3 className="text-lg font-semibold text-center">{service.name}</h3>
            </a>
           
          </div>
        ))}
      </div>
    </div>
  )
}