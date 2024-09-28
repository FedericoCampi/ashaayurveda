import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FacebookIcon, InstagramIcon, YoutubeIcon, MapPinIcon, PhoneIcon, MailIcon } from "lucide-react"

export default function ContactSection() {
  return (
    <div className="bg-gradient-to-br from-green-700 to-green-900 text-white pb-20 p-8 md:p-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-6">DESCUBRE EL EQUILIBRIO Y RENUEVA TU BIENESTAR CON ASHA AYURVEDA</h2>
          <form className="space-y-4 text-center">
            <Input type="text" placeholder="NOMBRE" className="bg-black bg-opacity-50 border-0 text-white placeholder-gray-400" />
            <Input type="email" placeholder="EMAIL" className="bg-black bg-opacity-50 border-0 text-white placeholder-gray-400" />
            <Textarea placeholder="MENSAJE" className="bg-black bg-opacity-50 border-0 text-white placeholder-gray-400" rows={4} />
            <Button type="submit" className="bg-[#35b05a] hover:bg-green-700 text-white">ENVIAR</Button>
          </form>
        </div>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-green-400">ESTAMOS CERCA</h2>
          <div className="flex space-x-4 mb-6">
            <FacebookIcon className="w-6 h-6" />
            <InstagramIcon className="w-6 h-6" />
            <YoutubeIcon className="w-6 h-6" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2" />
              <span>+34 9 3834 19-3657</span>
            </div>
            <div className="flex items-center">
              <MailIcon className="w-5 h-5 mr-2" />
              <span>INFO@ASHAAYURVEDA.COM.AR</span>
            </div>
            <div className="flex items-start">
              <MapPinIcon className="w-5 h-5 mr-2 mt-1" />
              <span>PEDRO GOYENA 128, SAN FERNANDO DEL VALLE DE CATAMARCA, PROVINCIA DE CATAMARCA, ARGENTINA</span>
            </div>
          </div>
          <p className="mt-6 text-sm">
            Si tienes alguna pregunta, consulta o simplemente deseas obtener más información sobre nuestros tratamientos, clases y terapias, no dudes en ponerte en contacto con nosotros. Estaremos encantados de atenderte y brindarte toda la información que necesites para tomar decisiones informadas sobre tu bienestar.
          </p>
        </div>
      </div>
    </div>
  )
}