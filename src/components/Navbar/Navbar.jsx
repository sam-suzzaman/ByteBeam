import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";
import Toggler from "../ModeToggler/Toggler";

const Links = [
    {
        _id: 1,
        path: "/",
        title: "home",
    },
    {
        _id: 2,
        path: "/about",
        title: "about",
    },
    {
        _id: 3,
        path: "/contact",
        title: "contact",
    },
    {
        _id: 4,
        path: "/login",
        title: "login",
    },
    {
        _id: 5,
        path: "/register",
        title: "register",
    },
    {
        _id: 6,
        path: "/dashboard",
        title: "dashboard",
    },
];

const Navbar = () => {
    return (
        <>
            <div className={style.navbar_shadow}>
                <div className={style.navbar_container}>
                    <div className={`navbar bg-base-100`}>
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost lg:hidden"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16"
                                        />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52 rounded-sm"
                                >
                                    {Links?.map((link) => {
                                        return (
                                            <li key={link._id}>
                                                <Link
                                                    href={link.path}
                                                    className="capitalize"
                                                >
                                                    {link.title}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <Link
                                href="/"
                                className="font-bold text-2xl text-primary"
                            >
                                _ ByteBeam
                            </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {Links?.map((link) => {
                                    return (
                                        <li key={link._id}>
                                            <Link
                                                href={link.path}
                                                className="capitalize"
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <Toggler />
                            <Link
                                href="/login"
                                className="btn btn-sm btn-success text-white rounded-md"
                            >
                                Login now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
