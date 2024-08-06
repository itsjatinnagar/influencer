"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "i'm a creator",
        href: "/creator",
    },
    {
        name: "influencers",
        href: "/influencers",
    },
    {
        name: "resources",
        href: "/resources",
    },
];

export default function NavLinks() {
    const pathname = usePathname();

    const style = (href) =>
        clsx("uppercase text-sm transition-colors hover:text-slate-700", {
            "text-slate-700": pathname === href,
        });

    return (
        <>
            {links.map((link) => {
                return (
                    <li key={link.href}>
                        <Link href={link.href} className={style(link.href)}>
                            {link.name}
                        </Link>
                    </li>
                );
            })}
        </>
    );
}
