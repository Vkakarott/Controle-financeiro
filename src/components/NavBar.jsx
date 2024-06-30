import React from "react";
import "./NavBar.css";
import { BsHouse, BsBoxArrowLeft, BsCurrencyExchange, BsDatabaseAdd, BsDatabaseDash } from "react-icons/bs";

function NavBar() {
    return (
        <div className="navbar">
            <div className="details">
                <div className="pages">
                    <BsHouse size={25} color="#fff" />
                </div>
                <div className="inputs">
                    <BsCurrencyExchange size={24} color="#fff" />
                    <BsDatabaseAdd size={24} color="#fff" />
                    <BsDatabaseDash size={24} color="#fff" />
                </div>
            </div>
            <BsBoxArrowLeft style={{padding: 25}} size={27} color="#000" />
        </div>
    )
}

export default NavBar;