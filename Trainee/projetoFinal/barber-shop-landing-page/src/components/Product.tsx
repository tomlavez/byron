import React from "react";

interface IProps {
  imgUrl: string;
  imgAlt: string;
  titulo: string;
  descricao: string;
}

const Product = ({ imgUrl, imgAlt, titulo, descricao }: IProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="transition relative w-2/4 md:size-7/12 bg-gray-900 group hover:scale-105">
        <img
          className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50"
          src={imgUrl}
          alt={imgAlt}
        />
        <div className="h-96 flex text-center justify-center">
          <h3 className="absolute bottom-0 text-xl text-bege font-bold bg-azul-escuro-medio group-hover:hidden py-3 bg-opacity-70 w-full">
            {titulo}
          </h3>
          <div className="flex flex-col justify-center transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <div className="flex flex-col p-2 gap-2">
              <h3 className="text-white font-bold">{titulo}</h3>
              <p className="text-sm text-white">{descricao}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
