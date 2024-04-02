import React from "react";

interface IProps {
  imgUrl: string;
  imgAlt: string;
  name: string;
  price: string;
}

const Services = ({ imgUrl, imgAlt, name, price }: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex flex-col items-center justify-center gap-y-3 md:size-full">
        <img
          className="object-cover h-4/5 w-4/5 md:h-full md:w-full bg-black rounded-2xl border-2 border-azul-escuro-forte brightness-75"
          src={imgUrl}
          alt={imgAlt}
        />
        <div className="flex flex-col items-center p-1 gap-2">
          <h3 className="text-2xl font-bold">{name}</h3>
          <span className="text-lg">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
