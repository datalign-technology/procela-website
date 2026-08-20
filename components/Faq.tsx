"use client";

import { useState } from "react";
import { FAQ_ITEMS as ITEMS } from "@/lib/faq";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-list">
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`faq-item${isOpen ? " open" : ""}`}>
            <button
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              {item.q}
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-a">{item.a}</div>
          </div>
        );
      })}
    </div>
  );
}
