export interface Product {
  id: number,
  name: string,
  amount: number,
  description: string,
  image: string
}

export interface TypeState {
  showModalProduct: boolean,
  idProduct: number
}