import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TypeState } from '@/types';


const initialState: TypeState = {
  showModalProduct: false,
  idProduct: 0
}

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    showModalProduct: (state) => {
      state.showModalProduct = !state.showModalProduct
    },
    getIdProduct: (state, action: PayloadAction<number>) => {
      state.idProduct = action.payload
    }
  }
})

export const {showModalProduct, getIdProduct} = stateSlice.actions;
export default stateSlice.reducer;