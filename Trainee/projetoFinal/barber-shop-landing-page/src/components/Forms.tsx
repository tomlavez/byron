"use client";

import { FormEvent, useEffect, useState } from "react";

import { Toaster, toast } from "sonner";
import emailjs from "@emailjs/browser";
import Button from "./Button";

interface IProps {
  SERVICE_ID: string;
  TEMPLATE_ID: string;
  PUBLIC_KEY: string;
}

export interface UserInputs {
  name: string;
  email: string;
  message: string;
}

export default function Forms() {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (telephone.length === 1) {
      setTelephone("(" + telephone);
    }
    if (telephone.length == 3) {
      setTelephone(telephone + ")");
    }
    if (telephone.length === 10) {
      setTelephone(telephone + "-");
    }

    if (telephone.length > 15) {
      setTelephone(telephone.slice(0, 15));
    }
  }, [telephone]);

  const IDs = {
    PUBLIC_KEY:
      process.env.NEXT_PUBLIC_PUBLIC_KEY == undefined
        ? ""
        : process.env.NEXT_PUBLIC_PUBLIC_KEY,
    SERVICE_ID:
      process.env.NEXT_PUBLIC_SERVICE_ID == undefined
        ? ""
        : process.env.NEXT_PUBLIC_SERVICE_ID,
    TEMPLATE_ID:
      process.env.NEXT_PUBLIC_TEMPLATE_ID == undefined
        ? ""
        : process.env.NEXT_PUBLIC_TEMPLATE_ID,
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      message === "" ||
      telephone === "" ||
      subject === ""
    ) {
      toast.error("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      phone: telephone,
      subject: subject,
      message: message,
      email: email,
    };

    try {
      emailjs
        .send(IDs.SERVICE_ID, IDs.TEMPLATE_ID, templateParams, IDs.PUBLIC_KEY)
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            if (response.status === 200) {
              toast.success("Email enviado com sucesso!");
              setName("");
              setEmail("");
              setMessage("");
              setSubject("");
              setTelephone("");
            }
          },
          (err) => {
            console.log("FAILED...", err);
            toast.error("Erro ao enviar email");
          }
        );
    } catch (err) {
      console.log(err);
      toast.error("Erro ao enviar email");
    }
  }

  return (
    <div>
      <div className="bg-bege mx-auto p-6 space-y-7 rounded-lg">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-[75vw] md:w-[50vw] "
        >
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="p-2 rounded-lg  bg-cinza text-bege"
            type="text"
            placeholder="Digite seu nome"
          />
          <input
            type="tel"
            value={telephone}
            onChange={(e) => {
              setTelephone(e.target.value);
            }}
            className="p-2 rounded-lg  bg-cinza text-bege"
            placeholder="Ex: (11) 99999-9999"
          />
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="p-2 rounded-lg  bg-cinza text-bege"
            placeholder="Digite seu email"
          />
          <input
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="p-2 rounded-lg  bg-cinza text-bege"
            placeholder="Digite o assunto"
          />

          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name=""
            id=""
            className="resize-none p-2 rounded-md bg-cinza text-bege h-40 w-full"
            placeholder="Escreva sua mensagem"
          ></textarea>

          <Button
            content="Enviar formulário"
            isSubmitType={true}
            addClass="border-none rounded-xl"
          />
        </form>
      </div>
      <Toaster richColors />
    </div>
  );
}
