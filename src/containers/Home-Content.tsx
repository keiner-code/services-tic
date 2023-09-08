"use client";
import Carousel from "@/components/Carousel";
import HomeEmpresa from "@/components/Home-Empresa";
import HomeService from "@/components/Home-Service";
import ProductCard from "@/components/Product-Card";
import ServiceCard from "@/components/Services-Card";
import { useGetAllProductsQuery } from "@/services/productApi";
import { Service } from "@/types";

export default function HomeContent() {
  const { isLoading, isFetching, data, error } = useGetAllProductsQuery(null);

  const service: Service[] = [
    {
      id: 1,
      name: "Desarrollo de Software",
      description:
        "Descubre el poder de la innovación a través del desarrollo de software. En nuestro sitio web, te ofrecemos soluciones a medida para impulsar tu negocio y convertir tus ideas en realidades digitales.",
      info: "Para Conocer Como Prestarte este Servicio Dirigete a nuestro",
      phone: 3058564125,
      image:
        "https://img.freepik.com/foto-gratis/persona-trabajando-html-computadora_23-2150038836.jpg?w=740&t=st=1693615562~exp=1693616162~hmac=8f15b07ef9c705991918a4aab204345e37c0a9dd0a4bda874d1f6dc6572d7f93",
    },
    {
      id: 2,
      name: "Soporte Tecnico Especializado",
      description:
        "Cuando se trata de mantener tus sistemas y tecnología en óptimo funcionamiento, nuestro equipo de Soporte Técnico Especializado es tu aliado confiable y mas econonomico.",
      info: "Para Conocer Como Prestarte este Servicio Dirigete a nuestro",
      phone: 3058564125,
      image:
        "https://img.freepik.com/foto-gratis/joven-averiguando-si-conexion-funciona-tecnico-hispano-conectando-nuevo-disco-duro-computadora-revisando-hardware_662251-157.jpg?w=740&t=st=1693614809~exp=1693615409~hmac=7c9f9928c9e4a586b595173de6b649d9b9d992b9ad0b4cdfb5981e0f80625b3d",
    },
    {
      id: 3,
      name: "Consultoria y Capacitacion",
      description:
        "En nuestro compromiso de ofrecerte soluciones integrales, también brindamos servicios de Consultoría, Asesoría y Capacitación. Nuestro equipo de expertos está aquí para ayudart",
      
      info: "Para Conocer Como Prestarte este Servicio Dirigete a nuestro",
      phone: 3058564125,
      image:
      "https://img.freepik.com/foto-gratis/personas-que-utilizan-dispositivos-digitales-reunion_23-2149085923.jpg?w=740&t=st=1693617846~exp=1693618446~hmac=09e83d6c1759f94e3238943c8d67835169d48abc533421be1f512db7cb6c05ba",
    },
    {
      id: 4,
      name: "Redes y Telecomunicaciones",
      description:
        "Conectividad sin límites: Nuestra sección de Redes y Telecomunicaciones es tu puerta de entrada al mundo de la comunicación en constante evolución. Desde la optimización",
      info: "Para Conocer Como Prestarte este Servicio Dirigete a nuestro",
      phone: 3058564125,
      image:
        "https://img.freepik.com/foto-gratis/fibra-optica-azul-cables-ethernet-portatil_23-2148779309.jpg?w=740&t=st=1693615093~exp=1693615693~hmac=26e75ec9362fa5664dcf7dce2a6746bcb519e203816852f4d704dd2b7d6d9883",
    },
    {
      id: 5,
      name: "Inteligencia de Negocio",
      description:
        "El éxito empresarial se basa en la toma de decisiones informadas, y en nuestra sección de Inteligencia de Negocios, te proporcionamos las herramientas y la experiencia necesarias para desbloquear",
      info: "Para Conocer Como Prestarte este Servicio Dirigete a nuestro",
      phone: 3058564125,
      image:
        "https://img.freepik.com/foto-gratis/hombre-dibujando-bombilla-engranajes_1134-465.jpg?w=740&t=st=1693615661~exp=1693616261~hmac=1ed1a65adb42b4f1494bc7ff980238969fec51fcb3f84d10e08fa12741f6eb14",
    },
  ];

  return (
    <div className="md:w-full flex flex-col items-center">
      <Carousel />
      <div className="text-center my-10 border-b h-28 md:h-14 pt-2 font-medium text-blue-500 rounded-md shadow-xl shadow-blue-100 border--blue-100 text-2xl">
        Comercializamos Productos Tecnologicos
      </div>
      <div className="float-left pl-8 md:ml-5 w-full">
        {data?.map((value) => (
          <ProductCard product={value} key={value.id} />
          ))}
      </div>
      <div className="text-center my-10 border-b h-28 md:h-14 pt-2 font-medium text-blue-500 rounded-md shadow-xl shadow-blue-100 border--blue-100 text-2xl">
         Nuestras Categorias
      </div>
      <ServiceCard />
      <div className="flex flex-col items-center">
        <div className="text-center my-10 border-b h-28 md:h-14 pt-2 font-medium text-blue-500 rounded-md shadow-xl shadow-blue-100 border--blue-100 text-2xl">
          Nuestros Servicios
        </div>
        <div className="pl-10 md:px-8 mb-4 float-left">
          {service.map(item => (
            <HomeService key={item.id} service={item}/>
            ))}
        </div>
        <div className="text-center my-10 border-b h-28 md:h-14 pt-2 font-medium text-blue-500 rounded-md shadow-xl shadow-blue-100 border--blue-100 text-2xl">
            Informacion General de Nuestra Empresa
        </div>
        <HomeEmpresa />
      </div> 
    </div>
  );
}
