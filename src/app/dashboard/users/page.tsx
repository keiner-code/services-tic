"use client";
import Dashboard from "../main/page";
import { useGetAllUserQuery } from "@/services/usersApi";
import { Spinner } from "flowbite-react";
import TableUser from "@/components/dashboard/TableUser";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import ModalUpdateUser from "@/components/dashboard/ModalUpdateUser";
import { Table } from "flowbite-react";

export default function Users() {
  const { data, isLoading } = useGetAllUserQuery(null);
  const state = useSelector((value: RootState) => value.state);
  
  return (
    <Dashboard>
      {state.showModal && <ModalUpdateUser />}
      <div className="overflow-x-auto">
      <Table striped>
        <Table.Head className="text-center">
            <Table.HeadCell>Nombre</Table.HeadCell>
            <Table.HeadCell>Cedula</Table.HeadCell>
            <Table.HeadCell>Foto</Table.HeadCell>
            <Table.HeadCell>Rol</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Estado</Table.HeadCell>
            <Table.HeadCell>Accion</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {isLoading ? (
            <tr>
              <td colSpan={3}></td>
              <td className="w-full flex justify-center">
                <Spinner size="xl" />
              </td>
            </tr>
          ) : (
            data?.map((value) => <TableUser user={value} key={value.user_id} />)
          )}
        </Table.Body>
      </Table>
      </div>
    </Dashboard>
  );
}
