import React, { ReactNode } from "react";
import Home from "@/pages/Home";
import ConfigProfile from "@/pages/ConfigProfile";
import ErrorCard from "./ErrorCard";

export interface ContainerPageProps {
    activePage: string;
}

export default function ContainerPage({ activePage }: ContainerPageProps) {
    let page: ReactNode;

    switch (activePage) {
        case "home":
            page = <Home />;
            break;
        case "config-profile":
            page = <ConfigProfile />;
            break;
        default:
            page = <ErrorCard error={ "Page not found" } />;
            break;
    }

    return(
        <section className="flex w-full h-full">
            {page}
        </section>
    );
}