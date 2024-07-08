import React from "react";
import Main from "@/components/Main";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import Profile from "@/components/Profile";
import Conteiner from "@/components/Conteiner";

export default function Page() {
  return (
      <Main>
        <NavBar />
        <Conteiner>
          <Profile />
        </Conteiner>
        <SideBar />
      </Main>
  );
}