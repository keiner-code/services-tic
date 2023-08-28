import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

const product = [
  {
    id: 1,
    name: "Portatil Lenovo",
    amount: 12,
    description: "2GB de RAM, 2TB Disco Solido",
    image:
      "https://img.freepik.com/foto-gratis/equilibrio-portatil-fondo-morado_23-2150271750.jpg?w=740&t=st=1692288142~exp=1692288742~hmac=eb49d3d83f5db72d98b4dca5cf00f9b2220f0aecf3f864521a95f75f428d40f6",
  },
  {
    id: 2,
    name: "Computador Escritorio",
    amount: 3,
    description: "2GB de RAM, 2TB Disco Solido",
    image: "https://img.freepik.com/vector-gratis/articulos-tecnologia-gravedad_23-2148076833.jpg?w=740&t=st=1692294542~exp=1692295142~hmac=3b9546f7db5ebe58690cad1fc7cc224a77c1a5df95be969851dc633606d27a88",
  },
  {
    id: 3,
    name: "Telefono",
    amount: 5,
    description: "5GB de RAM, 1TB Disco Solido",
    image: "https://img.freepik.com/foto-gratis/equilibrio-portatil-fondo-morado_23-2150271750.jpg?w=740&t=st=1692288142~exp=1692288742~hmac=eb49d3d83f5db72d98b4dca5cf00f9b2220f0aecf3f864521a95f75f428d40f6",
  },
  {
    id: 4,
    name: "Portatil Lenovo",
    amount: 5,
    description: "2GB de RAM, 2TB Disco Solido",
    image: "https://img.freepik.com/vector-gratis/articulos-tecnologia-gravedad_23-2148076833.jpg?w=740&t=st=1692294542~exp=1692295142~hmac=3b9546f7db5ebe58690cad1fc7cc224a77c1a5df95be969851dc633606d27a88",
  },
  {
    id: 5,
    name: "Portatil Lenovo",
    amount: 3,
    description: "2GB de RAM, 2TB Disco Solido",
    image: "https://img.freepik.com/vector-gratis/articulos-tecnologia-gravedad_23-2148076833.jpg?w=740&t=st=1692294542~exp=1692295142~hmac=3b9546f7db5ebe58690cad1fc7cc224a77c1a5df95be969851dc633606d27a88",
  },
  {
    id: 6,
    name: "MACBOOK PRO",
    amount: 2,
    description: "16GB de RAM, 1TB Disco Solido",
    image: "https://img.freepik.com/foto-gratis/equilibrio-portatil-fondo-morado_23-2150271750.jpg?w=740&t=st=1692288142~exp=1692288742~hmac=eb49d3d83f5db72d98b4dca5cf00f9b2220f0aecf3f864521a95f75f428d40f6",
  }
];

interface Params {
  params: {
    id: string
  }
}

export async function GET(request: NextApiRequest, {params}: Params) {
  return NextResponse.json(product.find(value => value.id === parseInt(params.id)))
}