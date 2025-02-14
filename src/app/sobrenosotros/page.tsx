import FirstButton from "@/components/ui/firstButton";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <div>
            <div className="bg-black relative">
                <Image
                    width={1000}
                    alt="plasha"
                    height={500}
                    src={"/sobreNosotros/mountain.webp"}
                    className="w-full object-cover h-[400px] opacity-50"
                />
                <p className="absolute inset-0 flex flex-col items-center justify-center text-white text-[40px] text-center">
                    SOBRE NOSOTROS <br />
                    <span className="text-[15px] pt-2 leading-loose">
                        En Asha Ayurveda nuestra pasión es guiarte hacia una vida plena y{" "}
                        <br />
                        equilibrada a través de la sabiduría ancestral del Ayurveda y el
                        Yoga.
                    </span>
                </p>
            </div>
            <div className="w-full flex flex-col items-center justify-start px-6 md:px-0">
                <div className="md:flex items-start justify-start max-w-[1200px] md:p-16 md:space-x-10">
                    <div className="md:w-1/2 h-full">
                        <p className="interlineadoGlobal space-y-6 pt-6 sm:pt-0">
                            Aún recordamos momentos en que el destino nos reunió. Cuando menos
                            lo imaginas, se desencadenan una serie de eventos que movilizan
                            toda la profundidad del ser. En la búsqueda de comprender por qué
                            nos sucedían cosas en nuestra salud, tuvimos la curiosidad de
                            conocer otras perspectivas. Así fue como cada uno de nosotros, por
                            diferentes caminos, llegamos al Ayurveda y al Yoga. Fuimos
                            comprobando cómo estas antiguas ciencias no solo nos ayudaban a
                            mejorar nuestra salud física, sino que también empezaron a
                            mostrarnos cómo los aspectos mentales podían afectar nuestro
                            bienestar corporal. A partir de esto, sentimos que había algo más
                            allá de nuestro cuerpo físico y mental, lo cual nos llevó a
                            aprender sobre la importancia y la potencia de aspectos,
                            prácticas, conceptos y valores universales, descubriendo así la
                            espiritualidad. Nuestros Valores En Asha Ayurveda, nos regimos por
                            un conjunto de valores fundamentales que nos guían en nuestro
                            camino hacia el bienestar y la transformación personal. Estos
                            valores son la base de nuestra filosofía y se reflejan en todo lo
                            que hacemos:
                            <span className="flex pt-4">
                                <CheckCircle className="text-green-500" />
                                <span className="ml-2 font-bold">Paz</span>
                            </span>
                            Buscamos cultivar la paz interior y fomentar un ambiente de
                            armonía en todas nuestras interacciones. Valoramos la tranquilidad
                            y la serenidad como ingredientes esenciales para el crecimiento y
                            la sanación.
                            <span className="flex">
                                <CheckCircle className="text-green-500" />
                                <span className="ml-2 font-bold">Integración</span>
                            </span>
                            Reconocemos la interconexión entre el cuerpo, la mente y el
                            espíritu. Promovemos un enfoque holístico en el que todas las
                            dimensiones del ser se aborden de manera integrada para lograr un
                            equilibrio óptimo.
                            <span className="flex">
                                <CheckCircle className="text-green-500" />
                                <span className="ml-2 font-bold">Acción correcta</span>
                            </span>
                            Nos esforzamos por tomar decisiones y acciones que estén en
                            armonía con nuestros valores y principios éticos. Buscamos actuar
                            de manera responsable y consciente en todos los aspectos de
                            nuestra práctica.
                            <span className="flex">
                                <CheckCircle className="text-green-500" />
                                <span className="ml-2 font-bold">Búsqueda de la verdad</span>
                            </span>
                            Valoramos la búsqueda constante de conocimiento y verdad.
                            Fomentamos el aprendizaje continuo y nos comprometemos a compartir
                            información precisa y relevante sobre Ayurveda, yoga y bienestar
                            en general.
                            <span className="flex">
                                <CheckCircle className="text-green-500" />
                                <span className="ml-2 font-bold">Solidaridad</span>
                            </span>
                            Nos comprometemos a apoyar a nuestros clientes y comunidad en su
                            camino hacia el bienestar. Valoramos la empatía, la compasión y la
                            colaboración, promoviendo un sentido de comunidad y apoyo mutuo.
                        </p>
                    </div>
                    <div className="md:w-1/2 h-full pt-8">
                        <p className="interlineadoGlobal">
                            Poco a poco, comenzamos a construir compromisos desde el corazón,
                            entrelazando intimidades, aprendizajes, experiencias,
                            contratiempos, tristezas y alegrías. De esta manera, nos dimos
                            cuenta de que la felicidad de cada uno podía ser compartida como
                            una sola. Un día, al hablar sobre símbolos, palabras y proyectos,
                            surgió la decisión de materializar todo lo que ya estaba
                            ocurriendo en forma de una entidad: Asha Ayurveda.
                        </p>
                        <div className="flex justify-center">
                            <Image
                                width={1000}
                                alt="pato y rafa"
                                height={500}
                                src={"/sobreNosotros/pato-rafa.webp"}
                                className="w-full max-w-[700px] object-cover h-auto"
                            />
                        </div>

                        <p className="interlineadoGlobal py-8 space-y-4">
                            <span className="flex">
                                <CheckCircle className="text-green-500" />
                                <span className="ml-2 font-bold">Apertura de Consciencia</span>
                            </span>
                            Fomentamos una mentalidad abierta y receptiva, invitando a
                            explorar nuevas perspectivas y prácticas. Estamos comprometidos en
                            adaptarnos y crecer en línea con las necesidades y avances
                            actuales en el campo de la salud y el bienestar.
                            <span className="flex">
                                <CheckCircle className="text-green-500" />
                                <span className="ml-2 font-bold">Calidad</span>
                            </span>
                            Nos esforzamos por ofrecer servicios y productos de la más alta
                            calidad. Nos respaldamos en la experiencia y el conocimiento de
                            nuestro equipo de profesionales, así como en la utilización de
                            ingredientes y técnicas auténticas y de confianza. Estos valores
                            son la esencia de Asha Ayurveda y nos guían en nuestro compromiso
                            de brindarte una experiencia auténtica y transformadora en tu
                            búsqueda de la salud y el bienestar.
                        </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="max-w-[1100px]">
                        <div className="w-full space-y-6">
                            <Image
                                width={1000}
                                alt="flor"
                                height={500}
                                src={"/sobreNosotros/flor.webp"}
                                className="w-full md:max-w-[600px] object-cover h-auto"
                            />
                            <p className="flex flex-col interlineadoGlobal pb-4">
                                <span className="text-green-500 text-[20px]">VISIÓN</span>
                                Nuestra visión en Asha Ayurveda es trascender los límites del
                                Ayurveda y hacerlo una parte integral de la vida cotidiana de
                                las personas. Nos esforzamos por brindar las herramientas
                                necesarias para que cada individuo alcance una vida duradera
                                llena de felicidad y bienestar en todos los aspectos.
                            </p>
                            <a href="servicios" className="">
                                <FirstButton
                                titulo="Ver nuestros servicios"
                                padding="p-2"
                                tamano="text-lg"
                            />
                            </a>
                            

                            <p className="flex flex-col interlineadoGlobal">
                                <span className="text-green-500 text-[20px]">MISIÓN</span>
                                En Asha Ayurveda, nos dedicamos apasionadamente a crear y
                                fomentar escenarios innovadores y diversos en los que el
                                Ayurveda sea una guía transformadora. Nuestra misión es promover
                                el desarrollo personal, el bienestar integral, las relaciones
                                saludables y el cuidado del medio ambiente. Al hacerlo, nos
                                esforzamos por contribuir a la construcción de un mundo mejor,
                                en armonía con la naturaleza y en equilibrio con nosotros mismos
                                y con los demás.
                            </p>
                            <Image
                                width={1000}
                                alt="semillas"
                                height={500}
                                src={"/sobreNosotros/semillas.webp"}
                                className="w-full md:max-w-[600px] object-cover h-auto"
                            />
                        </div>
                        <div className="pb-10 px-8 md:px-0">

                            <div className="space-y-6">
                                <p className="text-green-500 text-[30px] pt-20">Nuestro equipo</p>
                                <div className="md:flex items-center lg:items-start space-y-6 md:space-x-10">
                                    
                                    <Image
                                        width={1000}
                                        alt="pato"
                                        height={500}
                                        src={"/pageServices/patoFoto.webp"}
                                        className="max-w-[300px] object-cover h-auto"
                                    />
                                    <p className="interlineadoGlobal">
                                        <span className="font-bold text-[17px]">Patricia Verónica Ahumada</span>
                                        <br />
                                        <span className="text-green-500">
                                            Instructora Diplomada en Ayurveda y Yoga
                                        </span>
                                        <br />
                                        Profesora de Yoga Ayurvédico egresada de la Escuela de Yoga y Ayurveda de
                                        Argentina, Diplomada en Masaje Ayurveda en distintas técnicas, con Cursos
                                        realizados en Cocina Ayurveda, Psicología Ayurveda, Masaje Abhyanga de la
                                        Fundación de Salud Ayurveda Prema. Diplomada en Gestión de las Emociones
                                        en el Proceso Educativo de la Universidad Nacional de Catamarca. Docente
                                        de Taller de Pranayama y Emoción con aportes desde el Yoga y la Medicina
                                        Ayurveda. Integrante de AMARA (Asociación de Médicos y Asistente de
                                        Ayurveda de la República Argentina). Profesora de Artes Visuales.
                                    </p>
                                </div>

                                {/* Columna derecha */}
                                <div className="md:flex items-center lg:items-start space-y-6 md:space-x-10">
                                    <Image
                                        width={1000}
                                        alt="rafa"
                                        height={500}
                                        src={"/pageServices/doctorRafa.webp"}
                                        className="max-w-[300px] object-cover h-auto"
                                    />
                                    <p className="interlineadoGlobal">
                                        <span className="font-bold text-[17px]">Rafael Gustavo Campi</span>
                                        <br />
                                        <span className="text-green-500">Médico Ayurveda</span>
                                        <br />
                                        Médico cirujano egresado de la Facultad de Ciencias Médicas de la
                                        Universidad Nacional de Córdoba de Argentina, Especialista en
                                        Otorrinolaringología, Magister en Educación Médica. Posgrados en Medicina
                                        Ayurveda (Introducción, Fitoterapia, Sabiduría Védica, Avanzado en
                                        Ayurveda) de la Fundación de Salud Ayurveda Prema. Docente de Medicina
                                        Ayurveda en Diplomatura de Gestión de Las Emociones para el Proceso
                                        Educativo de la Universidad Nacional de Catamarca. Integrante de AMARA
                                        (Asociación de Médicos y Asistente de Ayurveda de la República Argentina).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
};

            export default page;
