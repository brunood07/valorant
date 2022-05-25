/* eslint-disable @next/next/no-img-element */
import { HeaderProps } from "./Header.types";

export function Header(props: HeaderProps) {
  return (
    <div className="w-full h-[70px] border-b-4 border-slate-900 laptop:px-8 sm:px-2 bg-brand-500 flex items-center justify-between">
      <img
        src="logo.png"
        alt="Logo do Valorant"
        className="w-[60px] h-[45px]"
      />

      <nav className="w-[200px] sm:hidden laptop:block">
        <ul>
          <div className="flex flex-row justify-between">
            <li>
              <a href="#" className="hover:opacity-70">
                Inicio
              </a>
            </li>

            <li>
              <a href="#" className="hover:opacity-70">
                Agentes
              </a>
            </li>

            <li>
              <a href="#" className="hover:opacity-70">
                Mapas
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
