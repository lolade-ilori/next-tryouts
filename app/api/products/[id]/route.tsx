import prisma from "@/prisma/client";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
    params: {id: string}
}

export async function GET (request: NextRequest, {params: {id}}: Props) {
    // check if the item is in the db
    const product = await prisma.product.findUnique({
        where: {id: parseInt(id)}
    })

    if (!product) {
        return NextResponse.json({error: 'Product not found'}, {status: 404})
    }

    return NextResponse.json(product)
}

export async function PUT (request: NextRequest, {params: {id}}: Props) {
    const body = await request.json()

    // Validate what is in the body
    const validation = schema.safeParse(body)

    // if validation is wrong send error
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400})

    const product = await prisma.product.findUnique({
        where: {id: parseInt(id)}
    })

    if (!product) 
        return NextResponse.json({error: 'Product not found'}, {status: 404})

    const updatedProduct = await prisma.product.update({
        where: {id: product.id},
        data: {
            name: body.name,
            price: body.price
        }
    })

    return NextResponse.json(updatedProduct)
}

export async function DELETE (request:NextRequest, {params: {id}}:Props) {
    const product = await prisma.product.findUnique({
        where: {id: parseInt(id)}
    })

    if (!product) 
        return NextResponse.json({error: 'Product not found'}, {status: 404})

    await prisma.product.delete({
        where: {id: parseInt(id)}
    })

    return NextResponse.json({})
}

