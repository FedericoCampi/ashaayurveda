"use client";

import { yogaSection } from "@/lib/data";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface articlesItemType {
  idText: string;
  title: string;
  imagen: string;
  text?: string;
  faq?: string;
  textCompleto?: string;
  imagen2?: string;
  list?: { [key: string]: string };
  secondText?: string;
  secondTitle?: string;
  secondImage?: string;
  secondTextPart?: string;
  imagenMobile?: string;
}

export default function YogaSection() {
  const [data, setData] = useState<articlesItemType | null>(null);
  const pathname = usePathname(); // Obtener la ruta actual

  const [isMobile, setIsMobile] = useState(false);
        
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize(); // Llamada inicial
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

  useEffect(() => {
    const lastSegment = pathname.split("/").pop(); // Obtener el último segmento de la ruta
    
    // Filtrar el servicio que coincide con idtext
    const articlesData = yogaSection.find(
      (articles) => articles.idText === lastSegment
    );
    setData(articlesData || null); // Guardar el servicio en el estado
  }, [pathname]);

  if (!data) {
    return <p>Cargando...</p>; // Mostrar un mensaje de carga mientras se obtiene el servicio
  }

  return (
    <div className="mx-0 sm:mx-auto pt-8 px-10 sm:px-0">
      <div className="flex justify-center">
        <div className="max-w-[900px] py-10">
          <h2 className="text-4xl font-bold text-center text-green-500 mb-8">
            {data.title}
          </h2>
          <p className="text-center">{data.faq}</p>
          <Image
            src={isMobile && data.imagenMobile ? data.imagenMobile : data.imagen}
            alt={data.title}
            width={1000}
            height={1000}
            className="w-full h-[400px] object-cover"
          />
          <p className="pt-10">{data.textCompleto}</p>
          <p className="pt-10">{data.text}</p>
          {data.list && (
            <ul className="space-y-3">
              {Object.entries(data.list).map(([key, value]) => (
                <li key={key}>{value}</li>
              ))}
            </ul>
          )}
          {data.imagen2 && (
            <Image
              src={data.imagen2}
              alt={data.title}
              width={1000}
              height={1000}
              className="w-full h-[600px] object-cover"
            />
          )}
          {data.secondText &&
            <p className="py-8">{data.secondText}</p>
          }

        {data.secondTitle &&
          <h4 className="text-3xl font-bold text-center text-green-500 my-8">
            {data.secondTitle}
          </h4>
        }
        {data.secondImage &&
          <Image
            src={data.secondImage}
            alt={data.secondTitle || 'Images'}
            width={1000}
            height={1000}
            className="w-full h-[600px] object-cover"
          />
        }
        {data.secondTextPart &&
          <p className="pt-4">
            {data.secondTextPart}
          </p>
        }
        </div>
      </div>
    </div>
  );
}
