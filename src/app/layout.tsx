import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from '../services/BootstrapClient';
import Whatsapp from "@/components/Whatsapp";
import { Roboto_Serif } from 'next/font/google'
import Contact from "@/components/Contact";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"

const inter = Roboto_Serif({ 
  weight: '400', 
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Bienvenidos | Asha Ayurveda",
  description: "Explora el bienestar integral a través de Asha Ayurveda. Conoce más sobre la medicina ayurvédica, prácticas de salud natural, y tratamientos inspirados en las antiguas tradiciones de la India.",
  keywords: "Ayurveda, medicina natural, salud, bienestar, tratamientos ayurvédicos, India, estilo de vida saludable, medicina alternativa",
  openGraph: {
    title: "Bienvenidos | Asha Ayurveda",
    description: "Explora el bienestar integral a través de Asha Ayurveda. Conoce más sobre la medicina ayurvédica, prácticas de salud natural, y tratamientos inspirados en las antiguas tradiciones de la India.",
    type: "website",
    url: "https://ashaayurveda.com.ar",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Asha Ayurveda" />
        <meta name="keywords" content="Ayurveda, medicina natural, salud, bienestar, tratamientos ayurvédicos, India, estilo de vida saludable, medicina alternativa" />
        <meta property="og:title" content="Bienvenidos | Asha Ayurveda" />
        <meta property="og:description" content="Explora el bienestar integral a través de Asha Ayurveda. Conoce más sobre la medicina ayurvédica, prácticas de salud natural, y tratamientos inspirados en las antiguas tradiciones de la India." />
        <meta property="og:url" content="https://ashaayurveda.com.ar" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Asha Ayurveda" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Bienvenidos | Asha Ayurveda" />
        <meta property="twitter:description" content="Explora el bienestar integral a través de Asha Ayurveda. Conoce más sobre la medicina ayurvédica, prácticas de salud natural, y tratamientos inspirados en las antiguas tradiciones de la India." />
        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></Script>
        <Script id="ga-script" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} antialiased `}
      >
        <Header />
        {children}
        <Analytics />
        <Contact/>
        {/* <div className="fixed bottom-4 left-4 z-50">
         <Chatbot/>
        </div> */}
        <div className="fixed bottom-4 right-4 z-50">
          
           <Whatsapp/>
        </div> 
        <BootstrapClient/>
      </body>
    </html>
  );
}
