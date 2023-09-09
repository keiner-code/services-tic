import React from "react";

export default function MissionVision() {
  return (
    <div className="flex px-8 flex-col md:flex-row">

      <div className="w-full md:w-1/3 bg-blue-500 bg-opacity-20 p-4 my-4 md:m-4 rounded-lg shadow-lg">
        <h1 className="text-blue-500 text-xl font-semibold">Mision</h1>
        <p className="text-gray-500">
        Somos una empresa colombiana, que brinda eficiente servicios, desarrollamos sistemas de información, asesorías y consultorías, contribuyendo al mejoramiento continuo, alta calidad y competitividad de nuestros aliados
        </p>
      </div>

      <div className="w-full md:w-1/3 bg-blue-500 bg-opacity-20 p-4 my-4 md:m-4 rounded-lg shadow-lg">
        <h1 className="text-blue-500 text-xl font-semibold">Vision</h1>
        <p className="text-gray-500">
        En el 2025 nos consolidaremos como marca altamente posicionada en el mercado, con amplia experiencia en el sector de las TIC, reconocida por la alta calidad e innovación, contribuyendo en el desarrollo tecnológico y empresarial del mercado nacional.
        </p>
      </div>

      <div className="w-full md:w-1/3 bg-blue-500 bg-opacity-20 p-4 my-4 md:m-4 rounded-lg shadow-lg">
        <h1 className="text-blue-500 text-xl font-semibold">Valores Corporativos</h1>
        <ul className="text-gray-500">
          <li className="list-disc ml-8">Respeto</li>
          <li className="list-disc ml-8">Honestidad</li>
          <li className="list-disc ml-8">Compromiso</li>
          <li className="list-disc ml-8">Responsabilidad</li>
          <li className="list-disc ml-8">Confindencialidad</li>
        </ul>
      </div>
    </div>
  );
}
