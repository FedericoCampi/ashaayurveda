import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, Calendar } from "lucide-react"
import { courses } from "@/lib/data"

export default function CoursesSection() {

  

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-green-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16"> 
          <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-6 leading-tight">
            Nuestros Cursos de
            <br />
            <span className="text-green-600">Ayurveda y Yoga</span>
          </h2>
          <p className="text-lg text-amber-800 max-w-3xl mx-auto leading-relaxed">
            Sumérgete en el conocimiento ancestral del Ayurveda a través de nuestros cursos especializados. Cada
            programa está diseñado para acompañarte en tu camino de crecimiento personal y profesional.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm"
            >
              <div className="relative">
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
                <Badge
                  className={`absolute top-4 right-4 ${
                    course.level === "Principiante"
                      ? "bg-green-500"
                      : course.level === "Intermedio"
                        ? "bg-amber-500"
                        : "bg-amber-800"
                  } text-white`}
                >
                  {course.level}
                </Badge>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-serif text-amber-900 mb-2">{course.title}</CardTitle>
                <CardDescription className="text-amber-700 leading-relaxed">{course.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-amber-700">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students} estudiantes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-amber-700">
                    <Calendar className="w-4 h-4" />
                    <span>Próximo inicio: {course.nextStart}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-bold text-green-600">{course.price}</span>
                  <span className="text-sm text-amber-600">ARS</span>
                </div>
              </CardContent>

              <CardFooter className="pt-4">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-full transition-colors">
                  Inscribirse Ahora
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-serif text-amber-900 mb-4">¿No encuentras el curso que buscas?</h3>
          <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
            Contáctanos para conocer más sobre nuestros programas personalizados y próximos lanzamientos. Estamos aquí
            para acompañarte en tu camino de aprendizaje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 rounded-full px-8">
              Ver Todos los Cursos
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8">Contactar Asesor</Button>
          </div>
        </div> */}
      </div>
    </section>
  )
}