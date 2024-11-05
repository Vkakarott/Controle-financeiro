import React from "react";
import Header from "@/components/Header";
import PayDay from "@/components/PayDay";
import SideBar from "@/components/SideBar";
import Tracking from "@/components/Tracking";
import { Overview } from "@/components/Chart";
import LoadingCard from "@/components/LoadingCard";
import Transactions from "@/components/Transactions";
import ErrorCard from "@/components/ErrorCard";

import { useUser } from "@/context/UserContext";

export default function Home() {
    const { user, loading, error } = useUser();

    if (loading) return <LoadingCard/>;
    if (error) return <ErrorCard error={error}/>;

    return (
        <section className="flex w-full h-full">
            <section className="grid grid-cols-6 grid-rows-6 p-8 w-[800px] h-full gap-7">
                <Header user={user}/>
                <Overview email={user?.email ?? ""}/>
                <PayDay payOff={user?.payOff ?? 0}/>
                <Tracking email={user?.email ?? ""}/>
                <Transactions dataBase={user?.transactions ?? []}/>
            </section>
            <SideBar events={[]}/>
        </section>
    )
}