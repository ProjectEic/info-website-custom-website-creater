
"use client";
import React, { useState } from 'react';
import AccordionItem from './interfaceAccordionItem';

const Accordion = ({accordionData}: {accordionData: AccordionItem[]}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full rounded-md">
      {accordionData.map((item, index) => (
        <div className="rounded" key={index}>
          <button
            className="w-fit text-left focus:outline-none hover:bg-gray-200 hover:p-4 transition-all duration-200 ease-in-out"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
          </button>
          <div className={`p-4 bg-white ${activeIndex === index ? 'block' : 'hidden'}`}>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
