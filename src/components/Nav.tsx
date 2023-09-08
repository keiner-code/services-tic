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
import { use, useState } from "react";
import { signOut, useSession } from "next-auth/react";

type option = {
  menuService?: boolean;
  menuEmpresa?: boolean
};
export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [state, dispatch] = useState<option>({
      menuService: false,
      menuEmpresa: false
    }
  );
  const { data: session, status } = useSession();
    
    //console.log(session?.user?.rol);
    
    
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
            <Image src={logo} alt="logo" width={40} height={40} />
            <p className="font-bold text-xs hidden sm:inline-block">
              SERVICIOS Y TIC
            </p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="/"
            className="font-medium text-md ml-4"
          >
            Home
          </Link>
        </NavbarItem>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                onClick={() => dispatch({ menuService: !state.menuService })}
                className="p-0 bg-transparent data-[hover=true]:bg-transparent font-medium text-md ml-4"
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
              <Link className="w-full h-full py-2 ml-2" href="/services">Desarrollo de Software</Link>
            </DropdownItem>

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/services">Soporte Tecnico Especializado</Link>
            </DropdownItem>

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/services">Comercializacion de Productos Tecnologicos</Link>
            </DropdownItem>

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/services">Consulterias, Asesorias y Capacitaciones</Link>
            </DropdownItem>

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/services">Redes y Telecomunicaciones</Link>
            </DropdownItem>

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/services">Servicio de Inteligencia de Negocios</Link>
            </DropdownItem>

          </DropdownMenu>

        </Dropdown>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                onClick={() => dispatch({ menuEmpresa: !state.menuEmpresa })}
                className="p-0 bg-transparent data-[hover=true]:bg-transparent font-medium text-md ml-4"
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
              <Link className="w-full h-full py-2 ml-2" href="/empresa">Quienes Somos</Link>
            </DropdownItem>

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/empresa">Vision y Mision</Link>
            </DropdownItem>

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/empresa">Valores Corporativos</Link>
            </DropdownItem>

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/empresa">¿Por que Escogernos?</Link>
            </DropdownItem>

          </DropdownMenu>

        </Dropdown>

        <NavbarItem>
          <Link
            color="foreground"
            href="/contact"
            aria-current="page"
            className="font-medium text-md ml-4"
          >
            Contactar
          </Link>
        </NavbarItem>
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
                  Registrarse{/* <i className="fa-solid fa-user-plus"></i> */}
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
                      src: `${session?.user?.image}`,
                    }}
                    className="transition-transform"
                    description="Gestion"
                    name={session?.user?.name}
                    />
                    </div>
                    <div className="md:hidden">
                        <Avatar src={session?.user?.image as string} />
                    </div>
                    {/* session?.user?.rol */}
                    </div>
                </DropdownTrigger>


                <DropdownMenu aria-label="User Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-bold">{session?.user?.name}</p>
                  </DropdownItem>
                  <DropdownItem key="system">
                    {session?.user?.email}
                  </DropdownItem>
                  <DropdownItem key="configurations">Ver Perfil</DropdownItem>
                  <DropdownItem key="help_and_feedback">
                    Ayuda & Comentario
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    <button onClick={() => signOut()}> Cerrar Sesión</button>
                  </DropdownItem>
                </DropdownMenu>

              </Dropdown>
            )}
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className=" top-14">
        <NavbarMenuItem>
          <Link className="w-full bg-blue-300 bg-opacity-30 pl-2 rounded-lg mb-2" href="/" size="lg">
            Home
          </Link>
          <Link className="w-full bg-blue-300 bg-opacity-30 pl-2 rounded-lg mb-2" href="/services" size="lg">
            Servicios
          </Link>
          <Link className="w-full bg-blue-300 bg-opacity-30 pl-2 rounded-lg mb-2" href="/empresa" size="lg">
            Empresa
          </Link>
          <Link className="w-full bg-blue-300 bg-opacity-30 pl-2 rounded-lg mb-2" href="/contact" size="lg">
            Contactar
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
