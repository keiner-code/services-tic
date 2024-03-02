import { Link } from "@nextui-org/react";
import Image from "next/image";
import type { Service } from "@/types";
type Props = {
  service: Service;
};
export default function CardInfoRight({ service }: Props) {
  return (
    <div className="flex flex-col md:flex-row mx-8 bg-blue-300 rounded-lg bg-opacity-20 shadow-lg mb-2">
      <div className=" md:hidden block">
        <Image
          width={600}
          height={600}
          className="rounded-e-lg"
          src={service.image}
          alt={service.name}
          blurDataURL={service.image}
        />
      </div>

      <div className="w-full md:w-3/4">
        <h1 className="text-3xl text-center md:text-start font-semibold text-blue-500 mb-2 ml-5">
          {service.name}
        </h1>
        <p className="text-lg text-center md:text-start font-normal text-gray-500 ml-5">
          {service.description}
        </p>
        <span className="flex flex-col md:flex-row text-center md:text-start  items-center">
          <p className=" text-lg text-gray-500 ml-5">{service.info}</p>
          <Link href="https://api.whatsapp.com/message/HJSWOBC7KST6O1?autoload=1&app_absent=0" target="_blank">
            <i className="fa-brands fa-whatsapp ml-5 text-3xl text-green-500"></i>
          </Link>
        </span>
        <p className="text-lg text-gray-500 ml-5 text-center md:text-start">
          Llamanos Al: <strong>{service.phone}</strong>
        </p>
      </div>
      <div className=" hidden md:block">
        <Image
          width={600}
          height={600}
          className="rounded-e-lg"
          src={service.image}
          alt={service.name}
          blurDataURL={service.image}
        />
      </div>
    </div>
  );
}
