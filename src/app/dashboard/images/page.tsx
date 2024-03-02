"use client";
import Dashboard from "../main/page";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { Spinner, Table } from "flowbite-react";
import { useGetAllImagenQuery } from "@/services/imagenApi";
import TableImagen from "@/components/dashboard/TableImagen";
import { showModalImagen } from "@/features/state/stateSlice";
import ModalCreateImagen from "@/components/dashboard/ModalImagen";

export default function Images() {
  const { data, isLoading } = useGetAllImagenQuery(null);
  const state = useSelector((value: RootState) => value.state);
  const dispatch = useDispatch();

  return (
    <Dashboard>
      {state.showModalImagen && <ModalCreateImagen />}
      <div className="w-full flex justify-end">
        <button
          className="text-xl mx-2"
          onClick={() => dispatch(showModalImagen())}
        >
          <i className="fa-solid fa-plus text-blue-500"></i>
        </button>
      </div>
      <div className="overflow-x-auto">
        <Table striped>
          <Table.Head className="text-center">
            <Table.HeadCell>Id</Table.HeadCell>
            <Table.HeadCell>Imagen 1</Table.HeadCell>
            <Table.HeadCell>Imagen 2</Table.HeadCell>
            <Table.HeadCell>Imagen 3</Table.HeadCell>
            <Table.HeadCell>Imagen 4</Table.HeadCell>
            <Table.HeadCell>Acciones</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {isLoading ? (
              <Table.Row>
                <Table.Cell colSpan={3}></Table.Cell>
                <Table.Cell className="w-full flex justify-center">
                  <Spinner size="xl" />
                </Table.Cell>
              </Table.Row>
            ) : data?.length != 0 ? (
              data?.map((value) => (
                <TableImagen imagen={value} key={value.image_id} />
              ))
            ) : (
              <Table.Cell colSpan={4}>Sin Datos</Table.Cell>
            )}
          </Table.Body>
        </Table>
      </div>
    </Dashboard>
  );
}
