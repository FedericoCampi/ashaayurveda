'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {  InstagramIcon,MapPinIcon, MailIcon, Loader2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast"

export default function Contact() {

  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true)

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Error al enviar mail: Complete los campos")
      setIsLoading(false)
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Por favor, ingresa un email válido")
      setIsLoading(false)
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Correo enviado con éxito")
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Error al enviar el correo")
      }
    } catch (error) {
      toast.error("Error al enviar el correo")
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-green-700 to-green-900 text-white pb-20 p-8 md:p-16"
    >
      <div className="absolute inset-0">
        <img
          src="/imagesFirstLanding/fondoFooter.webp" // Reemplaza con la ruta de tu imagen
          alt="Fondo"
          className="w-full h-full object-cover opacity-30" // Ajusta la opacidad aquí
        />
      </div>
      <div className="contentFooter max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-6">DESCUBRE EL EQUILIBRIO Y RENUEVA TU BIENESTAR CON ASHA AYURVEDA</h2>
          <form className="space-y-4 text-center">
            <Input type="text" placeholder="NOMBRE" className="bg-black bg-opacity-50 border-0 text-white placeholder-gray-400" 
              value={formData.name} onChange={handleChange}
              name="name"
            />
            <Input type="email" placeholder="EMAIL" className="bg-black bg-opacity-50 border-0 text-white placeholder-gray-400" 
              value={formData.email} onChange={handleChange}
              name="email"
            />
            <Textarea placeholder="MENSAJE" className="bg-black bg-opacity-50 border-0 text-white placeholder-gray-400" rows={4}
              value={formData.message} onChange={handleChange}
              name="message"
            />
            
            {isLoading ? (
                <Button type="submit" className="bg-[#35b05a] hover:bg-green-700 text-white w-[105px]">
                  <Loader2 className="animate-spin" />
                </Button>
              ) : (
                <Button type="submit" className="bg-[#35b05a] hover:bg-green-700 text-white"  onClick={handleSubmit}>
                  ENVIAR
                </Button>
              )}
          </form>
        </div>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3 text-green-400">ESTAMOS CERCA</h2>
          <div className="flex space-x-4 ">
          <a href="https://www.instagram.com/ashaayurveda" target="_blank" rel="noreferrer" className="no-underline">
            <div className="flex space-x-2 text-white text-[18px] items-center">
              
              <InstagramIcon className="w-7 h-7" /> 
              <p className="pt-3 ">ashaayurveda</p>
            
            </div>
            </a>
            
          </div>
          <div className="space-y-4 ">
            <div className="flex items-center space-x-2">
              <Image src="/icons/wspIcon.png" width={30} height={30} alt="Whatsapp" 
              />
              <span>+54 9 3834 19-3657 (solo mensajes)</span>
            </div>
            <div className="flex items-center">
              <MailIcon className="w-7 h-7 mr-2" />
              <span>info@ashaayur.site</span>
            </div>
            <div className="flex items-start">
              <MapPinIcon className="w-9 h-9 mr-2" />
              <span>PEDRO GOYENA 128, SAN FERNANDO DEL VALLE DE CATAMARCA, PROVINCIA DE CATAMARCA, ARGENTINA</span>
            </div>
          </div>
          <p className="mt-6 text-sm">
            Si tienes alguna pregunta, consulta o simplemente deseas obtener más información sobre nuestros tratamientos, clases y terapias, no dudes en ponerte en contacto con nosotros. Estaremos encantados de atenderte y brindarte toda la información que necesites para tomar decisiones informadas sobre tu bienestar.
          </p>
        </div>
      </div>

      <Toaster position="bottom-center"/>
    </div>
  )
}