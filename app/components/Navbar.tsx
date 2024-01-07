"use client"
import { ShoppingCart } from "lucide-react";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "@/components/ui/button";

const links = [
    { href: "/", label: "Home" },
    { href: "/Men", label: "Men" },
    { href: "/Women", label: "Women" },
    { href: "/Teens", label: "Teens" }
]

export default function Navbar() {
    const pathName = usePathname();
    const { handleCartClick } = useShoppingCart();
    return <header className="mb-8 border-b-2">
        <div className=" flex items-center justify-between mx-auto max-w-2xl py-4 px-4 sm:px-6 lg:max-w-7xl">
            <Link href="/">
                <h1 className="text-4xl font-bold">Next<span className="text-primary">Gen</span></h1>
            </Link>
            <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                {links.map((link) => {
                    return <Link href={link.href} key={link.href}><p className={link.href === pathName ? "text-primary border-b-primary border-b" : "hover:border-b border-b-accent transition duration-1000"}>{link.label}</p></Link>
                })}
            </nav>
            <div className="flex p-2">
                <Button variant={"outline"} onClick={() => handleCartClick()}>
                    <ShoppingCart />
                </Button>
            </div>
        </div>
    </header>
}