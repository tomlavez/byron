import Button from "./Button";

export function Footer() {
  return (
    <div className="flex items-center justify-center bg-azul-escuro-forte py-6">
      <footer className="flex flex-col items-center justify-center text-bege text-center mb-6 max-w-screen-xl">
        <div className="flex items-start justify-around w-screen  max-w-screen-xl gap-1 gap-x-2">
          <div className="hidden md:flex w-1/4">
            <img
              className="w-3/5"
              src="/img/barba-rolling-logo.png"
              alt="Logo da barbearia rolling stones"
            />
          </div>
          <div className="flex flex-col w-1/3 md:w-1/4 items-center">
            <h2 className="font-semibold text-lg text-start">Links úteis</h2>
            <ul className="flex flex-col pl-4 py-1 items-start">
              <a href="#home">
                <li>Home</li>
              </a>
              <a href="#sobre">
                <li>Sobre</li>
              </a>
              <a href="#valores">
                <li>Valores</li>
              </a>
              <a href="#produtos">
                <li>Produtos</li>
              </a>
              <a href="#contato">
                <li>Contato</li>
              </a>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-3 w-1/3 md:w-1/4">
            <h2 className="font-semibold text-lg">Contate-nos!</h2>

            <Button
              content={"Agende já!"}
              isSubmitType={false}
              addClass="w-11/12 max-w-28"
              href="https://www.whatsapp.com/"
            />
          </div>
          <div className="flex flex-col items-center w-1/3 md:w-1/4 gap-y-3">
            <h2 className="font-semibold text-lg">Redes Sociais</h2>
            <ul className="flex gap-3">
              <li className="w-1/3">
                <a href="https://facebook.com/" target="_blank">
                  <img
                    className="w-11/12 max-w-8"
                    src="/img/logo-facebook.png"
                    alt="Logo do facebook"
                  />
                </a>
              </li>
              <li className="w-1/3">
                <a href="https://www.instagram.com/" target="_blank">
                  <img
                    className="w-11/12 max-w-8"
                    src="/img/logo-instagram.png"
                    alt="Logo do instagram"
                  />
                </a>
              </li>
              <li className="w-1/3">
                <a href="https://web.whatsapp.com/" target="_blank">
                  <img
                    className="w-11/12 max-w-8"
                    src="/img/logo-whatsapp.png"
                    alt="Logo do whatsapp"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-4 gap-y-2">
          <div className="text-sm font-semibold">
            Desenvolvido por
            <a href="https://github.com/tomlavez" target="_blank">
              {" "}
              Tomás Lavez
            </a>{" "}
            e
            <a href="https://github.com/PedroNB10" target="_blank">
              {" "}
              Pedro Nogueira
            </a>
          </div>
          <a
            className="flex justify-center"
            href="https://www.byronsolutions.com/"
            target="_blank"
          >
            <img
              className="w-5/12"
              src="/img/logo-byron.png"
              alt="Logo da byron.solutions"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
