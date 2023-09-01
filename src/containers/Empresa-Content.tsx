import Carrousel from '@/components/Carousel';
import MissionVision from '@/components/Mission-Vision';
import WhoWeAre from '@/components/Who-We-Are';
import React from 'react';

export default function EmpresaContent() {
  return (
    <div className='w-full flex flex-col items-center'>
       <Carrousel />
      <div className="text-center my-10 border-b h-28 md:h-14 pt-2 font-medium text-blue-500 rounded-md shadow-xl shadow-blue-100 border--blue-100 text-2xl">
        Trabaja Con Nosotros !No Te Arrepentiras¡
      </div>
      <WhoWeAre />

      <div className="text-center my-10 border-b h-28 md:h-14 pt-2 font-medium text-blue-500 rounded-md shadow-xl shadow-blue-100 border--blue-100 text-2xl">
        Nuestros Pilares
      </div>
      <MissionVision />
    </div>
  );
}
