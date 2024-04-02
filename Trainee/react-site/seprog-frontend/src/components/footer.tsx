import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-blue-dark text-white">
      <div className="flex flex-col items-center w-full max-w-6xl">
        <div className="flex items-center gap-36 p-4">
          <div className="flex flex-col items-center w-52">
            <img src="\img\unifei.png" alt="Logo da UNIFEI" />
            <img src="\img\imc.png" alt="Logo do IMC" />
          </div>

          <div className="flex flex-col items-center w-48">
            <img src="\img\logo_seprog.png" alt="Logo da SEPROG" />
            <img src="\img\TextLogoTitle.png" alt="SEPROG 2022" />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold">Organizadores</h2>

            <ul className="flex flex-col font-light text-xl">
              <li>byron.solution</li>
              <li>Black Bee Drones</li>
              <li>Dev-U</li>
              <li>Maratona de Programação</li>
            </ul>
          </div>
        </div>

        <div
          className="flex items-center justify-center w-full text-xl"
          style={{ boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.10)" }}
        >
          <a href="http://byronsolutions.com/" target="_blank" rel="noreferrer">
            <img
              className="w-72"
              src="\img\devbsol.png"
              alt="Logo da byron.solutions"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
