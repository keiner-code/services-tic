import stateSlice from "@/features/state/stateSlice";
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "@/services/productApi";
import { usersApi } from "@/services/usersApi";
import { contactApi } from "@/services/contactApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { imagenApi } from "@/services/imagenApi";

export const store = configureStore({
  reducer: {
    state: stateSlice,
    [productApi.reducerPath]: productApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [imagenApi.reducerPath]: imagenApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productApi.middleware,
      contactApi.middleware,
      usersApi.middleware,
      imagenApi.middleware,
    ]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
