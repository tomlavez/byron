import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-center h-20 bg-blue-dark">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <img
          className="w-40 drop-shadow"
          src="\img\logo.svg"
          alt="Logo da seprog"
        />
        <ul className="flex items-center gap-8 text-white font-medium">
          <li>
            <a
              className="hover:text-yellow hover:underline focus:text-yellow focus:underline focus:outline-none trasition-all"
              href="#sobre"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              className="hover:text-yellow hover:underline focus:text-yellow focus:underline focus:outline-none trasition-all"
              href="#organizadores"
            >
              Organizadores
            </a>
          </li>
          <li>
            <a
              className="hover:text-yellow hover:underline focus:text-yellow focus:underline focus:outline-none trasition-all"
              href="#programacao"
            >
              Programação
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
