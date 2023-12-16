import Image from "next/image";

export default function TriningBI() {
  return (
    <div className="flex justify-center w-full mb-4">
      <div className="w-11/12 flex flex-col md:flex-row">
        <div>
          <h1 className="text-3xl font-semibold mb-4 text-center md:text-start">
            Capacitaciones en Power BI
          </h1>
          <p className="w-full md:w-11/12 text-lg text-justify md:text-start">
          Power BI es una herramienta poderosa para la visualización de datos y el análisis empresarial. Al aprender Power BI, es útil comenzar con los conceptos básicos, como la importación de datos, la creación de visualizaciones simples y la construcción de paneles de control. A medida que te familiarices con la herramienta, podrás explorar funciones más avanzadas, como la manipulación de datos, el modelado y la integración con otras herramientas de Microsoft, como Excel.
          </p>
        </div>
        <Image
        width={400}
        height={400}
          className="w-full md:w-1/3 rounded-lg"
          src="https://img.freepik.com/foto-gratis/personas-que-participan-eventos-negocios_23-2149346666.jpg?w=740&t=st=1701375320~exp=1701375920~hmac=7e7912f6895766e433ba21c787178832ccd3f991e083e51be6d72619c8d7fe1e"
          alt="img-capacitacion"
        />
      </div>
    </div>
  );
}
