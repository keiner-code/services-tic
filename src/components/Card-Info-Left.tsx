import { Link } from "@nextui-org/react";
import type { Service } from "@/types";
import Image from "next/image";
type Props = {
  service: Service
}
export default function CardInfoLeft({service}: Props) {
  return (
      <div className="flex flex-col md:flex-row mx-8 bg-blue-300 rounded-lg bg-opacity-20 shadow-lg mb-10 mt-10">
        <div className="mr-4 ">
          <Image
            width={600}
            height={600}
            className="rounded-s-lg"
            src={service.image}
            alt={service.image}
            blurDataURL={service.image}
          />
        </div>

        <div className="w-full md:w-1/2 md:text-start text-center">
          <h1 className="text-3xl font-semibold text-blue-500 mb-2">
            {service.name}
          </h1>
          <p className="text-lg font-normal text-gray-500 w-full md:text-start text-center">
            {service.description}
          </p>
          <span className="flex items-center flex-col md:flex-row mt-3 md:mt-0">
            <p className=" text-lg text-gray-500">
              {service.info}
            </p>
            <Link href="https://api.whatsapp.com/message/HJSWOBC7KST6O1?autoload=1&app_absent=0" target="_blank">
              <i className="fa-brands fa-whatsapp ml-4 text-3xl text-green-500"></i>
            </Link>
          </span>
          <p className="text-lg text-gray-500 my-3 md:m-0">
            Llamanos Al: <strong>{service.phone}</strong>
          </p>
        </div>
      </div>
  );
}
