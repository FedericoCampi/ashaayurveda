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
}

export default function YogaSection() {
  const [data, setData] = useState<articlesItemType | null>(null);
  const pathname = usePathname(); // Obtener la ruta actual

  useEffect(() => {
    const lastSegment = pathname.split("/").pop(); // Obtener el último segmento de la ruta
    console.log(lastSegment);
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
        <div className="max-w-[800px] py-10">
          <h2 className="text-4xl font-bold text-center text-green-500 mb-8">
            {data.title}
          </h2>
          <p className="text-center">{data.faq}</p>
          <Image
            src={data.imagen}
            alt={data.title}
            width={1000}
            height={1000}
            className="w-full h-[600px] object-cover"
          />
          <p className="pt-10">{data.textCompleto}</p>
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
        </div>
      </div>
    </div>
  );
}
