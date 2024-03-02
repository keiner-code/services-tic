import {User} from "@/types";
import Image from "next/image";
import { useDeleteUserMutation} from "@/services/usersApi";
import { useDispatch} from "react-redux";
import { Table } from "flowbite-react";
import { dataUser, showAlert, showModalUser } from "@/features/state/stateSlice";
type UserTable = {
  user: User;
};
export default function TableUser({ user }: UserTable) {
  
  const [deleteUser] = useDeleteUserMutation();
  const dispatch = useDispatch();

  const HandlerDelete = (userId: number) => {
    deleteUser(userId).then((success) => {
      if (success) {
        dispatch(
          showAlert({
            showAlert: true,
            bg: "bg-red-500",
            text: "Usuario Eliminado",
          })
        );
      }
    });
  };
  const handlerUpdate = (user: User) => {
    dispatch(showModalUser());
    dispatch(dataUser(user));
  }
  return (
    <Table.Row key={user.user_id} className="text-center">
      <Table.Cell>{user.name}</Table.Cell>
      <Table.Cell>{user.identification}</Table.Cell>
      <Table.Cell className="flex justify-center py-1">
        <Image width={80} height={80} src={user.image as string} alt={user.name as string} />
      </Table.Cell>
      <Table.Cell>{user.rol}</Table.Cell>
      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell>{user.state ? "Activo" : "Inactivo"}</Table.Cell>
      <Table.Cell>
        <button
          className="text-xl mx-2"
          onClick={() => HandlerDelete(user.user_id as number)}
        >
          <i className="fa-solid fa-trash text-red-500"></i>
        </button>
        <button 
          className="text-xl mx-2 "
          onClick={()=>handlerUpdate(user)}
        >
          <i className="fa-solid fa-pen-to-square text-blue-500"></i>
        </button>
      </Table.Cell>
    </Table.Row>
  );
}
