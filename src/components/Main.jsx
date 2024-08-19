"use client"

import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import ContainerPage from "@/components/ContainerPage";

export default function Main({session}) {
    const [page, setPage] = useState("home");

    const handlePage = (page) => {
        setPage(page);
    };

    return (
        <div className="flex items-center justify-center h-[780px] w-[95%] bg-[var(--bruma)] rounded-[40px] border-[3px] border-[var(--border)] shadow-[0_0_15px_3px_var(--shawdon)] xl:w-[1200px] transition-all duration-500">
            <div className="flex items-center justify-between h-[95%] w-[97%] bg-[var(--backpage)] rounded-[30px] shadow-sm">
                <NavBar onNavClick={handlePage} />
                <ContainerPage activePage={page} session={session} />
            </div>
        </div>
    );
}