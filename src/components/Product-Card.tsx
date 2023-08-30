"use client";
import { CardBody, CardHeader, Card, Image} from "@nextui-org/react";
import ProductDetailsCard from "./Product-Details-Card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { showModalProduct} from "@/features/state/stateSlice";
import { getIdProduct } from "@/features/state/stateSlice";
import { Product } from "@/types";

type Props = {
  product: Product
}
export default function ProductCard({product}: Props) {
  const state = useSelector((value: RootState) => value.state.showModalProduct);
  
  const dispatch = useDispatch();
  const handlerSubmit = (id: number) => {
    dispatch(getIdProduct(id))
    dispatch(showModalProduct())
  }
  
  return (
    <div className="float-left" onClick={() => handlerSubmit(product.id)}>
    <Card className="py-4 border m-4 w-72  shadow-lg cursor-pointer">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{product.name}</p>
        <small className="text-default-500">{product.amount} Productos disponible</small>
        <h4 className="font-bold text-large">{product.description}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex justify-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={product.image1}
        />
      </CardBody>
    </Card>
    {state && <ProductDetailsCard/>}
    </div>
  );
}
