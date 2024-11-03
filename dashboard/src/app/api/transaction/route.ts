import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { type, value, label, date, userId } = await request.json();

  if (!type || !value || !label || !date) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  try {
    const transaction = await prisma.transaction.create({
      data: {
        type,
        value,
        label,
        date: new Date(date),
        userId,
      },
    });
    return NextResponse.json(transaction, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create transaction" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }  
}
