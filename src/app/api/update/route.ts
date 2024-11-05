import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
    const { name, image, profession, fixedIncome, payOff, currency, email } = await request.json();

    try {
        const user = await prisma.user.update({
            where: { email },
            data: {
                name,
                image,
                profession,
                fixedIncome,
                payOff,
                currency,
            },
        });
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
    }
}