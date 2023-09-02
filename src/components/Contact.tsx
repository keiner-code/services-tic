import { Button, Input, Textarea } from "@nextui-org/react";

export default function Contact() {
  return (
    <div className="w-full px-12 flex">
      <div className="w-3/4 float-left ">
        <div className="float-left bg-blue-100 p-4 rounded-lg shadow-lg w-72 m-4">
          <i className="fa-solid fa-location-dot text-5xl text-center w-full text-teal-400"></i>
          <h1 className="font-semibold text-center mt-4">
            NUESTRA OFICINA PRINCIPAL
          </h1>
          <p className="mt-3 text-center text-gray-500">
            Calle 10C-23 # 94 Barrio Valle
          </p>
          <p className="text-center text-gray-500">Barranquilla-Colombia</p>
        </div>

        <div className="float-left bg-blue-100 p-4 rounded-lg shadow-lg w-72 m-4">
          <i className="fa-solid fa-phone text-5xl text-center w-full text-teal-400"></i>
          <h1 className="font-semibold text-center mt-4">NÚMERO DE TÉLEFONO</h1>
          <p className="mt-3 text-center text-gray-500">Celular: 30294738</p>
          <p className="text-center text-gray-500">Fijo: 3085743</p>
        </div>

        <div className="float-left bg-blue-100 p-4 rounded-lg shadow-lg w-72 m-4">
          <i className="fa-solid fa-fax text-5xl text-center w-full text-teal-400"></i>
          <h1 className="font-semibold text-center mt-4">FAX</h1>
          <p className="mt-3 text-center text-gray-500">1-234-654-3563</p>
        </div>

        <div className="float-left bg-blue-100 p-4 rounded-lg shadow-lg w-72 m-4">
          <i className="fa-solid fa-envelopes-bulk text-5xl text-center w-full text-teal-400"></i>
          <h1 className="font-semibold text-center mt-4">CORREO ELECTRONICO</h1>
          <p className="mt-3 text-center text-gray-500">serviciosytic@gmail.com</p>
        </div>
      </div>

      <div className="w-2/4 bg-blue-100 mt-4 rounded-md shadow-lg mb-4">
        <h1 className="text-center text-3xl font-semibold text-blue-400 mt-3 mb-4">
          Contáctenos
        </h1>
        <form action="" method="post">
          <div className="flex w-full gap-4 flex-col px-2">
            <input
              type="text"
              placeholder="Ingrese su nombre"
              className="border-none outline-none rounded-lg"
            />
            <input type="email" placeholder="Ingrese su correo" className="border-none outline-none rounded-lg" />
            <textarea
              placeholder="Escribanos su comentario"
              className="max-w-lg border-none rounded-lg"
            />
            <Button color="primary">Enviar</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
