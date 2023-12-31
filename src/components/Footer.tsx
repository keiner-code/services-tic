import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-blue-900 text-white flex flex-col items-center">

      <div className="flex flex-col md:flex-row w-10/12 mt-4">

        <div className="w-full md:w-1/3">
          <h1 className="text-lg text-gray-400 text-center md:text-start">Informacion Sobre Nuestra Compañia</h1>
          <p className="text-sm w-full md:w-11/12 mt-2 text-center md:text-start">
            Somos una empresa Colombiana, que brinda
            eficientes servicios, desarrollamos sistemas de
            información, asesorías y consultorías, contribuyendo
            al mejoramiento continuo, alta calidad y
            competitividad de nuestros aliados.
          </p>
        </div>

        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          <h1 className="text-lg text-gray-400 ml-8 text-center md:text-start" >Nuestras Redes Sociales</h1>
          <div className="ml-5 text-sm mt-5 text-center md:text-start">
          <Link href='https://www.facebook.com/SeviciosyTic/?_rdc=1&_rdr' target="_blank"><i className="fa-brands fa-facebook ml-3 text-3xl text-blue-500"></i></Link>
          <Link href='https://api.whatsapp.com/message/HJSWOBC7KST6O1?autoload=1&app_absent=0' target="_blank"><i className="fa-brands fa-whatsapp ml-3 text-3xl text-green-500"></i></Link>
          <Link href='https://www.instagram.com/serviciosytic/' target="_blank"><i className="fa-brands fa-instagram ml-3 text-3xl text-red-500"></i></Link>
          <Link href='https://www.youtube.com/@serviciosytic8547' target="_blank"><i className="fa-brands fa-youtube ml-3 text-3xl text-red-500"></i></Link>
          </div>
        </div>

        <div className="w-full md:w-1/3 text-center md:text-start mt-4 md:mt-0">
          <h1 className="text-lg text-gray-400 mb-3">Informacion De Contacto</h1>
          <p className="ml-4 text-xs"><i className="mr-1 mt-2 fa-solid fa-house text-sm"></i> SERVICIOS Y TIC</p>
          <p className="ml-4 text-xs"><i className="mr-1 mt-2 fa-solid fa-mobile text-sm"></i> 3058564125</p>
          <p className="ml-4 text-xs"><i className="mr-1 mt-2 fa-solid fa-envelope text-sm"></i> serviciosytic@gmail.com</p>
        </div>
        
      </div>

      <div className="border-t-1 border-gray-600 flex justify-between text-xs w-10/12 mt-5 mb-2 pt-1 text-gray-400">
        <div>Todos los derechos reservados | Copyright 2023 &copy;</div>
        <div className="flex text-xs">
          <li className="list-none mx-2">Informacion de La Compañia</li>|
          <li className="list-none mx-2" >Politica de Privacidad</li>|
          <li className="list-none mx-2" >Terminos Y Condiciones</li>
        </div>
      </div>

    </div>
  );
}
