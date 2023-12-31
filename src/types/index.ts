export interface Product {
    id: number,
    name: string,
    maker: string,
    amount: number,
    price: number,
    discount: number,
    id_image: number,
    description: string,
    state: string,
    image1: string,
    image2: string,
    image3: string,
    image4: string
}

export interface ProductDetail {
  price: number,
  name: string,
  image1: string,
  image2: string,
  image3: string,
  image4: string
  description: string,
  processor: string,
  ram: string,
  storage: string,
  display: string,

}

export interface TypeState {
  showModalProduct: boolean,
  idProduct: number
}

export default interface User{
  name: string;
  identification: string;
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
  icon: string,
  image: string
}
export interface Contact{
  name: string,
  identification: string,
  phone: string,
  email: string,
  description: string
}

export type ResultSetHeader = {
  fieldCount: number,
  affectedRows: number,
  insertId: number,
  info: string,
  serverStatus: number,
  warningStatus: number,
  changedRows: number
}