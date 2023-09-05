import { Link } from "@nextui-org/react";
import React from "react";
import Image from 'next/image'

export default function HomeEmpresa() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-300 mx-9 rounded-lg mb-10">
      <div className="hidden md:flex items-center justify-center">
        <Image 
        width={900}
        height={900}
          className="w-3/4 rounded-full"
          src="https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg?w=826&t=st=1693442278~exp=1693442878~hmac=dbdbc852bf85383accf4b88f81873e1fb6213de5d55023fcea6f8775363d854b"
          alt="img1"
        />
      </div>
      <div className="mt-5 p-2">
        <h1 className="text-2xl font-semibold text-blue-500 text-center md:text-start">Quienes Somos</h1>
        <p className="text-lg mt-4 text-center md:text-start">
          Somos una empresa Colombiana, que brinda
          eficientes servicios, desarrollamos sistemas de
          información, asesorías y consultorías, contribuyendo
          al mejoramiento continuo, alta calidad y
          competitividad de nuestros aliados.
          
        </p>
        <Link href="/empresa" className="my-4 text-white text-lg bg-teal-500 p-2 rounded-xl text-center">Presione aqui para obtener mas Informacion</Link>
      </div>

      <div className="mt-5 p-2">
        <h1 className="text-2xl font-semibold text-blue-500 text-center md:text-start">Acerca de Nosotros</h1>
        <p className="text-lg mt-4 text-center md:text-start">
          En ServiciosyTic nuestra historia está marcada por la pasión por la tecnología y el compromiso con la excelencia. Desde [Año de Fundación], hemos estado impulsando la transformación digital en [Tu Industria o Especialidad], ayudando a empresas como la tuya a prosperar en un mundo cada vez más impulsado por la tecnología.
        </p>
        <Link href="/empresa" className="my-4 text-white text-lg bg-teal-500 p-2 rounded-xl text-center">Presione aqui para obtener mas Informacion</Link>
        
      </div>
    </div>
  );
}
