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
} from "@nextui-org/react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

//hay que tiparlo
type option = {
  menuService?: boolean;
  menuEmpresa?: boolean
};
export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [state, dispatch] = useState<option>(
    { //aqui es para inicializar la variable
      menuService: false,
      menuEmpresa: false
    }
  );
  const { data: session, status } = useSession();

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="border-b-1 h-14 sm:shadow-sm mb-2"
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

        {/*copiar todo el dropdown */}
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
                  <i className="fa-solid fa-angle-down text-xs"></i>
                ) : (
                  <i className="fa-solid fa-angle-up text-xs"></i>
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
            {/*tomar este codigo de referencia para los otros */}
            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/services">Desarrollo de Software</Link>
            </DropdownItem>
            {/*hasta aqu */}

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/services">Soporte Tecnico Especializado</Link>
            </DropdownItem>

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/services">Distribucion de Dispositivos Tecnologicos</Link>
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
        {/*hasta aqui */}

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
                {state.menuEmpresa ? ( //cambiar la variable por la que corresponda
                  <i className="fa-solid fa-angle-down text-xs"></i>
                ) : (
                  <i className="fa-solid fa-angle-up text-xs"></i>
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
            {/*tomar este codigo de referencia para los otros */}
            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/empresa">Quienes Somos</Link>
            </DropdownItem>
            {/*hasta aqu */}

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/empresa">Vision y Mision</Link>
            </DropdownItem>

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/empresa">Valores Corporativos</Link>
            </DropdownItem>

            <DropdownItem className="m-0 p-0">
              <Link className="w-full h-full py-2 ml-2" href="/empresa">¿Porque elegirnos?</Link>
            </DropdownItem>

          </DropdownMenu>
        </Dropdown>

        {/*<NavbarItem>
          <Link
            color="foreground"
            href="#"
            aria-current="page"
            className="font-medium text-md ml-4"
          >
            Blog
          </Link>
        </NavbarItem>*/}

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
              <div className="flex gap-2">
                <Link
                  className="border border-green-500 p-2 rounded-lg text-green-500"
                  href="/login"
                >
                  Iniciar Session
                </Link>
                <Link
                  className="bg-blue-500 border border-blue-500 p-2 rounded-lg text-white"
                  href="/login"
                >
                  Registrarse
                </Link>
              </div>
            ) : (
              <Dropdown placement="bottom-start">
                <DropdownTrigger>
                  <User
                    as="button"
                    avatarProps={{
                      isBordered: true,
                      src: `${session?.user?.image}`,
                    }}
                    className="transition-transform"
                    description={session?.user?.rol}
                    name={`@${session?.user?.name}`}
                  />
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
          <Link color={"secondary"} className="w-full " href="#" size="lg">
            Home
          </Link>
          <Link color={"secondary"} className="w-full " href="#" size="lg">
            Soporte Tecnico
          </Link>
          <Link color={"secondary"} className="w-full " href="#" size="lg">
            Desarrollo Web
          </Link>
          <Link color={"secondary"} className="w-full " href="#" size="lg">
            Asesoria
          </Link>
          <Link color={"secondary"} className="w-full " href="#" size="lg">
            Big Data
          </Link>
          <Link color={"secondary"} className="w-full " href="#" size="lg">
            Marketing
          </Link>
          <Link color={"secondary"} className="w-full " href="#" size="lg">
            Big Data
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
