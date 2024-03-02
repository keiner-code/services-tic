"use client";
import { CardBody, CardHeader, Card, Image } from "@nextui-org/react";
import ProductDetailsCard from "./Product-Details-Card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { showModalProduct } from "@/features/state/stateSlice";
import { dataProductList } from "@/features/state/stateSlice";
import { ListProduct, Product } from "@/types";
import Link from "next/link";

type Props = {
  product: ListProduct;
};
export default function ProductCard({ product }: Props) {
  const state = useSelector(
    (value: RootState) => value?.state.showModalProduct
  );

  const dispatch = useDispatch();

  const handlerSubmit = (product: ListProduct) => {
    dispatch(dataProductList(product));
    dispatch(showModalProduct());
  };

  return (
    <div className="float-left relative">
      <div onClick={() => handlerSubmit(product)}>
        <Card className="pt-4 border m-4 w-72  shadow-lg cursor-pointer">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{product.name}</p>
            <small className="text-default-500">
              {product.amount} Productos disponible
            </small>
            <h4 className="font-bold text-large">{product.description}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex justify-center ">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={product.image1}
            />
          </CardBody>
        </Card>
      </div>
      <Link className="absolute z-10 top-6 right-4 mr-2 mb-4" href="/contact">
        <i className="fa-brands fa-whatsapp text-3xl text-green-500"></i>
      </Link>
     { state && <ProductDetailsCard/>}
    </div>
  );
}
