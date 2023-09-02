import { FormEvent } from "react";
import {useCreateContactMutation} from '@/services/contactApi'
import { Contact } from "@/types";
import { ResultSetHeader } from 'mysql2/promise';

export default function Contact() {
  const [createContact,{isLoading, isError, error}] = useCreateContactMutation()

  /* const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const newContact = await createContact({
      name: data.get('name'),
      identification: data.get('identification'),
      phone: data.get('phone'),
      email: data.get('email'),
      description: data.get('description'),
    });
  }; */
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
  
    const name = data.get('name')?.toString() || "";
    const identification = data.get('identification')?.toString() || "";
    const phone = data.get('phone')?.toString() || "";
    const email = data.get('email')?.toString() || "";
    const description = data.get('description')?.toString() || "";
  
    try {
      const newContact = await createContact({
        name,
        identification,
        phone,
        email,
        description,
      });
      console.log(newContact);
    } catch (error) {
      console.error('Error al crear el contacto:', error);
    }
  };
  
  
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
          <p className="text-center text-gray-500">1-234-654-3563</p>
        </div>

        <div className="float-left bg-blue-100 p-4 rounded-lg shadow-lg w-72 m-4">
          <i className="fa-solid fa-envelopes-bulk text-5xl text-center w-full text-teal-400"></i>
          <h1 className="font-semibold text-center mt-4">CORREO ELECTRONICO</h1>
          <p className="mt-3 text-center text-gray-500">hello@gmail.com</p>
          <p className="text-center text-gray-500">hello@gmail.com</p>
        </div>
      </div>

      <div className="w-2/4 bg-blue-100 mt-4 rounded-md shadow-lg mb-4">
        <h1 className="text-center text-3xl font-semibold text-blue-400 mt-3 mb-4">
          Contáctenos
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex w-full gap-4 flex-col px-2">
            <input
              type="text"
              placeholder="Ingrese su nombre"
              className="border-none outline-none rounded-lg"
              name="name"
            />
            <input
              type="number"
              placeholder="Ingrese Su Identificacion"
              className="border-none outline-none rounded-lg"
              name="identification"
            />
            <input
              type="number"
              placeholder="Ingrese su telefono"
              className="border-none outline-none rounded-lg"
              name="phone"
            />
            <input
              type="email"
              name="email"
              placeholder="Ingrese su correo"
              className="border-none outline-none rounded-lg"
            />
            <textarea
              name="description"
              placeholder="Escribanos su comentario"
              className="max-w-lg border-none rounded-lg"
            />
            <button className="mb-2 bg-blue-600 py-2 rounded-lg text-white" color="primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
