import React from "react";
import "./NavBar.css";
import { BsHouse, BsBoxArrowLeft, BsCurrencyExchange, BsDatabaseAdd, BsDatabaseDash } from "react-icons/bs";

function NavBar() {
    return (
        <div className="navbar">
            <BsHouse size={23} color="#fff" />
            <div className="inputs">
                <BsCurrencyExchange  size={23} color="#fff"/>
                <BsDatabaseAdd size={23} color="#fff" />
                <BsDatabaseDash size={23} color="#fff" />
            </div>
            <BsBoxArrowLeft size={23} color="#fff" />
        </div>
    )
}

export default NavBar;