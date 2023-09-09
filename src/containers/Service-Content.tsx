"use client"
import CardInfoLeft from "@/components/Card-Info-Left";
import CardInfoRight from "@/components/Card-Info-Right";
import type { Service } from "@/types";
import Carousel from "@/components/Carousel";

export default function ServiceContent() {
  const service: Service[] = [
    {
      id: 1,
      name: "Desarrollo de Software",
      description:
        "Descubre el poder de la innovación a través del desarrollo de software. En nuestro sitio web, te ofrecemos soluciones a medida para impulsar tu negocio y convertir tus ideas en realidades digitales. Nuestro equipo de expertos en programación y diseño está listo para crear aplicaciones y sistemas de vanguardia que te ayudarán a alcanzar tus metas empresariales. Desde aplicaciones móviles intuitivas hasta plataformas web personalizadas, estamos aquí para dar vida a tus visiones. ¡Únete a nosotros en el viaje hacia el éxito digital!",
      info: "Para Conocer Como Prestarte este Servicio Dirigete a nuestro",
      phone: 3058564125,
      icon:"",
      image:
        "https://img.freepik.com/foto-gratis/persona-trabajando-html-computadora_23-2150038836.jpg?w=740&t=st=1693615562~exp=1693616162~hmac=8f15b07ef9c705991918a4aab204345e37c0a9dd0a4bda874d1f6dc6572d7f93",
    },
    {
      id: 2,
      name: "Soporte Tecnico Especializado",
      description:
        "Cuando se trata de mantener tus sistemas y tecnología en óptimo funcionamiento, nuestro equipo de Soporte Técnico Especializado es tu aliado confiable. Estamos comprometidos en brindarte asistencia experta para resolver cualquier desafío tecnológico que puedas enfrentar. Desde la resolución de problemas técnicos hasta la optimización de tus sistemas, estamos a tu disposición en todo momento. Nuestro enfoque es claro: tu tranquilidad y eficiencia. Únete a nosotros y descubre la tranquilidad de contar con un equipo técnico dedicado y altamente capacitado a tu lado.",
      info: "Para Conocer Como Prestarte este Servicio Dirigete a nuestro",
      phone: 3058564125,
      icon:"",
      image:
        "https://img.freepik.com/foto-gratis/joven-averiguando-si-conexion-funciona-tecnico-hispano-conectando-nuevo-disco-duro-computadora-revisando-hardware_662251-157.jpg?w=740&t=st=1693614809~exp=1693615409~hmac=7c9f9928c9e4a586b595173de6b649d9b9d992b9ad0b4cdfb5981e0f80625b3d",
    },
    {
      id: 3,
      name: "Consultoria, Asesoria y Capacitacion",
      description:
        "En nuestro compromiso de ofrecerte soluciones integrales, también brindamos servicios de Consultoría, Asesoría y Capacitación. Nuestro equipo de expertos está aquí para ayudarte a navegar por los desafíos tecnológicos y maximizar el potencial de tu empresa. Desde la planificación estratégica hasta la implementación efectiva, te ofrecemos orientación personalizada para optimizar tus procesos y mejorar tu presencia digital. Además, ofrecemos capacitación especializada para que tu equipo domine las últimas tendencias y herramientas tecnológicas. Juntos, construiremos un camino hacia el éxito sostenible en el mundo digital.",
      
      info: "Para Conocer Como Prestarte este Servicio Dirigete a nuestro",
      phone: 3058564125,
      icon:"",
      image:
      "https://img.freepik.com/foto-gratis/personas-que-utilizan-dispositivos-digitales-reunion_23-2149085923.jpg?w=740&t=st=1693617846~exp=1693618446~hmac=09e83d6c1759f94e3238943c8d67835169d48abc533421be1f512db7cb6c05ba",
    },
    {
      id: 4,
      name: "Redes y Telecomunicaciones",
      description:
        "Conectividad sin límites: Nuestra sección de Redes y Telecomunicaciones es tu puerta de entrada al mundo de la comunicación en constante evolución. Desde la optimización de redes empresariales hasta la implementación de soluciones de telecomunicaciones de vanguardia, estamos aquí para garantizar que tu empresa esté siempre conectada de manera eficiente y segura. Nuestros expertos en redes trabajan incansablemente para crear soluciones a medida que te mantendrán a la vanguardia de la innovación tecnológica. Únete a nosotros y transforma la forma en que te comunicas y colaboras en el mundo digital de hoy.",
      info: "Para Conocer Como Prestarte este Servicio Dirigete a nuestro",
      phone: 3058564125,
      icon:"",
      image:
        "https://img.freepik.com/foto-gratis/fibra-optica-azul-cables-ethernet-portatil_23-2148779309.jpg?w=740&t=st=1693615093~exp=1693615693~hmac=26e75ec9362fa5664dcf7dce2a6746bcb519e203816852f4d704dd2b7d6d9883",
    },
    {
      id: 5,
      name: "Inteligencia de Negocio",
      description:
        "El éxito empresarial se basa en la toma de decisiones informadas, y en nuestra sección de Inteligencia de Negocios, te proporcionamos las herramientas y la experiencia necesarias para desbloquear el potencial oculto de tus datos. Convierte la información en conocimiento y la visión en acción. Nuestros expertos en análisis de datos y soluciones de inteligencia de negocios están listos para ayudarte a descubrir patrones, tendencias y oportunidades que impulsarán tu empresa hacia el futuro. Únete a nosotros y convierte tus datos en un recurso estratégico para tomar decisiones más inteligentes y alcanzar nuevos niveles de éxito empresarial.",
      info: "Para Conocer Como Prestarte este Servicio Dirigete a nuestro",
      phone: 3058564125,
      icon:"",
      image:
        "https://img.freepik.com/foto-gratis/hombre-dibujando-bombilla-engranajes_1134-465.jpg?w=740&t=st=1693615661~exp=1693616261~hmac=1ed1a65adb42b4f1494bc7ff980238969fec51fcb3f84d10e08fa12741f6eb14",
    },
  ];
  
  return (
    <div className="w-full flex flex-col items-center">
      <Carousel />
      <div className="text-center my-10 border-b h-28 md:h-14 pt-2 font-medium text-blue-500 rounded-md shadow-xl shadow-blue-100 border--blue-100 text-2xl">
        Nuestros Servicios
      </div>
      { service.map((value) => (
          <div key={value.id}>
            {value.id % 2 == 0 ? (
              <CardInfoLeft service={value} />
            ) : (
              <CardInfoRight service={value} />
            )}
          </div>
        )) }
    </div>
  );
}
