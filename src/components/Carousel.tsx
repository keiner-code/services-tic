"use client";
import { Carousel } from "flowbite-react";

export default function Carrousel() {
  return (
    <div className="w-full flex justify-center">
      <Carousel className="h-48 sm:h-[28rem] ">
        <img
          alt="..."
          src="https://img.freepik.com/foto-gratis/concepto-control-calidad-estandar-m_23-2150041856.jpg?w=826&t=st=1692288973~exp=1692289573~hmac=0d53544467999552d6ec03688aa653ced83b5a975aad73c5c29f6d46602c9f80"
        />
        <img
          alt="..."
          src="https://img.freepik.com/foto-gratis/hombre-tiro-medio-gafas-vr_23-2149126949.jpg?w=826&t=st=1692289074~exp=1692289674~hmac=f93f6134943ed0ac0fb894cff916a5e4f85d45139062879040d1902fe0c7eca7"
        />
        <img
          alt="..."
          src="https://img.freepik.com/foto-gratis/concepto-alojamiento-sitios-web-circuitos_23-2149406782.jpg?w=826&t=st=1692289131~exp=1692289731~hmac=cab474ea7437d295441e2bb8877199bc988917c96dec5d210f9b6dcec06a2d02"
        />
        <img
          alt="..."
          src="https://img.freepik.com/foto-gratis/concepto-control-calidad-estandar-m_23-2150041856.jpg?w=826&t=st=1692288973~exp=1692289573~hmac=0d53544467999552d6ec03688aa653ced83b5a975aad73c5c29f6d46602c9f80"
        />
        <img
          alt="..."
          src="ttps://img.freepik.com/foto-gratis/hombre-tiro-medio-gafas-vr_23-2149126949.jpg?w=826&t=st=1692289074~exp=1692289674~hmac=f93f6134943ed0ac0fb894cff916a5e4f85d45139062879040d1902fe0c7eca7"
        />
      </Carousel>
    </div>
  );
}
