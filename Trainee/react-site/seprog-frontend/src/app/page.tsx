"use client";

import CallButton from "@/components/callButton";
import ParticipantButton from "@/components/participantButton";
import { Tab } from "@headlessui/react";
import axiosHeader from "@/api/axiosHeader";
import { IHomepage, Attributes } from "@/interface/IHomepage";
import { IOrganizers } from "@/interface/IOrganizers";
import ISchedules from "@/interface/ISchedules";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface IProps {
  homepage: Attributes;
  organizers: IOrganizers[];
  schedules: ISchedules[];
}

export default function Home({ homepage, organizers, schedules }: IProps) {
  try {
    const req = async () => {
      const homepageRes = await axiosHeader.get<IHomepage>("homepage");
      const homepage = homepageRes.data.data.attributes;

      const organizersRes = await axiosHeader.get<IOrganizers>(
        "organizers?populate=*"
      );
      const organizers = organizersRes.data.data;

      const schedulesRes = await axiosHeader.get<ISchedules>(
        "schedules?populate=*"
      );
      const schedules = schedulesRes.data.data;

      return {
        props: { homepage, organizers, schedules },
      };
    };

    req();
  } catch (error) {
    throw error;
  }

  return (
    <>
      {/* Hero */}
      <section className="flex items-center justify-center bg-gradient-to-b from-blue-light to-blue-dark text-white py-12">
        <div className="flex items-center max-w-6xl w-full">
          <div className="flex flex-col gap-16 max-w-lg">
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl font-bold drop-shadow">
                {homepage.heroTitle}
              </h1>

              <p>{homepage.heroDescription}</p>
            </div>

            <CallButton start></CallButton>
          </div>

          <picture>
            <img
              className="w-[72rem]"
              src="\img\BlockGroups.png"
              alt="Blocos empilhados com o escrito 'De 19 a 23 de setembro!' por cima"
            />
          </picture>
        </div>
      </section>

      {/* Sobre */}
      <section
        id="sobre"
        className="flex items-center justify-center bg-blue-dark text-white py-12"
      >
        <div className="flex flex-col items-center max-w-6xl w-full py-8">
          <div className="flex items-center gap-24">
            <img
              className="w-[32rem]"
              src="\img\apresentacao.png"
              alt="Várias pessoas em uma sala de aula"
            />
            <div className="flex flex-col gap-5">
              <span className="bg-white rounded w-20 h-0.5"></span>
              <h2 className="text-xl font-bold">Sobre a SEPROG</h2>
              <p className="text-4xl font-bold drop-shadow">
                {homepage.aboutTitle}
              </p>
              <p>{homepage.aboutDescription}</p>
            </div>
          </div>

          <div
            id="organizadores"
            className="flex flex-col items-center gap-24 py-32"
          >
            <div className="flex flex-col items-center gap-16">
              <h2 className="font-bold text-4xl">Aprenda com os melhores!</h2>

              <div className="grid grid-cols-2 gap-10">
                {organizers.map((participant, key) => (
                  <ParticipantButton
                    key={key}
                    data={participant}
                  ></ParticipantButton>
                ))}
              </div>
            </div>

            <CallButton></CallButton>
          </div>
        </div>
      </section>

      {/* Programação */}
      <section
        id="programacao"
        className="flex items-center justify-center bg-gradient-to-b from-blue-dark to-blue-light text-white py-12 pb-36"
      >
        <div className="flex flex-col items-center max-w-6xl w-full">
          <Tab.Group>
            <div className="flex items-center rounded-3xl bg-gray shadow">
              <Tab.List className="flex flex-col items-start first:rounded-tl-2xl">
                {schedules.map((tab, index) => (
                  <Tab
                    key={index}
                    className={({ selected }) =>
                      classNames(
                        "bg-blue-dark rounded-r-2xl first:rounded-tl-2xl first:rounded-tr-none last:rounded-bl-2xl last:rounded-br-none shadow-lg w-80",
                        selected ? "bg-blue-light w-[360px] z-10" : ""
                      )
                    }
                  >
                    <button className="flex flex-col items-start gap-2 text-xl px-6 py-3 text-left">
                      <h3 className="text-2xl font-bold">
                        {tab.data[0].attributes.tabDay}
                      </h3>
                      <span className="font-bold">
                        {tab.data[0].attributes.organizer}
                      </span>
                      <p>{tab.data[0].attributes.theme}</p>
                    </button>
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                {schedules.map((tab, index) => (
                  <Tab.Panel
                    key={index}
                    className="bg-blue-light m-16 p-6 rounded-3xl"
                  >
                    <h2>{tab.data[0].attributes.organizer}</h2>

                    <p>{tab.data[0].attributes.theme}</p>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </section>

      {/* Localização */}
      <section className="flex items-center justify-center bg-gradient-to-b from-blue-light to-blue-dark text-white py-16">
        <div className="flex flex-col items-center gap-8 max-w-6xl w-full">
          <h2 className="text-4xl font-bold drop-shadow">
            Localização do evento
          </h2>

          <iframe
            className="w-full rounded-[48px] border-4 border-yellow shadow"
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Av.%20B%20P%20S,%201435-1453%20-%20Centro,%20Itajub%C3%A1%20-%20MG,%2037500-502+(Unifei)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps tracker sport</a>
          </iframe>

          <img className="w-20" src="/img/mapa.png" alt="Ícone de um mapa" />

          <span className="text-4xl font-bold">SEPROG</span>

          <div className="flex flex-col items-center gap-4 text-xl">
            <span className="text-2xl font-bold">
              Instituto de Matemática e Computação - UNIFEI
            </span>
            <span>Avenida B P S, 1303 - Pinheirinhos</span>
            <span>Itajubá - MG</span>
          </div>
        </div>
      </section>
    </>
  );
}
