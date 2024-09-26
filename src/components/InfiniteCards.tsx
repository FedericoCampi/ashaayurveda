"use client";

import { InfiniteMovingCards } from "./ui/Infinite-moving-cards";

export function InfiniteCards() {
  return (
    <div className="h-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Tengo 78 años y hace dieciocho años que practico ininterrumpidamente Yoga. Muchas personas me preguntan qué beneficios tengo, y simplemente digo que a mi camino lo divido en un antes y en un después del Yoga. Comenzando con esta disciplina he tenido grandes resultados. Me preguntan a veces por qué. Porque abarca lo físico, lo psíquico y lo emocional. Nos ejercita como un todo. Así, con las prácticas desaparecieron dolores, aprendí a encauzar mis emociones y hoy me encuentro en una etapa con una sensación de bienestar que me permite transitar el camino con felicidad y serenidad. Si puedes, comienza, no importa tu edad, el Yoga te acepta, te cobija y te mima. No te arrepentirás.",
    name: "Amalia Ariaudo",
  },
  {
    quote:
      "Estaré por siempre agradecida por vuestra atención y Medicina Ayurvédica.  Me inspira a conocerme y valorar más mi salud comprendiendo la relación de plantas y alimentos que me convienen adoptar para continuar una vida de salud consciente. Además de inspirarme a escribir mi historia de superación del cáncer, haciendo un libro autobiográfico. Gracias querido Dr. y amigo.",
    name: "Mirta Elsa Fragozo",
  },
  {
    quote: "La Medicina Ayurveda, en mi experiencia, ha contribuido no solo en mi salud física sino en lo emocional y especialmente en la conexión con una vida más sana. Desde el diagnóstico, que es altamente pormenorizado, hasta el tratamiento totalmente personalizado que constituyen una fuente de salud y un modo de abordaje de la medicina totalmente natural y efectiva.",
    name: "Mario César Díaz",
    title: "Doctor en Educación",
    quote1:
      "Reflexionar sobre la importancia de la alimentación Ayurveda, advierte que nos genera un estilo de vida, adquiriendo una alimentación sana y nutritiva que proporciona una buena salud, aspira mitigar enfermedades o prevenirlas.",
    name1: "Alberto Espeche",
  },
  {
    quote:
      "Es importante que cada uno tenga un equilibrio entre el cuerpo y la mente. EL Yoga permite lograr esa armonía. Es lo que uno siente.",
    name: "Rodolfo Doering",
    title: "Ing. Agrimensor",
    quote1:
      "La práctica de Yoga es para mi un momento de tranquilidad, calma y docilidad. Encontrarme conmigo misma en mi ser. Lograr la armonía entre el cuerpo, el alma y la mente. Sentir en mi Yo interior, amor, generosidad, entrega hacia el otro. Y afrontar la vida día a día.",
    name1: "Lucía Medina",
  },
  {
    quote:
      "A mis 76 años, empecé a practicar Yoga hace 3 meses y ya siento cambios significativos en mi mente y cuerpo. He logrado una serenidad inesperada, lo que me ha llevado a moderar el consumo de gaseosas y harinas, y he perdido 5 kg. Gracias al Yoga, veo la vida de una nueva manera y me siento tranquilo y feliz, compartiendo esta alegría con mi compañera, Silvia. Estoy agradecido con quienes me han enseñado, especialmente mi profesora de Yoga, Patricia Ahumada, quien ha formado un grupo de personas maravillosas que comparten nuestras clases y celebraciones. Recomiendo a todos que practiquen Yoga, ¡les cambiará la vida!",
    name: "Pedro Pérez",
  },
  {
    quote:
      "Quiero resaltar los beneficios que he obtenido a través de la medicina ayurvédica bajo la guía y apoyo del Dr. Campi, particularmente en momentos cruciales de preparación prequirúrgica, que me ayudaron a enfrentar cirugías en óptimas condiciones y experimentar una rápida y favorable recuperación. Destaco además el enfoque personalizado del tratamiento, que ha tenido un impacto transformador en mi vida diaria, ayudándome a revertir hábitos que afectaban mi salud física y alcanzar un equilibrio emocional y mental.",
    name: "Nora Varela",
  },
];
