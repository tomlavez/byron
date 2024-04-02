"use client";

import { useState } from "react";

import Link from "next/link";

export function Header() {
  const [showMenu, setShowMenu] = useState("hidden");

  function openMenu() {
    setShowMenu("visible");
  }

  function closeMenu() {
    setShowMenu("hidden");
  }

  return (
    <div className="pb-24 md:pb-32 scroll-smooth">
      <div className="flex   items-center justify-center  w-full bg-azul-escuro-forte fixed z-10 ">
        <header
          className={`${
            showMenu == "visible" ? "hidden" : "visible"
          }  bg-azul-escuro-forte text-white h-24 md:h-32 flex items-center z-10 md:w-[65vw] lg:w-[55vw] justify-around`}
        >
          <img
            className="w-[65px] md:24 "
            src="/img/barba-rolling-logo.png"
            alt="logo da barbearia"
          />

          <ul className="hidden md:visible md:flex items-center gap-6">
            <Link href="/#home">
              <li
                onClick={closeMenu}
                className="uppercase text-bege font-rollingstone text-md hover:text-vermelho hover:underline cursor-pointer select-none"
              >
                home
              </li>
            </Link>
            <Link href="/#sobre">
              <li
                onClick={closeMenu}
                id=""
                className="uppercase text-bege font-rollingstone text-md hover:text-vermelho hover:underline cursor-pointer select-none "
              >
                Sobre
              </li>
            </Link>
            <Link href="/#valores">
              <li
                onClick={closeMenu}
                id=""
                className="uppercase text-bege font-rollingstone text-md hover:text-vermelho hover:underline cursor-pointer select-none "
              >
                Valores
              </li>
            </Link>
            <Link href="/#produtos">
              <li
                onClick={closeMenu}
                id=""
                className="uppercase text-bege font-rollingstone text-md hover:text-vermelho hover:underline cursor-pointer select-none "
              >
                Produtos
              </li>
            </Link>
            <Link href="/#contato">
              <li
                onClick={closeMenu}
                id=""
                className="uppercase text-bege font-rollingstone text-md hover:text-vermelho hover:underline cursor-pointer select-none "
              >
                Contato
              </li>
            </Link>
          </ul>
          <div className="md:absolute flex gap-8">
            <h1 className="font-rollingstone uppercase md:hidden text-bege">
              Barba Rolling
            </h1>
            {/* Ícone de MenuBar */}
            <div className="flex ">
              <button onClick={openMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="md:hidden md:w-0 md:h-0  w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <div
          className={` ${
            showMenu == "visible" ? "h-80" : "h-0"
          }  fixed top-0 left-0 right-0 z-10 bg-bege flex flex-col items-center justify-center transition-all duration-500 ease-in-out  scroll-smooth`}
        >
          <button>
            <svg
              onClick={closeMenu}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${showMenu} md:hidden  w-10 h-10 absolute top-5 right-5 `}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col gap-4 text-center scroll-smooth">
            <Link onClick={closeMenu} href="/#home">
              <li
                className={`${showMenu} font-rollingstone text-azul-escuro-forte uppercase hover:text-vermelho hover:underline`}
              >
                Home
              </li>
            </Link>
            <Link onClick={closeMenu} href="/#sobre">
              <li
                className={`${showMenu} font-rollingstone text-azul-escuro-forte uppercase hover:text-vermelho hover:underline`}
              >
                Sobre
              </li>
            </Link>
            <Link onClick={closeMenu} href="/#valores">
              <li
                className={`${showMenu} font-rollingstone text-azul-escuro-forte uppercase hover:text-vermelho hover:underline`}
              >
                Valores
              </li>
            </Link>

            <Link onClick={closeMenu} href="/#produtos">
              <li
                className={`${showMenu} font-rollingstone text-azul-escuro-forte uppercase hover:text-vermelho hover:underline`}
              >
                Produtos
              </li>
            </Link>
            <Link onClick={closeMenu} href="/#contato">
              <li
                className={`${showMenu} font-rollingstone text-azul-escuro-forte uppercase hover:text-vermelho hover:underline`}
              >
                Contato
              </li>
            </Link>
          </ul>
        </div>
        {showMenu === "visible" ? (
          <div className="pt-80" />
        ) : (
          <div
            className={`pt-24 md:pt-32 ${
              showMenu == "visible" ? "pt-0" : "pt-24"
            }`}
          />
        )}
      </div>
    </div>
  );
}
