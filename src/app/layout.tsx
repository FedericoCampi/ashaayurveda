import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from '../services/BootstrapClient';
import Whatsapp from "@/components/Whatsapp";
import Chatbot from "@/components/Chatbot";
import { Roboto_Serif } from 'next/font/google'

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

const inter = Roboto_Serif({ 
  weight: '400', 
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Bienvenidos | Asha ayurveda",
  description: "Asha ayurveda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Header />
        {children}
        <div className="fixed bottom-4 left-4 z-50">
          <Whatsapp/>
        </div>
        <div className="fixed bottom-4 right-4 z-50">
          <Chatbot/>
        </div>
        <BootstrapClient/>
      </body>
    </html>
  );
}
