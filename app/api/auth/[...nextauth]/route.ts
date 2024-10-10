import NextAuth, { NextAuthOptions } from "next-auth"
import { authOtpions } from "../authOptions"



const handler = NextAuth(authOtpions)

export { handler as GET, handler as POST }

// We are letting NExtAuth expose a bunch of edpoints that start with /auth