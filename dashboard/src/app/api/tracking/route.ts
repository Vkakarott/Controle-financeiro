import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
    const labels = [ "electronicos", "transporte", "alimentação", "roupas" , "lazer", "outros" ];

    const chartData = labels.map((label) => ({
        label,
        value: 0,
    }));
    
    try {
        const searchParams = request.nextUrl.searchParams;
        const email = searchParams.get('email');
    
        if (!email) {
          return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }
    
        const user = await prisma.user.findUnique({
          where: { email }, 
          include: { transactions: true },
        });
    
        if (!user) {
          return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        user.transactions.forEach(({ type, value, label }) => {
            if (type === "expense" && labels.includes(label)) {
                const labelEntry = chartData.find((item) => item.label === label);
                if (labelEntry) labelEntry.value += value;
            }
        })
    
        return NextResponse.json(chartData, { status: 200 });
      } catch (error) {
        console.error('Error fetching user data:', error);
        return NextResponse.json({ error: 'An error occurred while fetching user data.' }, { status: 500 });
      }
    
}