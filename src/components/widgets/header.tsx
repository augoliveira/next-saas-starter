import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between p-5 lg:px-0 lg:py-5">
        <section>
          <Link
            href="/"
            className="flex items-center text-lg font-black uppercase text-white"
          >
            <span className="mr-px flex h-4 w-4 items-center justify-center rounded bg-white text-black">
              S
            </span>
            lider
          </Link>
        </section>
        <section>
          <ul className="hidden items-center gap-x-8 lg:flex">
            <li>
              <Link
                href="/"
                className="relative text-white transition-colors duration-300 before:absolute before:-bottom-2 before:left-0 before:h-0.5 before:w-full before:rounded-full before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="relative transition-colors duration-300 before:absolute before:-bottom-2 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-white before:transition-all before:duration-300 hover:text-white hover:before:w-full"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="relative transition-colors duration-300 before:absolute before:-bottom-2 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-white before:transition-all before:duration-300 hover:text-white hover:before:w-full"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="relative transition-colors duration-300 before:absolute before:-bottom-2 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-white before:transition-all before:duration-300 hover:text-white hover:before:w-full"
              >
                Contacto
              </Link>
            </li>
          </ul>
          <button type="button" className="relative lg:hidden">
            <span className="absolute -top-4 right-0 h-0.5 w-8 bg-white" />
            <span className="absolute -top-2 right-0 h-0.5 w-8 bg-white" />
            <span className="absolute right-0 top-0 h-0.5 w-8 bg-white" />
          </button>
        </section>
      </div>
    </header>
  );
};

export default Header;
