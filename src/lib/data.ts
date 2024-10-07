export const imagesCarousel = [
  { imagen: '/imagesFirstLanding/carousel/firstCarousel.webp' },
  { imagen: '/imagesFirstLanding/carousel/secondCarousel.webp' },
  { imagen: '/imagesFirstLanding/carousel/thirdCarousel.webp' },
  { imagen: '/imagesFirstLanding/carousel/fourthCarousel.webp' },
  { imagen: '/imagesFirstLanding/carousel/fifthCarousel.webp' },
  { imagen: '/imagesFirstLanding/carousel/sixthCarousel.webp' },
  { imagen: '/imagesFirstLanding/carousel/seventhCarousel.webp' }
];

export const servicesData = [
  {
    title: 'Consulta ayurveda',
    description: 'Evaluación integral y personalizada según los principios de la medicina ayurvédica para mejorar tu salud y equilibrio. Se puede realizar de manera presencial u online.',
    image: '/imagesFirstLanding/services/consulta.webp',
    alt: 'consulta'
  },
  {
    title: 'Yoga',
    description: 'Integración de los principios del yoga y la medicina ayurvédica para promover la salud y el bienestar holísticos.',
    image: '/imagesFirstLanding/services/yoga.webp',
    alt: 'yoga'
  },
  {
    title: 'Educación',
    description: 'Descubre nuestras actividades educativas, donde aprendemos de la comunidad y compartimos conceptos de Ayurveda aplicables a la vida, integrando ecosistemas, cultura, creencias y salud.',
    image: '/imagesFirstLanding/services/cursos.webp',
    alt: 'cursos'
  },
  {
    title: 'Masajes',
    description: 'Descubre una variedad de tratamientos de masaje diseñados para revitalizar cuerpo y mente en nuestra página de masajes.',
    image: '/imagesFirstLanding/services/masajes.jpg',
    alt: 'masajes'
  },
];


export const questions = [
  {
    question: "¿Cuáles son los síntomas de la gripe?",
    response: "Los síntomas incluyen fiebre, tos, dolor de garganta, dolor corporal, y fatiga.",
  },
  {
    question: "¿Qué es la hipertensión?",
    response: "La hipertensión es una condición en la que la presión arterial es constantemente alta.",
  },
  {
    question: "¿Cuándo debo ver a un médico?",
    response: "Deberías ver a un médico si tienes síntomas que persisten o empeoran.",
  },
  {
    question: "¿Qué es la diabetes?",
    response: "La diabetes es una enfermedad que afecta cómo tu cuerpo utiliza la glucosa en la sangre.",
  },
  {
    question: "¿Cuáles son las recomendaciones para una dieta saludable?",
    response: "Incluir frutas, verduras, granos enteros, y limitar el azúcar y grasas saturadas.",
  },
]

interface SubItem {
  name: string
  href: string
}

interface NavItem {
  name: string
  href: string
  subItems?: SubItem[]
}

export const navItems: NavItem[] = [
  { name: 'Bienvenido', href: '/' },
  {
    name: 'Servicios',
    href: '/servicios',
    subItems: [
      { name: 'Consulta ayurveda', href: '/servicios/consulta' },
      { name: 'Yoga ayurvédico', href: '/servicios/yoga' },
      { name: 'Educación', href: '/servicios/educacion' },
      { name: 'Masajes', href: '/servicios/masajes' },
    ],
  },
  {
    name: 'Artículos de interés',
    href: '/articulos',
    subItems: [
      { name: 'Universidad Nacional de Catamarca', href: '/productos/categoria-1' },
    ],
  },
  { name: 'Sobre nosotros', href: '/sobre-nosotros' },
  { name: 'Galería', href: '/galeria' },
  { name: 'Prensa y medios', href: '/prensa-medios' },
]

export const services = [
  {
    title: "Consulta Ayurveda",
    introduction: {
      text: "En Asha Ayurveda, nos enorgullece ofrecerte nuestros servicios de consulta tanto en persona como en línea, para que puedas acceder a la sabiduría milenaria del Ayurveda desde cualquier lugar del mundo. Con una atención personalizada y detallada, nuestro objetivo es ayudarte a encontrar la armonía y el bienestar en todas las áreas de tu vida."
    },
    professional: {
      name: "Rafael Gustavo",
      image: "/pageServices/doctorRafa.webp",
      credentials: [
        "Médico MP 1200 (Otorgada por colegio Médico de Catamarca)",
        "Postgrado Medicina Ayurveda"
      ]
    },
    faqs: [
      {
        question: "¿Qué es la consulta Ayurveda?",
        answer: "Es un servicio que te ayuda a encontrar la armonía y el bienestar utilizando principios de Ayurveda."
      },
      {
        question: "¿Cuáles son los horarios de atención?",
        answer: "Atendemos de Lunes a Viernes, de 08:00 AM a 20:00 PM."
      },
      {
        question: "¿Puedo reservar una consulta en línea?",
        answer: "Sí, ofrecemos consultas tanto en persona como en línea."
      }
    ]
  }
]