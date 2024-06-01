"use client";
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import AccordionItem from './accordion/interfaceAccordionItem';
import Datenschutzerklaerung from './Datenschutzerklaerung';
import Impressum from './Impressum';

const Accordion = dynamic(() => import('./accordion/accordion'), { ssr: false });

export default function Rechtliches() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const AccordionDataDatenschutz: AccordionItem[] = [
    { title: "Klicken Sie hier, um die Beispiel Datenschutzerklärung anzuzeigen oder zu schließen", content: <Datenschutzerklaerung /> },
  ];
  const AccordionDataImpressum: AccordionItem[] = [
    { title: "Klicken Sie hier, um das Beispiel Impressum anzuzeigen oder zu schließen", content: <Impressum /> },
  ];

  return (
    <section
      id="Rechtliches"
      className="text-[#434656] w-screen flex items-center flex-col bg-[#d4edeb] h-[max-content] gap-24 p-24"
    >
      <div>
        <h3 className="font-mono text-5xl text-center tracking-[15px]">Rechtliches</h3>
      </div>
      <ol className="pl-4 flex flex-col gap-12 w-full">
        <li className="mb-4 text-lg">
          <p className="text-2xl underline">Datenschutzerklärung:</p>
          <ol className="">
            <li className="mb-2">
              <span className="font-semibold">Info: </span>Die Datenschutzerklärung wird von uns erstellt und mit ihren Datenangepasst, sodass sie rechtlich abeesichert sind. 
            </li>
            <li className="mb-2">
              {isClient && <Accordion accordionData={AccordionDataDatenschutz} />}
            </li>
          </ol>
        </li>
        <li className="mb-4 text-lg">
          <p className="text-2xl underline">Impressum:</p>
          <ol className="">
            <li className="mb-2">
              <span className="font-semibold">Info: </span>Das Impressum wird von uns erstellt und mit ihren Datenangepasst, sodass sie rechtlich abgesichert sind. 
            </li>
            <li className="mb-2">
              {isClient && <Accordion accordionData={AccordionDataImpressum} />}
            </li>
          </ol>
        </li>
      </ol>
    </section>
  );
}
