"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Nav } from "@/components/Nav";
import Footer from "@/components/Footer";
import { store } from "./store";
import { Provider } from "react-redux";
import {SessionProvider} from 'next-auth/react'

const inter = Inter({ subsets: ["latin"] });

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
      <body className="">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <SessionProvider>
        <Provider store={store}>
          <Providers>
            <Nav />
            {children}
            <Footer />
          </Providers>
        </Provider>
        </SessionProvider>
      </body>
    </html>
  );
}
