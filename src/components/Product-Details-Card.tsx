import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Image,
  Link,
  Spinner,
} from "@nextui-org/react";
import type { RootState } from "@/app/store";
import { showModalProduct } from "@/features/state/stateSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useGetProductByIdQuery } from "@/services/productApi";

export default function ProductDetailsCard() {
  const state = useSelector((value: RootState) => value.state.showModalProduct);
  const id = useSelector((value: RootState) => value.state.idProduct);

  const { isLoading, isFetching, data, error } = useGetProductByIdQuery({
    id: id.toString(),
  });

  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number>(1);
  const [image, setImage] = useState<string | undefined>("");
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const res = data?.price as number;
    setTotal(res);
  }, [data]);

  const handlerAmount = (value: boolean) => {
    const res = data?.price as number;

    if (value) {
      setTotal(total + res);
      setAmount(amount + 1);
    } else {
      if (amount != 1) {
        setTotal(total - res);
        setAmount(amount - 1);
      }
    }
  };
  return (
    <Modal
      size="3xl"
      backdrop="opaque"
      isOpen={state}
      onOpenChange={() => dispatch(showModalProduct())}
      radius="lg"
      classNames={{
        body: "py-2",
        backdrop: "bg-[#142f80]/20 backdrop-opacity-10 ",
        base: "border-[#292f46] bg-white dark:bg-[#19172c] text-[#a8b0d3]",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
    >{
      isLoading ? <Spinner /> :
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-black">
          {data?.name}
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-col md:flex-row">

            <div className="flex flex-col md:flex-row">
              <div className="flex md:block">
                <Image
                  className="w-20 mb-2 cursor-pointer"
                  src={data?.image1}
                  onMouseOver={() => setImage(data?.image1)}
                  alt="img1"
                />
                <Image
                  className="w-20 mb-2 cursor-pointer"
                  src={data?.image2}
                  alt="img2"
                  onMouseOver={() => setImage(data?.image2)}
                />
                <Image
                  className="w-20 mb-2 cursor-pointer"
                  src={data?.image3}
                  onMouseOver={() => setImage(data?.image3)}
                  alt="img3"
                />
                <Image
                  className="w-20 mb-2 cursor-pointer"
                  src={data?.image4}
                  onMouseOver={() => setImage(data?.image4)}
                  alt="img4"
                />
              </div>
              <Image
                className="w-11/12 md:w-[30.5rem] ml-2"
                src={`${image ? image : data?.image1}`}
                alt="img1"
              />
            </div>

            <div className="ml-4">
              <h1 className="text-xl text-black w-full text-start">
                {data?.description}
              </h1>
              <p className="text-black font-semibold mt-2">
                Precio: $ {new Intl.NumberFormat().format(data?.price as number)}
              </p>
              <div className="flex mt-4">
                <p className="text-lg text-black pt-0.5">Cantidad:</p>
                <div className="flex ml-2">
                  <Button
                    onClick={() => handlerAmount(false)}
                    isIconOnly
                    color="warning"
                    size="sm"
                    className="text-white text-lg font-semibold"
                  >
                    -
                  </Button>
                  <p className="border mx-2 px-2 rounded-md text-black pt-0.5">
                    {amount}
                  </p>
                  <Button
                    onClick={() => handlerAmount(true)}
                    isIconOnly
                    color="success"
                    size="sm"
                    className="text-white text-lg font-semibold"
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <p className="text-black text-lg">Total:</p>
                <p className="text-black text-lg font-semibold">
                  $ {new Intl.NumberFormat().format(total ? total : data?.price as number)}
                </p>
              </div>
              <div className="w-full flex justify-end mt-2">
                <Link
                  className=" px-2 py-1 bg-[#ff6b0a] text-white rounded-lg"
                  href="#"
                >
                  Comprar
                </Link>
              </div>

              <div>
                <h1 className="text-gray-500 mb-1.5">Caracteristicas</h1>
                <div className="flex">
                  <p className="mr-3">Procesador: </p>
                  <p>Intel Core I3 11va</p>
                </div>
                <div className="flex">
                  <p className="mr-3">Ram: </p>
                  <p>4 GB DDR4</p>
                </div>
                <div className="flex">
                  <p className="mr-3">Almacenamiento: </p>
                  <p>Disco Solido 1TB </p>
                </div>
                <div className="flex">
                  <p className="mr-3">Monitor: </p>
                  <p>Pantalla Amoled 20pulg</p>
                </div>
              </div>
            </div>

          </div>
        </ModalBody>
      </ModalContent>}
    </Modal>
  );
}
