import { ImagenType } from "@/types";
import { useDispatch } from "react-redux";
import {
  dataImagen,
  showAlert,
  showModalImagen,
} from "@/features/state/stateSlice";
import { useDeleteImagenMutation } from "@/services/imagenApi";
import { useState } from "react";
import Image from "next/image";
import { Table } from "flowbite-react";
type ImagenTable = {
  imagen: ImagenType;
};
export default function TableImagen({ imagen }: ImagenTable) {
  const [deleteImagen] = useDeleteImagenMutation();
  const dispatch = useDispatch();
  const [errorImg1, setErrorImg1] = useState<boolean>(false);
  const [errorImg2, setErrorImg2] = useState<boolean>(false);
  const [errorImg3, setErrorImg3] = useState<boolean>(false);
  const [errorImg4, setErrorImg4] = useState<boolean>(false);
  const urlDefault =
    "https://img.freepik.com/vector-premium/error-404-no-encontrado-efecto-falla_8024-4.jpg?w=740";

  const HandlerDelete = (userId: number) => {
    deleteImagen(userId).then((success) => {
      if (success) {
        dispatch(
          showAlert({
            showAlert: true,
            bg: "bg-red-500",
            text: "Imagen Eliminada",
          })
        );
      }
    });
  };
  const handlerUpdate = (imagen: ImagenType) => {
    dispatch(showModalImagen());
    dispatch(dataImagen(imagen));
  };

  const handlerCreate = () => {
    dispatch(showModalImagen());
    dispatch(
      dataImagen({
        image_id: 0,
        image1: "",
        image2: "",
        image3: "",
        image4: "",
      })
    );
  };
  return (
    <Table.Row key={imagen.image_id} className="border-b-1 text-center">
      <Table.Cell>{imagen.image_id}</Table.Cell>
      <Table.Cell className="py-1">
        <div className="flex justify-center">
          {errorImg1 ? (
            <Image
              width={80}
              height={80}
              src={urlDefault}
              alt={imagen.image1}
              blurDataURL={urlDefault}
            />
          ) : (
            <Image
              width={80}
              height={80}
              src={imagen.image1}
              alt={imagen.image1}
              blurDataURL={imagen.image1}
              onError={() => setErrorImg1(true)}
            />
          )}
        </div>
      </Table.Cell>
      <Table.Cell className="py-1">
        <div className="flex justify-center">
          {errorImg2 ? (
            <Image
              width={80}
              height={80}
              src={urlDefault}
              alt={imagen.image2}
              blurDataURL={urlDefault}
            />
          ) : (
            <Image
              width={80}
              height={80}
              src={imagen.image2}
              alt={imagen.image2}
              blurDataURL={imagen.image2}
              onError={() => setErrorImg2(true)}
            />
          )}
        </div>
      </Table.Cell>
      <Table.Cell className="py-1">
        <div className="flex justify-center">
          {errorImg3 ? (
            <Image
              width={80}
              height={80}
              src={urlDefault}
              alt={imagen.image3}
            />
          ) : (
            <Image
              width={80}
              height={80}
              src={imagen.image3}
              alt={imagen.image3}
              blurDataURL={imagen.image3}
              onError={() => setErrorImg3(true)}
            />
          )}
        </div>
      </Table.Cell>
      <Table.Cell className="py-1">
        <div className="flex justify-center">
          {errorImg4 ? (
            <Image
              width={80}
              height={80}
              src={urlDefault}
              alt={imagen.image4}
            />
          ) : (
            <Image
              width={80}
              height={80}
              src={imagen.image4}
              alt={imagen.image4}
              blurDataURL={imagen.image4}
              onError={() => setErrorImg4(true)}
            />
          )}
        </div>
      </Table.Cell>
      <Table.Cell>
        <button
          className="text-xl mx-2"
          onClick={() => HandlerDelete(imagen.image_id as number)}
        >
          <i className="fa-solid fa-trash text-red-500"></i>
        </button>
        <button className="text-xl mx-2 " onClick={() => handlerUpdate(imagen)}>
          <i className="fa-solid fa-pen-to-square text-blue-500"></i>
        </button>
        {/* <button className="text-xl mx-2" onClick={handlerCreate}>
          <i className="fa-solid fa-plus text-blue-500"></i>
        </button> */}
      </Table.Cell>
    </Table.Row>
  );
}
