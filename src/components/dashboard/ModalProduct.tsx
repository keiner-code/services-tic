"use client";
import { RootState } from "@/app/store";
import {
  showAlert,
  showModalProduct,
} from "@/features/state/stateSlice";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "@/services/productApi";
import { CreateProduct, Product } from "@/types";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ModalProduct() {
  const state = useSelector((value: RootState) => value.state.productUpdate);
  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [input, setInput] = useState<Product>(state);
  const dispatch = useDispatch();

  const create = (product: CreateProduct) => {
    createProduct(product)
      .then(() => dispatch(showModalProduct()))
      .catch((error) => {
        dispatch(
          showAlert({
            bg: "bg-red-500",
            text: "Error al guardar el producto",
            showAlert: true,
          })
        );
        new Error(error);
      });
  };

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.product_id == 0) {
      create({
        name: input.name,
        maker: input.maker,
        amount: input.amount,
        price: input.price,
        discount: input.discount,
        description: input.description,
        state: true,
        image_id: input.image_id,
      });
    } else {
      updateProduct(input)
        .then(() => dispatch(showModalProduct()))
        .catch((error) => {
          dispatch(
            showAlert({
              bg: "bg-red-500",
              text: "Error al actualizar el producto",
              showAlert: true,
            })
          );
          new Error(error);
        });
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

  return (
    <div className="fixed bg-slate-100 w-1/4 p-2 rounded-lg border border-slate-200 shadow-2xl left-1/3 z-10">
      <button
        onClick={() => dispatch(showModalProduct())}
        className="absolute right-3 text-gray-400 font-medium"
      >
        X
      </button>
      <h1 className="text-center text-xl font-medium">
        {state.image_id == 0 ? "Crear" : "Editar"} Imagenes
      </h1>

      <form onSubmit={handlerSubmit}>
        <div className="">
          <label htmlFor="name">Nombre</label>
          <input
            name="name"
            className="w-full h-8 border rounded-md outline-none bg-transparent"
            type="text"
            value={input.name || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <label htmlFor="maker">Marca</label>
          <input
            className="w-full h-8 border rounded-md outline-none bg-transparent"
            type="text"
            name="maker"
            value={input.maker || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <label htmlFor="amount">Cantidad</label>
          <input
            className="w-full h-8 border rounded-md outline-none bg-transparent"
            type="text"
            name="amount"
            value={input.amount || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <label htmlFor="price">Precio</label>
          <input
            className="w-full h-8 border rounded-md outline-none bg-transparent"
            type="number"
            name="price"
            value={input.price || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <label htmlFor="discount">Descuento</label>
          <input
            className="w-full h-8 border rounded-md outline-none bg-transparent"
            type="number"
            name="discount"
            value={input.discount || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <label htmlFor="description">Descripcion</label>
          <textarea
            className="w-full h-12 border rounded-md outline-none bg-transparent"
            name="description"
            value={input.description || ""}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="">
          <label htmlFor="state">Estado</label>
          <input
            className="w-full h-8 border rounded-md outline-none bg-transparent"
            type="text"
            name="state"
            value={input.state ? "Activo" : "Inactivo" || ""}
            onChange={handleInputChange}
            disabled={state.product_id == 0 ? true : false}
          />
        </div>
        <div className="">
          <label htmlFor="image_id">Id De La imagen</label>
          <input
            className="w-full h-8 border rounded-md outline-none bg-transparent"
            type="number"
            name="image_id"
            value={input.image_id || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex gap-3 justify-end py-2">
        <button
            className={`${
              state.product_id == 0 ? "bg-blue-400" : "bg-green-400"
            } py-1 px-2 rounded-lg text-white`}
          >
            {state.product_id == 0 ? "Crear" : "Editar"}
          </button>
          <button
            className="bg-gray-400  px-2 rounded-lg text-white"
            onClick={() => dispatch(showModalProduct())}
          >
            Cerrar
          </button>
        </div>
      </form>
    </div>
  );
}
