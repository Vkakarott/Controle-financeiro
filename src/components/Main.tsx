"use client"

import React, { useState } from "react";
import NavBar from "./NavBar";
import ContainerPage from "./ContainerPage";

export default function Main() {
    const [page, setPage] = useState("home");

    const handlePage = (page: string) => {
        setPage(page);
    }

    return (
        <main className="flex items-center justify-center h-[97%] w-11/12 bg-[var(--bruma)] rounded-[40px] border-[3px] border-[var(--border)] shadow-[0_0_15px_3px_var(--shadow)] xl:w-[1220px] transition-all duration-500">
            <section className="flex items-center justify-between h-[95%] w-[97%] bg-[var(--backpage)] rounded-[30px] shadow-sm">
                <NavBar onNavClick={handlePage}/>
                <ContainerPage activePage={page}/>
            </section>
        </main>
    )
}