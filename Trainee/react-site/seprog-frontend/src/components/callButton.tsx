import React from "react";

interface IProps {
  start?: boolean;
}

const callButton = ({ start }: IProps) => {
  return (
    <a
      href="http://google.com"
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center gap-4 bg-yellow rounded-xl text-xl shadow py-5 px-8 hover:scale-105 focus:scale-105 focus:outline-none transition-all"
      style={{ alignSelf: start ? "start" : "unset" }}
    >
      <img className="w-6" src="\img\clique.png" alt="Ícone de uma mão" />
      Garanta já sua vaga!
    </a>
  );
};

export default callButton;
