import Image from 'next/image'

const services = [
  { name: 'OTRAS TERAPIAS', image: '/placeholder.svg?height=200&width=200' },
  { name: 'YOGA', image: '/placeholder.svg?height=200&width=200' },
  { name: 'EDUCACIÓN', image: '/placeholder.svg?height=200&width=200' },
  { name: 'SIRODHARA', image: '/placeholder.svg?height=200&width=200' },
  { name: 'MASAJE ABHYANGA', image: '/placeholder.svg?height=200&width=200' },
  { name: 'NASYA KARMA', image: '/placeholder.svg?height=200&width=200' },
  { name: 'PINDA SVEDA', image: '/placeholder.svg?height=200&width=200' },
  { name: 'BASTI', image: '/placeholder.svg?height=200&width=200' },
]

export default function OtherServices() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Otros Servicios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-full aspect-square mb-2">
              <Image
                src={service.image}
                alt={service.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold text-center">{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}