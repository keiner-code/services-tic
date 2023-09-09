import { Service } from "@/types";
import { Link } from "@nextui-org/react";

type Props ={
  service: Service
}

export default function HomeService({service}: Props) {
  return (
    <div className="float-left shadow-lg m-2 w-72 rounded-lg bg-blue-300 bg-opacity-30 flex flex-col items-center">
        <i className={`${service.icon} text-5xl py-10 text-[#142f80]`}></i>  
        <h1 className="text-lg font-medium text-gray-400 mb-2">{service.name}</h1>  
        <p className="text-center text-gray-600 px-4">{service.description}</p>
        <Link href="/services" className="mb-4 mt-2">Mas Informacion</Link>
    </div>
  );
}
