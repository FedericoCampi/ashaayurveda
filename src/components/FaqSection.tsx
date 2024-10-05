"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
    question: string
    answer: string
}

const faqData: FAQItem[] = [
    {
        question: "¿Cómo se lleva a cabo la consulta y qué aspectos se evalúan?",
        answer: "En cada consulta, te ofrecemos una experiencia completa y enriquecedora. Comenzamos con una entrevista médica minuciosa, en la que nos sumergimos en tu historia personal, antecedentes médicos, medicaciones, rutinas diarias, alimentación y uso de plantas medicinales. Además, evaluamos tus Biotipos o Doshas, el estado de tu mente según el concepto de Guna mental, y realizamos un examen de tus sentidos y, si es necesario, un examen físico. Para las consultas en línea, te brindamos instrucciones claras sobre cómo compartir esta información de manera segura."
    },
    {
        question: "¿Cómo puedo acceder a las consultas en línea?",
        answer: "Queremos que puedas acceder a nuestros servicios de consulta sin importar dónde te encuentres. Por eso, hemos creado opciones flexibles para las consultas en línea. Podrás compartir los datos necesarios y los parámetros requeridos a través de plataformas en línea seguras, para que podamos brindarte la atención que mereces, sin importar la distancia."
    },
    {
        question: "¿Cuál es el propósito de la consulta y el diagnóstico ayurvédico?",
        answer: "El propósito de la consulta y el diagnóstico ayurvédico es entender tu constitución única y cualquier desequilibrio presente. Esto nos permite diseñar un plan de tratamiento personalizado que aborde tus necesidades específicas y te guíe hacia un estado óptimo de salud y bienestar."
    }
]

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const answerRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        answerRefs.current = answerRefs.current.slice(0, faqData.length)
    }, [faqData])

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h2 className="text-3xl font-semibold mb-6 text-green-600 text-center">Preguntas Frecuentes</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 pt-4">
                {faqData.map((item, index) => (
                    <div key={index} className="mb-4 border-b border-gray-200 pb-4">
                        <button
                            className="flex justify-between items-center w-full text-left font-medium text-lg"
                            onClick={() => toggleQuestion(index)}
                        >
                            {item.question}
                            {openIndex === index ? (
                                <ChevronUp className="h-5 w-5 text-green-600" />
                            ) : (
                                <ChevronDown className="h-5 w-5 text-green-600" />
                            )}
                        </button>
                        <div
                            ref={(el) => {
                                answerRefs.current[index] = el;
                            }}
                            className="overflow-hidden transition-all duration-300 ease-in-out"
                            style={{
                                maxHeight: openIndex === index ? `${answerRefs.current[index]?.scrollHeight}px` : '0px',
                                opacity: openIndex === index ? 1 : 0
                            }}
                        >
                            <p className="mt-3 text-gray-600">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}