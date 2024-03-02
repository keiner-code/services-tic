import { Product } from "@/types";
import { useDispatch } from "react-redux";
import { dataProduct, showAlert, showModalProduct } from "@/features/state/stateSlice";
import { useDeleteProductMutation } from "@/services/productApi";
import { Table } from "flowbite-react";
type ProductTable = {
  product: Product;
};
export default function TableProducts({ product }: ProductTable) {
  const [deleteProduct] = useDeleteProductMutation();
  const dispatch = useDispatch();

  const handlerDelete = (productId: number) => {
    deleteProduct(productId).then((success) => {
      if (success) {
        dispatch(
          showAlert({
            showAlert: true,
            bg: "bg-red-500",
            text: "Producto Eliminada",
          })
        );
      }
    });
  };
  const handlerUpdate = (product: Product) => {
    dispatch(showModalProduct());
    dispatch(dataProduct(product));
  };
  return (
    <Table.Row key={product.product_id}>
      <Table.Cell className="py-2">{product.name}</Table.Cell>
      <Table.Cell>{product.maker}</Table.Cell>
      <Table.Cell>{product.amount}</Table.Cell>
      <Table.Cell>{product.price}</Table.Cell>
      <Table.Cell>{product.discount}</Table.Cell>
      <Table.Cell>{product.state ? 'Activo': 'Inactivo'}</Table.Cell>
      <Table.Cell>{product.image_id}</Table.Cell>
      <Table.Cell>
        <button
          className="text-xl mx-2"
          onClick={() => handlerDelete(product.product_id as number)}
        >
          <i className="fa-solid fa-trash text-red-500"></i>
        </button>
        <button
          className="text-xl mx-2 "
          onClick={() => handlerUpdate(product)}
        >
          <i className="fa-solid fa-pen-to-square text-blue-500"></i>
        </button>
      </Table.Cell>
    </Table.Row>
  );
}
