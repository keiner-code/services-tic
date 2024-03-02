import {
  NavbarMenuItem,
  NavbarMenu,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  User,
  NavbarMenuToggle,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Button,
  Avatar,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

type option = {
  menuService?: boolean;
  menuEmpresa?: boolean;
};
type UserType = {
  email: string,
  id: number,
  image: string,
  name: string,
  password: string,
  rol: string
}
export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [state, dispatch] = useState<option>({
    menuService: false,
    menuEmpresa: false,
  });
  const currentRouter = usePathname();
  const router = useRouter()
  const { data, status } = useSession();
  const user = data?.user as UserType;

  const handlerSession = async () => {
    const data = await signOut({redirect: false, callbackUrl: '/'})
    router.push(data.url)
  }
  
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="border-b-1 h-14 sm:shadow-sm mb-2 w-full"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand className="flex flex-col sm:items-start items-end">
          <div className="flex flex-col items-center">
            <Link href="/"><Image src={logo} alt="logo" width={70} /></Link>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="/"
            className={`${
              currentRouter === "/" ? "border-b-2 border-b-blue-400 p-2" : ""
            } font-medium text-md ml-4`}
          >
            Home
          </Link>
        </NavbarItem>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                onClick={() => dispatch({ menuService: !state.menuService })}
                className={`${
                  currentRouter === "/services"
                    ? "border-b-2 border-b-blue-400 p-2 rounded-none"
                    : ""
                } p-0 bg-transparent data-[hover=true]:bg-transparent font-medium text-md ml-4`}
                radius="sm"
                variant="light"
              >
                Servicios{" "}
                {state.menuService ? (
                  <i className="fa-solid fa-angle-up text-xs"></i>
                ) : (
                  <i className="fa-solid fa-angle-down text-xs"></i>
                )}
              </Button>
            </DropdownTrigger>
          </NavbarItem>

          <DropdownMenu
            aria-label="SE_Y_TIC features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/services">
                Desarrollo de Software
              </Link>
            </DropdownItem>

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/services">
                Soporte Tecnico Especializado
              </Link>
            </DropdownItem>

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/services">
                Comercializacion de Productos Tecnologicos
              </Link>
            </DropdownItem>

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/services">
                Consulterias, Asesorias y Capacitaciones
              </Link>
            </DropdownItem>

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/services">
                Redes y Telecomunicaciones
              </Link>
            </DropdownItem>

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/services">
                Servicio de Inteligencia de Negocios
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                onClick={() => dispatch({ menuEmpresa: !state.menuEmpresa })}
                className={`${
                  currentRouter === "/empresa"
                    ? "border-b-2 border-b-blue-400 p-2 rounded-none"
                    : ""
                } p-0 bg-transparent data-[hover=true]:bg-transparent font-medium text-md ml-4`}
                radius="sm"
                variant="light"
              >
                Empresa{" "}
                {state.menuEmpresa ? (
                  <i className="fa-solid fa-angle-up text-xs"></i>
                ) : (
                  <i className="fa-solid fa-angle-down text-xs"></i>
                )}
              </Button>
            </DropdownTrigger>
          </NavbarItem>

          <DropdownMenu
            aria-label="SE_Y_TIC features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/empresa">
                Quienes Somos
              </Link>
            </DropdownItem>

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/empresa">
                Vision y Mision
              </Link>
            </DropdownItem>

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/empresa">
                Valores Corporativos
              </Link>
            </DropdownItem>

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/empresa">
                ¿Por que Escogernos?
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link
            color="foreground"
            href="/contact"
            aria-current="page"
            className={`${
              currentRouter === "/contact"
                ? "border-b-2 border-b-blue-400 p-2 rounded-none"
                : ""
            } font-medium text-md ml-4`}
          >
            Contactar
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            color="foreground"
            href="/business"
            aria-current="page"
            className={`${
              currentRouter === "/business"
                ? "border-b-2 border-b-blue-400 p-2 rounded-none"
                : ""
            } font-medium text-md ml-4`}
          >
            Inteligencia de negocios
          </Link>
        </NavbarItem>

        {
          (status == 'authenticated' && user.rol == 'Admin' ) && 
          <NavbarItem>
          <Link
            color="foreground"
            href="/dashboard/main"
            aria-current="page"
            className={`${
              currentRouter === "/dashboard/main" || 
              currentRouter === "/dashboard/users" ||
              currentRouter === "/dashboard/products" ||
              currentRouter === "/dashboard/images"
                ? "border-b-2 border-b-blue-400 p-2 rounded-none"
                : ""
            } font-medium text-md ml-4`}
          >
            Dashboard
          </Link>
        </NavbarItem>
        }

      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          <div className="flex items-center gap-4">
            {status === "unauthenticated" ? (
              <div className="flex flex-col md:flex-row md:gap-2 items-center">
                <Link
                  className="md:border md:border-green-500 md:md:p-2 md:rounded-lg text-green-500"
                  href="/login"
                >
                  Iniciar Sesion
                </Link>
                <Link
                  className="md:bg-blue-500 md:border md:border-blue-500 md:md:p-2 md:rounded-lg md:text-white text-blue-500"
                  href="/register"
                >
                  Registrarse
                </Link>
              </div>
            ) : (
              <Dropdown placement="bottom-start">
                <DropdownTrigger className="">
                  <div>
                    <div className="hidden md:flex">
                      <User
                        as="button"
                        avatarProps={{
                          isBordered: true,
                          src: `${user?.image}`,
                        }}
                        className="transition-transform"
                        description={user?.rol}
                        name={user?.name}
                      />
                    </div>
                    <div className="md:hidden">
                      <Avatar src={user?.image} />
                    </div>
                  </div>
                </DropdownTrigger>

                <DropdownMenu aria-label="User Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-bold">{user?.name}</p>
                  </DropdownItem>
                  <DropdownItem key="system">{user?.email}</DropdownItem>
                  <DropdownItem key="configurations">Ver Perfil</DropdownItem>
                  <DropdownItem key="help_and_feedback">
                    Ayuda & Comentario
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    <button onClick={handlerSession}>Cerrar Sesión</button>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )}
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className=" top-14">
        <NavbarMenuItem>
          <Link
            className="w-full bg-blue-300 bg-opacity-30 pl-2 rounded-lg mb-2"
            href="/"
            size="lg"
          >
            Home
          </Link>
          <Link
            className="w-full bg-blue-300 bg-opacity-30 pl-2 rounded-lg mb-2"
            href="/services"
            size="lg"
          >
            Servicios
          </Link>
          <Link
            className="w-full bg-blue-300 bg-opacity-30 pl-2 rounded-lg mb-2"
            href="/empresa"
            size="lg"
          >
            Empresa
          </Link>
          <Link
            className="w-full bg-blue-300 bg-opacity-30 pl-2 rounded-lg mb-2"
            href="/contact"
            size="lg"
          >
            Contactar
          </Link>
          <Link
            className="w-full bg-blue-300 bg-opacity-30 pl-2 rounded-lg mb-2"
            href="/business"
            size="lg"
          >
            Inteligencia de negocios
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
