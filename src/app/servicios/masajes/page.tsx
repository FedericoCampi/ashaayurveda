import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { masajesSection } from "@/lib/data"
import Image from "next/image"

export default function MasajesSection() {

    return (
        <section className="">
            <Image
                src={'/pageServices/masajes/portadaMasajes.webp'}
                alt={'Portada masajes'}
                width={1500}
                height={400}
                className="w-full h-[500px] object-cover"
            />
            <div className="min-h-screen bg-[#8B4513] py-16 px-8 text-white flex flex-col items-center">
                <h1 className="text-4xl font-bold text-center mb-4">MASAJES Y OTROS TRATAMIENTOS</h1>
                <p className="text-center mb-8 text-sm italic">
                    &quot;Sumérgete en un oasis de bienestar y renueva tu cuerpo y mente con nuestros exclusivos masajes terapéuticos en Asha Ayurveda.&quot;
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {masajesSection.map((masaje) => (
                        <Card key={masaje.id} className="bg-[#A0522D] text-white">
                            <CardHeader>
                                <img src={masaje.image} alt={masaje.title} className="w-full h-48 object-cover rounded-t-lg" />
                            </CardHeader>
                            <CardContent>
                                <CardTitle className="mb-2">{masaje.title}</CardTitle>
                                <p className="text-sm">{masaje.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Button className="bg-[#228B22] hover:bg-[#006400] text-white">SABER MÁS</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}