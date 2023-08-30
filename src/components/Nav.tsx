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
type option = {
  menuService?: boolean;
};

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [state, dispatch] = useState<option>({ menuService: false });
  const { data: session, status } = useSession();
  
  const menuItems = [
    {
      item: "Home",
    },
    {
      item: "Soporte Tecnico",
    },
    {
      item: "Desarrollo Web",
    },
    {
      item: "Asesoria",
    },
    {
      item: "Big Data",
    },
    {
      item: "Marketing",
    },
    {
      item: "Iniciar Session",
    },
  ];

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

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                onClick={() => dispatch({ menuService: !state.menuService })}
                disableRipple
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
            <DropdownItem
              key="supreme_support"
              description="Conoce nuestra forma de hacer soporte desde tu hogar"
            >
              Soporte Tecnico
            </DropdownItem>

            <DropdownItem
              key="supreme_support"
              description="Contamos con personas expertas en el tema"
            >
              Desarrollo Web
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="font-medium text-md ml-4"
          >
            Empresa
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            aria-current="page"
            className="font-medium text-md ml-4"
          >
            Blog
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            color="foreground"
            href="#"
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
                      src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                    }}
                    className="transition-transform"
                    description="administrador"
                    name={`@${session?.user?.name}`}
                  />
                </DropdownTrigger>

                <DropdownMenu aria-label="User Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-bold">{session?.user?.name}</p>
                  </DropdownItem>
                  <DropdownItem key="system">{session?.user?.email}</DropdownItem>
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
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={"secondary"}
              /* color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"

                  
              } */
              className="w-full "
              href="#"
              size="lg"
            >
              {item.item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
