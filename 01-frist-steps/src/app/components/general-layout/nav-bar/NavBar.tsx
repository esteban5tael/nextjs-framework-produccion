import { NavBarItem } from "@/app/interfaces";
import Link from "next/link";
import {
    FaHome,
    FaAddressCard,
    FaAtlas,
    FaCommentDollar,
} from "react-icons/fa";
import { ActiveLink } from "../";

const navBarItems: NavBarItem[] = [
    { label: "About", href: "/about", icon: <FaAddressCard /> },
    { label: "Contact", href: "/contact", icon: <FaAtlas /> },
    { label: "Pricing", href: "/pricing", icon: <FaCommentDollar /> },
];

export const NavBar = () => {
    return (
        <>
            <nav className="flex bg-slate-950 bg-opacity-30 p-2 rounded">
                <span>
                    <Link
                        href="/"
                        className="flex items-center text-white"
                        prefetch={true}
                    >
                        <FaHome className="mr-2" />
                        Home
                    </Link>
                </span>
                <div></div>
                <ul className="flex ml-auto text-white">
                    {navBarItems.map((item) => (
                        <li
                            key={item.href}
                            className="mx-2 flex items-center"
                        >
                            
                           <ActiveLink key={item.href} {...item} />
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};
