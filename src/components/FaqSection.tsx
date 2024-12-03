"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItemProps {
    faqs: { question: string; answer: string }[];
}

export const FaqSection: React.FC<FAQItemProps> = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const answerRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        answerRefs.current = answerRefs.current.slice(0, faqs.length)
    }, [faqs])

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h2 className="text-3xl font-semibold mb-6 text-green-600 text-center">Preguntas Frecuentes</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 pt-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="mb-4 border-b border-gray-200 pb-4">
                        <button
                            className="flex justify-between items-center w-full text-left font-medium text-lg"
                            onClick={() => toggleQuestion(index)}
                        >
                            {faq.question}
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
                            <p className="mt-3 text-gray-600">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}