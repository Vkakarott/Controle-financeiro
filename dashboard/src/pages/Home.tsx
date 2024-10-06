import React from "react";
import Card from "@/components/OverviewContainer";   
import Tracking from "@/components/Tracking";
import View from "@/components/View";
import Header from "@/components/Header";
import PayDay from "@/components/PayDay";
import SideBar from "@/components/SideBar";

interface User {
    name: string;
    email: string;
    image: string;
    profession: string;
    fixedIncome: number;
    payOff: number;
}

const chartData = [
    { "label": "electronics", "value": 200 },
    { "label": "drinks", "value": 400 },
    { "label": "food", "value": 300 },
    { "label": "clothes", "value": 100 },
    { "label": "leisure", "value": 500 },
    { "label": "others", "value": 600 },
];

export default function Home({ session }: { session: User }) {
    return (
        <section className="flex w-full h-full">
            <section className="grid grid-cols-6 grid-rows-6 p-8 w-full h-full gap-7">
                <Header user={session}/>
                <Card />
                <PayDay payOff={session.payOff}/>
                <Tracking chartData={chartData}/>
                <View />
                <View />
                <View />
            </section>
            <SideBar />
        </section>
    )
}