import Image  from 'next/image';
import React from 'react';

export default function WhoWeAre() { //quiene somos
  return (
    <div className='mx-8 my-10 flex'>
      <div className='mr-4'>

      <div className='flex flex-col md:flex-row items-center mb-6'>
        <div className='text-center md:text-start mb-2 md:mb-0'>
          <h1 className='text-2xl font-semibold text-blue-500 mb-2'>Quienes Somos</h1>
          <p className='text-lg text-gray-600'>
            Somos una empresa Colombiana, que brinda
            eficientes servicios, desarrollamos sistemas de
            información, asesorías y consultorías, contribuyendo
            al mejoramiento continuo, alta calidad y
            competitividad de nuestros aliados.
            
          </p>

          <p className='text-lg text-gray-600'>
            En el 2025 ServiciosyTic será una empresa líder
            posicionada en el mercado, reconocida por la
            innovación y generación de empleos directos e
            indirectos.
          </p>

        </div>
        <i className="fa-regular fa-clock text-9xl text-blue-400 w-3/4 text-center"></i>
      </div>

      <div className='flex items-center flex-col md:flex-row mb-6'>
      <i className="fa-solid fa-people-group text-9xl text-blue-400 w-3/4 text-center mr-3 hidden"></i>
      <div className='text-center md:text-start mb-2 md:mb-0'>
          <h1 className='text-2xl font-semibold text-blue-500 mb-2'>¿Por Que Elegirnos?</h1>
          <p className='text-lg text-gray-600'>En ServiciosyTic, no solo ofrecemos servicios y soluciones de TIC, sino que ofrecemos una asociación sólida y comprometida para impulsar tu éxito. Únete a nosotros y descubre cómo podemos llevar tu empresa al siguiente nivel en el mundo digital.</p>
          <p className='text-lg text-gray-600'>
          Aquí te ofrecemos algunas razones clave para elegirnos:
          </p>
          <p className='text-lg text-gray-600'>Calidad de el Servicio</p>
          <p className='text-lg text-gray-600'>Seguridad y Confidencialidad de la Informacion</p>
          <p className='text-lg text-gray-600'>Personal Competitivo </p>
          <p className='text-lg text-gray-600'>Eficiencia en el Servicio</p>
        </div>
      </div>

      <div className='flex items-center flex-col md:flex-row'>
        <div className='text-center md:text-start mb-2 md:mb-0'>
          <h1 className='text-2xl font-semibold text-blue-500 mb-2'>Generacion de Valor</h1>
          <p className='text-lg text-gray-600'>En ServiciosyTic, nuestra misión es clara: generamos valor para tu negocio. Nos esforzamos constantemente por ser tu socio estratégico en el mundo de las tecnologías de la información y los servicios empresariales. Aquí tienes algunas formas en las que generamos valor:</p>
          <p className='text-lg text-gray-600'>Soluciones Innovadoras</p>
          <p className='text-lg text-gray-600'>Desarrollo de Soluciones de Software a la medida</p>
          <p className='text-lg text-gray-600'>Distribuimos equipos de tecnología pymes & grandes empresas </p>
          <p className='text-lg text-gray-600'>Realizamos envíos seguros a nivel nacional.</p>
          <p className='text-lg text-gray-600'>Asesorías y capacitaciones</p>
        </div>
        <i className="fa-solid fa-lock text-9xl text-blue-400 w-3/4 text-center"></i>
      </div>
      </div>
      <Image width={300} height={900} className='rounded-lg hidden md:block' src="https://img.freepik.com/foto-gratis/recortar-empresarios-usando-laptop_1098-20091.jpg?w=360&t=st=1693533341~exp=1693533941~hmac=f4984b2fd816d9128e073b10db25f59cc8dbb53f5550333670cb98346dcca1a8" alt="img"/>
    </div>
  );
}
