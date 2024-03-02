import Link from "next/link";

export default function Aside(){
    return(
        <ul className="flex md:flex-col flex-row gap-2 md:gap-0 justify-center">
          <li className="bg-blue-400 my-2 rounded-lg text-white font-medium hover:bg-blue-500 shadow-sm hover:text-white cursor-pointer">
            <Link className="flex p-2" href="/dashboard/graphics">Dashboard</Link>
          </li>
          <li className="bg-blue-400 my-2 rounded-lg text-white font-medium hover:bg-blue-500 shadow-sm hover:text-white cursor-pointer">
            <Link className="flex p-2" href="/dashboard/users">Usuarios</Link>
          </li>
          <li className="bg-blue-400 my-2 rounded-lg text-white font-medium hover:bg-blue-500 shadow-sm hover:text-white cursor-pointer">
            <Link className="flex p-2" href="/dashboard/products">Productos</Link>
          </li>
          <li className="bg-blue-400 my-2 rounded-lg text-white font-medium hover:bg-blue-500 shadow-sm hover:text-white cursor-pointer">
            <Link className="flex p-2" href="/dashboard/images">Imagenes</Link>
          </li>
        </ul>
    )
}