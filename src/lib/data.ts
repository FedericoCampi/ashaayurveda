export const imagesCarousel = [
  { 
    imagen: '/articulos/universidad/curso-ayurveda-banner.jpg',
    idText: 'servicios/educacion/curso-ayurveda',
  },
  { 
    imagen: '/articulos/universidad/curso-abhyanga-banner.jpg',
    idText: 'servicios/educacion/curso-abhyanga',
  },
  { 
    imagen: '/imagesFirstLanding/carousel/firstCarousel.webp',
    idText: 'yoga/acompanamos-y-honramos',
  },
  { imagen: '/imagesFirstLanding/carousel/secondCarousel.webp',
    idText: 'servicios/educacion/taller'
  },
  { imagen: '/imagesFirstLanding/carousel/thirdCarousel.webp',
    idText: 'yoga/participacion-en-consejos-multisectoriales'
   },
   { imagen: '/imagesFirstLanding/carousel/3encuentro.jpg',
    idText: 'yoga/tercer-encuentro'
   },
  { imagen: '/imagesFirstLanding/carousel/fourthCarousel.webp',
    idText: 'articulos/universidad',
    textbutton: 'Ver actividades relacionadas'
   },
  { imagen: '/imagesFirstLanding/carousel/fifthCarousel.webp',
    idText: 'servicios/educacion/colaborando-con-la-akademia'
   },
  { imagen: '/imagesFirstLanding/carousel/sixthCarousel.webp',
    idText: 'servicios/educacion/celebrando-la-union-cultural'
   },
  { imagen: '/imagesFirstLanding/carousel/seventhCarousel.webp',
    idText: 'servicios/educacion/ii-encuentro-de-ayurveda-catamarca'
   }
];

export const servicesData = [
  {
    title: 'Consulta ayurveda',
    description: 'Evaluación integral y personalizada según los principios de la medicina ayurvédica para mejorar tu salud y equilibrio. Se puede realizar de manera presencial u online.',
    image: '/imagesFirstLanding/services/consulta.webp',
    alt: 'consulta',
    to: 'servicios/consulta'
  },
  {
    title: 'Yoga',
    description: 'Integración de los principios del yoga y la medicina ayurvédica para promover la salud y el bienestar holísticos.',
    image: '/imagesFirstLanding/services/yoga.webp',
    alt: 'yoga',
    to: 'servicios/yoga'
  },
  {
    title: 'Educación',
    description: 'Descubre nuestras actividades educativas, donde aprendemos de la comunidad y compartimos conceptos de Ayurveda aplicables a la vida, integrando ecosistemas, cultura, creencias y salud.',
    image: '/imagesFirstLanding/services/cursos.webp',
    alt: 'cursos',
    to: 'servicios/educacion'
  },
  {
    title: 'Masajes',
    description: 'Descubre una variedad de tratamientos de masaje diseñados para revitalizar cuerpo y mente en nuestra página de masajes.',
    image: '/imagesFirstLanding/services/masajes.jpg',
    alt: 'masajes',
    to: 'servicios/masajes'
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
  href: string,
  subItems?: SubItem[]
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
      // { name: 'Educación', href: '/servicios/educacion' },
      {
        name: 'Masajes',
        href: '/servicios/masajes',
        subItems: [
          { name: 'Pinda Sveda', href: '/servicios/masajes/pinda-sveda' },
          { name: 'Sirodhara', href: '/servicios/masajes/sirodhara' },
          { name: 'Abhyanga', href: '/servicios/masajes/abhyanga' },
          { name: 'Nasya Karma', href: '/servicios/masajes/nasya-karma' },
          { name: 'Basti', href: '/servicios/masajes/basti' },
          { name: 'Sarasvati', href: '/servicios/masajes/sarasvati' },
          { name: 'Garshan', href: '/servicios/masajes/garshan' },
          { name: 'Facial Kerala', href: '/servicios/masajes/facial-kerala' },
        ],
      },
    ],
  },
  {
    name: 'Educación',
    href: '/servicios/educacion',
    subItems: [
      { name: 'Ver actividades', href: '/servicios/educacion' },
      { name: 'Universidad Nacional de Catamarca', href: '/articulos/universidad' },
    ],
  },
  { name: 'Sobre nosotros', href: '/sobrenosotros' },
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
    turnos: {
      dias: "Lunes y Miercoles",
      hora: "17pm a 18pm",
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
  { name: 'OTRAS TERAPIAS', image: '/pageServices/masajes.webp', to: '/servicios' },
  { name: 'YOGA', image: '/imagesFirstLanding/services/yoga.webp', to: '/servicios/yoga' },
  { name: 'EDUCACIÓN', image: '/imagesFirstLanding/services/cursos.webp', to: '/servicios/educacion' },
  { name: 'SIRODHARA', image: '/pageServices/sirodhara.webp', to: '/servicios/masajes/sirodhara' },
  { name: 'MASAJE ABHYANGA', image: '/pageServices/masajeAbhyanga.webp', to: '/servicios/masajes/abhyanga' },
  { name: 'NASYA KARMA', image: '/pageServices/nasya-panchkarma.webp', to: '/servicios/masajes/nasya-karma' },
  { name: 'PINDA SVEDA', image: '/pageServices/pindaSveda.webp', to: '/servicios/masajes/pinda-sveda' },
  { name: 'BASTI', image: '/pageServices/basti.webp', to: '/servicios/masajes/basti' },
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
  {
    idtext: "3encuentro",
    title: "III Encuentro de Ayurveda Catamarca 2024",
    subTitle: "by Asha Ayurveda | Oct 26, 2024 | ciclo2024",
    image: '/pageServices/educacion/3encuentro.jpg',
    shortDescription: "Agradecidos de concretar el III Encuentro de Ayurveda en Catamarca el 26 de Octubre de 2024, donde compartimos una hermosa reunión desarrollada en base a un arduo trabajo de equipo entre instituciones, autoridades y amigos/as brindando a la población...",
    description: "Agradecidos de concretar el III Encuentro de Ayurveda en Catamarca el 26 de Octubre de 2024, donde compartimos una hermosa reunión desarrollada en base a un arduo trabajo de equipo entre instituciones, autoridades y amigos/as brindando a la población en general conocimientos y experiencias con el fin de crear conciencia para el bienestar de muchas personas, poniendo en acción una de las premisas de esta Ciencia ancestral, el cuidado por la vida.\n\nRecordamos y honramos el 9no Día del Ayurveda declarado el 29 de Octubre de 2024 por el Gobierno de India, de cuyo país se reconoce el origen de ésta Ciencia milenaria. Con la imagen de Dhanvantari Jayanti (Dhanteras) y la intención de todos los participantes estuvo llena de energía y entusiasmo, destacando la importancia del Ayurveda en la promoción de la salud y la prevención de enfermedades. El tema para este año fue “Innovaciones ayurvédicas para la salud global”. \n\n\nCon el honorable apoyo de Embajada de India en Argentina y Uruguay a cargo de su Excelencia el Sr. Dinesh Bhatia y la Secretaría de Extensión Universitaria de la Universidad Nacional de Catamarca a cargo del Sr Ing. Adolfo Agüero se generó este hermoso Encuentro a partir de la iniciativa de Asha Ayurveda Catamarca. En el mismo contamos con unas palabras de un referente en Medicina Ayurveda para Argentina y Latinoamérica como es el Dr Jorge Berra quien actualizó con noticias sobre la evolución de Ayurveda en tiempos actuales. Luego a Cargo de Patricia Verónica Ahumada se honró y se puso una intención por medio de lámparas de cerámica, o diyas, con Ghee y pabilos de algodón. A continuación, se expuso sobre Ayurveda y Plantas Medicinales de Catamarca (Médico Rafael G. Campi, Catamarca), Ayurveda y la Mujer (Médica Alejandra Rodriguez, Mar del Plata), Asanas y Doshas (Profesora Patricia V. Ahumada, Catamarca), Ayurveda y Cardiología (Médica Alejandra Naranjo, Tucumán), Astrología Ayurveda y Ciclos de Vida (Astrólogo Védico Federico Assunto Suarez, Bs As), Música clásica de India (Lic. Matías Carballido, Catamarca), Jugos y Doshas (Terapeuta Ayurveda Stella M. Varela). Una gran cantidad de asistentes que participaron con sus preguntas y aportes también nutrieron a esa hermosa reunión de corazones. También agradecemos a personal de la Secretaría de Extensión, amigos/as y colaboradores que con su importante tarea técnica y de logística también contribuyeron a que esto se haga realidad.",
  },
  {
    idtext: "curso-ayurveda",
    title: "Intructorado básico en Ayurveda",
    subTitle: "by Asha Ayurveda | 26 Octubre, 2024 | Universidad de Nacional de Catamarca",
    image: '/articulos/universidad/curso-ayurveda.jpg',
    shortDescription: "Preinscripciones a partir del 5 de diciembre 2024",
    description: "Iniciando esta nueva experiencia, con ánimos de seguir compartiendo aprendizajes y brindar herramientas que proporciona Ayurveda, ciencia milenaria que se adecua a distintos entornos y culturas, es que invitamos a todas las personas que quieran participar para profundizar en conceptos que se adaptan fácilmente, respetando su origen. Con el inmenso agradecimiento a Fundación de Salud Ayurveda Prema, a  Embajada de India para Argentina y Uruguay, a la Secretaría de Extensión Universitaria de la Universidad Nacional de Catamarca, AMARA (Asociación de Médicos y Asistentes de Ayurveda de la República Argentina) colegas, amigos y  pacientes, es que se abre esta  oportunidad de capacitación como una opción más que será útil para integrar herramientas a la vida diaria generando conciencia del cuidado de todos y del medio ambiente. Se requiere completar formulario de Pre-inscripción hasta el 15 de Febrero de 2025 por una cuestión de organización.",
    button: "Ir a Preinscripción",
  },
  {
    idtext: "curso-abhyanga",
    title: "Curso de masajes Abhyanga",
    subTitle: "by Asha Ayurveda | 26 Octubre, 2024 | Universidad de Nacional de Catamarca",
    image: '/articulos/universidad/curso-abhyanga.jpg',
    shortDescription: "Preinscripciones a partir del 5 de diciembre 2024",
    description: "Iniciando esta nueva experiencia, con ánimos de seguir compartiendo aprendizajes y brindar herramientas que proporciona Ayurveda, ciencia milenaria que se adecua a distintos entornos y culturas, es que invitamos a todas las personas que quieran participar para profundizar en conceptos que se adaptan fácilmente, respetando su origen. Con el inmenso agradecimiento a Fundación de Salud Ayurveda Prema, a  Embajada de India para Argentina y Uruguay, a la Secretaría de Extensión Universitaria de la Universidad Nacional de Catamarca, AMARA (Asociación de Médicos y Asistentes de Ayurveda de la República Argentina) colegas, amigos y  pacientes, es que se abre esta  oportunidad de capacitación como una opción más que será útil para integrar herramientas a la vida diaria generando conciencia del cuidado de todos y del medio ambiente. Se requiere completar formulario de Pre-inscripción hasta el 15 de Febrero de 2025 por una cuestión de organización.",
    button: "Ir a Preinscripción",
  },


  {
    idtext: "modulo-ayurveda",
    title: "Módulo Ayurveda en la Diplomatura de Gestión de las Emociones en el Proceso Educativo (DGEPE)",
    subTitle: "by Asha Ayurveda | Abr 22, 2024 | Universidad de Nacional de Catamarca",
    description: "Descubre nuestro Módulo de Ayurveda: Perspectiva sobre las Emociones en Asha Ayurveda. Forma parte de la Diplomatura de Gestión de Emociones en el Proceso Educativo (DGEPE), ofrecida por la Secretaría de Posgrado de la Facultad de Ciencias Agrarias de la Universidad Nacional de Catamarca desde 2019. Contamos con al aval de la Embajada de India, sede en Buenos Aires a cargo de su Excelencia el Sr. Embajador Dinesh Bhatia para el desarrollo de actividades que impulsen la difusión de Ayurveda y su integración en nuestra región en un intercambio de respeto mutuo de culturas que promueven el bienestar general y cuidado del ecosistema",
    image: '/articulos/universidad/first.webp',
  },
  {
    idtext: "proyecto-naturaleza",
    title: "Proyecto La Naturaleza es Sabia",
    subTitle: "by Asha Ayurveda | Jun 17, 2023 | Educación, Universidad de Nacional de Catamarca",
    description: "¡Descubre el inspirador proyecto “La Naturaleza es Sabia”! En colaboración con la prestigiosa Facultad de Humanidades de la Universidad Nacional de Catamarca (UNCA), la Secretaría de Extensión Universitaria de la UNCA, el Colegio Privado María Montessori y destacados profesionales de diversas disciplinas, como Ciencias Geográficas, Ciencias Agrarias, Ciencias Económicas, Ciencias Sociales, Psicología, Bromatología y Teatro, se llevó a cabo el emocionante Proyecto “La Naturaleza es Sabia”. El objetivo principal de esta investigación apasionante fue difundir y crear conciencia sobre los innumerables beneficios que el proceso de alimentación brinda a diferentes grupos sociales. Nos propusimos promover la salud basándonos en las valiosas enseñanzas de la Medicina Ayurveda, al mismo tiempo que buscamos rescatar prácticas relegadas que consideramos fundamentales para mejorar la calidad de vida de la población en general. Nos complace anunciar que el proyecto ha culminado con un rotundo éxito, logrando alcanzar todos sus objetivos y dejando una huella positiva en la comunidad. Como resultado de esta enriquecedora experiencia, hemos dado vida a un libro extraordinario titulado “La Naturaleza es Sabia, Experiencias en el Aula”, escrito por el talentoso Alberto Antonio Espeche y otros colaboradores destacados.",
    image: '/articulos/universidad/second.webp',
    image2: '/pageServices/educacion/libro.png',
    secondText: 'Este libro excepcional ha sido publicado por la distinguida Universidad Nacional de Catamarca y cuenta con un total de 140 cautivadoras páginas en un formato de 22×15 cm. Su ISBN es 978-950-746-243-6. Te invitamos a sumergirte en las páginas de este fascinante libro, donde encontrarás valiosas reflexiones, experiencias prácticas y conocimientos que te inspirarán a explorar la sabiduría de la naturaleza y su impacto en nuestra alimentación y bienestar. Es una lectura imprescindible para aquellos que desean embarcarse en un viaje hacia una vida más saludable y equilibrada. En Asha Ayurveda, nos enorgullece haber sido parte de este maravilloso proyecto y esperamos seguir colaborando en futuras iniciativas que promuevan el bienestar y el conocimiento en nuestra comunidad. ¡La naturaleza nos brinda infinitas enseñanzas, y juntos podemos descubrir su sabiduría para vivir una vida plena y saludable!'
  },
  {
    idtext: "naturaleza-sabia",
    title: "Presentación libro “La naturaleza es sabia, experiencias en el aula”",
    subTitle: "by Asha Ayurveda | May 24, 2023 | Educación, Universidad de Nacional de Catamarca",
    description: "De derecha a izquiera Gloria Dalma Videla, terapeuta, María Luisa Ávlaos, profesora de biololgía, Lucía Medina, CPN, Rafael G. Campi médico ayurveda. Acto de presentación del libro “La Naturaleza es Sabia” hecho en colaboración con la UNCA, el Colegio privado Montessori",
    image: '/articulos/universidad/third.webp',
    secondText: 'Este libro excepcional ha sido publicado por la distinguida Universidad Nacional de Catamarca y cuenta con un total de 140 cautivadoras páginas en un formato de 22×15 cm. Su ISBN es 978-950-746-243-6. Te invitamos a sumergirte en las páginas de este fascinante libro, donde encontrarás valiosas reflexiones, experiencias prácticas y conocimientos que te inspirarán a explorar la sabiduría de la naturaleza y su impacto en nuestra alimentación y bienestar. Es una lectura imprescindible para aquellos que desean embarcarse en un viaje hacia una vida más saludable y equilibrada. En Asha Ayurveda, nos enorgullece haber sido parte de este maravilloso proyecto y esperamos seguir colaborando en futuras iniciativas que promuevan el bienestar y el conocimiento en nuestra comunidad. ¡La naturaleza nos brinda infinitas enseñanzas, y juntos podemos descubrir su sabiduría para vivir una vida plena y saludable!'
  },
  {
    idtext: "colaborando-con-la-akademia",
    title: "Colaborando con la Akademia en 2024",
    subTitle: "by Asha Ayurveda | Abr 22, 2024 | edu 2024, Educación",
    description: "Nos gratifica el corazón haber aceptado una nueva invitación de La Akademia Catamarca, en donde vamos a compartir experiencias y conocimientos desde la perspectiva del Yoga y el Ayurveda, con adolescentes y jóvenes de entre 17 y 23 años de edad. Luego de otra hermosa experiencia que desarrollamos en el año 2023, creemos y sentimos desde nuestro corazón participar en tan noble tarea. El objetivo es mostrarles como ciencias milenarias, que siguen vigentes de manera ininterrumpida desde hace 5000 años atrás aproximadamente, aportan ideas y sugerencias prácticas fáciles de aplicar. Nos adentraremos a través de un Módulo denominado “Despierta y conecta” con aspectos relacionados a la meditación y sus saludables efectos como así también en el campo del autoconocimiento a través de encuentros y conversatorios con la característica de Taller. En otro Módulo denominado “Somos lo que comemos” reflexionaremos sobre la alimentación, su impacto energético y emocional desde la mirada de Ayurveda. En otro módulo denominado “Muévete” se compartirá actividades y conceptos desde el Yoga con el fin de asociar una actividad física saludable con aspectos relacionados a la mente y el espíritu. En esta etapa de vida, adolescencia y juventud, se produce el mayor desarrollo físico, intelectual y crecimiento emocional, por lo que es recomendable acompañar a través de la toma de conciencia por el reconocimiento de los Biotipos corporales o Doshas y cuál de estas fuerzas de la naturaleza se hace más presente. Asociado a esto, se intercambiarán medidas generales para el cuidado de la salud, que redundarán en el cuidado de familias, comunidad y ecosistema.",
    image: '/pageServices/educacion/akademia-2024.webp',
  },
  {
    idtext: "celebrando-la-union-cultural",
    title: "Celebrando la Unión Cultural y Espiritual: Día de la Independencia de India en la Embajada de Buenos Aires",
    subTitle: "by Asha Ayurveda | Ago 19, 2023 | Eventos",
    description: "En un momento de distinguida honorabilidad, nos unimos con gratitud y aprecio a la Embajada de India en Buenos Aires para celebrar el Día de la Independencia de India. Desde Asha Ayurveda, nos sentimos profundamente honrados por la invitación a este evento significativo. Bajo el liderazgo de su excelencia el Sr. Embajador Dinesh Bhatia, acompañado por su Sra. Seema Bhatia, esta celebración trasciende las fronteras y refuerza los lazos culturales y espirituales. El evento en la Embajada fue más que una conmemoración patriótica. Fue un recordatorio de la profunda conexión que compartimos con la rica herencia de la India y un llamado a fortalecer aún más esos lazos en un espíritu de colaboración y amistad. Desde Asha Ayurveda, estamos particularmente emocionados por la mención de la adaptación de las Ciencias del Yoga y el Ayurveda en nuestra región. Este es un paso importante hacia un bienestar holístico y una mayor armonía con la naturaleza y nosotros mismos. La antigua sabiduría del Ayurveda y el Yoga se une a la visión moderna de un mundo más saludable y equilibrado.",
    image: '/pageServices/educacion/embajada-de-la-india.webp',
    secondText: 'La Embajada de India en Buenos Aires, liderada por su excelencia el Sr. Embajador Dinesh Bhatia, ha sido un faro de promoción cultural y relaciones internacionales. Su dedicación a la unión de nuestras naciones y el fortalecimiento de los lazos culturales es admirable y profundamente valorado. Este encuentro es un recordatorio de que el Día de la Independencia no solo marca un hito histórico, sino que también simboliza la unidad en diversidad y la aspiración conjunta hacia un mundo mejor. Desde Asha Ayurveda, extendemos nuestro agradecimiento por esta oportunidad y reafirmamos nuestro compromiso de continuar trabajando juntos en la difusión de la sabiduría del Ayurveda y el Yoga. En este Día de la Independencia, reflexionamos sobre el poder de la colaboración y el significado más profundo de la independencia: la libertad de explorar, aprender y crecer juntos como naciones y como seres humanos. Que esta celebración sea un faro de inspiración y un recordatorio de la belleza que emerge cuando las culturas se entrelazan en un abrazo de entendimiento y amistad duradera.',
  },
  {
    idtext: "ii-encuentro-de-ayurveda-catamarca",
    title: "II Encuentro de Ayurveda Catamarca 2023",
    subTitle: "by Asha Ayurveda | Dic 16, 2023 | Ayurveda, edu2023, Educación",
    description: "Con mucha alegría compartimos algunos de los aspectos del II Encuentro de Ayurveda en Catamarca durante el mes de Diciembre de 2023. Se desarrolló una hermosa convocatoria entre los distintos profesionales que disertaron y el público que asistió y participó activamente. Siguiendo el lema de este año, con motivo por los festejos del 8vo Día Internacional del Ayurveda 2023 declarado oficialmente el 10 de Noviembre, “Ayurveda todos los días-Ayurveda en todos los lugares”, centrándose en la interfaz hombre-animal-planta-medio ambiente, es que quisimos aportar a la expansión e integración de Ayurveda sumando al noble conocimiento en la salud y las personas que ya existe actualmente. Agradecemos a la Secretaría de Extensión Universitaria de la Universidad Nacional de Catamarca a cargo del Sr Ing. Adolfo Agüero, a Embajada de India en la República Argentina a cargo de su Excelencia el Sr. Dinesh Bhatia Embajador Extraordinario y Plenipotenciario con acreditación simultánea en Uruguay, quienes acompañaron con unas afectuosas y cálidas palabras. También agradecemos a la Asociación Catamarqueña de Yoga para lo cual a través de unas palabras de la Profesora Patricia Verónica Ahumada se entregaron unos presentes en nombre de Asha Ayurveda y Embajada de India. Agradecemos al Sr. Alfredo Héctor Lauría, Médico homeópata y Ayurveda. Fundador y director del Centro Argentino de Medicina Ayurveda y Ciencias para la salud (CEAMA) quien compartió sobre “Ayurveda en las Regiones Semiáridas”. Agradecemos a la Dra Graciela Maturano especialista en Medicina del Trabajo, Magíster en Salud Pública, Investigadora en distintas temáticas Sociales, Instructora en Técnicas de Masajes Shiatsu, Terapeuta Ayurveda quien aportó sobre “Similitudes de la Medicina Ayurveda y la Medicina Andina”. Agradecemos al Sr. Federico Asunto Suarez, Astrólogo Védico y creador de la Escuela Jyotish del Sur, por su contribución sobre “Astrología Védica y Ayurveda”. Agradecemos al Sr Lic. Matías Carballido, Licenciado en Psicología cuya colaboración fue desarrollar sobre “Canto, música y Ayurveda”. Agradecemos a Angelina Galán, Terapeuta Ayurveda a cargo del tema “Jugos Depurativos y Ayurveda”.",
    image: '/pageServices/educacion/encuentro.webp',
  }
]

export const masajesSection = [
  {
    id: 1,
    title: "SIRODHARA",
    description: "Profunda relajación y equilibrio mental a través del flujo constante de aceite tibio en la frente.",
    image: "/pageServices/sirodhara.webp",
    to: '/servicios/masajes/sirodhara'
  },
  {
    id: 2,
    title: "MASAJE ABHYANGA",
    description: "Bienestar total con masaje relajante y rejuvenecedor con aceites herbales terapéuticos y técnicas especializadas.",
    image: "/pageServices/masajeAbhyanga.webp",
    to: '/servicios/masajes/abhyanga'
  },
  {
    id: 3,
    title: "NASYA KARMA",
    description: "Tratamiento Nasya Karma: Despeje y rejuvenecimiento de los senos nasales mediante la aplicación de aceites medicados.",
    image: "/pageServices/nasya-panchkarma.webp",
    to: '/servicios/masajes/nasya-karma'
  },
  {
    id: 4,
    title: "PINDA SVEDA",
    description: "Tratamiento Pinda: Relajación profunda y equilibrio mediante masajes con bolsitas herbales calientes y aromáticas.",
    image: "/pageServices/pindaSveda.webp",
    to: '/servicios/masajes/pinda-sveda'
  },
  {
    id: 5,
    title: "BASTI",
    description: "Equilibrio y bienestar a través de la aplicación de aceites medicados en puntos específicos del cuerpo.",
    image: "/pageServices/basti.webp",
    to: '/servicios/masajes/basti'
  },
  {
    id: 7,
    title: "MASAJE GARSHAN",
    description: "Masaje linfático Ayurvédico que ayuda a remover toxinas del sistema linfático que se encuentra muy cerca de la piel.",
    image: "/pageServices/masajes/garshan.webp",
    to: '/servicios/masajes/garshan'
  },
  {
    id: 8,
    title: "MASAJE SARASVATI",
    description: "Proporciona bienestar mediante unas cuidadosas maniobras sobre el abdomen y luego cuerpo entero para lograr bienestar sutil y armonizante.",
    image: "/pageServices/masajes/sarasvati.webp",
    to: '/servicios/masajes/sarasvati'
  },
  {
    id: 9,
    title: "FACIAL KERALA",
    description: "También realizamos otras modalidades de Masaje Ayurveda para acompañar distintos procesos que necesitan de la aplicación de algunas de estas Terapias.",
    image: "/pageServices/masajes/facial-kerala.webp",
    to: '/servicios/masajes/facial-kerala'
  },
];

export const carouselArticles = [
  { 
    idText: 'acompanamos-y-honramos',
    faq:'by Asha Ayurveda | Jul 5, 2024 | Yoga',
    imagen: '/articulos/carousel/first.webp',
    title: 'Acompañamos y honramos los festejos por el día internacional del yoga 2024',
    text: 'Enviamos nuestros más sinceros saludos y reconocimientos para los festejos por el día Internacional del Yoga este 21 de junio de 2024 que se organizaron en distintos lugares del mundo donde brilló la luz de la práctica y enseñanzas de este conocimiento. Su lema o tema...',
    textCompleto: 'Enviamos nuestros más sinceros saludos y reconocimientos para los festejos por el día Internacional del Yoga este 21 de junio de 2024 que se organizaron en distintos lugares del mundo donde brilló la luz de la práctica y enseñanzas de este conocimiento. Su lema o tema para este año “Yoga para uno mismo, Yoga para la Sociedad” refleja el pedido de búsqueda interior sin olvidar a todos los seres que nos rodean. Agradeciendo a todas aquellas generaciones que transmitieron su esencia, con beneficios y alcances registrados desde miles de años atrás, y a los/as que lo siguen haciendo desde el corazón en beneficio de la humanidad entera, sin discriminación, con respeto, en unión y con la sencillez y efectividad claramente demostrada no solo con el paso del tiempo sino con los métodos científicos actuales. Bendiciones y felicidad para la continuidad de esta Ciencia invitando todos/as aquellas personas que quisieran experimentar el bienestar que produce la realización de Yoga.',
    to: '/yoga/acompanamos-y-honramos'
  },
  { 
    idText: 'consejos-multisectoriales',
    imagen: '/articulos/carousel/second.webp',
    title: 'Participación en Consejos Multisectoriales',
    text: 'Centro de día "Pilar de Vida" en 2024 en relación a los festejos por el Día mundial de la Salud, la municipalidad de San Fernando del Valle de Catamarca desde los consejos Multisectoriales organizó una serie de actividades desde el Centro Pilar de Vida para...',
    to: '/yoga/participacion-en-consejos-multisectoriales'
  },
  { 
    idText: 'congreso-de-ciudades',
    imagen: '/articulos/carousel/third.webp',
    title: 'Participación en IX Congreso de Ciudades y Pueblos del interior',
    text: 'Participación en IX Congreso de ciudades y pueblos del interior',
    to: '/servicios/educacion/congreso'
  },
  { 
    idText: 'encuentro-de-ayurveda-2023',
    imagen: '/articulos/carousel/fourth.webp',
    title: 'II Encuentro de Ayurveda Catamarca 2023',
    text: 'Con mucha alegría compartimos algunos de los aspectos del II Encuentro de Ayurveda en Catamarca durante el mes de Diciembre de 2023. Se desarrolló una hermosa convocatoria entre los distintos profesionales que disertaron y el público que asistió y participó...',
    to: '/servicios/educacion/encuentro'
  },
  { 
    idText: 'union-cultural-y-espiritual',
    imagen: '/articulos/carousel/fifth.webp',
    title: 'Celebrando la unión Cultural y espiritual: Día de la independencia de India en la embajada de Buenos Aires',
    text: 'En un momento de distinguida honorabilidad, nos unimos con gratitud y aprecio a la Embajada de India en Buenos Aires para celebrar el Día de la Independencia de India. Desde Asha Ayurveda, nos sentimos profundamente honrados por la invitación a este evento...',
    to: '/servicios/educacion/celebrando-la-union-cultural'
  },
];

export const yogaSection = [
  { 
    idText: 'acompanamos-y-honramos',
    faq:'by Asha Ayurveda | Jul 5, 2024 | Yoga',
    imagen: '/yogaSection/acompananos.webp',
    title: 'Acompañamos y honramos los festejos por el día internacional del yoga 2024',
    text: 'Enviamos nuestros más sinceros saludos y reconocimientos para los festejos por el día Internacional del Yoga este 21 de junio de 2024 que se organizaron en distintos lugares del mundo donde brilló la luz de la práctica y enseñanzas de este conocimiento. Su lema o tema...',
    textCompleto: 'Enviamos nuestros más sinceros saludos y reconocimientos para los festejos por el día Internacional del Yoga este 21 de junio de 2024 que se organizaron en distintos lugares del mundo donde brilló la luz de la práctica y enseñanzas de este conocimiento. Su lema o tema para este año “Yoga para uno mismo, Yoga para la Sociedad” refleja el pedido de búsqueda interior sin olvidar a todos los seres que nos rodean. Agradeciendo a todas aquellas generaciones que transmitieron su esencia, con beneficios y alcances registrados desde miles de años atrás, y a los/as que lo siguen haciendo desde el corazón en beneficio de la humanidad entera, sin discriminación, con respeto, en unión y con la sencillez y efectividad claramente demostrada no solo con el paso del tiempo sino con los métodos científicos actuales. Bendiciones y felicidad para la continuidad de esta Ciencia invitando todos/as aquellas personas que quisieran experimentar el bienestar que produce la realización de Yoga.',
    imagen2: '/yogaSection/acompananos2.webp',
  },
  { 
    idText: 'participacion-en-consejos-multisectoriales',
    faq:'by Asha Ayurveda | Abr 22, 2024 | Yoga',
    imagen: '/yogaSection/charla.webp',
    title: 'Centro de día “Pilar de Vida” en 2024',
    textCompleto: 'En relación a los festejos por el Día Mundial de la Salud, la Municipalidad de San Fernando del Valle de Catamarca desde los Consejos Multisectoriales organizó una serie de actividades desde el Centro Pilar de Vida para reflexionar sobre la importancia de mantener un bienestar integral en nuestras vidas. Este año, nuevamente fuimos invitados para colaborar con un aporte desde la Medicina Ayurveda. En este contexto, la antigua sabiduría del Ayurveda compartió similitudes con lo que se quiere enfatizar para la toma de conciencia y el cuidado de la salud. El evento organizado en el corazón de la ciudad, fue muy agradable donde se compartió conocimientos milenarios, los nuevos desafíos sobre la salud y el bienestar. Se destacó la importancia de vivir en armonía con los ritmos naturales y de nutrir tanto el cuerpo, la mente y el espíritu. Durante la Conferencia se hizo hincapié en el reconocimiento de Charya, término en sánscrito que también se aplica para definir Rutinas, que podrías ser diarias (Dinacharya), estacionales (Ritucharya), nocturnas (Ratricharya) y la importancia de adaptar el enfoque de salud a las necesidades predominantes. Se exploraron temas como el significado de Ayurveda, como es considerada a nivel mundial y en nuestro país, las similitudes de objetivos de la OMS (Organización Mundial de la Salud) y Ayurveda, las características de la Estación de Otoño, la Alimentación recomendada para dicha estación y loa efectos predominantes de la misma en la salud. Luego se mostró ejemplo de algunas plantas que se pueden utilizar para realizar Infusiones en otoño utilizando:',
    list: {
      item1: "Cuminum cyminum (Comino) en semilla",
      item2: "Coriandrum sativum (Coriandro) en semilla",
      item3: "Zingiber officinale (Jengibre) en raíz",
      item4: "Cinnamomum zeylanicun (Canela) en rama",
      item5: "Foeniculum vulgare (Hinojo) en semilla",
    },
    imagen2: '/yogaSection/prensa.webp',
    secondText: 'El aroma de las hierbas aromáticas que se mostraron como ejemplo llenaban el aire mientras los asistentes se sumergían en las enseñanzas de esta antigua ciencia. Uno de los momentos más destacados del evento fue la cálida participación con preguntas y aportes de los/as asistentes compartiendo los beneficios de esta antigua técnica de sanación. Se compartió una de las tantas frases que se describen en uno de los textos refrentes de Ayurveda, Sushruta Samhita Chapter 6 Ritucharya Adhyaya que sobre Ritu Prabhava (efecto de la Estación) refiriéndose a otoño menciona: “en el que el cielo se compone de nubes dispersas, los rayos del sol secan el lodo (humedad de la tierra) y producen fácil desequilibrio en la piel”. A medida que la Conferencia llegaba a su fin, los participantes se despidieron con corazones y mentes renovados, inspirados por las enseñanzas del Ayurveda y comprometidos a integrar sus principios en sus vidas cotidianas. Con una comprensión más profunda de la conexión entre el cuerpo y la mente, se marcharon con la determinación de cuidarse a sí mismos y a los demás, recordando siempre que la salud verdadera es un viaje que abarca todos los aspectos de nuestra existencia.'
  },
  { 
    idText: 'congreso-de-ciudades',
    imagen: '/articulos/carousel/third.webp',
    title: 'Participación en IX Congreso de Ciudades y Pueblos del interior',
    text: 'Participación en IX Congreso de ciudades y pueblos del interior'
  },
  { 
    idText: 'encuentro-de-ayurveda-2023',
    imagen: '/articulos/carousel/fourth.webp',
    title: 'II Encuentro de Ayurveda Catamarca 2023',
    text: 'Con mucha alegría compartimos algunos de los aspectos del II Encuentro de Ayurveda en Catamarca durante el mes de Diciembre de 2023. Se desarrolló una hermosa convocatoria entre los distintos profesionales que disertaron y el público que asistió y participó...'
  },
  { 
    idText: 'union-cultural-y-espiritual',
    imagen: '/articulos/carousel/fifth.webp',
    title: 'Celebrando la unión Cultural y espiritual: Día de la independencia de India en la embajada de Buenos Aires',
    text: 'En un momento de distinguida honorabilidad, nos unimos con gratitud y aprecio a la Embajada de India en Buenos Aires para celebrar el Día de la Independencia de India. Desde Asha Ayurveda, nos sentimos profundamente honrados por la invitación a este evento...'
  },
  { 
    idText: 'radio-universidad',
    imagen: '/prensaymedios/carousel/first.webp',
    title: 'Radio Nacional',
    text: 'En Radio Universidad, a través del programa Senderos para Crecer, a cargo del Sr Ing. Adolfo Agüero, complementado a distintas temáticas y abordajes de la búsqueda interior, con aportes y perspectivas del Ayurveda y el Yoga.'
  },
  { 
    idText: 'radio-nacional',
    imagen: '/prensaymedios/carousel/second.webp',
    title: 'Radio Universidad',
    text: 'En Radio Nacional a través de las invitaciones de las Sras. Rita Soria en su programa “La hora de la Lagartija” y, por otro lado de la Sra. Sonia Luna, desarrollando temas sobre eventos y jornadas de Ayurveda y Yoga.'
  },
  { 
    idText: 'revista-mahat',
    imagen: '/prensaymedios/carousel/third.webp',
    title: 'Revista Mahat',
    text: 'Para Revista Mahat, en donde se publicó un artículo sobre Ayurveda y otoño, explicando que transitar y respetar el cambio estacional del año es una de las tantas recomendaciones de esta Medicina Milenaria. Ayurveda es una Ciencia reconocida por la OMS como una de las más antiguas de la humanidad. Uno de sus principios “Swasthasya Swasthya Rakshanam”, es decir, la preservación de la salud de las personas sanas y ” Aturashya Vikar Prasamanam”, es decir, curar las enfermedades de los enfermos marca el rumbo de su objetivo.'
  },
  { 
    idText: 'radio-valle-viejo',
    imagen: '/prensaymedios/carousel/fourth.webp',
    title: 'Radio Valle viejo',
    text: 'En Radio Valle Viejo a través del programa “Con vos” de Inés Ogas, desarrollando distintos temas de Ayurveda y Yoga de acuerdo a la necesidad de la comunidad.'
  },
  { 
    idText: 'tv-catamarca',
    imagen: '/prensaymedios/carousel/fifth.webp',
    title: 'Tv de Catamarca',
    text: 'En Tv de Catamarca presentando Ayurveda y Yoga como Ciencias que orientan en la Alimentación, situación que está a travesada por múltiples factores de la persona, del entorno y de la dinámica cambiante de la vida misma en el planeta.'
  },
  { 
    idText: 'tercer-encuentro',
    imagen: '/imagesFirstLanding/carousel/3encuentro.jpg',
    title: 'III Encuentro de Ayurveda Catamarca',
    text: 'Agradecidos de concretar el III Encuentro de Ayurveda en Catamarca el 26 de Octubre de 2024, donde compartimos una hermosa reunión desarrollada en base a un arduo trabajo de equipo entre instituciones, autoridades y amigos/as brindando a la población en general conocimientos y experiencias con el fin de crear conciencia para el bienestar de muchas personas, poniendo en acción una de las premisas de esta Ciencia ancestral, el cuidado por la vida. Recordamos y honramos el 9no Día del Ayurveda declarado el 29 de Octubre de 2024 por el Gobierno de India, de cuyo país se reconoce el origen de ésta Ciencia milenaria. Con la imagen de Dhanvantari Jayanti (Dhanteras) y la intención de todos los participantes estuvo llena de energía y entusiasmo, destacando la importancia del Ayurveda en la promoción de la salud y la prevención de enfermedades. El tema para este año fue “Innovaciones ayurvédicas para la salud global”. Con el honorable apoyo de Embajada de India en Argentina y Uruguay a cargo de su Excelencia el Sr. Dinesh Bhatia y la Secretaría de Extensión Universitaria de la Universidad Nacional de Catamarca a cargo del Sr Ing. Adolfo Agüero se generó este hermoso Encuentro a partir de la iniciativa de Asha Ayurveda Catamarca. En el mismo contamos con unas palabras de un referente en Medicina Ayurveda para Argentina y Latinoamérica como es el Dr Jorge Berra quien actualizó con noticias sobre la evolución de Ayurveda en tiempos actuales. Luego a Cargo de Patricia Verónica Ahumada se honró y se puso una intención por medio de lámparas de cerámica, o diyas, con Ghee y pabilos de algodón. A continuación, se expuso sobre Ayurveda y Plantas Medicinales de Catamarca (Médico Rafael G. Campi, Catamarca), Ayurveda y la Mujer (Médica Alejandra Rodriguez, Mar del Plata), Asanas y Doshas (Profesora Patricia V. Ahumada, Catamarca), Ayurveda y Cardiología (Médica Alejandra Naranjo, Tucumán), Astrología Ayurveda y Ciclos de Vida (Astrólogo Védico Federico Assunto Suarez, Bs As), Música clásica de India (Lic. Matías Carballido, Catamarca), Jugos y Doshas (Terapeuta Ayurveda Stella M. Varela). Una gran cantidad de asistentes que participaron con sus preguntas y aportes también nutrieron a esa hermosa reunión de corazones. También agradecemos a personal de la Secretaría de Extensión, amigos/as y colaboradores que con su importante tarea técnica y de logística también contribuyeron a que esto se haga realidad.'
  },
];

export const carouselUniversidad = [
  { 
    imagen: '/articulos/universidad/curso-ayurveda.jpg',
    title: 'Intructorado básico en Ayurveda',
    text: 'Preinscripciones apartir del 5 de diciembre 2024',
    faq: 'by Asha Ayurveda | 26 Octubre, 2024 | Universidad de Nacional de Catamarca',
    to: '/servicios/educacion/curso-ayurveda'
  },
  { 
    imagen: '/articulos/universidad/curso-abhyanga.jpg',
    title: 'Curso de masajes Abhyanga',
    text: 'Preinscripciones apartir del 5 de diciembre 2024',
    faq: 'by Asha Ayurveda | 26 Octubre, 2024 | Universidad de Nacional de Catamarca',
    to: '/servicios/educacion/curso-abhyanga'
  },

  { 
    imagen: '/articulos/universidad/first.webp',
    title: 'Módulo Ayurveda en la Diplomatura de Gestión de las Emociones en el Proceso Educativo(DGEPE)',
    text: 'Acto inaugural DGEPE',
    faq: 'by Asha Ayurveda | 22 abril, 2024 | Universidad de Nacional de Catamarca | 0 Comments',
    to: '/servicios/educacion/modulo-ayurveda'
  },
  { 
    imagen: '/articulos/universidad/second.webp',
    title: 'Proyecto la naturaleza es sabia',
    text: '¡Descubre el inspirador proyecto "La naturaleza es sabia"! En colaboración con la prestigiosa Facultad de Humanidades de la Universidad Nacional de Catamarca(UNCA), la secretaría de extensión universitaria de la UNCA, el colegio privado María Montessori y destacados...',
    faq: 'by Asha Ayurveda | 24 mayo, 2023 | Educación, Universidad de Nacional de Catamarca | 0 Comments',
    to: '/servicios/educacion/proyecto-naturaleza'
  },
  { 
    imagen: '/articulos/universidad/third.webp',
    title: 'Presentación libro "La naturaleza es sabia, experiencias en el aula"',
    text: '"Con la Universidad Nacional de Catamarca(UNCA) realizamos actividades en donde potenciamos conocimientos en un marco de crecimiento mutuo y respeto. De derecha a izquierda: Gloria Dalma Videla - terapeuta, María Luisa Avalos - profesora de biología, Lucía Medina - CPN...',
    faq: 'by Asha Ayurveda | 24 mayo, 2023 | Educación, Universidad de Nacional de Catamarca | 0 Comments',
    to: '/servicios/educacion/naturaleza-sabia'
  },
];
export const carouselPrensa = [
  { 
    imagen: '/prensaymedios/carousel/first.webp',
    title: 'Radio Universidad',
    text: 'En Radio Universidad, a través del programa Senderos para Crecer, a cargo del Sr Ing. Adolfo Agüero, complementado a distintas temáticas y abordajes de la búsqueda interior, con aportes y perspectivas del Ayurveda y el Yoga.',
    to: '/yoga/radio-universidad'
  },
  { 
    imagen: '/prensaymedios/carousel/second.webp',
    title: 'Radio Nacional',
    text: 'En Radio Nacional a través de las invitaciones de las Sras. Rita Soria en su programa “La hora de la Lagartija” y, por otro lado de la Sra. Sonia Luna, desarrollando temas sobre eventos y jornadas de Ayurveda y Yoga.',
    to: '/yoga/radio-nacional'
  },
  { 
    imagen: '/prensaymedios/carousel/third.webp',
    title: 'Revista Mahat',
    text: 'Para Revista Mahat, en donde se publicó un artículo sobre Ayurveda y otoño, explicando que transitar y respetar el cambio estacional del año es una de las tantas recomendaciones de esta Medicina Milenaria. Ayurveda es una Ciencia reconocida por la OMS como una de las...',
    to: '/yoga/revista-mahat'
  },
  { 
    imagen: '/prensaymedios/carousel/fourth.webp',
    title: 'Radio Valle viejo',
    text: 'En Radio Valle Viejo a través del programa “Con vos” de Inés Ogas, desarrollando distintos temas de Ayurveda y Yoga de acuerdo a la necesidad de la comunidad.',
    to: '/yoga/radio-valle-viejo'
  },
  { 
    imagen: '/prensaymedios/carousel/fifth.webp',
    title: 'Tv de Catamarca',
    text: 'En Tv de Catamarca presentando Ayurveda y Yoga como Ciencias que orientan en la Alimentación, situación que está a travesada por múltiples factores de la persona, del entorno y de la dinámica cambiante de la vida misma en el planeta.',
    to: '/yoga/tv-catamarca'
  },
];


export const masajes = [
  {
    idtext: "pinda-sveda",
    title: "Masaje Pinda sveda",
    introduction: {
      text: "Sumérgete en la experiencia transformadora de Pinda Sweda, un procedimiento terapéutico clave dentro de los tratamientos de Kerala. Con una combinación única de fomentación, sudoración y masajes suaves, esta técnica utiliza bolos medicinales que contienen una variedad de sustancias beneficiosas, como semillas, arroces y hierbas, adaptadas a tus necesidades específicas. Preparado por profesionales en medicina ayurveda y masajistas capacitados, Pinda Sweda te ofrece una forma holística y rejuvenecedora de tratar diversas afecciones y rejuvenecer tu cuerpo."
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
        question: "¿Cuáles son las indicaciones de Pinda Sweda?",
        answer: "Pinda Sweda se recomienda para una variedad de afecciones, incluyendo distrofias musculares, enfermedades neuromotrices, neurológicas, convulsiones, espondilitis, parálisis, artropatías y para el rejuvenecimiento corporal. Sus propiedades curativas ayudan a aliviar síntomas y mejorar el bienestar general."
      },
      {
        question: "¿A qué edades está indicado el masaje Pinda Sweda?",
        answer: "El masaje Pinda Sweda puede adaptarse a diferentes edades, desde adultos jóvenes hasta personas mayores."
      },
      {
        question: "¿Cómo se realiza el procedimiento de Pinda Sweda?",
        answer: "El procedimiento de Pinda Sweda comienza con una preparación previa del paciente mediante un masaje en la cabeza y el cuerpo con aceite medicado. Luego, se realiza el Taladharana, que consiste en la aplicación de medicamentos en la fontanela anterior. A continuación, se realiza el masaje con los bolos medicinales, donde participan la masajista y los ayudantes de manera armónica. Finalmente, se retira el contenido de los bolos de la piel y se completa con un baño para eliminar los residuos."
      },
      {
        question: "¿Qué necesita el paciente para asistir a una sesión de masaje Pinda Sweda?",
        answer: "Para disfrutar plenamente de tu sesión de masaje Pinda Sweda en Asha Ayurveda, te recomendamos seguir estas indicaciones: Vestimenta: Durante la sesión, te proporcionaremos ropa cómoda y suelta para que te sientas relajado y libre de restricciones. Sin embargo, si prefieres usar tu propia ropa, te recomendamos llevar prendas ligeras y holgadas que sean fáciles de quitar y poner. Accesorios y joyas: Antes de la sesión, te aconsejamos quitarte cualquier joya o accesorio que pueda interferir con el masaje, como collares, pulseras o anillos. De esta manera, podrás disfrutar de una experiencia completamente relajante y segura. Privacidad: Tu privacidad y comodidad son nuestras principales prioridades. Durante el masaje Pinda Sweda, te proporcionaremos una toalla o sábana para cubrir las partes del cuerpo que no están siendo tratadas, garantizando así tu intimidad en todo momento. Preparación previa: Antes de la sesión, evita comer en exceso y asegúrate de llegar con el estómago relativamente vacío. También es recomendable informar a nuestro equipo sobre cualquier condición médica, lesiones o alergias que puedas tener para que podamos adaptar el tratamiento según tus necesidades. En Asha Ayurveda, nos preocupamos por tu comodidad y bienestar en cada aspecto de tu experiencia de masaje Pinda Sweda. Si tienes alguna otra pregunta o inquietud específica antes de tu sesión, no dudes en contactarnos. Estamos aquí para brindarte una experiencia de bienestar inigualable. Nota: Este texto ha sido adaptado para responder a las necesidades de los pacientes en relación con su vestimenta y preparación previa para una sesión de masaje Pinda Sweda en Asha Ayurveda."
      },
      {
        question: "¿Cuáles son las ventajas de Pinda Sweda?",
        answer: "Pinda Sweda ofrece numerosos beneficios para el bienestar. Además de calmar la fatiga, la depresión y la somnolencia, esta terapia tradicional mejora la digestión, realza el brillo de la piel y contrarresta la rigidez articular. También fortalece el cuerpo y produce resultados satisfactorios de manera temprana."
      },
      {
        question: "¿Qué puedo esperar durante una sesión de masaje Pinda Sweda en Asha Ayurveda?",
        answer: "Durante una sesión de masaje Pinda Sweda, nuestra especialista en Ayurvedic Yoga Terapéutico comenzará con una breve consulta para comprender tus necesidades y objetivos de bienestar. A continuación, se te guiará en una serie de suaves masajes y la aplicación de bolos medicinales calientes en áreas específicas de tu cuerpo. Este proceso promoverá la relajación profunda, la liberación de toxinas y la restauración del equilibrio en tu ser.duos."
      }
    ],
    consultation: {
      title: "Sesión Pinda-sveda",
      subtitle: "Reservá tu sesión"
    },
    imgServ: {
      url: "/pageServices/pindaSveda.webp",
    }
  },
  {
    idtext: "sirodhara",
    title: "Sirodhara",
    introduction: {
      text: "En la búsqueda de un equilibrio holístico, Ayurveda ofrece una amplia gama de terapias que se adaptan a las necesidades individuales de cada persona. Una de estas terapias transformadoras es el Shirodhara. Basado en la conciencia de los Doshas o biotipos corporales, esta terapia utiliza un derramamiento continuo de líquidos sobre la frente para ayudarte a encontrar la armonía y el bienestar. Sumérgete en esta experiencia única que combina aceites medicados, masaje corporal específico y un ambiente cuidadosamente creado para brindarte una profunda relajación y rejuvenecimiento.",
      image: "/pageServices/masajes/sirodhara2.webp"
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
        question: "¿Qué es el Shirodhara y cómo funciona?",
        answer: "El Shirodhara es un procedimiento terapéutico en el que se derraman de forma continua aceites medicados, leche o ghee sobre la frente del paciente en posición acostada. Este proceso se realiza desde una altura específica y durante un tiempo determinado, que puede variar según el caso. La terapia se complementa con un masaje corporal específico y es llevada a cabo por profesionales debidamente capacitados, incluyendo uno o dos ayudantes junto con un médico/a."
      },
      {
        question: "¿Cuáles son los efectos principales de la Terapia Shirodhara?",
        answer: "La Terapia Shirodhara ofrece efectos ansiolíticos, adaptogénicos y relajantes sin producir sedación o alteraciones en la conciencia. Además, mejora la agitación psicomotriz y promueve la claridad mental, brindándote una sensación de calma y bienestar integral."
      },
      {
        question: "¿Cuáles son los beneficios del Shirodhara?",
        answer: "El Shirodhara es ideal para tratar una amplia gama de desórdenes del sistema nervioso, como cefaleas, ansiedad, enfermedades neurológicas y trastornos de la piel. Además, también se ha demostrado eficaz en la reducción de la agitación psicomotriz, mejorando la claridad mental y promoviendo un estado de relajación profunda sin producir sedación, hipnosis o alteración de la conciencia."
      },
      {
        question: "¿Recomendaciones antes y después del masaje?",
        answer: "Antes del masaje, se recomienda evitar comidas pesadas y asegurarse de estar bien hidratado/a. Después del masaje, se aconseja descansar y permitir que los beneficios de la terapia se asienten en el cuerpo y la mente. Beber agua para ayudar a eliminar las toxinas liberadas durante el proceso también es recomendado."
      },
      {
        question: "¿En qué casos se aplica el Shirodhara?",
        answer: "El Shirodhara puede formar parte de un tratamiento específico para abordar trastornos específicos o puede ser parte de un Panchakarma, un proceso de desintoxicación y rejuvenecimiento. Si estás buscando alivio del estrés, mejorar la calidad del sueño o simplemente experimentar una profunda relajación, el Shirodhara es una opción ideal para ti."
      },
      {
        question: "¿Para qué edades está recomendado?",
        answer: "El Shirodhara es apto para adultos de todas las edades. Sin embargo, se recomienda consultar con un profesional de Ayurveda para evaluar si es adecuado."
      }
    ],
    consultation: {
      title: "Sesión Sirodhara",
      subtitle: "Reserva tu sesión"
    },
    imgServ: {
      url: "/pageServices/sirodhara.webp",
    }
  },
  {
    idtext: "abhyanga",
    title: "Abhyanga",
    subtitle: "Equilibrio y Armonía a través del Masaje Ayurvédico",
    introduction: {
      text: "Abhyanga es una técnica ancestral de masaje Ayurveda que tiene como objetivo equilibrar los Doshas o biotipos corporales, armonizar las esencias vitales de Prana, Tejas y Ojas, y nutrir la vida. También contribuye a mejorar los Dathus o Tejidos y el Agni o fuego digestivo.",
      introSubtitle: "Mecanismos de Acción:",
      subText: "Durante el masaje Abhyanga, se utilizan aceites herbales que penetran a través de los poros de la piel para alcanzar los tejidos más profundos. Dado que las membranas celulares están compuestas por lipoproteínas, que son una combinación de lípidos, los aceites, al ser lípidos, facilitan su acción. Además, el masaje estimula áreas específicas de la piel, lo que tiene un impacto en la mente. Esto se debe a que la piel y el sistema nervioso central se derivan de la misma placa embrionaria y, por lo tanto, están íntimamente conectados.",
      image: "/pageServices/masajes/Abhyanga2.webp"
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
        question: "¿Hay alguna restricción en cuanto a las comidas antes del masaje?",
        answer: "Es preferible evitar comidas pesadas o abundantes justo antes del masaje. Trata de comer una comida ligera al menos una hora antes para evitar molestias durante el masaje."
      },
      {
        question: "¿Debo informar al terapeuta sobre alguna condición médica o sensibilidad específica?",
        answer: "Sí, es importante informar al terapeuta sobre cualquier condición médica preexistente, lesiones recientes, sensibilidades o alergias antes de comenzar el masaje. Esto permitirá al terapeuta adaptar el tratamiento según tus necesidades y garantizar una experiencia segura y efectiva."
      },
      {
        question: "¿Debo tomar algún cuidado especial después del masaje?",
        answer: "Después del masaje, es recomendable descansar y permitir que los efectos del masaje se asienten en el cuerpo. Evita realizar actividades físicas intensas, exponerte a cambios bruscos de temperatura o tomar duchas calientes inmediatamente después del masaje. Beber agua y mantenerse hidratado es importante para ayudar al cuerpo a eliminar las toxinas liberadas durante el masaje."
      },
      {
        question: "¿Es el masaje Abhyanga doloroso?",
        answer: "No, el masaje Abhyanga no debe ser doloroso. El terapeuta aplica presión y movimientos suaves y fluidos para promover la relajación y el equilibrio. Sin embargo, es importante comunicar al terapeuta cualquier nivel de incomodidad o sensibilidad durante el masaje para que pueda ajustar la presión según tus necesidades."
      },
      {
        question: "¿Puedo ducharme o bañarme después del masaje?",
        answer: "En la mayoría de los casos, es recomendable esperar al menos una hora después del masaje antes de ducharte o bañarte. Esto permite que los aceites o productos utilizados durante el masaje se absorban completamente en la piel y maximicen sus beneficios."
      },
      {
        question: "¿Cuánto tiempo dura una sesión de masaje Abhyanga?",
        answer: "La duración de una sesión de masaje Abhyanga puede variar según tus necesidades y preferencias. Por lo general, puede durar entre 45 minutos y 1 hora. Sin embargo, es posible personalizar la duración según tus requerimientos específicos."
      },
      {
        question: "¿Es necesario informar al terapeuta sobre alguna condición médica o sensibilidad antes de la Terapia Basti?",
        answer: "Sí, es importante informar al terapeuta sobre cualquier condición médica preexistente, alergias o sensibilidades específicas que puedas tener. Esto permitirá al terapeuta adaptar el aceite medicado y el proceso de terapia de acuerdo con tus necesidades y evitar posibles complicaciones."
      },
      {
        question: "¿Con qué frecuencia se recomienda recibir masaje Abhyanga?",
        answer: "La frecuencia de los masajes puede variar según tus necesidades individuales y objetivos de bienestar. Algunas personas encuentran beneficios al recibir masajes regularmente, como una vez por semana o una vez al mes, mientras que otras pueden optar por recibir masajes de forma más ocasional. Escucha a tu cuerpo y habla con tu terapeuta para determinar la frecuencia más adecuada para ti."
      }
    ],
    consultation: {
      title: "Sesión Abhyanga",
      subtitle: "Reserva tu sesión"
    },
    imgServ: {
      url: "/pageServices/masajeAbhyanga.webp",
    }
  },
  {
    idtext: "nasya-karma",
    title: "Nasya",
    subtitle: "Equilibrio y Bienestar para Cabeza, Cuello y Hombros",
    introduction: {
      text: "Nasya es una técnica disponible en Medicina Ayurveda que se utiliza para tratar desequilibrios que afectan la cabeza, el cuello y los hombros. La cabeza es considerada uno de los puntos principales de Prana (energía vital) y también es el centro de los Indriyas (sentidos). Nasya, que significa “a través de la nariz” en sánscrito, consiste en la introducción de medicamentos preparados con hierbas, aceites, decocciones u otras preparaciones específicas para cada caso. También se conoce como Shirovirechana o Shirovireka. En algunos casos, Nasya puede ser realizado por el paciente mismo, ya sea colocando gotas de aceite en ambas fosas nasales o realizando Jala Neti (lavado nasal con un Neti o Lota). En circunstancias más complejas, se requiere la asistencia de un terapeuta y médico capacitados en un entorno adecuado, con conocimientos sobre las indicaciones y contraindicaciones del proceso a tratar. También se puede utilizar como parte de un Panchakarma, un tratamiento integral de desintoxicación y rejuvenecimiento. Descripción según Sushruta: “Nasa hi shiraso dwaram” Este aforismo sánscrito significa que la nariz es la puerta principal hacia el cerebro y, a su vez, hacia nuestra conciencia.",
      introSubtitle: "Mecanismos de Acción:",
      subText: "Las sustancias utilizadas en Nasya penetran por ambas fosas nasales, viajando a través del techo nasal, pasando por la lámina cribosa del etmoides, donde se encuentra el bulbo olfatorio y sus neuronas. Luego, descienden por la rinofaringe y la orofaringe antes de ser expulsadas por la boca. Esto provoca una serie de respuestas químicas y eléctricas que se transmiten rápidamente a los centros superiores del sistema nervioso central para lograr la respuesta adecuada. Es útil para la prevención, el mantenimiento, la reparación y el rejuvenecimiento de la salud, así como para tratar desequilibrios que afectan desde los hombros hacia arriba.",
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
        question: "¿Para qué condiciones se recomienda Nasya?",
        answer: "Nasya se recomienda para una variedad de condiciones que afectan la cabeza, el cuello y los hombros, como dolores de cabeza, congestión nasal, sinusitis, problemas oculares, trastornos del sueño, tensión en el cuello y los hombros, entre otros. Es importante consultar a un terapeuta ayurvédico para determinar si Nasya es adecuado para tu situación específica."
      },
      {
        question: "¿Debo informar al terapeuta sobre alguna condición médica o sensibilidad específica?",
        answer: "Sí, es importante informar al terapeuta sobre cualquier condición médica preexistente, lesiones recientes, sensibilidades o alergias antes de comenzar el masaje. Esto permitirá al terapeuta adaptar el tratamiento según tus necesidades y garantizar una experiencia segura y efectiva."
      },
      {
        question: "¿Existen contraindicaciones o precauciones para Nasya?",
        answer: "Sí, Nasya tiene algunas contraindicaciones y precauciones. No se recomienda para mujeres embarazadas, personas que sufren de hemorragias nasales frecuentes, resfriados severos o infecciones agudas en la nariz, así como para aquellos con ciertas condiciones médicas específicas. Es importante consultar con un terapeuta ayurvédico para evaluar tu situación antes de realizar Nasya."
      },
      {
        question: "¿Puedo ducharme o bañarme después del masaje?",
        answer: "En la mayoría de los casos, es recomendable esperar al menos una hora después del masaje antes de ducharte o bañarte. Esto permite que los aceites o productos utilizados durante el masaje se absorban completamente en la piel y maximicen sus beneficios."
      },
      {
        question: "¿Es necesario informar al terapeuta sobre alguna condición médica o sensibilidad antes de la Terapia Basti?",
        answer: "Sí, es importante informar al terapeuta sobre cualquier condición médica preexistente, alergias o sensibilidades específicas que puedas tener. Esto permitirá al terapeuta adaptar el aceite medicado y el proceso de terapia de acuerdo con tus necesidades y evitar posibles complicaciones."
      },
    ],
    consultation: {
      title: "Masaje Nasya",
      subtitle: "Reserva tu sesión"
    },
    imgServ: {
      url: "/pageServices/nasya-panchkarma.webp"
    }
  },
  {
    idtext: "basti",
    title: "Basti",
    introduction: {
      text: "Terapia Basti: Revitalización y Armonización mediante Aceite Medicado. La Terapia Basti es una antigua técnica ayurvédica que utiliza aceite medicado con hierbas para generar armonía y revitalización en el cuerpo. La palabra “Basti” en sánscrito se traduce como vejiga o recipiente que contiene algo, y en este caso se refiere a la pequeña represa que se forma con una masa para contener el aceite caliente sobre diferentes partes del cuerpo. Esta terapia se aplica en zonas específicas donde se busca equilibrar y estimular el flujo de energía, mejorando diversos procesos que requieren su intervención. Los beneficios de la Terapia Basti son especialmente notables en áreas como la región cervical, conocida como “Manya Basti”, que suele estar sometida a tensiones; la articulación de la rodilla, conocida como “Janu Basti”; la región lumbar, conocida como “Kati o Katu Basti”; los ojos, conocida como “Netra Basti”; y el centro del tórax en la parte anterior, conocido como “Hrd o Hrid o Hridaya Basti”. En ciertas situaciones, combinar la Terapia Basti con el masaje Abhyanga potencia aún más sus beneficios. Las propiedades nutritivas y revitalizadoras del aceite medicado han sido ampliamente demostradas, tanto por la evidencia de su uso ancestral como por los conocimientos actuales que respaldan su efectividad. Si estás buscando una forma natural y efectiva de armonizar y revitalizar tu cuerpo, la Terapia Basti puede ser una excelente opción. Consulta a un terapeuta ayurvédico especializado para obtener más información y descubrir cómo esta antigua técnica puede beneficiarte.",
      image: "/pageServices/masajes/basti3.webp"
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
        question: "¿Cuáles son los beneficios de la Terapia Basti?",
        answer: "La Terapia Basti tiene múltiples beneficios, entre ellos: Armonización y equilibrio del flujo de energía en el cuerpo. Estimulación de procesos corporales que requieren un impulso adicional. Alivio de tensiones y malestares en zonas específicas, como el cuello, las articulaciones y los ojos. Nutrición y revitalización de los tejidos."
      },
      {
        question: "¿Cómo se realiza la Terapia Basti?",
        answer: "En la Terapia Basti, se aplica aceite medicado con hierbas calentado sobre la zona específica del cuerpo que se desea tratar. Este aceite se coloca en una pequeña represa hecha con una masa especial para mantenerlo en su lugar. La duración y la frecuencia del tratamiento pueden variar según las necesidades individuales y las recomendaciones del terapeuta ayurvédico."
      },
      {
        question: "¿Cuánto tiempo lleva ver los resultados de la Terapia Basti?",
        answer: "Los resultados de la Terapia Basti pueden variar según la condición y las necesidades individuales. En algunos casos, los efectos beneficiosos se pueden percibir de inmediato, mientras que en otros puede requerir varias sesiones para experimentar mejoras significativas. Es importante ser consistente con el tratamiento y seguir las pautas recomendadas por el terapeuta ayurvédico."
      },
      {
        question: "¿Es seguro recibir Terapia Basti?",
        answer: "Sí, la Terapia Basti es considerada segura cuando se realiza correctamente por un terapeuta ayurvédico calificado. Sin embargo, es importante informar al terapeuta sobre cualquier condición médica o sensibilidad en particular antes de comenzar el tratamiento. Esto asegurará que se seleccione el tipo de aceite medicado adecuado y se realice la terapia de manera segura y efectiva."
      },
      {
        question: "¿Es la Terapia Basti dolorosa?",
        answer: "No, la Terapia Basti no suele ser dolorosa. El aceite caliente se aplica suavemente sobre la zona y se mantiene en la represa durante un período de tiempo determinado. Algunas personas pueden experimentar una sensación de calor o ligera presión, pero en general, la terapia es relajante y reconfortante."
      },
      {
        question: "¿Existen recomendaciones especiales para después de recibir Terapia Basti?",
        answer: "Después de la Terapia Basti, se recomienda descansar durante un corto período de tiempo para permitir que los aceites medicados se absorban completamente en el cuerpo. Evita realizar actividades vigorosas o exponerte a cambios bruscos de temperatura inmediatamente después de la terapia."
      },
      {
        question: "¿Hay alguna preparación especial que deba hacer antes de recibir Terapia Basti?",
        answer: "Es recomendable llegar a la sesión con el estómago vacío. Evita comer una o dos horas antes de la terapia para facilitar la absorción de los aceites y permitir una experiencia más cómoda."
      },
      {
        question: "¿Existen recomendaciones especiales para después de recibir Terapia Basti?",
        answer: "Después de la Terapia Basti, se recomienda descansar durante un corto período de tiempo para permitir que los aceites medicados se absorban completamente en el cuerpo. Evita realizar actividades vigorosas o exponerte a cambios bruscos de temperatura inmediatamente después de la terapia."
      },
      {
        question: "¿Hay alguna restricción dietética después de la Terapia Basti?",
        answer: "No hay restricciones dietéticas específicas después de la Terapia Basti. Sin embargo, es recomendable optar por comidas ligeras y saludables para ayudar al proceso de digestión y asimilación de los aceites medicados en el cuerpo."
      },
      {
        question: "¿Es necesario informar al terapeuta sobre alguna condición médica o sensibilidad antes de la Terapia Basti?",
        answer: "Sí, es importante informar al terapeuta sobre cualquier condición médica preexistente, alergias o sensibilidades específicas que puedas tener. Esto permitirá al terapeuta adaptar el aceite medicado y el proceso de terapia de acuerdo con tus necesidades y evitar posibles complicaciones."
      },
    ],
    consultation: {
      title: "Terapia Basti",
      subtitle: "Reserva tu sesión"
    },
    imgServ: {
      url: "/pageServices/masajes/basti2.webp"
    }
  },
  {
    idtext: "sarasvati",
    title: "Sarasvati",
    introduction: {
      text: "En los antiguos textos hindúes, se menciona a Sarasvatî, la diosa del conocimiento y la sabiduría. Pero en el Masaje Sarasvati, esta evocación no lleva consigo ninguna connotación religiosa. Más bien, nos sumerge en una técnica ancestral reservada para despertar la verdadera feminidad y el equilibrio interior. En este tratamiento, cada toque es una invitación al bienestar profundo. Inspirado por la diosa que personifica la energía creativa del Universo, el Masaje Sarasvati se centra en armonizar cuerpo y mente a través de maniobras cuidadosas sobre el abdomen y el cuerpo entero. Utilizando aceites y plantas adecuadas para cada Dosha, este masaje va más allá de la relajación física para alcanzar un estado de equilibrio sutil y armonizante.",
      image: "/pageServices/masajes/sarasvati2.webp"
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
        question: "¿Qué tipo de aceites y plantas se utilizan durante el Masaje Sarasvati y cuáles son sus beneficios específicos?",
        answer: "Durante el Masaje Sarasvati, se utilizan aceites y plantas seleccionados cuidadosamente según el Dosha predominante de cada individuo. Estos pueden incluir aceites como el sésamo, el coco o el aceite de almendras, así como plantas medicinales como la cúrcuma, el jengibre o la hierba de trigo. Cada uno de estos ingredientes ofrece beneficios únicos que ayudan a equilibrar el cuerpo y la mente, promoviendo la relajación, la desintoxicación y la armonía interior."
      },
      {
        question: "¿Cuánto tiempo dura una sesión típica de Masaje Sarasvati en Asha Ayurveda?",
        answer: "La duración de una sesión de Masaje Sarasvati puede variar dependiendo de las necesidades individuales del cliente, pero generalmente suele durar entre 60 y 90 minutos para garantizar una experiencia completa y satisfactoria."
      },
      {
        question: "¿A qué edades está indicado el Masaje Sarasvati?",
        answer: "Se recomienda para la adolescencia y en edad adulta."
      },
      {
        question: "¿Qué puedo esperar durante una sesión de masaje Sarasvati en Asha Ayurveda?",
        answer: "Recuperar una sensación armonizante, relajante y suave, tomando conciencia de la eliminación de toxinas y líquidos. Mejorar los niveles de estrés, mejorar el umbral para gestionar emociones. Colaborar en el trabajo de los órganos abdominales."
      },
      {
        question: "Indicaciones y contraindicaciones",
        answer: "El Masaje Sarasvati está especialmente recomendado para aquellos que buscan alivio en procesos que intoxican el hígado, desequilibrios estomacales, tensiones abdominales, ansiedad, dolores menstruales y desequilibrios del aparato reproductor. Sin embargo, hay ciertas condiciones en las que este masaje no es adecuado, como durante el embarazo, estados febriles, inflamaciones estomacales y otros, siempre es recomendable consultar con un profesional en Ayurveda en caso de dudas."
      }
    ],
    consultation: {
      title: "Sarasvati",
      subtitle: "Reserva tu sesión"
    },
    imgServ: {
      url: "/pageServices/masajes/sarasvati.webp"
    }
  },
  {
    idtext: "garshan",
    title: "Garshan",
    introduction: {
      text: "En sánscrito, Garshan significa fricción o frotado. Este antiguo arte del masaje linfático Ayurvédico, también conocido como cepillado seco, es una técnica poderosa que ayuda a liberar toxinas del sistema linfático, ubicado cerca de la piel. Ideal para las mañanas, este masaje puede revivir tu energía y vitalidad, aunque también puede disfrutarse en otros momentos del día. Realizado con guantes específicos o un cepillo corporal, el Masaje Garshan ofrece una fricción vigorosa que estimula la circulación y promueve la salud general del cuerpo y la mente.",
      image: "/pageServices/masajes/garshan2.webp"
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
        question: "Indicaciones y contraindicaciones",
        answer: "El Masaje Garshan es especialmente útil para aquellos que buscan reducir el exceso de Kapha Dosha, mejorar la circulación, combatir la retención de líquidos, y revitalizar el metabolismo. Sin embargo, hay ciertas condiciones en las que este masaje no es apropiado, como piel muy sensible, afecciones cutáneas como psoriasis o eczemas, o heridas abiertas. Siempre es importante consultar con un profesional en Ayurveda antes de comenzar cualquier tratamiento."
      },
      {
        question: "¿Qué necesita el paciente para asistir a una sesión de Masaje Garshan?",
        answer: "Los pacientes deben llevar ropa cómoda y informar al terapeuta sobre cualquier medicación, cirugías previas o tratamientos oncológicos. Además, es fundamental tener una piel sana para recibir el masaje de manera segura y efectiva."
      },
      {
        question: "¿A qué edades está indicado el Masaje Garshan?",
        answer: "El Masaje Garshan está indicado para adultos que deseen mejorar su bienestar físico y mental, revitalizando su cuerpo y promoviendo la salud en general."
      },
      {
        question: "¿Cómo se realiza el procedimiento Garshan?",
        answer: "Durante una sesión de Masaje Garshan, se aplican movimientos vigorosos y circulares en diversas áreas del cuerpo con guantes o cepillos adecuados. Esta fricción estimula los músculos, tonifica la piel y promueve la circulación. El masaje concluye con la aplicación de líquidos específicos según las necesidades individuales de cada cliente."
      },
      {
        question: "Qué puedo esperar durante una sesión de masaje Garshan en Asha Ayurveda",
        answer: "Durante una sesión de Masaje Garshan, puedes esperar mejorar tu sistema inmunológico, acelerar tu metabolismo, mejorar la circulación, exfoliar las células muertas de la piel y reducir el estrés. Este masaje también colabora en la eliminación de desechos celulares y puede ayudar a reducir la apariencia de la celulitis. Sumérgete en esta experiencia rejuvenecedora y experimenta la transformación en Asha Ayurveda."
      },
      {
        question: "Cuánto tiempo lleva notar los beneficios del Masaje Garshan después de una sesión",
        answer: "Los beneficios del Masaje Garshan pueden sentirse de inmediato después de una sesión, ya que la fricción vigorosa estimula la circulación y desencadena una sensación de vitalidad y renovación. Sin embargo, los efectos a largo plazo, como la mejora del sistema inmunológico y la reducción del estrés, pueden acumularse con el tiempo y con sesiones regulares."
      }
    ],
    consultation: {
      title: "Sesión Garshan",
      subtitle: "Reserva tu sesión"
    },
    imgServ: {
      url: "/pageServices/masajes/garshan.webp"
    }
  },
  {
    idtext: "facial-kerala",
    title: "Facial kerala",
    introduction: {
      text: "Nuestra terapia facial Kerala se centra en proporcionar una hidratación adecuada, una reparación profunda y una sensación de confort duradera. Mediante el uso de pequeñas pindas preparadas con sustancias naturales y sumergidas en aceites seleccionados específicamente para cada tratamiento, estimulamos puntos energéticos clave en tu rostro. Este proceso induce una profunda oxigenación de la piel, eliminando toxinas y estimulando su luminosidad natural. Además, nuestros masajes suaves y expertos descontracturan los músculos faciales y del cuello, ayudando a restaurar la firmeza y vitalidad de tu piel.",
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
        question: "¿Para qué tipo de pieles está indicada esta terapia facial?",
        answer: "Nuestra terapia facial Kerala Ayurveda está indicada para todo tipo de pieles, ya que se centra en proporcionar una hidratación profunda y una reparación celular a través de los aceites y sustancias naturales utilizados. Si tu piel está reseca, deshidratada o sensible, notarás sus beneficios desde la primera sesión. Y si tu piel es grasa o combinada, este tratamiento ayudará a restablecer el equilibrio natural, dejándola radiante."
      },
      {
        question: "¿Es doloroso o incómodo?",
        answer: "Nuestros masajes están diseñados para ser muy suaves y relajantes. Usamos pindas de algodón y movimientos lentos y pausados para no causar ningún tipo de incomodidad. De hecho, la mayoría de clientes acaban sintiéndose en un estado de profundo relax al final de la sesión."
      },
      {
        question: "¿Cuáles son los beneficios que puedo esperar tras una sesión?",
        answer: "Después de una sesión de nuestra terapia facial Kerala podrás esperar una piel visiblemente más hidratada, suave y tersa. Además, notarás que los rasgos se ven más descansados y definidos, gracias a que nuestros masajes descontracturan los músculos faciales. A medio-largo plazo, con sesiones regulares, la piel lucirá más uniforme, luminosa y con las líneas de expresión atenuadas."
      },
      {
        question: "¿A quién está dirigida esta terapia?",
        answer: "Nuestra terapia facial Kerala Ayurveda es adecuada para todo tipo de pieles y de personas, independientemente de la edad o el género. Desde los 20 años hasta edades más maduras, tanto mujeres como hombres, notarán sus efectos rejuvenecedores, anti-estrés y de bienestar general. Se trata de un tratamiento perfecto para cuidar de la piel de una forma natural y placentera.Recuperar una sensación armonizante, relajante y suave, tomando conciencia de la eliminación de toxinas y líquidos. Mejorar los niveles de estrés, mejorar el umbral para gestionar emociones. Colaborar en el trabajo de los órganos abdominales."
      },
    ],
    consultation: {
      title: "Facial Kerala",
      subtitle: "Reserva tu sesión"
    },
    imgServ: {
      url: "/pageServices/masajes/facial-kerala.webp"
    }
  }
]

export const yogaArticles = [
  { 
    imagen: '/articulos/carousel/first.webp',
    title: 'Acompañamos y honramos los festejos por el día internacional del yoga 2024',
    text: 'Enviamos nuestros más sinceros saludos y reconocimientos para los festejos por el día Internacional del Yoga este 21 de junio de 2024 que se organizaron en distintos lugares del mundo donde brilló la luz de la práctica y enseñanzas de este conocimiento. Su lema o tema...'
  },
  { 
    imagen: '/articulos/carousel/second.webp',
    title: 'Participación en Consejos Multisectoriales',
    text: 'Centro de día "Pilar de Vida" en 2024 en relación a los festejos por el Día mundial de la Salud, la municipalidad de San Fernando del Valle de Catamarca desde los consejos Multisectoriales organizó una serie de actividades desde el Centro Pilar de Vida para...'
  },
  { 
    imagen: '/articulos/carousel/third.webp',
    title: 'Participación en IX Congreso de Ciudades y Pueblos del interior',
    text: 'Participación en IX Congreso de ciudades y pueblos del interior'
  },
  { 
    imagen: '/articulos/carousel/fourth.webp',
    title: 'II Encuentro de Ayurveda Catamarca 2023',
    text: 'Con mucha alegría compartimos algunos de los aspectos del II Encuentro de Ayurveda en Catamarca durante el mes de Diciembre de 2023. Se desarrolló una hermosa convocatoria entre los distintos profesionales que disertaron y el público que asistió y participó...'
  },
  { 
    imagen: '/articulos/carousel/fifth.webp',
    title: 'Celebrando la unión Cultural y espiritual: Día de la independencia de India en la embajada de Buenos Aires',
    text: 'En un momento de distinguida honorabilidad, nos unimos con gratitud y aprecio a la Embajada de India en Buenos Aires para celebrar el Día de la Independencia de India. Desde Asha Ayurveda, nos sentimos profundamente honrados por la invitación a este evento...'
  },
];