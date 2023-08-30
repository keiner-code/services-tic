"use client";
import {Image, Link } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const route = useRouter();

  const handlerSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
      const res = await signIn('credentials',{
        email: formData.get('email'),
        password: formData.get('password'),
        redirect: false
      });

      if(res?.error) return console.log("error");
      if(res?.ok) return route.push("/")

  }


  return (
    <div className="flex justify-center py-14 bg-gray-100 h-screen">
      <div className="w-3/12 absolute bg-zinc-200 rounded-3xl border-2 border-blue-200">
        <div className="flex justify-center my-4">
          <Image
            className="w-24"
            src="https://img.freepik.com/psd-premium/avatar-personaje-dibujos-animados-masculino-3d-aislado-renderizado-3d_460336-1490.jpg?w=740"
            alt="avatar-login"
          />
        </div>

        <div className="px-2">
          <form onSubmit={handlerSubmit}>
            <div className="flex flex-col gap-4">
              <div className="w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
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
                <button className="bg-blue-600 p-2 rounded-lg text-white text-sm">Iniciar Sesion</button>  
                </div>
              </div>
            </div>
          </form>
          <div className="flex justify-between px-2 mb-8">
            <Link href="" >Registrarse</Link>
            <Link href="" >Regresar</Link>
          </div>
        </div>


      </div>
    </div>
  );
}
