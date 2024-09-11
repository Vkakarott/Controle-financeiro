import React, { ReactNode } from "react";
import Home from "@/pages/Home";

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
        default:
            page = <div>No content available</div>
            break;
    }

    return(
        <div className="flex w-full h-full">
            {page}
        </div>
    );
}