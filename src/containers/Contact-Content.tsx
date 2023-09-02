"use client"
import Contact from "@/components/Contact";
import SocialNetwords from "@/components/Social-Networds";

export default function ContatContent(){
  return(
    <div className='w-full flex flex-col items-center'>
      <div className="text-center my-10 border-b h-28 md:h-14 pt-2 font-medium text-blue-500 rounded-md shadow-xl shadow-blue-100 border--blue-100 text-2xl">
        Nuestras Redes Sociales
      </div>
      <SocialNetwords />
      <div className="text-center my-10 border-b h-28 md:h-14 pt-2 font-medium text-blue-500 rounded-md shadow-xl shadow-blue-100 border--blue-100 text-2xl">
        Nuestros Diferentes Medios para Contactarnos
      </div>
      <Contact />
    </div>
  )
}