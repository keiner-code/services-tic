import { Link } from "@nextui-org/react";
import React from "react";

export default function HomeEmpresa() {
  return (
    <div className="flex bg-gray-300 mx-9 rounded-lg mb-10">
      <div className="flex items-center justify-center">
        <img
          className="w-3/4 rounded-full"
          src="https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg?w=826&t=st=1693442278~exp=1693442878~hmac=dbdbc852bf85383accf4b88f81873e1fb6213de5d55023fcea6f8775363d854b"
          alt="img1"
        />
      </div>
      <div className="mt-5 p-2">
        <h1 className="text-2xl font-semibold text-blue-500">Quines Somos</h1>
        <p className="text-lg mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit soluta
          voluptatibus aspernatur modi architecto fugit fuga consectetur ratione
          magnam aut. Reiciendis ipsum a perferendis saepe pariatur ad quis
          dolorem at?
        </p>
        <p className="text-lg mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit soluta
          voluptatibus aspernatur modi architecto fugit fuga consectetur ratione
          magnam aut. 
        </p>
        <Link href="/empresa" className="my-4 text-white text-lg bg-teal-500 p-2 rounded-xl text-center">Precione Si Deseas Conocer Mas Quienes Somos</Link>
      </div>

      <div className="mt-5 p-2">
        <h1 className="text-2xl font-semibold text-blue-500">Acerca De Nosotros</h1>
        <p className="text-lg mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis
          ratione magnam voluptatem. Deserunt obcaecati sapiente reprehenderit
          maxime necessitatibus, corporis deleniti adipisci quo, nisi fuga
          ratione debitis! Maxime, ipsam numquam.
        </p>
        <p className="text-lg mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit soluta
          voluptatibus aspernatur modi architecto fugit fuga consectetur ratione
          magnam aut. 
        </p>
        <Link href="/empresa" className="my-4 text-white text-lg bg-teal-500 p-2 rounded-xl text-center">Precione Si Deseas Conocer Mas Acerca De Nosotros</Link>
        
      </div>
    </div>
  );
}
