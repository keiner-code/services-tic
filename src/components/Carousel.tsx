"use client";
import { Carousel } from "flowbite-react";
import Image from 'next/image'

export default function Carrousel() {
  return (
    <div className="w-full flex justify-center">
      <Carousel className="h-48 sm:h-[28rem] ">
        <Image
        width={900}
        height={500}
          alt="..."
          src="https://img.freepik.com/foto-gratis/concepto-control-calidad-estandar-m_23-2150041856.jpg?w=826&t=st=1692288973~exp=1692289573~hmac=0d53544467999552d6ec03688aa653ced83b5a975aad73c5c29f6d46602c9f80"
        />
       <Image
        width={900}
        height={500}
          alt="..."
          src="https://img.freepik.com/foto-gratis/hombre-tiro-medio-gafas-vr_23-2149126949.jpg?w=826&t=st=1692289074~exp=1692289674~hmac=f93f6134943ed0ac0fb894cff916a5e4f85d45139062879040d1902fe0c7eca7"
        />
        <Image
        width={900}
        height={500}
          alt="..."
          src="https://img.freepik.com/foto-gratis/concepto-alojamiento-sitios-web-circuitos_23-2149406782.jpg?w=826&t=st=1692289131~exp=1692289731~hmac=cab474ea7437d295441e2bb8877199bc988917c96dec5d210f9b6dcec06a2d02"
        />
        <Image
        width={900}
        height={500}
          alt="..."
          src="https://img.freepik.com/foto-gratis/concepto-control-calidad-estandar-m_23-2150041856.jpg?w=826&t=st=1692288973~exp=1692289573~hmac=0d53544467999552d6ec03688aa653ced83b5a975aad73c5c29f6d46602c9f80"
        />
        <Image
        width={900}
        height={500}
          alt="..."
          src="https://img.freepik.com/foto-gratis/hombre-negocios-utilizar-tableta-digital_53876-108317.jpg?w=900&t=st=1693679312~exp=1693679912~hmac=32626aace3be16d7b991b3057a4c625861cca280081e17aa8d5c56ccf399a462"
        />
      </Carousel>
    </div>
  );
}
