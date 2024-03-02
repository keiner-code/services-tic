"use client"
import TableProducts from "@/components/dashboard/TableProduct";
import Dashboard from "../../../components/dashboard/Layout";
import { Spinner, Table } from "flowbite-react";
import { useGetAllProductsQuery } from "@/services/productApi";
import { useDispatch, useSelector } from "react-redux";
import ModalProduct from "@/components/dashboard/ModalProduct";
import { dataProduct, showModalProduct } from "@/features/state/stateSlice";
import { RootState } from "@/app/store";

export default function Products(){
  const { data, isLoading } = useGetAllProductsQuery(null);
  const state = useSelector((value: RootState) => value.state)
  const dispatch = useDispatch();

  const handlerCreate = () => {
    dispatch(dataProduct({
        product_id: 0,
        name: '',
        maker: '',
        amount: 0,
        price: 0,
        discount: 0,
        description: '',
        state: false,
        image_id: 0
    }));
    dispatch(showModalProduct());
  }

    return(
        <Dashboard>
          <>
      {state.showModalProduct && <ModalProduct />}
      <div className="flex w-full justify-end pb-2">
      <button
                  className="text-xl mx-2"
                  onClick={handlerCreate}
                >
                  <i className="fa-solid fa-plus text-blue-500"></i>
                </button>
      </div>
      <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
            <Table.HeadCell>Nombre</Table.HeadCell>
            <Table.HeadCell>Fabricante</Table.HeadCell>
            <Table.HeadCell>Cantidad</Table.HeadCell>
            <Table.HeadCell>Precio</Table.HeadCell>
            <Table.HeadCell>Descuento</Table.HeadCell>
            <Table.HeadCell>Estado</Table.HeadCell>
            <Table.HeadCell>Id imagenes</Table.HeadCell>
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
            data?.map((value) => <TableProducts product={value} key={value.product_id} />)
          )}
        </Table.Body>
      </Table>
      </div>
      </>
    </Dashboard>
    )
}