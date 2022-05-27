/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import { HeaderProps } from "./Header.types";

export function Header(props: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className="w-full h-[70px] border-b-4 border-slate-900 laptop:px-8 sm:px-4 bg-brand-500 flex items-center justify-between">
        <img
          src="logo.png"
          alt="Logo do Valorant"
          className="w-[60px] h-[45px]"
        />

        <button className="laptop:hidden" onClick={handleMenu}>
          <img
            src={isMenuOpen ? "close-icon.png" : "menu-icon.svg"}
            alt="menu"
          />
        </button>

        <nav className="w-[200px] hidden laptop:block">
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

      {isMenuOpen && (
        <div className="bg-brand-500 w-full h-screen absolute">
          <div className="w-screen flex flex-col justify-between h-screen">
            <ul>
              <li className="w-screen flex h-[50px] border-b-2 border-slate-900 items-center justify-center">
                <a>Inicio</a>
              </li>
              <li className="w-screen flex h-[50px] border-b-2 border-slate-900 items-center justify-center">
                <a>Agentes</a>
              </li>
              <li className="w-screen flex h-[50px] border-b-2 border-slate-900 items-center justify-center">
                <a>Mapas</a>
              </li>
            </ul>

            <div className="flex flex-col w-screen h-[50px] items-center justify-center mb-2">
              <p>Escolha uma língua</p>
              <div className="flex flex-row w-[100px] justify-between">
                <button className="" onClick={() => null}>
                  <img
                    src="pt-br.svg"
                    alt="Bandeira do Brasil"
                    className="w-[30px] h-[20px]"
                  />
                </button>

                <button className="" onClick={() => null}>
                  <img
                    src="en-en.svg"
                    alt="Bandeira da Inglaterra"
                    className="w-[30px] h-[20px]"
                  />
                </button>

                <button className="" onClick={() => null}>
                  <img
                    src="es-esp.svg"
                    alt="Bandeira da Espanha"
                    className="w-[30px] h-[20px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
