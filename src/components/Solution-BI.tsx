"use client";
import Image from "next/image";
import { useState } from "react";

export default function SolutionBi() {
  const data = [
    "Diseño de Tableros",
    "Power BI",
    "Excel",
    "Analitica de datos",
    "Excel Avanzado",
    "Documentacion de data",
    "Data",                                    
    "Seguridad de data",
  ];
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) => (prevIndex < 5 ? prevIndex + 1 : prevIndex));
  };

  const visibleData = data.slice(startIndex, startIndex + 5);

  return (
    <>
      <div className="flex flex-col md:flex-row w-11/12">
        <div className="mr-2">
          <Image
            width={800}
            height={800}
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img-solucion"
            className="w-full md:w-11/12 rounded-xl"
          />
        </div>
        <div>
          <h1 className="text-2xl font-medium mb-2 text-center md:text-start">Buscamos La solucion</h1>
          <div className="mb-2">
            <i className="fa-solid fa-message mr-1 text-sm text-red-600"></i>
            <span className="text-red-600 text-sm">Filtro de Soluciones</span>
          </div>
          <p className="font-thin mb-6">
            la implementación de soluciones de inteligencia de negocios (BI)
            puede variar dependiendo de las necesidades y recursos de una
            empresa. Aquí hay algunas soluciones comunes que se pueden
            implementar:
          </p>
          <p className="font-thin mb-12">
            <strong>Power BI:</strong> Esta herramienta de Microsoft es muy
            popular por su facilidad de uso y potentes capacidades de
            visualización. Permite la conexión con una amplia gama de fuentes de
            datos, creación de informes interactivos y paneles de control
            personalizados.
          </p>
        </div>
      </div>
      <div className=" w-11/12">
        <p className="font-thin mb-12">
          <strong>Tableau:</strong> Ofrece capacidades avanzadas de
          visualización y análisis de datos. Es conocido por su capacidad para
          manejar grandes volúmenes de datos y por su interfaz intuitiva para la
          creación de gráficos y tableros.
        </p>
        <p className="font-thin mb-12">
          <strong>QlikView/Qlik Sense:</strong> Proporciona una plataforma
          sólida para la visualización de datos y análisis. Ofrece capacidades
          de descubrimiento de datos y asociaciones automáticas entre datos que
          permiten explorar relaciones entre diferentes conjuntos de datos.
        </p>
        <p className="font-thin mb-12">
          <strong>MicroStrategy:</strong> Es una plataforma completa de BI que
          abarca la creación de informes, análisis y monitoreo de datos. Ofrece
          una variedad de capacidades analíticas y herramientas de
          visualización.
        </p>
        <p className="font-thin mb-12">
          <strong>Looker:</strong> Se enfoca en la creación de modelos de datos
          sólidos y permite la colaboración en tiempo real en torno a los datos.
          Facilita la construcción de paneles personalizados y la integración
          con diferentes fuentes de datos.
        </p>

        <p className="font-thin mb-12">
          Al elegir una solución de BI, es importante considerar aspectos como
          la facilidad de uso, la capacidad de escalar según las necesidades de
          la empresa, la integración con otras herramientas existentes, la
          seguridad de los datos y el soporte técnico disponible.
        </p>

        <p className="font-thin mb-12">
          La elección de la solución adecuada dependerá de las necesidades
          específicas de tu empresa, el tipo de datos que manejes, la cantidad
          de usuarios y el presupuesto disponible. Es recomendable hacer una
          evaluación detallada de las herramientas disponibles y, en algunos
          casos, probar las soluciones mediante versiones de prueba o pilotos
          antes de tomar una decisión final.
        </p>
        <div className="flex items-center gap-4 justify-center">
          <button onClick={handlePrevClick}>
            <i className="fa-solid fa-left-long p-1 bg-blue-400 rounded-full text-white"></i>
          </button>
          <div className="flex w-[40rem;] gap-8 overflow-auto scrollbar-hide">
            {visibleData.map((item, index) => (
              <p
                key={index}
                className="py-1 px-2 rounded-xl bg-gray-300 whitespace-nowrap"
              >
                {item}
              </p>
            ))}
          </div>
          <button onClick={handleNextClick}>
            <i className="fa-solid fa-right-long p-1 bg-blue-400 rounded-full text-white"></i>
          </button>
        </div>
      </div>
    </>
  );
}
