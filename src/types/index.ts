export interface Product {
    product_id: number,
    name: string,
    maker: string,
    amount: number,
    price: number,
    discount: number,
    description: string,
    state: boolean
    image_id: number,
};
export interface ListProduct{
    product_id: number,
    name: string,
    maker: string,
    amount: number,
    price: number,
    discount: number,
    description: string,
    state: boolean
    image_id: number,
    image1: string,
    image2: string,
    image3: string,
    image4: string
}
export type CreateProduct = Omit<Product, 'product_id'>;

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

};
export interface User{
  user_id?: number;
  name?: string;
  identification?: string;
  image?: string;
  rol?: string;
  email?: string;
  password?: string;
  state?: boolean;
};
export interface TypeState {
  showModalProduct: boolean,
  idProduct: number,
  userUpdate: User
  alert: Alert,
  showModal: boolean,
  showModalImagen: boolean,
  imagenUpdate: ImagenType,
  productUpdate: Product,
  listProduct: ListProduct
};
export interface Alert {
  showAlert: boolean,
  text: string,
  bg: string
}
export type CreateUser = Omit<User, 'user_id'>;
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

export interface ImagenType{
  image_id: number,
  image1: string,
  image2: string,
  image3: string,
  image4: string
}
export type CreateImagen = Omit<ImagenType, 'image_id'>;