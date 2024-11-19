import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar navbar-light bg-light mb-3 px-3">
            <h1>CONTACTS</h1>
            <div className="ml-auto">
                {location.pathname === "/" && (
                    <Link to="/addContact">
                        <button className="btn btn-success">Add new contact</button>
                    </Link>
                )}
            </div>
        </nav>
    );
};
