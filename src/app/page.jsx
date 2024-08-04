import React from "react";
import Card from "@/components/Card";
import Main from "@/components/Main";
import NavBar from "@/components/NavBar";
import PayDay from "@/components/PayDay";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Container from "@/components/Container";

import Item from "@/components/Item";
import View from "@/components/View";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (!session) redirect("/api/auth/signin");

  return (
    <Main>
      <NavBar />
      <Container>
        <Header user={session.user}/>
        <Card />
        <PayDay />
        <Item />
        <View title="View 1" />
        <View title="View 2" />
        <View title="View 3" />
      </Container>
      <SideBar />
    </Main>
  );
}