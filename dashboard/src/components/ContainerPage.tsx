import React, { ReactNode } from "react";
import Home from "@/pages/Home";
import Calendar from "@/pages/Calendar";
import Graphics from "@/pages/Graphics";
import ConfigProfile from "@/pages/ConfigProfile";

export interface ContainerPageProps {
    activePage: string;
    session: any;
}

export default function ContainerPage({ activePage, session }: ContainerPageProps) {
    let page: ReactNode;

    switch (activePage) {
        case "home":
            page = <Home session={session} />;
            break;
        case "statistics":
            page = <Graphics />;
            break;
        case "calendar":
            page = <Calendar />;
            break;
        case "config-profile":
            page = <ConfigProfile session={session} />;
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