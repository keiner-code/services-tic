import { Link } from "@nextui-org/react";
import type { Service } from "@/types";
type Props = {
  service: Service;
};
export default function CardInfoRight({ service }: Props) {
  return (
    <div className="flex mx-8 bg-blue-300 rounded-lg bg-opacity-20 shadow-lg mb-2">
      <div className="w-3/4">
        <h1 className="text-3xl font-semibold text-blue-500 mb-2 ml-5">
          {service.name}
        </h1>
        <p className="text-lg  font-normal text-gray-500 ml-5">
          {service.description}
        </p>
        <span className="flex items-center">
          <p className=" text-lg text-gray-500 ml-5">
           {service.info}
          </p>
          <Link href="#">
            <i className="fa-brands fa-whatsapp ml-3 text-3xl text-green-500"></i>
          </Link>
        </span>
        <p className="text-lg text-gray-500 ml-5">
          Llamanos Al: <strong>{service.phone}</strong>
        </p>
      </div>
      <div className="">
        <img
          className="rounded-e-lg"
          src={service.image}
          alt={service.name}
        />
      </div>
    </div>
  );
}
