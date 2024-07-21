import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import type { Provider } from "next-auth/providers";
import credentials from "next-auth/providers/credentials";

const providers: Provider[] = [
  Credentials({
    credentials: { 
      username: { label: "Username", type: "text" },
      password: { label: "Password", type: "password" } 
    },
    authorize(c) {
      if (
        c.username === "admin" &&
        c.password === "123"
      ) {
        return {
          id: "test",
          name: "Admin User",
          email: "admin@example.com",
        };
      }
      return null;
    }, 
  }),
]

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider()
    return { id: providerData.id, name: providerData.name }
  } else {
    return { id: provider.id, name: provider.name }
  }
})
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  pages: {
    signIn: "/signin",
  },
});