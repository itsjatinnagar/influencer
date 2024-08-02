"use client";

import Link from "next/link";
import Button from "../ui/Button";
import NavLinks from "./NavLinks";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 px-5 bg-white">
            <div className="mx-auto container h-20 flex items-center">
                <Button
                    size="icon"
                    variant="ghost"
                    className="md:hidden"
                    onClick={() => setIsOpen(true)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                </Button>
                <Link href="/">
                    <Image
                        alt="plogo"
                        src="/logo.png"
                        width="500"
                        height="500"
                        className="h-20 w-20"
                        priority
                    />
                </Link>
                <nav className="hidden md:flex ml-auto items-center justify-center gap-x-4">
                    <ul className="inline-flex items-center justify-center gap-x-4">
                        <NavLinks />
                    </ul>
                    <div className="inline-flex items-center justify-center gap-x-2">
                        <Button variant="outline">Login</Button>
                        <Button>Talk To Us</Button>
                    </div>
                </nav>
                <div className="flex ml-auto md:hidden items-center justify-center">
                    <Button>Get Started</Button>
                </div>
            </div>
            <div
                className={clsx(
                    "fixed top-0 left-0 h-full w-full overflow-x-hidden bg-white z-20 flex flex-col pt-16 transition-all origin-left scale-x-0 opacity-0",
                    {
                        "scale-x-100 opacity-100": isOpen === true,
                    }
                )}
            >
                <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-3 right-3"
                    onClick={() => setIsOpen(false)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </Button>
                <nav className="px-5 flex flex-col items-start justify-center gap-y-3">
                    <NavLinks />
                    <Button variant="outline">Login</Button>
                    <Button>Talk To Us</Button>
                </nav>
            </div>
        </header>
    );
}
