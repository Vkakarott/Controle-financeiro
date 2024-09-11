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
    id: string;
}

interface Session {
    user: User;
    expires: string;
}

export default function Home({ session }: { session: Session }) {
    return (
        <div className="flex w-full h-full">
            <div className="grid grid-cols-6 grid-rows-6 p-8 w-full h-full gap-7">
                <Header user={session.user}/>
                <Card />
                <PayDay />
                <Item />
                <View />
                <View />
                <View />
            </div>
            <SideBar />
        </div>
    )
}