"use client";
import { NextUIProvider } from "@nextui-org/react";
import { Nav } from "@/components/Nav";
import Footer from "@/components/Footer";
import { store } from "./store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import LinkWhasp from "@/components/LinkWhassp";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <NextUIProvider>
          <div className="flex flex-col h-screen">
            <Nav />
            <LinkWhasp />
              {children}
            <Footer />
          </div>
        </NextUIProvider>
      </Provider>
    </SessionProvider>
  );
}
