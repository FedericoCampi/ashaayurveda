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
      { name: 'Educación', href: '/servicios/educacion' },
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
    name: 'Artículos de interés',
    href: '/articulos',
    subItems: [
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

export const masajesSection = [
  {
    id: 1,
    title: "SHIRODHARA",
    description: "Profunda relajación y equilibrio mental a través del flujo constante de aceite tibio en la frente.",
    image: "/pageServices/sirodhara.webp"
  },
  {
    id: 2,
    title: "MASAJE ABHYANGA",
    description: "Bienestar total con masaje relajante y rejuvenecedor con aceites herbales terapéuticos y técnicas especializadas.",
    image: "/pageServices/masajeAbhyanga.webp"
  },
  {
    id: 3,
    title: "NASYA KARMA",
    description: "Tratamiento Nasya Karma: Despeje y rejuvenecimiento de los senos nasales mediante la aplicación de aceites medicados.",
    image: "/pageServices/nasya-panchkarma.webp"
  },
  {
    id: 4,
    title: "NASYA KARMA",
    description: "Tratamiento Nasya Karma: Despeje y rejuvenecimiento de los senos nasales mediante la aplicación de aceites medicados.",
    image: "/pageServices/nasya-panchkarma.webp"
  },
  {
    id: 5,
    title: "PINDA SVEDA",
    description: "Tratamiento Pinda: Relajación profunda y equilibrio mediante masajes con bolsitas herbales calientes y aromáticas.",
    image: "/pageServices/pindaSveda.webp"
  },
  {
    id: 6,
    title: "BASTI",
    description: "Equilibrio y bienestar a través de la aplicación de aceites medicados en puntos específicos del cuerpo.",
    image: "/pageServices/basti.webp"
  },
  {
    id: 7,
    title: "MASAJE GARSHAN",
    description: "Masaje linfático Ayurvédico que ayuda a remover toxinas del sistema linfático que se encuentra muy cerca de la piel.",
    image: "/pageServices/masajes/garshan.webp"
  },
  {
    id: 8,
    title: "MASAJE SARASVATI",
    description: "Proporciona bienestar mediante unas cuidadosas maniobras sobre el abdomen y luego cuerpo entero para lograr bienestar sutil y armonizante.",
    image: "/pageServices/masajes/sarasvati.webp"
  },
  {
    id: 9,
    title: "FACIAL KERALA",
    description: "También realizamos otras modalidades de Masaje Ayurveda para acompañar distintos procesos que necesitan de la aplicación de algunas de estas Terapias.",
    image: "/pageServices/masajes/sarasvati.webp"
  },
]
export const carouselArticles = [
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
export const carouselUniversidad = [
  { 
    imagen: '/articulos/universidad/first.webp',
    title: 'Módulo Ayurveda en la Diplomatura de Gestión de las Emociones en el Proceso Educativo(DGEPE)',
    text: 'Acto inaugural DGEPE'
  },
  { 
    imagen: '/articulos/universidad/second.webp',
    title: 'Proyecto la naturaleza es sabia',
    text: '¡Descubre el inspirador proyecto "La naturaleza es sabia"! En colaboración con la prestigiosa Facultad de Humanidades de la Universidad Nacional de Catamarca(UNCA), la secretaría de extensión universitaria de la UNCA, el colegio privado María Montessori y destacados...'
  },
  { 
    imagen: '/articulos/universidad/third.webp',
    title: 'Presentación libro "La naturaleza es sabia, experiencias en el aula"',
    text: '"Con la Universidad Nacional de Catamarca(UNCA) realizamos actividades en donde potenciamos conocimientos en un marco de crecimiento mutuo y respeto. De derecha a izquierda: Gloria Dalma Videla - terapeuta, María Luisa Avalos - profesora de biología, Lucía Medina - CPN...'
  },
];
export const carouselPrensa = [
  { 
    imagen: '/prensaymedios/carousel/first.webp',
    title: 'Radio Universidad',
    text: 'En Radio Universidad, a través del programa Senderos para Crecer, a cargo del Sr Ing. Adolfo Agüero, complementado a distintas temáticas y abordajes de la búsqueda interior, con aportes y perspectivas del Ayurveda y el Yoga.'
  },
  { 
    imagen: '/prensaymedios/carousel/second.webp',
    title: 'Radio Nacional',
    text: 'En Radio Nacional a través de las invitaciones de las Sras. Rita Soria en su programa “La hora de la Lagartija” y, por otro lado de la Sra. Sonia Luna, desarrollando temas sobre eventos y jornadas de Ayurveda y Yoga.'
  },
  { 
    imagen: '/prensaymedios/carousel/third.webp',
    title: 'Revista Mahat',
    text: 'Para Revista Mahat, en donde se publicó un artículo sobre Ayurveda y otoño, explicando que transitar y respetar el cambio estacional del año es una de las tantas recomendaciones de esta Medicina Milenaria. Ayurveda es una Ciencia reconocida por la OMS como una de las...'
  },
  { 
    imagen: '/prensaymedios/carousel/fourth.webp',
    title: 'Radio Valle viejo',
    text: 'En Radio Valle Viejo a través del programa “Con vos” de Inés Ogas, desarrollando distintos temas de Ayurveda y Yoga de acuerdo a la necesidad de la comunidad.'
  },
  { 
    imagen: '/prensaymedios/carousel/fifth.webp',
    title: 'Tv de Catamarca',
    text: 'En Tv de Catamarca presentando Ayurveda y Yoga como Ciencias que orientan en la Alimentación, situación que está a travesada por múltiples factores de la persona, del entorno y de la dinámica cambiante de la vida misma en el planeta.'
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
  }
]