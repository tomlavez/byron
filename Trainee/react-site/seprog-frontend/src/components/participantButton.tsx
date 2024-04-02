"use client";

import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IOrganizers } from "@/interface/IOrganizers";

interface IProps {
  data: IOrganizers;
}
[0];

const participantButton = ({ data }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="p-3 bg-blue-light rounded-2xl shadow hover:scale-[1.01] transition-all">
        <div className="flex items-center p-4 gap-9 bg-white rounded-2xl">
          <img
            className="rounded-xl border-2 border-blue-light w-16"
            src={`http://127.0.0.1:1337/api/${data.data[0].attributes.logo.attributes.url}`}
            alt={`http://127.0.0.1:1337/api/${data.data[0].attributes.logo.attributes.alternativeText}`}
          />
          <div className="flex flex-col items-start text-black">
            <span className="font-bold">{`http://127.0.0.1:1337/api/${data.data[0].attributes.organizer}`}</span>
            <span>{`http://127.0.0.1:1337/api/${data.data[0].attributes.shortContent}`}</span>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="hover:scale-105 focus:scale-105 focus:outline-none transition-all"
          >
            <img
              className="w-12"
              src="\img\download.png"
              alt="ícone de download"
            />
          </button>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-10"
      >
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-lg"
          aria-hidden="true"
        />
        <div className={"fixed inset-0 flex items-center justify-center"}>
          <Dialog.Panel className={"p-3 bg-blue-light rounded-2xl"}>
            <div className="flex flex-col p-4 gap-9 bg-white rounded-2xl max-w-lg">
              <div className="flex items-center justify-between">
                <img
                  className="rounded-xl border-2 border-blue-light w-16"
                  src={`http://127.0.0.1:1337/api/${data.data[0].attributes.logo.attributes.url}`}
                  alt={`http://127.0.0.1:1337/api/${data.data[0].attributes.logo.attributes.alternativeText}`}
                />
                <span className="font-bold text-4xl">{`http://127.0.0.1:1337/api/${data.data[0].attributes.organizer}`}</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:scale-105 focus:scale-105 focus:outline-none transition-all"
                >
                  <img
                    className="w-12"
                    src="\img\seta-cima.png"
                    alt="Seta para cima"
                  />
                </button>
              </div>
              <p>{`http://127.0.0.1:1337/api/${data.data[0].attributes.shortContent}`}</p>
              <p className="text-lg">{`http://127.0.0.1:1337/api/${data.data[0].attributes.longContent}`}</p>
              <a
                className="self-center text-3xl font-bold hover:underline"
                href={`http://127.0.0.1:1337/api/${data.data[0].attributes.socialUrl}`}
              >
                {`http://127.0.0.1:1337/api/${data.data[0].attributes.socialName}`}
              </a>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default participantButton;
