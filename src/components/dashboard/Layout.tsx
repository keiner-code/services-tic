"use client";
import { usePathname, useRouter } from "next/navigation";
import Graphics from "../../app/dashboard/graphics/page";
import Aside from "@/components/dashboard/Aside";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useEffect } from "react";
import { showAlert } from "@/features/state/stateSlice";
import Alert from "@/components/Alert";
import { useSession } from "next-auth/react";

type UserType = {
  email: string;
  id: number;
  image: string;
  name: string;
  password: string;
  rol: string;
};

export default function Layout({children}: {children: React.ReactNode}) {
  const navigation = usePathname();
  const state = useSelector((value: RootState) => value?.state.alert);
  const dispatch = useDispatch();
  const { data, status } = useSession();
  const user = data?.user as UserType;
  const router = useRouter();

  useEffect(() => {
    if (user) {
      if (status == "authenticated" && user.rol != "Admin") {
        router.push("/");
      }
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(
        showAlert({
          showAlert: false,
          bg: "",
          text: "",
        })
      );
    }, 2000);
    return () => clearInterval(timer);
  }, [state]);

  return (
    <main className="w-full flex md:flex-row flex-col h-full">
      <aside className="w-full md:w-1/6 border-r-1 p-2">
        <Aside />
      </aside>
      {state.showAlert && <Alert />}
      {status == "authenticated" && user.rol != "Admin" ? <p>Unauthorized</p> : 
      navigation != "/dashboard" ? (
        <article className="md:w-10/12 p-2">{children}</article>
      ) : (
        <article className="w-10/12 p-2">
          <Graphics />
        </article>
      )}
    
    </main>
  );
}
