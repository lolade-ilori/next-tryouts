import prisma from "@/prisma/client"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from 'bcrypt'
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";


export const authOtpions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      Credentials({
        credentials: {
          email: { label: "Email", type: 'email', placeholder: 'Email' },
          password: { label: "Password", type: "password", placeholder: 'Password' },
        },
        async authorize(credentials, req) {
          if (!credentials?.email || !credentials.password) return null
  
          const user  = await prisma.user.findUnique({where: {email: credentials.email }})
  
          if (!user) return null
  
          const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword!)
  
          return passwordMatch ? user : null
        },
      }),
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!
      })
    
    ],
    session: {
      strategy: 'jwt'
    }
  
  }