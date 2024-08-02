"use client";

import { useState } from "react";

export default function AccordionTile({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="accordion">
            <button
                className="flex items-center justify-between text-left w-full gap-x-1 text-xl"
                onClick={handleClick}
            >
                <span>{title}</span>
                <svg
                    className="shrink-0"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition-transform ease-out ${
                            isOpen && "!rotate-180"
                        }`}
                    />
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition-transform ease-out ${
                            isOpen && "!rotate-180"
                        }`}
                    />
                </svg>
            </button>
            <div
                className={`grid overflow-hidden transition-all text-slate-600 text-base ${
                    isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <p className="py-4 overflow-hidden">{description}</p>
            </div>
        </div>
    );
}
