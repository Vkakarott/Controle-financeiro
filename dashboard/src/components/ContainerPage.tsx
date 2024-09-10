import React from "react";
import Home from "@/pages/Home";
import ConfigProfile from "@/pages/ConfigProfile";

export default function ContainerPage({ activePage, session }) {
    let content: React.ReactNode;

    switch (activePage) {
        case "home":
            content = <Home session={session}/>;
        case "profile":
            content = <ConfigProfile session={session}/>;
            break;
        default:
            content = <div>No content available</div>;
            break;
    }

    return (
        <div className="flex w-full h-full">
            {content}
        </div>
    );
}