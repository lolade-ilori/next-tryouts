import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
    params: {id: string}
}


export async function GET (request: NextRequest, {params: {id}}:Props) {    
    // Fetch the user with the given id
    const user = await prisma.user.findUnique({
        where: {id: parseInt(id)}
    })
    // If doesn't exist, return 404
    if (!user) 
        return NextResponse.json({error: "User not found"}, {status: 404})
    
    // Return the given user
    return NextResponse.json(user)
}

export async function PUT(request: NextRequest, {params: {id}}: Props) {
    // Validate the request body
    const body = await request.json()
    // If invalid, return 400
    // parse method throws an exception if there's a validation error, but safe parse just returns an object that contains the result of validation
    const validation = schema.safeParse(body)
    if(!validation.success) 
        return NextResponse.json( validation.error.errors, {status: 400})
    // Fetch the user with the given id
    // If doesn't exist, return 404
    const user = await prisma.user.findUnique({
        where: {id: parseInt(id)}
    })
    if (!user)
        return NextResponse.json({error: 'User not found'}, {status: 404})
    // Update the user
    // Return the updated user
    const updatedUser = await prisma.user.update({
        where: {id: user.id}, // here we specify the user we want to update
        data: { //here we specify the data we want to update
            name: body.name,
            email: body.email
        }
    })
    return NextResponse.json(updatedUser)
}

export async function DELETE(request: NextRequest, {params: {id}}: Props) {
    // Fetch user from db
    const user = await prisma.user.findUnique({
        where: {id: parseInt(id)}
    })
    // If not found, return 404
    if (!user)
        return NextResponse.json({error: 'User not found'}, {status: 404})
    // Delete the user
    await prisma.user.delete({
        where: {id: user.id}
    })
    // Return 200
    return NextResponse.json({})
}