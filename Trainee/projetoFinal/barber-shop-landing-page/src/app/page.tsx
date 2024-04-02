import Product from "@/components/Product";
import Services from "@/components/Services";
import { Carousel, Slide } from "@/components/Carousel";
import Forms from "@/components/Forms";
import Button from "@/components/Button";

export default function Home() {
  let slides: Slide[] = [
    {
      src: "img/carrossel-01.jpg",
      alt: "Rapaz cortando o cabelo de um outro homem.",
    },
    {
      src: "img/carrossel-02.jpg",
      alt: "Corte em foco de um outro cabeleireiro.",
    },
    {
      src: "img/carrossel-03.jpg",
      alt: "Barbeiro realizando um corte preciso na barba do cliente.",
    },
  ];

  return (
    <>
      {/* Carrossel */}
      <section id="home" className="scroll-m-32">
        <Carousel slides={slides} />
      </section>

      {/* Sobre */}
      <section
        id="sobre"
        className="flex items-center justify-center py-6 bg-[url('/img/img-sobre-escura.jpg')] bg-local bg-cover bg-center md:bg-none md:bg-azul-escuro-forte scroll-m-24"
      >
        <div className="md:flex md:flex-row items-center pb-8 max-w-screen-xl">
          <img
            className="hidden md:flex w-6/12 rounded-r-full mt-4"
            src="/img/img-sobre.jpg"
            alt="imagem da barbearia mostrando as cadeiras e o ambiente interno."
          />
          <div className="flex flex-col items-center justify-center md:w-6/12">
            <h2 className="text-3xl md:text-6xl text-vermelho-claro md:text-vermelho font-rollingstone py-6">
              Sobre
            </h2>
            <div className="w-3/4 rounded-3xl p-4">
              <p className="text-bege text-center text-lg font-semibold">
                Na Barba Rolling, não cortamos apenas cabelos, esculpimos
                identidades. Deixe-nos levar você a uma jornada de
                autenticidade, onde cada corte e barba reflete quem você é.
                Bem-vindo ao seu refúgio de estilo, bem-vindo à Barba Rolling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section
        id="valores"
        className="flex items-center justify-center bg-azul-escuro-forte py-6 scroll-m-24"
      >
        <div className="flex flex-col items-center justify-center text-bege bg-azul-escuro-forte mb-6 max-w-screen-xl">
          <h2 className="text-3xl md:text-6xl font-rollingstone py-6 md:mb-16">
            Valores
          </h2>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <div className="flex md:flex-col items-center justify-center w-5/12 md:h-72 md:justify-around ml-5">
              <span className="flex text-lg text-center font-medium">
                Venha conhecer a Barba Rolling e descubra o seu novo estilo. Se
                for sua primeira vez conosco, você recebe o corte de
                sobrancelha/barba de graça.
              </span>
              <div className="hidden md:flex">
                <Button
                  content="Agende já"
                  isSubmitType={false}
                  href="https://www.whatsapp.com/"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-4 pb-6">
              <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 rounded-md gap-6 md:gap-3 lg:gap-8 md:mr-5">
                <Services
                  imgUrl="\img\valor-barba.jpg"
                  imgAlt="Imagem de uma barba"
                  name="Barba"
                  price="R$30,00"
                ></Services>
                <Services
                  imgUrl="\img\valor-cabelo.jpg"
                  imgAlt="Imagem de um homem cortando o cabelo"
                  name="Cabelo"
                  price="R$50,00"
                ></Services>
                <Services
                  imgUrl="\img\valor-sobrancelha.jpg"
                  imgAlt="Imagem de um homem na barbearia sorrindo"
                  name="Sobrancelha"
                  price="R$25,00"
                ></Services>
              </div>
              <div className="md:hidden flex">
                <Button
                  content="Agende já"
                  isSubmitType={false}
                  href="https://www.whatsapp.com/"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section
        id="produtos"
        className="flex items-center justify-center bg-gradient-to-b from-azul-escuro-forte to-black py-6 scroll-m-24"
      >
        <div className="flex flex-col items-center justify-center max-w-screen-xl mb-8">
          <div className="flex flex-col items-center justify-center mb-6">
            <h2 className="text-3xl md:text-6xl text-bege font-rollingstone m-9 md:mb-16">
              Produtos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row auto-rows items-center justify-center gap-y-32 md:mx-6 md:flex-row ">
            <Product
              imgUrl="\img\pomada-cabelo.jpg"
              imgAlt="Imagem de uma Pomada Modeladora para Cabelo"
              titulo="Pomada Modeladora para Cabelo"
              descricao="Oferece fixação flexível e duradoura, permitindo estilos versáteis com facilidade."
            ></Product>
            <Product
              imgUrl="\img\creme-de-barbear.jpg"
              imgAlt="Imagem de um Creme de Barbear Hidratante"
              titulo="Creme de Barbear Hidratante"
              descricao="Proporciona uma experiência de barbear suave e luxuosa, reduzindo a irritação e prevenindo cortes."
            ></Product>
            <Product
              imgUrl="\img\escova.jpg"
              imgAlt="Imagem de uma Escova para Barba e um Pente de Madeira"
              titulo="Escova para Barba e Pente de Madeira"
              descricao="Desembaraça e alinha os pelos da barba, promovendo uma aparência arrumada e natural."
            ></Product>

            <Product
              imgUrl="\img\oleo-barba.jpg"
              imgAlt="Imagem de um Óleo para Barba Hidratante"
              titulo="Óleo para Barba Hidratante"
              descricao="Nutre e suaviza a barba, eliminando o ressecamento e conferindo um brilho saudável."
            ></Product>

            <Product
              imgUrl="\img\cera.jpg"
              imgAlt="Imagem de uma Cera Modeladora para Bigode"
              titulo="Cera Modeladora para Bigode"
              descricao="Define e molda o bigode, garantindo um estilo impecável que dura o dia todo."
            ></Product>

            <Product
              imgUrl="\img\spray.jpg"
              imgAlt="Imagem de um Spray Revitalizante para Cabelo e Barba"
              titulo="Spray Revitalizante para Cabelo e Barba"
              descricao="Refresca e revitaliza instantaneamente, proporcionando um impulso de energia para o cabelo e a barba."
            ></Product>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section
        id="contato"
        className="flex flex-col items-center justify-center bg-black py-10 gap-10 scroll-m-24"
      >
        <h2 className="text-3xl md:text-6xl text-bege font-rollingstone ">
          Contato
        </h2>
        <div className="flex flex-col items-center justify-center max-w-screen-xl">
          <Forms />
        </div>
      </section>
    </>
  );
}
