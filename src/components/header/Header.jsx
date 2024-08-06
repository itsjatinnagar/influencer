"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./NavLinks";
import Button from "../common/Button";
import MenuButton from "./MenuButton";
import CloseButton from "./CloseButton";
import clsx from "clsx";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <header className="sticky top-0 z-50 px-5 bg-white">
            <div className="mx-auto container h-20 flex items-center justify-between">
                <Link href="/">
                    <Image
                        alt="marvel collabs"
                        src="/logo.png"
                        width="1080"
                        height="1080"
                        className="h-20 w-20"
                        priority
                    />
                </Link>
                <nav className="hidden md:flex ml-auto items-center justify-center gap-x-4">
                    <ul className="inline-flex items-center justify-center gap-x-4">
                        <NavLinks />
                    </ul>
                    <div className="inline-flex items-center justify-center gap-x-2">
                        <Button variant="outline" asLink href="/login">
                            Login As Brand
                        </Button>
                        <Button asLink href="/login">
                            Login As Influencer
                        </Button>
                    </div>
                </nav>
                <MenuButton onClickHandler={open} />
            </div>
            <div
                className={clsx(
                    "fixed top-0 left-0 h-full w-full px-5 overflow-x-hidden bg-white z-20 flex flex-col transition-all origin-left scale-x-0 opacity-0",
                    {
                        "scale-x-100 opacity-100": isOpen === true,
                    }
                )}
            >
                <div className="h-20 flex items-center justify-end">
                    <CloseButton onClickHandler={close} />
                </div>
                <nav className="flex flex-col items-start justify-center gap-y-3">
                    <NavLinks />
                    <Button variant="outline" asLink href="/login">
                        Login As Brand
                    </Button>
                    <Button asLink href="/login">
                        Login As Influencer
                    </Button>
                </nav>
            </div>
        </header>
    );
}
