/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import { HeaderProps } from "./Header.types";

export function Header(props: HeaderProps) {
  const { onChangeLangage } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("pt-BR");

  const menuOptions = [
    {
      displayNamePT: "Inicio",
      displayNameEN: "Home",
      displayNameES: "Comienzo",
      route: "/",
    },
    {
      displayNamePT: "Agentes",
      displayNameEN: "Agents",
      displayNameES: "Agentes",
      route: "/agents",
    },
    {
      displayNamePT: "Mapas",
      displayNameEN: "Maps",
      displayNameES: "Mapas",
      route: "/maps",
    },
  ];

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
          <img src="menu-icon.svg" alt="menu" />
        </button>

        <nav className="w-[200px] hidden laptop:block">
          <ul>
            <div className="flex flex-row justify-between">
              {menuOptions.map((item, index) => (
                <li key={index}>
                  <a href={item.route}>
                    {language === "pt-BR"
                      ? item.displayNamePT
                      : language === "en-US"
                      ? item.displayNameEN
                      : item.displayNameES}
                  </a>
                </li>
              ))}
            </div>
          </ul>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className={`bg-brand-500 w-full h-screen fixed top-0 ${
            isMenuOpen ? "translate-x-0 ease-in-out" : "translate-x-full"
          }`}
        >
          <div className="w-screen flex flex-col h-screen">
            <div className="flex flex-row h-[70px] items-center justify-between border-b-4 border-slate-900 px-4">
              <img
                src="logo.png"
                alt="Logo do Valorant"
                className="w-[60px] h-[45px]"
              />
              <button className="laptop:hidden" onClick={handleMenu}>
                <img src="close-icon.png" alt="menu" />
              </button>
            </div>
            <ul>
              {menuOptions.map((item, index) => (
                <button
                  key={index}
                  className="w-screen flex h-[50px] border-b-2 border-slate-900 items-center justify-center"
                >
                  <a href={item.route}>
                    {language === "pt-BR"
                      ? item.displayNamePT
                      : language === "en-US"
                      ? item.displayNameEN
                      : item.displayNameES}
                  </a>
                </button>
              ))}
            </ul>

            <div className="flex flex-col w-screen h-[50px] items-center justify-center mb-2 fixed bottom-0">
              <p>
                {language === "pt-BR"
                  ? "Escolha uma língua"
                  : language === "en-US"
                  ? "Choose you language"
                  : "Elige tu idioma"}
              </p>
              <div
                className="flex flex-row w-[100px] justify-between mt-2"
                aria-label="Clique para mudar a página para Português"
              >
                <button
                  className=""
                  onClick={() => {
                    onChangeLangage("pt-BR");
                    setLanguage("pt-BR");
                  }}
                >
                  <img
                    src="pt-br.svg"
                    alt="Bandeira do Brasil"
                    className="w-[30px] h-[20px]"
                  />
                </button>

                <button
                  className=""
                  onClick={() => {
                    onChangeLangage("en-US");
                    setLanguage("en-US");
                  }}
                  aria-label="Click here to change the langage to english"
                >
                  <img
                    src="en-en.svg"
                    alt="Bandeira da Inglaterra"
                    className="w-[30px] h-[20px]"
                  />
                </button>

                <button
                  className=""
                  onClick={() => {
                    onChangeLangage("es-ES");
                    setLanguage("es-ES");
                  }}
                  aria-label="Haga clic aquí para cambiar a español"
                >
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
