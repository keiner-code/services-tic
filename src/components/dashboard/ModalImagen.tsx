"use client";
import { RootState } from "@/app/store";
import { showAlert, showModalImagen } from "@/features/state/stateSlice";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useCreateImagenMutation,
  useUpdateImagenMutation,
} from "@/services/imagenApi";
import { CreateImagen, ImagenType } from "@/types";

export default function ModalImagen() {
  const state = useSelector((value: RootState) => value.state.imagenUpdate);
  const [createImagen] = useCreateImagenMutation();
  const [updateImagen] = useUpdateImagenMutation();
  const [input, setInput] = useState<ImagenType>(state);

  const dispatch = useDispatch();

  const create = (imagen: CreateImagen) => {
    createImagen(imagen)
      .then(() => dispatch(showModalImagen()))
      .catch((error) => {
        dispatch(
          showAlert({
            bg: "bg-red-500",
            text: "Error al guardar las imagenes",
            showAlert: true,
          })
        );
        new Error(error);
      });
  };

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.image_id == 0) {
      create({
        image1: input.image1,
        image2: input.image2,
        image3: input.image3,
        image4: input.image4,
      });
    } else {
      updateImagen(input)
        .then(() => dispatch(showModalImagen()))
        .catch((error) => {
          dispatch(
            showAlert({
              bg: "bg-red-500",
              text: "Error al actualizar las imagenes",
              showAlert: true,
            })
          );
          new Error(error);
        });
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  return (
    <div className="fixed bg-slate-100 w-1/4 p-2 rounded-lg border border-slate-200 shadow-2xl left-1/3 z-10">
      <button
        onClick={() => dispatch(showModalImagen())}
        className="absolute right-3 text-gray-400 font-medium"
      >
        X
      </button>
      <h1 className="text-center text-xl font-medium">
        {state.image_id == 0 ? "Crear" : "Editar"} Imagenes
      </h1>

      <form onSubmit={handlerSubmit}>
        <div className="py-1">
          <label htmlFor="name">Imagen 1</label>
          <input
            name="image1"
            className="w-full h-8 border rounded-md outline-none bg-transparent"
            type="text"
            value={input.image1 || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="py-1">
          <label htmlFor="cedula">Imagen 2</label>
          <input
            className="w-full h-8 border rounded-md outline-none bg-transparent"
            type="text"
            name="image2"
            value={input.image2 || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="py-1">
          <label htmlFor="imagen">Imagen 3</label>
          <input
            className="w-full h-8 border rounded-md outline-none bg-transparent"
            type="text"
            name="image3"
            value={input.image3 || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="py-1">
          <label htmlFor="email">Imagen 4</label>
          <input
            className="w-full h-8 border rounded-md outline-none bg-transparent"
            type="text"
            name="image4"
            value={input.image4 || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex gap-3 justify-end py-2">
          <button
            className={`${
              state.image_id == 0 ? "bg-blue-400" : "bg-green-400"
            } py-1 px-2 rounded-lg text-white`}
          >
            {state.image_id == 0 ? "Crear" : "Editar"}
          </button>
          <button
            className="bg-gray-400 py-1 px-2 rounded-lg text-white"
            onClick={() => dispatch(showModalImagen())}
          >
            Cerrar
          </button>
        </div>
      </form>
    </div>
  );
}
