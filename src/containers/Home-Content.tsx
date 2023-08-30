"use client";
import CardInfoLeft from "@/components/Card-Info-Left";
import CardInfoRight from "@/components/Card-Info-Right";
import Carousel from "@/components/Carousel";
import ProductCard from "@/components/Product-Card";
import ServiceCard from "@/components/Services-Card";
import { useGetAllProductsQuery } from "@/services/productApi";
import type { Service } from "@/types";

export default function HomeContent() {
  const { isLoading, isFetching, data, error } = useGetAllProductsQuery(null);

  const service: Service[] = [
    {
      id: 1,
      name: "Desarrollo Web",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veroet dignissimos earum officiis! Corporis, rem reiciendis eligendi estiusto culpa delectus placeat velit reprehenderit deleniti mollitianesciunt, repudiandae accusamus?",
      info: "Para Conocer Como Prestarte este Servicio Dirigete a nuestro",
      phone: 304584754,
      image:
        "https://img.freepik.com/fotos-premium/codigo-programacion-desarrollo-web-o-desarrollo-aplicaciones-diseno-web-computadora-fondo-seo-3d_125322-458.jpg",
    },
    {
      id: 2,
      name: "Soporte Tecnico",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veroet dignissimos earum officiis! Corporis, rem reiciendis eligendi estiusto culpa delectus placeat velit reprehenderit deleniti mollitianesciunt, repudiandae accusamus?",
      info: "Para Conocer Como Prestarte este Servicio Dirigete a nuestro",
      phone: 304584754,
      image:
        "https://blog.hubspot.es/hubfs/media/servicioalclienteadistancia.jpeg",
    },
    {
      id: 3,
      name: "Consultoria, Asesoria y Capacitacion",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veroet dignissimos earum officiis! Corporis, rem reiciendis eligendi estiusto culpa delectus placeat velit reprehenderit deleniti mollitianesciunt, repudiandae accusamus?",
      info: "Para Conocer Como Prestarte este Servicio Dirigete a nuestro",
      phone: 304584754,
      image:
        "https://img.freepik.com/fotos-premium/codigo-programacion-desarrollo-web-o-desarrollo-aplicaciones-diseno-web-computadora-fondo-seo-3d_125322-458.jpg",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <Carousel />
      <div className="text-center my-10 border-b h-28 md:h-14 pt-2 font-medium text-blue-500 rounded-md shadow-xl shadow-blue-100 border--blue-100 text-2xl">
        Aqui Podras comprar los productos que tenemos disponible
      </div>
      <div className="float-left ml-5">
        {data?.map((value) => (
          <ProductCard product={value} key={value.id} />
        ))}
      </div>
      <div className="text-center my-10 border-b h-28 md:h-14 pt-2 font-medium text-blue-500 rounded-md shadow-xl shadow-blue-100 border--blue-100 text-2xl">
        Aqui Podras Ver Nuestras Categorias
      </div>
      <ServiceCard />
      <div className="flex flex-col items-center">
        <div className="text-center my-10 border-b h-28 md:h-14 pt-2 font-medium text-blue-500 rounded-md shadow-xl shadow-blue-100 border--blue-100 text-2xl">
          Aqui Podras Ver La Sesion De Nuestros Servicios
        </div>
        {service.map((value) => (
          <div key={value.id}>
            {value.id % 2 == 0 ? (
              <CardInfoLeft service={value} />
            ) : (
              <CardInfoRight service={value} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
