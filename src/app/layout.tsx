"use client";
import "./globals.css";
import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { Nav } from "@/components/Nav";
import Footer from "@/components/Footer";
import { store } from "./store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Servicio TIC",
  description: "Ingenieria de calidad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <SessionProvider>
          <Provider store={store}>
            <NextUIProvider>
              <Nav />
              {children}
              <Footer />
            </NextUIProvider>
          </Provider>
        </SessionProvider>
      </body>
    </html>
  );
}
