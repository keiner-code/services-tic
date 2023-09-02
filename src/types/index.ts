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

export interface User{
  id: number;
  name: string;
  identification: number;
  image: string;
  rol: string;
  email: string;
  password: string;
  state: string;
};

export interface Service{
  id: number,
  name: string,
  description: string,
  info: string,
  phone: number,
  image: string
}
export interface Contact{
  name: string,
  identification: string,
  phone: string,
  email: string,
  description: string
}