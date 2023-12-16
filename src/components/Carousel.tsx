"use client";
import { Carousel } from "flowbite-react";
import Image from 'next/image'

export default function Carrousel() {
  return (
    <div className="w-full flex justify-center">
      <Carousel className="h-48 sm:h-[28rem]">
        <Image
        width={700}
        height={500}
          alt="..."
          src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
       <Image
        width={700}
        height={500}
          alt="..."
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Image
        width={700}
        height={500}
          alt="..."
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Image
        width={700}
        height={500}
          alt="..."
          src="https://img.freepik.com/foto-gratis/concepto-control-calidad-estandar-m_23-2150041856.jpg?w=826&t=st=1692288973~exp=1692289573~hmac=0d53544467999552d6ec03688aa653ced83b5a975aad73c5c29f6d46602c9f80"
        />
        <Image
        width={700}
        height={500}
          alt="..."
          src="https://img.freepik.com/foto-gratis/hombre-negocios-utilizar-tableta-digital_53876-108317.jpg?w=900&t=st=1693679312~exp=1693679912~hmac=32626aace3be16d7b991b3057a4c625861cca280081e17aa8d5c56ccf399a462"
        />
      </Carousel>
    </div>
  );
}
