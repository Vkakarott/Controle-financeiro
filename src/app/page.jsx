import React from "react";
import Main from "@/components/Main";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

export default function Page() {
  return (
      <Main>
        <NavBar />
        <div>
          main
        </div>
        <SideBar />
      </Main>
  );
}