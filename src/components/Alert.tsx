import { RootState } from "@/app/store";
import { useSelector } from "react-redux";

export default function Alert(){
    const state = useSelector((value: RootState) => value?.state.alert);
    return(
        <div className={`${state.bg} shadow-xl fixed right-0 mr-4 py-3 px-1 rounded-md text-white font-medium`}>
            {state.text}
        </div>
    )
}