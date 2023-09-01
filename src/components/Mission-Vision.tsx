import React from "react";

export default function MissionVision() {
  return (
    <div className="flex px-8">
      <div className="w-1/3 bg-blue-500 bg-opacity-20 p-4 m-4 rounded-lg shadow-lg">
        <h1 className="text-blue-500 text-xl font-semibold">Vision</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quod
          explicabo a eveniet ab, necessitatibus cupiditate vel, accusantium
          molestias libero fuga ullam dicta aspernatur dolorem accusamus. Nobis
          minima quos eius!
        </p>
      </div>

      <div className="w-1/3 bg-blue-500 bg-opacity-20 p-4 m-4 rounded-lg shadow-lg">
        <h1 className="text-blue-500 text-xl font-semibold">Mision</h1>
        <p className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ad
          delectus repellat numquam quis eum enim iure dolores consequatur illo
          dicta adipisci atque nihil sint, reiciendis amet! Distinctio,
          assumenda optio?
        </p>
      </div>

      <div className="w-1/3 bg-blue-500 bg-opacity-20 p-4 m-4 rounded-lg shadow-lg">
        <h1 className="text-blue-500 text-xl font-semibold">Valores</h1>
        <ul className="text-gray-500">
          <li className="list-disc ml-8">Lorem ipsum dolor</li>
          <li className="list-disc ml-8">Lorem ipsum dolor</li>
          <li className="list-disc ml-8">Lorem ipsum dolor</li>
          <li className="list-disc ml-8">Lorem ipsum dolor</li>
          <li className="list-disc ml-8">Lorem ipsum dolor</li>
        </ul>
      </div>
    </div>
  );
}
