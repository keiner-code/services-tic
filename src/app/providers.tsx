"use client";
import { NextUIProvider } from "@nextui-org/react";
import { Nav } from "@/components/Nav";
import Footer from "@/components/Footer";
import { store } from "./store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <NextUIProvider>
          <Nav />
          {children}
          <Footer />
        </NextUIProvider>
      </Provider>
    </SessionProvider>
  );
}
