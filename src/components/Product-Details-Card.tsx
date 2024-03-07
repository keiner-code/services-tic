import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Image,
  Link,
} from "@nextui-org/react";
import type { RootState } from "@/app/store";
import { showModalProduct } from "@/features/state/stateSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export default function ProductDetailsCard() {
  const dispatch = useDispatch();
  const [total, setTotal] = useState<number>(0);
  const [amount, setAmount] = useState<number>(1);
  const [image, setImage] = useState<string | undefined>("");
  const state = useSelector((value: RootState) => value.state);
  const [errorImg1, setErrorImg1] = useState<boolean>(false);
  const [errorImg2, setErrorImg2] = useState<boolean>(false);
  const [errorImg3, setErrorImg3] = useState<boolean>(false);
  const [errorImg4, setErrorImg4] = useState<boolean>(false);
  const urlDefault =
    "https://img.freepik.com/vector-premium/error-404-no-encontrado-efecto-falla_8024-4.jpg?w=740";

  const handlerAmount = (value: boolean) => {
    const res = state.listProduct.price as number;
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
      isOpen={state.showModalProduct}
      onOpenChange={() => dispatch(showModalProduct())}
      radius="lg"
      placement="center"
      classNames={{
        body: "py-2",
        backdrop: "bg-[#142f80]/20 backdrop-opacity-10 ",
        base: "border-[#292f46] bg-white dark:bg-[#19172c] text-[#a8b0d3]",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
    >
      <ModalContent className="h-screen md:h-auto overflow-scroll md:overflow-auto">
        <ModalHeader className="flex flex-col gap-1 text-black">
          {state.listProduct.name}
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col md:flex-row">
              <div className="flex md:block">
                {errorImg1 ? (
                  <Image
                    className="w-20 mb-2 cursor-pointer"
                    src={urlDefault}
                    alt={"not found 404"}
                  />
                ) : (
                  <Image
                    className="w-20 mb-2 cursor-pointer"
                    src={state.listProduct.image1}
                    onMouseOver={() => setImage(state.listProduct.image1)}
                    alt="img1"
                    onError={() => setErrorImg1(true)}
                  />
                )}

                {errorImg2 ? (
                  <Image
                    className="w-20 mb-2 cursor-pointer"
                    src={urlDefault}
                    alt={"not found 404"}
                  />
                ) : (
                  <Image
                    className="w-20 mb-2 cursor-pointer"
                    src={state.listProduct.image2}
                    alt="img2"
                    onMouseOver={() => setImage(state.listProduct.image2)}
                    onError={() => setErrorImg2(true)}
                  />
                )}

                {errorImg3 ? (
                  <Image
                    className="w-20 mb-2 cursor-pointer"
                    src={urlDefault}
                    alt={"not found 404"}
                  />
                ) : (
                  <Image
                    className="w-20 mb-2 cursor-pointer"
                    src={state.listProduct.image3}
                    onMouseOver={() => setImage(state.listProduct.image3)}
                    alt="img3"
                    onError={() => setErrorImg3(true)}
                  />
                )}

                {errorImg4 ? (
                  <Image
                    className="w-20 mb-2 cursor-pointer"
                    src={urlDefault}
                    alt={"not found 404"}
                  />
                ) : (
                  <Image
                    className="w-20 mb-2 cursor-pointer"
                    src={state.listProduct.image4}
                    onMouseOver={() => setImage(state.listProduct.image4)}
                    onError={() => setErrorImg4(true)}
                    alt="img4"
                  />
                )}
              </div>
              <Image
                className="w-11/12 md:w-[30.5rem] ml-2"
                src={`${image ? image : state.listProduct.image1}`}
                alt="img1"
              />
            </div>

            <div className="ml-4">
              <h1 className="text-lg md:text-xl  text-black w-full text-start">
                {state.listProduct.description}
              </h1>
              <p className="text-black font-semibold mt-2">
                Precio: ${" "}
                {new Intl.NumberFormat().format(
                  state.listProduct.price as number
                )}
              </p>
              <div className="flex mt-4">
                <p className="text-md md:text-lg text-black pt-0.5">
                  Cantidad:
                </p>
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
                  ${" "}
                  {new Intl.NumberFormat().format(
                    total ? total : (state.listProduct.price as number)
                  )}
                </p>
                <Link
                  className="md:hidden px-2 py-1 bg-[#ff6b0a] text-white rounded-lg"
                  href="https://api.whatsapp.com/message/HJSWOBC7KST6O1?autoload=1&app_absent=0"
                >
                  Comprar
                </Link>
              </div>

              <div className="w-full md:flex justify-end mt-2 hidden">
                <Link
                  className=" px-2 py-1 bg-[#ff6b0a] text-white rounded-lg"
                  href="https://api.whatsapp.com/message/HJSWOBC7KST6O1?autoload=1&app_absent=0"
                >
                  Comprar
                </Link>
              </div>
              <div>
                <h1 className="text-gray-500 mb-1.5">Caracteristicas</h1>
                <p>Procesador: ?</p>
                <p>Memoria Ram: ?</p>
                <p>Almacenamiento: ?</p>
                <p>Pantalla: ?</p>
              </div>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
