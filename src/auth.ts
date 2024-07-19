import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null

        if (credentials.email === "teste" && credentials.password === "123")
            user = credentials
 
        if (!user) {
          throw new Error("User not found.")
        }
 
        return user
      },
    }),
  ],
})