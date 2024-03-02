type TypeConfirmation = {
    comfirmation: {
        bg: string,
        title: string,
        text: string,
        setConfirmation: (comfirmation: boolean) => void
    }
}
export default function Comfirmation({comfirmation}: TypeConfirmation){
    return(
        <div className={`fixed ${comfirmation.bg} right-1/3 top-1/3 p-2 text-white rounded-md shadow-xl`}>
            <h1 className="text-xl font-semibold">{comfirmation.title}</h1>
            <p>{comfirmation.text}</p>
            <div className="w-full flex justify-end my-2 gap-2">
            <button onClick={() => comfirmation.setConfirmation(true)} className="py-1 px-2 rounded-lg bg-red-600" >Comfirmar</button>
            <button className="py-1 px-2 rounded-lg bg-gray-600" >Cancelar</button>
            </div>
        </div>
    )
}