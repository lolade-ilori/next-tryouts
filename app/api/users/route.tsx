import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";


export async function GET(request: NextRequest) {
    const user =  await prisma.user.findMany()

    return NextResponse.json(user)
}

export async function POST (request: NextRequest) {
    const body =  await request.json()

    // Validate
    const validation = schema.safeParse(body)
    // If invalid, return 400
    if (!validation.success) 
        return NextResponse.json(validation.error.errors, {status: 400})

    // Check if user exists
    const user = await prisma.user.findUnique({
        where: {email: body.email}
    })

    if (user) 
        return NextResponse.json({error: 'User already exists'}, {status: 400})

    // Else, create user object and store in db
    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email
        }
    })

    return NextResponse.json(newUser, {status: 201})
}