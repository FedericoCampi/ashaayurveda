"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { app } from "@/lib/firebase-clientApp"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {7

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailLogin = async () => {
    const auth = getAuth(app);
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Inicio de sesión exitoso");
        onClose(); // Cierra el modal si es exitoso
    } catch (error: unknown) {
    }
    };
    const handleGoogleLogin = async () => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            console.log("Inicio de sesión exitoso google");
            onClose();
        } catch (error: unknown) {
        }
    };
    const handleFacebookLogin = async () => {
        const auth = getAuth(app);
        const provider = new FacebookAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            console.log("Inicio de sesión exitoso facebook");
            onClose();
        } catch (error: unknown) {
        }
    };



  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-2xl">
        {/* Header with organic curve */}
        <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-8 text-white">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

          {/* Logo inspired by Asha Ayurveda */}
          <div className="flex flex-col items-center space-y-1 relative z-10">
            <DialogHeader className="text-center space-y-1">
              <DialogTitle className="text-2xl font-light tracking-wide">Iniciar sesión</DialogTitle>
              <p className="text-green-100 text-sm font-light">Bienvenido de vuelta a tu espacio de bienestar</p>
            </DialogHeader>
          </div>

          {/* Organic curve at bottom */}
          <div className="absolute -bottom-1 left-0 right-0 h-4 bg-gradient-to-r from-green-500 to-emerald-600">
            <svg viewBox="0 0 400 20" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,0 C100,20 300,20 400,0 L400,20 L0,20 Z" fill="white" fillOpacity="0.1" />
            </svg>
          </div>
        </div>

        {/* Form Content */}
        <div className="px-6 pb-3 space-y-4">
          {/* Social Login Buttons */}
          <div className="space-y-3">
            <Button
              variant="outline"
              onClick={handleGoogleLogin}
              className="w-full h-12 bg-white border-green-200 hover:bg-green-50 hover:border-green-300 text-gray-700 font-medium transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continuar con Google
            </Button>

            <Button
              variant="outline"
              onClick={handleFacebookLogin}
              className="w-full h-12 bg-white border-green-200 hover:bg-green-50 hover:border-green-300 text-gray-700 font-medium transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-3" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Continuar con Facebook
            </Button>
          </div>

          <div className="relative">
            <Separator className="bg-green-200" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-gradient-to-br from-green-50 to-emerald-50 px-4 text-sm text-gray-500 font-light">
                o continúa con email
              </span>
            </div>
          </div>

          {/* Email and Password Form */}
            <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                Correo electrónico
                </Label>
                <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 pl-12 pr-4 rounded-md border border-green-200 focus:border-green-400 focus:ring-green-400 focus:outline-none bg-white text-sm placeholder-gray-400"
                />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                Contraseña
                </Label>
                <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-12 pl-12 pr-10 rounded-md border border-green-200 focus:border-green-400 focus:ring-green-400 focus:outline-none bg-white text-sm placeholder-gray-400"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
                </div>
            </div>

            <Button 
                onClick={handleEmailLogin}
                className="w-full h-12 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                Iniciar sesión
            </Button>
            </div>

          {/* Footer Links */}
          <div className="space-y-4 text-center">
            <button className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors">
              ¿Olvidaste tu contraseña?
            </button>

            <div className="text-sm text-gray-600">
              ¿No tienes cuenta?{" "}
              <button className="text-green-600 hover:text-green-700 font-medium transition-colors">
                Crear cuenta
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
