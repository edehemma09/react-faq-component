import React from 'react';
import { AccordionData } from '../types';
import { useEffect, useRef, useState } from 'react';
import './AccordionItem.css';

function AccordionItem({
    data,
    isOpen,
  }: {
    data: AccordionData;
    isOpen: boolean;
    btnOnClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current as HTMLDivElement;

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <li className="accordion-item">
      <h2 className="accordion-item-title">
        <button className="accordion-item-btn">{data.title}</button>
      </h2>
      <div className="accordion-item-container">
        <div className="accordion-item-content">{data.content}</div>
      </div>
    </li>
  );
}

export default AccordionItem;