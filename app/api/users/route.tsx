import { error } from "console";
import { NextRequest, NextResponse } from "next/server";


export function GET(request: NextRequest) {
    return NextResponse.json([
        {id: 1, name: "Lolade"},
        {id: 2, name: "Mosh"},
    ])
}

export async function POST (request: NextRequest) {
    const body =  await request.json()

    if (!body.name) 
        return NextResponse.json({error: "Name must be present"}, {status: 400})

    // Validate
    // If invalid, return 400
    // Else, return

    return NextResponse.json({id: 1, name: body.name }, {status: 201})
}