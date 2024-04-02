"use client";

import Image from "next/image";
import Button from "@/components/Button";
import axiosHeader from "@/api/axiosHeader";
import { useEffect, useState } from "react";
import { RMChar } from "@/interface/RMChar";

export default function Home() {
  const [characters, setCharacter] = useState<RMChar[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      setLoading(true);

      const req = async () => {
        const res = await axiosHeader.get("/films");
        setCharacter(res.data);
        console.log(res.data);
      };

      req();
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <main className="flex items-center justify-center w-screen">
      <section className="flex flex-col items-center justify-evenly gap-4 max-w-xs p-8 rounded shadow bg-RMGreen">
        {loading ? (
          "Carregando..."
        ) : (
          <ul className="grid grid-cols-3 gap-4">
            {characters &&
              characters.map((char, index) => (
                <li key={index}>
                  <picture>
                    <img src={char.image} alt="" />
                  </picture>
                </li>
              ))}
          </ul>
        )}
      </section>
    </main>
  );
}
