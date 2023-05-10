import React from "react";
import { Link, useLocation } from "react-router-dom";
import links from "./links";

const Navigation = () => {
    const location = useLocation();
    return (
        <>
            <nav className="flex items-center justify-between flex-wrap px-6 py-4 h-16 bg-slate-700 border-8 border-slate-800">
                <div className="w-full h-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <p className="text-gray-400 font-bold flex-grow text-center">
                        Website - {links.find((link) => link.link === location.pathname).name}
                    </p>
                </div>
            </nav>

            <div
                className="bg-gray-800 h-full w-60 fixed top-14 left-0 overflow-y-auto bg-slate-700 border-8 border-slate-800"
                style={{ height: "calc(100% - 56px)" }}>
                <div className="px-4 py-6 flex flex-col">
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
            </div>
        </>
    );
};

export default Navigation;
