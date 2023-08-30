export interface Product {
    id: number,
    name: string,
    maker: string,
    amount: number,
    price: number,
    discount: number,
    id_image: number,
    description: string,
    state: number,
    image1: string,
    image2: string,
    image3: string,
    image4: string
}

export interface TypeState {
  showModalProduct: boolean,
  idProduct: number
}

