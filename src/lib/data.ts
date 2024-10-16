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
    idtext: "consulta",
    title: "Consulta Ayurveda",
    introduction: {
      text: "En Asha Ayurveda, nos enorgullece ofrecerte nuestros servicios de consulta tanto en persona como en línea, para que puedas acceder a la sabiduría milenaria del Ayurveda desde cualquier lugar del mundo. Con una atención personalizada y detallada, nuestro objetivo es ayudarte a encontrar la armonía y el bienestar en todas las áreas de tu vida."
    },
    professional: {
      name: "Rafael Gustavo Campi",
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
    ],
    consultation: {
      title: "Consulta Ayurveda",
      subtitle: "Reservá tu sesión"
    },
    imgServ: {
      url: "/pageServices/consultaMedica.webp",
    }
  },
  {
    idtext: "yoga",
    title: "Yoga Ayurvédico",
    subtitle: "Clases de Yoga: Encuentra Armonía y Bienestar",
    introduction: {
      text: "Ofrecemos clases de Yoga donde podrás experimentar los múltiples beneficios de esta práctica ancestral. Nuestras clases son presenciales y puedes acceder a ellas a través de nuestros contactos para coordinar. Además, te ofrecemos la oportunidad de probar una clase sin costo alguno."
    },
    professional: {
      name: "Patricia Verónica Ahumada",
      image: "/pageServices/patoFoto.webp", // Asegúrate de tener la imagen en esta ruta
      credentials: [
        "Instructora de Yoga Ayurvédico"
      ]
    },
    faqs: [
      {
        question: "¿Qué es el Yoga?",
        answer: "Es una ciencia milenaria diseñada para crear conciencia y promover la armonía y la paz."
      },
      {
        question: "¿Qué recomendaciones debo seguir antes y después de la práctica del Yoga?",
        answer: "Crea un ambiente tranquilo, practica con el estómago vacío, asegúrate de que la vejiga y los intestinos estén vacíos, y usa ropa cómoda."
      },
      {
        question: "¿Es necesario consultar a un médico antes de practicar Yoga?",
        answer: "Sí, especialmente si tienes enfermedades crónicas, dolor o problemas cardíacos. También es recomendable si estás embarazada o durante tu período menstrual."
      }
    ],
    consultation: {
      title: "Clases de Yoga",
      subtitle: "Reserva tu sesión"
    },
    imgServ: {
      url: "/imagesFirstLanding/services/yoga.webp",
    }
  }
]

export const otherServices = [
  { name: 'OTRAS TERAPIAS', image: '/pageServices/masajes.webp' },
  { name: 'YOGA', image: '/imagesFirstLanding/services/yoga.webp' },
  { name: 'EDUCACIÓN', image: '/imagesFirstLanding/services/cursos.webp' },
  { name: 'SIRODHARA', image: '/pageServices/sirodhara.webp' },
  { name: 'MASAJE ABHYANGA', image: '/pageServices/masajeAbhyanga.webp' },
  { name: 'NASYA KARMA', image: '/pageServices/nasya-panchkarma.webp' },
  { name: 'PINDA SVEDA', image: '/pageServices/pindaSveda.webp' },
  { name: 'BASTI', image: '/pageServices/basti.webp' },
]

export const educationItems = [
  {
    idtext: "congreso",
    title: "Participación en IX Congreso de Ciudades y Pueblos del Interior",
    subTitle: "by Asha Ayurveda | Dic 20, 2023 | Ayurveda, Congreso, edu2023, Educación, Eventos",
    image: '/pageServices/educacion/congresoCiudades.webp',
    image2: '/pageServices/educacion/congreso2.webp',
    tags: ["AYURVEDA", "CONGRESO", "EDU2023", "EDUCACIÓN", "EVENTOS"],
    shortDescription: "Participación en IX Congreso de Ciudades y Pueblos del Interior",
    description: "Tuvimos el honor de ser invitados a participar en el IX Congreso de Ciudades y Pueblos del Interior, que tuvo lugar los días 9, 10 y 11 de octubre de 2023. Este evento fue organizado por la Facultad de Humanidades de la Universidad Nacional de Catamarca y el Municipio de Los Altos, en el Departamento de Santa Rosa, Catamarca. Durante nuestra participación, tuvimos la oportunidad de exponer sobre la importancia de la alimentación a través de conocimientos milenarios demostrables y efectivos para el mantenimiento y la recuperación de la salud. En este sentido, compartimos conceptos ancestrales sobre cómo sembrar, cosechar, preparar y consumir los alimentos que nos brinda la tierra en la que vivimos. Las plantas nos ofrecen la posibilidad de nutrirnos y sanarnos, y la Medicina Ayurveda nos brinda una perspectiva milenaria que se puede aplicar y adaptar a los tiempos actuales en cualquier cultura y lugar. En nuestra exposición, destacamos la importancia de una alimentación adecuada, cómo elegir los alimentos según nuestra ubicación geográfica y las estaciones del año, y los diferentes requerimientos nutricionales en cada etapa de la vida. También abordamos temas como los cambios climáticos, la influencia de la información en las redes virtuales, la relación con los ecosistemas que nos rodean y cómo todos estos aspectos se integran para fortalecer nuestro bienestar diario en armonía y felicidad. Durante el congreso, también compartimos con una agradable audiencia sobre el tema de “Seguridad Alimentaria, Niñez y Adolescencia: Alimentación y Saberes Ancestrales”. Presentamos un trabajo de investigación sobre aspectos nutricionales en escuelas primarias de San Fernando del Valle de Catamarca, donde se identificaron altos índices de sobrepeso y obesidad en niños y niñas. Explicamos los fundamentos del Ayurveda y la importancia del sabor en la combinación de alimentos, y realizamos una demostración de la preparación y beneficios de un plato nutritivo y depurativo llamado Kichari, que equilibra los diferentes biotipos corporales o Doshas. En resumen, nuestra participación en el IX Congreso de Ciudades y Pueblos del Interior fue una experiencia enriquecedora donde pudimos compartir conocimientos milenarios sobre alimentación y salud, y promover la importancia de valorar y aprovechar los saberes ancestrales en nuestra vida diaria.",
  },
  {
    idtext: "encuentro",
    title: "II Encuentro de Ayurveda Catamarca 2023",
    subTitle: "by Asha Ayurveda | Dic 16, 2023 | Ayurveda, edu2023, Educación",
    image: '/pageServices/educacion/reunion.webp',
    tags: ["AYURVEDA", "EDU2023", "EDUCACIÓN"],
    shortDescription: "Con mucha alegría compartimos algunos de los aspectos del II Encuentro de Ayurveda en Catamarca durante el mes de Diciembre de 2023. Se desarrolló una hermosa convocatoria entre los distintos profesionales que disertaron y el público que asistió y participó...",
    description: "Con mucha alegría compartimos algunos de los aspectos del II Encuentro de Ayurveda en Catamarca durante el mes de Diciembre de 2023. Se desarrolló una hermosa convocatoria entre los distintos profesionales que disertaron y el público que asistió y participó activamente. Siguiendo el lema de este año, con motivo por los festejos del 8vo Día Internacional del Ayurveda 2023 declarado oficialmente el 10 de Noviembre, “Ayurveda todos los días-Ayurveda en todos los lugares”, centrándose en la interfaz hombre-animal-planta-medio ambiente, es que quisimos aportar a la expansión e integración de Ayurveda sumando al noble conocimiento en la salud y las personas que ya existe actualmente. Agradecemos a la Secretaría de Extensión Universitaria de la Universidad Nacional de Catamarca a cargo del Sr Ing. Adolfo Agüero, a Embajada de India en la República Argentina a cargo de su Excelencia el Sr. Dinesh Bhatia Embajador Extraordinario y Plenipotenciario con acreditación simultánea en Uruguay, quienes acompañaron con unas afectuosas y cálidas palabras. También agradecemos a la Asociación Catamarqueña de Yoga para lo cual a través de unas palabras de la Profesora Patricia Verónica Ahumada se entregaron unos presentes en nombre de Asha Ayurveda y Embajada de India. Agradecemos al Sr. Alfredo Héctor Lauría, Médico homeópata y Ayurveda. Fundador y director del Centro Argentino de Medicina Ayurveda y Ciencias para la salud (CEAMA) quien compartió sobre “Ayurveda en las Regiones Semiáridas”. Agradecemos a la Dra Graciela Maturano especialista en Medicina del Trabajo, Magíster en Salud Pública, Investigadora en distintas temáticas Sociales, Instructora en Técnicas de Masajes Shiatsu, Terapeuta Ayurveda quien aportó sobre “Similitudes de la Medicina Ayurveda y la Medicina Andina”. Agradecemos al Sr. Federico Asunto Suarez, Astrólogo Védico y creador de la Escuela Jyotish del Sur, por su contribución sobre “Astrología Védica y Ayurveda”. Agradecemos al Sr Lic. Matías Carballido, Licenciado en Psicología cuya colaboración fue desarrollar sobre “Canto, música y Ayurveda”. Agradecemos a Angelina Galán, Terapeuta Ayurveda a cargo del tema “Jugos Depurativos y Ayurveda.",
  },
  {
    idtext: "taller",
    title: "Taller de Pranayama, Ayurveda y Emociones",
    subTitle: "by Asha Ayurveda | Ago 18, 2023 | edu2023, Educación",
    image: '/pageServices/educacion/taller.webp',
    tags: ["CICLO 2023"],
    shortDescription: "Respiración y Emociones Año 2024 En este Taller se brindarán los beneficios del arte de la respiración, involucrando a los distintos niveles del ser, ofreciendo herramientas para orientar ante situaciones de desequilibrio. También se integrará la correlación anatómica...",
    description: "En este Taller se brindarán los beneficios del arte de la respiración, involucrando a los distintos niveles del ser, ofreciendo herramientas para orientar ante situaciones de desequilibrio. También se integrará la correlación anatómica y fisiológica con las diferentes distribuciones del Prana, concepto vertido desde las Ciencias del Ayurveda y el Yoga junto a los conocimientos actuales de la Medicina Occidental, para entender cómo utilizar la energía que circula por nuestro organismo a través del acto respiratorio. La comprensión teórica y práctica del arte del Pranayama permite balancear potencialmente diversos procesos que podría alteran la constitución física y psicológica de las distintas personas según lo refiere la Medicina Ayurveda. El uso correcto e incorrecto de ese arte brinda la posibilidad de comprender la profundidad en su accionar. También las emociones tienen una importante influencia, por lo que es interesante reconocerlas y tomar conciencia de su impacto en la vida diaria. Para ello se impartirán técnicas para cada ritmo metabólico o biotipo corporal, la relación con la emoción predominante y el Pranayama adecuado.",
    taller: {
      titulo: "Respiración y Emociones",
      ano: 2024,
      programa: "Próximamente se definirán los Encuentros que comprenderá el Taller especificando días, hora, temario e inscripción.",
      modalidad: "Virtual",
      duracion: "Se definirá próximamente",
      requisitos: "Se recomienda participar con ropa cómoda",
      aCargo: "Rafael G. Campi (Médico, M.P. 1200) y Patricia V. Ahumada (Instr. y Profesora de Ayurvedic Yoga Terapéutico)",
      informacion: "info@ashaayurveda.com.ar"
    }
  },
  {
    idtext: "conferencias",
    title: "Conferencias",
    subTitle: "by Asha Ayurveda | Jun 16, 2023 | ciclo2023",
    image: '/pageServices/educacion/catedra.webp',
    tags: ["EDU2023", "EDUCACIÓN"],
    shortDescription: "Únete a nuestra misión de difundir y contribuir al bienestar general a través del Ayurveda y el Yoga en Asha Ayurveda. Hemos establecido colaboraciones en diversos ámbitos de la sociedad, como fundaciones, institutos de salud, facultades universitarias y museos, con...",
    description: "Únete a nuestra misión de difundir y contribuir al bienestar general a través del Ayurveda y el Yoga en Asha Ayurveda. Hemos establecido colaboraciones en diversos ámbitos de la sociedad, como fundaciones, institutos de salud, facultades universitarias y museos, con el objetivo de complementar y promover acciones que favorezcan la salud de diversos grupos de personas. Si estás interesado en contar con nuestra participación, te invitamos a contactarnos y enviar una nota de intención con tus objetivos a alcanzar. De esta manera, podremos evaluar la modalidad, nuestra disponibilidad y el contexto para brindar un aporte significativo. Estamos agradecidos y entusiasmados de formar parte de procesos que mejoren el bienestar general. En Asha Ayurveda, valoramos la colaboración y la sinergia con diferentes sectores para promover la salud y el bienestar integral. ¡Esperamos poder sumar nuestra experiencia y conocimientos a tu iniciativa!",
  },
]