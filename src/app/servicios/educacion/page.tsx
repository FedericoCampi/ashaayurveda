import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold text-green-600 mb-12">Educación</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="overflow-hidden">
          <CardHeader className="p-0">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Congreso de Ciudades"
              width={400}
              height={200}
              className="w-full object-cover h-48"
            />
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex gap-2 mb-3">
              <Badge variant="outline">AYURVEDA</Badge>
              <Badge variant="outline">EDU2023</Badge>
            </div>
            <h2 className="text-xl font-semibold mb-2">
              Participación en IX Congreso de Ciudades y Pueblos del Interior
            </h2>
            <p className="text-muted-foreground">
              Participación en IX Congreso de Ciudades y Pueblos del Interior...
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Link href="#" className="text-primary hover:underline">
              read more
            </Link>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="p-0">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Encuentro de Ayurveda"
              width={400}
              height={200}
              className="w-full object-cover h-48"
            />
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex gap-2 mb-3">
              <Badge variant="outline">AYURVEDA</Badge>
              <Badge variant="outline">EDU2023</Badge>
              <Badge variant="outline">EDUCACIÓN</Badge>
            </div>
            <h2 className="text-xl font-semibold mb-2">
              II Encuentro de Ayurveda Catamarca 2023
            </h2>
            <p className="text-muted-foreground">
              Con mucha alegría compartimos algunos de los aspectos del II Encuentro de Ayurveda en Catamarca durante el mes de Diciembre de 2023...
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Link href="#" className="text-primary hover:underline">
              read more
            </Link>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="p-0">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Taller de Pranayama"
              width={400}
              height={200}
              className="w-full object-cover h-48"
            />
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex gap-2 mb-3">
              <Badge variant="outline">EDU2023</Badge>
              <Badge variant="outline">EDUCACIÓN</Badge>
            </div>
            <h2 className="text-xl font-semibold mb-2">
              Taller de Pranayama, Ayurveda y Emociones
            </h2>
            <p className="text-muted-foreground">
              Respiración y Emociones Año 2024 En este Taller se brindarán los beneficios del arte de la respiración...
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Link href="#" className="text-primary hover:underline">
              read more
            </Link>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="p-0">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Conferencias"
              width={400}
              height={200}
              className="w-full object-cover h-48"
            />
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex gap-2 mb-3">
              <Badge variant="outline">CICLO2023</Badge>
            </div>
            <h2 className="text-xl font-semibold mb-2">Conferencias</h2>
            <p className="text-muted-foreground">
              Únete a nuestra misión de difundir y contribuir al bienestar general a través del Ayurveda y el Yoga en Asha Ayurveda...
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Link href="#" className="text-primary hover:underline">
              read more
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}