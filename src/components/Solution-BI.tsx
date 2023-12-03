"use client";
import { useState } from "react";

export default function SolutionBi() {
  const data = [
    "Data Data6",
    "Data Data1",
    "Data Data2",
    "Analitica de datos",
    "Data Data",
    "Analitica de datos",
    "Data",
    "Data Data",
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
    <div className="flex w-11/12 mb-4">
      <div className="mr-2">
        <img
          src="https://img.freepik.com/foto-gratis/pajaro-colorido-cabeza-verde-alas-naranjas-vuela-frente-flor-colorida_1340-38750.jpg?w=740&t=st=1701302566~exp=1701303166~hmac=0d40093fcae6a21c011df765e2c15f64ec60f834b90344778e37e744665afa11"
          alt="img-solucion"
          className="w-11/12"
        />
      </div>
      <div>
        <h1 className="text-2xl font-medium mb-2">Buscamos La solucion</h1>
        <div className="mb-2">
          <i className="fa-solid fa-message mr-1 text-sm text-red-600"></i>
          <span className="text-red-600 text-sm">Filtro de Soluciones</span>
        </div>
        <p className="font-thin mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi labore
          facere provident ipsa reprehenderit, perspiciatis rem commodi dolorum
          nam veniam nemo, illum quae blanditiis magnam veritatis in obcaecati
          minima neque.voluptates quis beatae facere nulla, inventore ipsam.
          Nesciunt debitis saepe magni, error reiciendis nobis quia.
        </p>
        <p className="font-thin mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          enim fugit accusantium nisi debitis quia
        </p>
        <div className="flex items-center gap-4">
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
    </div>
  );
}
