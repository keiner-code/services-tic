"use client"
import { CardHeader,Card, Image, CardFooter, Button } from "@nextui-org/react";

export default function ServiceCard(){
  return(
    <div className="gap-2 grid grid-cols-12 grid-rows-2 px-8 mb-10 w-full">
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Soporte Tecnico</p>
        <h4 className="text-white font-medium text-large">Contamos con personal altamente capacitado</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://img.freepik.com/foto-gratis/joven-ingeniero-haciendo-analisis-programas_1303-20402.jpg?w=740&t=st=1692301353~exp=1692301953~hmac=8768e95959af135b25877d3d28e9db3eb6daff0ff02bb06511a11d89fb2c8f5f"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Desarrollo Web</p>
        <h4 className="text-white font-medium text-large">Contamos con varios desarrolladores</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://img.freepik.com/foto-gratis/imagen-primer-plano-programador-trabajando-su-escritorio-oficina_1098-18707.jpg?w=740&t=st=1692301476~exp=1692302076~hmac=b6257fe497a77eb8a8190b76b5a5b3f7615c69dafc1d7a4dd2fe1103df2ae291"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Asesoria Y Gestión</p>
        <h4 className="text-white font-medium text-large">Altamente capacitados para guiarlo en su emprendimiento</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://img.freepik.com/foto-gratis/gente-negocios-dandose-mano_53876-13391.jpg?w=740&t=st=1692301561~exp=1692302161~hmac=75dff5e56748a8faeb04d4860c1cf6d3cb158249990c107ce2b13d4a88b8eec7"
      />
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Big Data</p>
        <h4 className="text-white font-medium text-2xl">Personal experto en el tema</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="https://img.freepik.com/foto-gratis/hombre-usando-tableta-trabajar-conectarse-otros_23-2149369110.jpg?w=740&t=st=1692301739~exp=1692302339~hmac=77cfe8d2efdee94896009c972c26b68e86a10d7011f26c311e9b6ccc7d43d499"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Proximamente disponible</p>
          
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Mas Info
        </Button>
      </CardFooter>
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Marketing</p>
        <h4 className="text-white/90 font-medium text-xl">Tenemos profesionales en marketing</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://img.freepik.com/foto-gratis/concepto-marca-solucion-estrategia-gestion-corporativa_53876-167088.jpg?w=740&t=st=1692301863~exp=1692302463~hmac=34b44c15e2b6e29c57c767112455b85dd37905db1ad521645af9b7915a8e76af"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <img
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="https://img.freepik.com/foto-gratis/concepto-marca-solucion-estrategia-gestion-corporativa_53876-167088.jpg?w=740&t=st=1692301863~exp=1692302463~hmac=34b44c15e2b6e29c57c767112455b85dd37905db1ad521645af9b7915a8e76af"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Marketing</p>
            <p className="text-tiny text-white/60">Apoyo en el area de marketing</p>
          </div>
        </div>
        <Button radius="full" size="sm">Mas Info</Button>
      </CardFooter>
    </Card>
  </div>
  )
}