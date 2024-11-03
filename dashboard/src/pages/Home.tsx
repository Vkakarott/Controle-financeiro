import React from "react";
import Header from "@/components/Header";
import PayDay from "@/components/PayDay";
import SideBar from "@/components/SideBar";
import Tracking from "@/components/Tracking";
import Card from "@/components/OverviewContainer";   
import Transactions from "@/components/Transactions";

import { useUser } from "@/context/UserContext";

const chartData = [
    { "label": "electronics", "value": 200 },
    { "label": "drinks", "value": 400 },
    { "label": "food", "value": 300 },
    { "label": "clothes", "value": 100 },
    { "label": "leisure", "value": 500 },
    { "label": "others", "value": 600 },
];

export default function Home() {
    const { user, loading, error } = useUser();
    console.log("user", user);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <section className="flex w-full h-full">
            <section className="grid grid-cols-6 grid-rows-6 p-8 w-full h-full gap-7">
                <Header user={user}/>
                <Card />
                <PayDay payOff={user?.payOff ?? 0}/>
                <Tracking chartData={chartData}/>
                <Transactions dataBase={user?.transactions ?? []}/>
            </section>
            <SideBar events={[]}/>
        </section>
    )
}