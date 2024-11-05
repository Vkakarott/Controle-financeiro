import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const chartData = months.slice(0, currentMonth + 1).map((month) => ({
        month,
        incomes: 0,
        expenses: 0,
        balance: 0,
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

        user.transactions.forEach(({ date, type, value }) => {
            const transactionDate = new Date(date);
            const transactionYear = transactionDate.getFullYear();
            const transactionMonth = transactionDate.getMonth();

            if (transactionYear === currentYear && transactionMonth <= currentMonth) {
                if (type === "income") {
                    chartData[transactionMonth].incomes += value;
                } else {
                    chartData[transactionMonth].expenses += value;
                }
                chartData[transactionMonth].balance += chartData[transactionMonth].incomes - chartData[transactionMonth].expenses;
            }
        })
    
        return NextResponse.json(chartData, { status: 200 });
      } catch (error) {
        console.error('Error fetching user data:', error);
        return NextResponse.json({ error: 'An error occurred while fetching user data.' }, { status: 500 });
      }
    
}