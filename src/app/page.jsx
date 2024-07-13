import React from "react";
import Card from "@/components/Card";
import Main from "@/components/Main";
import NavBar from "@/components/NavBar";
import PayDay from "@/components/PayDay";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Conteiner from "@/components/Conteiner";

import Item from "@/components/Item";
import View from "@/components/View";

export default function Page() {
  return (
      <Main>
        <NavBar />
        <Conteiner>
          <Header />
          <Card />
          <PayDay />
          <Item />
          <View />
          <View />
          <View />
        </Conteiner>
        <SideBar />
      </Main>
  );
}