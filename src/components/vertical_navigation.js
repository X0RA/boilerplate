import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 px-6 py-4">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">My Website</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                        About
                    </Link>
                    <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
