import { Link } from "@nextui-org/react";

export default function HomeService() {
  return (
    <div className="float-left shadow-lg m-2 w-72 rounded-lg bg-blue-300 bg-opacity-30 flex flex-col items-center">
        <i className="fa-solid fa-screwdriver-wrench text-5xl py-10 text-orange-400"></i>  
        <h1 className="text-lg font-medium text-gray-400 mb-2">Soporte Tecnico</h1>  
        <p className="text-center text-gray-600 px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, fugit labore! Modi possimus et neque itaque voluptatibus. Iusto numquam, laboriosam quod deleniti est harum, commodi neque maxime at et ipsum.</p>
        <Link href="/services" className="mb-4 mt-2">Mas Informacion</Link>
    </div>
  );
}
