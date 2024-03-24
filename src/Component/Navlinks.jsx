import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import React from 'react';



const links = [
    {
        id: 1,
        url: "/",
        text: "home"
    },
    {
        id: 2,
        url: "about",
        text: "about"
    },
    {
        id: 3,
        url: "products",
        text: "products"
    },
    {
        id: 4,
        url: "checkout",
        text: "checkout"
    },
    {
        id: 5,
        url: "orders",
        text: "orders"
    },
];

export const NavLinks = () => {
    const user = useSelector((state) => state.userSlice.user);

    return (
        <>
            {links.map((link) => {
                const { id, url, text } = link;
                if ((url === "checkout" || url === "orders") && !user) {
                    return null;
                } else {
                    return (
                        <li key={id}>
                            <NavLink className="capitalize" to={url}>
                                {text}
                            </NavLink>
                        </li>
                    );
                }
            })}
        </>
    );
};
