"use client"
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import type { ResultSetHeader} from "@/types";
import  User from "@/types";
import { useRouter } from "next/navigation";
import {useCreateUserMutation} from '@/services/usersApi';
import CardMessage from "@/components/Card-Message";

export default function Register(){
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [createUser,{isLoading, isError, error}] = useCreateUserMutation();
    const route = useRouter();
    const [message, setMessage] = useState<boolean>(false);

  const handlerSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const user: User = {
       name: data.get('name')?.toString() || "",
       identification: data.get('identification')?.toString() || "",
       image: "https://img.freepik.com/psd-premium/avatar-personaje-dibujos-animados-masculino-3d-aislado-renderizado-3d_460336-1490.jpg?w=740",
       rol: "Gestion",
       email: data.get('email')?.toString() || "",
       password: data.get('password')?.toString() || "",
       state: "Activo"
    }
    try {
      const response: ResultSetHeader | any = await createUser(user);
      if(response.data.affectedRows){
        setMessage(true);
        route.push("/login")
      }
      
    } catch (error) {
      console.error('Error al crear el contacto:', error);
    }
  };
  useEffect(()=>{
    setInterval(()=>setMessage(false),3000)
  },[message])
  return(
    <div className="flex justify-center py-14 bg-gray-100 h-screen">
      <div className="w-11/12 md:w-3/12 absolute bg-zinc-200 rounded-3xl border-2 border-blue-200">
        <div className="flex justify-center mb-4 mt-8">
          <Image
            className="w-24"
            src="https://img.freepik.com/psd-premium/avatar-personaje-dibujos-animados-masculino-3d-aislado-renderizado-3d_460336-1490.jpg?w=740"
            alt="avatar-login"
          />
          {/* <i className="fa-regular fa-user text-7xl border border-gray-400 p-5 rounded-full"></i> */}
        </div>

        <div className="px-2">
        {message && <CardMessage />}
          <form onSubmit={handlerSubmit}>
            <div className="flex flex-col gap-4">
              <div className="w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">

              <div className=" bg-white rounded-lg flex items-center my-6">
                  <i className="fa-regular fa-user text-2xl text-default-400 pointer-events-none flex-shrink-0 ml-2"></i>
                  <input
                    className="w-11/12 rounded-lg focus:border-none focus:outline-none border-none"
                    type="text"
                    placeholder="Ingrese Su Nombre"
                    name="name"
                  />
                </div>
                
                <div className=" bg-white rounded-lg flex items-center my-6">
                  <i className="fa-regular fa-address-card text-2xl text-default-400 pointer-events-none flex-shrink-0 ml-2"></i>
                  <input
                    className="w-11/12 rounded-lg focus:border-none focus:outline-none border-none"
                    type="text"
                    placeholder="Ingrese Su Cedula"
                    name="identification"
                  />
                </div>

                <div className=" bg-white rounded-lg flex items-center my-6">
                  <i className="fa-regular fa-envelope text-2xl text-default-400 pointer-events-none flex-shrink-0 ml-2"></i>
                  <input
                    className="w-11/12 rounded-lg focus:border-none focus:outline-none border-none"
                    type="email"
                    placeholder="Ingrese Su Correo"
                    name="email"
                  />
                </div>

                <div className="bg-white rounded-lg flex items-center my-6">
                  <button
                    className="focus:outline-none ml-2"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <i className="fa-regular fa-eye-slash text-xl text-default-400 pointer-events-none"></i>
                    ) : (
                      <i className="fa-regular fa-eye text-xl text-default-400 pointer-events-none"></i>
                    )}
                  </button>
                  <input
                    placeholder="Ingrese Su Contraseña"
                    type={isVisible ? "text" : "password"}
                    className="border-none w-11/12 outline-0 rounded-lg"
                    name="password"
                  />
                </div>

                <div className="flex justify-center my-8">
                <button className="bg-blue-600 p-2 rounded-lg text-white text-sm">Registrarse</button>  
                </div>
              </div>
            </div>
          </form>
          <div className="flex justify-between px-2 mb-8">
            <Link href="/login">Login</Link>
            <Link href="/" >Regresar</Link>
          </div>
        </div>


      </div>
    </div>
  )
}