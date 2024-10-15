import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { educationItems } from "@/lib/data"
import OtherServices from "@/components/OtherServices"
import Link from "next/link"

export default function EducationSection() {

    return (
        <section className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center text-green-500 mb-8">EDUCACIÓN</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {educationItems.map((item, index) => (
                    <Card key={index} className="overflow-hidden">
                        
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {item.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="text-xs bg-gray-200 rounded-full px-2 py-1">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600">{item.shortDescription}</p>
                                <button className="mt-4 text-blue-600 hover:underline">
                                    <Link href={`educacion/${item.idtext}`} 
                                        className="text-black no-underline">
                                        Read more
                                    </Link>
                                </button>
                            </CardContent>
                        
                    </Card>

                ))}
            </div>

            <OtherServices />
        </section>
    )
}