import React from "react";
import Card from "@/components/Card";   
import Item from "@/components/Item";
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

export default function Home({ session }: { session: User }) {
    return (
        <section className="flex w-full h-full">
            <section className="grid grid-cols-6 grid-rows-6 p-8 w-full h-full gap-7">
                <Header user={session}/>
                <Card />
                <PayDay payOff={session.payOff}/>
                <Item />
                <View />
                <View />
                <View />
            </section>
            <SideBar />
        </section>
    )
}