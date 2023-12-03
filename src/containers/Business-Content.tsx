import Carrousel from '@/components/Carousel';
import ContentBi from '@/components/Content-BI';
import ServiceBi from '@/components/Services-Bi';
import SolutionBi from '@/components/Solution-BI';
import TriningBI from '@/components/Training-BI';
export default function BusinessContent(){
  return (
    <div className='w-full flex flex-col items-center'>
       <Carrousel />
      <div className="text-center my-10 border-b h-28 md:h-14 pt-2 font-medium text-blue-500 rounded-md shadow-xl shadow-blue-100 border--blue-100 text-2xl">
        Manejo de datos con power bi
      </div>
      <ContentBi />
      <div className="text-center my-10 border-b h-28 md:h-14 pt-2 font-medium text-blue-500 rounded-md shadow-xl shadow-blue-100 border--blue-100 text-2xl">
        Capacitaciones
      </div>
      <TriningBI />
      <div className="text-center my-10 border-b h-28 md:h-14 pt-2 font-medium text-blue-500 rounded-md shadow-xl shadow-blue-100 border--blue-100 text-2xl">
        Soluciones
      </div>
      <SolutionBi />
      <div className="text-center my-10 border-b h-28 md:h-14 pt-2 font-medium text-blue-500 rounded-md shadow-xl shadow-blue-100 border--blue-100 text-2xl">
        Servicios
      </div>
      <ServiceBi />
    </div>
  )
}