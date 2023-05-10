import React from "react";
import { Link } from "react-router-dom";
import links from "./links";

const Navigation = () => {
    return (
        <nav className="bg-gray-800 h-full w-60 fixed top-0 left-0 overflow-y-auto">
            <div className="px-4 py-5 text-center">
                <h1 className="text-white font-bold text-lg uppercase">My Website</h1>
            </div>
            <div className="px-4 py-6 flex flex-col justify-center items-center">
                <ul>
                    {links.map((link, i) => (
                        <li key={i}>
                            <Link to={link.link} className="text-gray-400 hover:text-white font-bold block py-2">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
