import stateSlice from "@/features/state/stateSlice";
import { configureStore} from "@reduxjs/toolkit";
import { productApi } from "@/services/productApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    state: stateSlice,
    [productApi.reducerPath]: productApi.reducer
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch