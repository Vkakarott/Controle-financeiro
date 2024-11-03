import React, { ReactNode } from "react";
import Home from "@/pages/Home";
import ConfigProfile from "@/pages/ConfigProfile";

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
            page = <div>No content available</div>
            break;
    }

    return(
        <section className="flex w-full h-full">
            {page}
        </section>
    );
}