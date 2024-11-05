import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { UserProvider } from "@/context/UserContext";

import Main from "@/components/Main";

export default async function Page() {
  const session = await auth();
  if (!session) redirect("/api/auth/signin");

  return(
    <UserProvider email={session.user?.email || ""}>
      <Main />
    </UserProvider>
  )
}