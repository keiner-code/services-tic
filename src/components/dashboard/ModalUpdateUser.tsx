"use client"
import { RootState } from "@/app/store";
import { showAlert, showModalUser } from "@/features/state/stateSlice";
import { useUpdateUserMutation } from "@/services/usersApi";
import {User} from "../../types";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ModalUpdateUser() {
  const state = useSelector((value: RootState) => value.state.userUpdate);
  const dispatch = useDispatch();
  const [updateUser] = useUpdateUserMutation();
  const [input, setInput] = useState<User>({
    user_id: state.user_id,
    name: state.name,
    identification: state.identification,
    image: state.image,
    rol: state.rol,
    email: state.email,
    password: state.password,
    state: state.state,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    let isActive: boolean | undefined = undefined;

    if (value == "Activo") {
      isActive = true;
    }
    if (value == "Inactivo") {
      isActive = false;
    }

    setInput((prevInput) => ({
      ...prevInput,
      [name]: isActive == undefined ? value : isActive,
    }));
  };
  const handlerUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUser(input)
      .then(() => dispatch(showModalUser()))
      .catch((error) => {
        dispatch(
          showAlert({
            bg: "bg-red-500",
            text: "Error al actualizar el usuario",
            showAlert: true,
          })
        );
        new Error(error);
      });
  };

  return (
    <div className="fixed bg-slate-100 w-1/4 p-2 rounded-lg border border-slate-200 shadow-2xl left-1/3 z-10">
      <button
        onClick={() => dispatch(showModalUser())}
        className="absolute right-3 text-gray-400 font-medium"
      >
        X
      </button>
      <h1 className="text-center text-xl font-medium">Editar Usuario</h1>

      <form onSubmit={handlerUpdate}>
        <div className="py-1">
          <label htmlFor="name">Nombre</label>
          <input
            value={input.name || ""}
            name="name"
            className="w-full h-8 border rounded-md outline-none bg-transparent"
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div className="py-1">
          <label htmlFor="cedula">Cedula</label>
          <input
            value={input.identification || ""}
            className="w-full h-8 border rounded-md outline-none bg-transparent"
            type="text"
            name="identification"
            onChange={handleInputChange}
          />
        </div>
        <div className="py-1">
          <label htmlFor="imagen">Imagen</label>
          <input
            value={input.image || ""}
            className="w-full h-8 border rounded-md outline-none bg-transparent"
            type="text"
            name="imagen"
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <label htmlFor="rol">Rol</label>
          <select
            className="w-full bg-transparent rounded-md"
            name="rol"
            value={input.rol || ""}
            onChange={handleInputChange}
          >
            <option className="h-8" value="">
              Selecione un rol
            </option>
            <option className="h-8" value="Gestion">
              Gestion
            </option>
            <option className="h-8" value="Soporte">
              Soporte
            </option>
            <option className="h-8" value="Admin">Administrador</option>
          </select>
        </div>
        <div className="py-1">
          <label htmlFor="email">Email</label>
          <input
            className="w-full h-8 border rounded-md outline-none bg-transparent"
            type="email"
            name="email"
            value={input.email || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="py-1">
          <label htmlFor="password">Contraseña</label>
          <input
            className="w-full h-8 border rounded-md outline-none bg-transparent"
            name="password"
            type="password"
            value={input.password || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="py-1">
          <label htmlFor="estate">Estado</label>
          <select
            name="state"
            value={input.state ? "Activo" : "Inactivo" || ""}
            onChange={handleInputChange}
            className="w-full bg-transparent rounded-md"
          >
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>
        <div className="flex gap-3 justify-end py-2">
          <button className="bg-green-400 py-1 px-2 rounded-lg text-white">
            Actualizar
          </button>
          <button
            className="bg-gray-400 py-1 px-2 rounded-lg text-white"
            onClick={() => dispatch(showModalUser())}
          >
            Cerrar
          </button>
        </div>
      </form>
    </div>
  );
}
