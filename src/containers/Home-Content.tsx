"use client"
import Carousel from "@/components/Carousel";
import ProductCard from "@/components/Product-Card";
import ServiceCard from "@/components/Services-Card";
import { useGetAllProductsQuery } from "@/services/productApi";

export default function HomeContent() {
  const {isLoading, isFetching, data, error} = useGetAllProductsQuery(null);


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
      <div className="text-center my-10 w-10/12 h-28 md:h-14 pt-2 font-medium text-blue-500 rounded-md text-2xl">
        Nuestros Servicios
      </div>
      <ServiceCard />
    </div>
  );
}
