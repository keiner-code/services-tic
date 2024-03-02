import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TypeState, Alert, Product, ListProduct } from "@/types";
import { ImagenType, User } from "@/types";

const initialState: TypeState = {
  showModalProduct: false,
  idProduct: 0,
  showModal: false,
  showModalImagen: false,
  listProduct: {
    product_id: 0,
    name: '',
    maker: '',
    amount: 0,
    price: 0,
    discount: 0,
    description: '',
    state: false,
    image_id: 0,
    image1: '',
    image2: '',
    image3: '',
    image4: ''
  },
  userUpdate: {
    user_id: 0,
    name: "",
    identification: "",
    image: "",
    rol: "",
    email: "",
    password: "",
    state: true,
  },
  productUpdate: {
    product_id: 0,
    name: '',
    maker: '',
    amount: 0,
    price: 0,
    discount: 0,
    description: '',
    state: false,
    image_id: 0
  },
  alert: {
    showAlert: false,
    text: "",
    bg: "",
  },
  imagenUpdate: {
    image_id: 0,
    image1: "",
    image2: "",
    image3: "",
    image4: "",
  },
};

export const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    showModalUser: (state) => {
      state.showModal = !state.showModal;
    },
    showModalImagen: (state) => {
      state.showModalImagen = !state.showModalImagen;
    },
    showModalProduct: (state) => {
      state.showModalProduct= !state.showModalProduct;
    },
    dataUser: (state, action: PayloadAction<User>) => {
      state.userUpdate = {
        user_id: action.payload.user_id,
        name: action.payload.name,
        identification: action.payload.identification,
        image: action.payload.image,
        rol: action.payload.rol,
        email: action.payload.email,
        password: action.payload.password,
        state: action.payload.state,
      };
    },
    dataProduct: (state, action: PayloadAction<Product>) => {
      state.productUpdate = {
        product_id: action.payload.product_id,
        name: action.payload.name,
        maker: action.payload.maker,
        amount: action.payload.amount,
        price: action.payload.price,
        discount: action.payload.discount,
        description: action.payload.description,
        state: action.payload.state,
        image_id: action.payload.image_id,
      };
    },
    dataImagen: (state, action: PayloadAction<ImagenType>) => {
      state.imagenUpdate = {
        image_id: action.payload.image_id,
        image1: action.payload.image1,
        image2: action.payload.image2,
        image3: action.payload.image3,
        image4: action.payload.image4,
      };
    },
    showAlert: (state, action: PayloadAction<Alert>) => {
      state.alert = {
        showAlert: action.payload.showAlert,
        text: action.payload.text,
        bg: action.payload.bg,
      };
    },
    dataProductList: (state, action: PayloadAction<ListProduct>) => {
      state.listProduct = {
        product_id: action.payload.product_id,
        name: action.payload.name,
        maker: action.payload.maker,
        amount: action.payload.amount,
        price: action.payload.price,
        discount: action.payload.discount,
        description: action.payload.description,
        state: action.payload.state,
        image_id: action.payload.image_id,
        image1: action.payload.image1,
        image2: action.payload.image2,
        image3: action.payload.image3,
        image4: action.payload.image4
      }
    },
  },
});

export const {
  showModalProduct,
  dataProductList,
  showAlert,
  dataUser,
  showModalUser,
  showModalImagen,
  dataImagen,
  dataProduct,
} = stateSlice.actions;
export default stateSlice.reducer;
