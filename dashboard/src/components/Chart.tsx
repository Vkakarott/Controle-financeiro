"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

const chartConfig = {
    incomes: {
        label: "Entradas",
        color: "var(--chart-1)",
    },
    expenses: {
        label: "Saídas",
        color: "var(--chart-2)",
    },
    balance: {
        label: "Saldo",
        color: "var(--chart-3)",
    }
} satisfies ChartConfig;

interface OverviewProps {
    email: string;
}

interface Month {
    month: string;
    expenses: number;
    incomes: number;
    balance: number;
}

const currentMonth = new Date().toLocaleString("default", { month: "long" });

export function Overview({ email }: OverviewProps) {
    const [chartData, setChartData] = useState<Month[]>([]);

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`/api/broad?email=${email}`);
            if (!response.ok) {
              throw new Error('Failed to fetch user data');
            }
            const data = await response.json();
            setChartData(data);
          } catch (err) {
            setChartData([]);
          }
        };
    
        if (email) {
          fetchUserData();
        }
    }, [email]);

    const formattedBalance = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      }).format(chartData.length ? chartData[chartData.length - 1].balance : 0);
    
    return (
        <section className="flex flex-col w-full h-full rounded-3xl col-start-1 col-end-5 row-start-2 row-end-5 bg-[var(--cards)] shadow-md shadow-[var(--shadow)]">
            <Card className="border-none w-full rounded-2xl">
                <CardHeader className="py-3">
                    <CardTitle className="flex items-center justify-center text-[var(--text-light)]">overview</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                    <ChartContainer className="h-56 w-full" config={chartConfig}>
                        <AreaChart 
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 13,
                                right: 13,
                            }}
                        >
                        <CartesianGrid vertical={false} />
                        <XAxis 
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <defs>
                            <linearGradient id="fillIncomes" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--chart-1)"
                                    stopOpacity={0.8}
                                />
                            </linearGradient>
                            <linearGradient id="fillExpenses" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--chart-2)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--chart-2)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                            <linearGradient id="fillBallance" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--chart-3)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--chart-3)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <Area
                            dataKey="incomes"
                            type="natural"
                            fill="url(#fillIncomes)"
                            fillOpacity={0.4}
                            stroke="var(--chart-1)"
                            stackId="a"
                        />
                        <Area
                            dataKey="expenses"
                            type="natural"
                            fill="url(#fillExpenses)"
                            fillOpacity={0.4}
                            stroke="var(--chart-2)"
                            stackId="a"
                        />
                        <Area
                            dataKey="balance"
                            type="natural"
                            fill="url(#fillBallance)"
                            fillOpacity={0.4}
                            stroke="var(--chart-3)"
                            stackId="a"
                        />
                    </AreaChart>
                    </ChartContainer>
                    <CardFooter className="p-0 pt-2">
                    <div className="flex w-full items-center bg-[var(--cards)] p-3 px-6 rounded-lg gap-6 text-lg font-medium">
                        {chartData.length && chartData[chartData.length - 1].balance > 0 ? (
                            <TrendingUp size={16} className="text-green-500" />
                            ) : (
                            <TrendingUp size={16} className="text-red-500" />
                            )}
                        $ {chartData.length ? formattedBalance : "0.00"}
                    </div>
                    </CardFooter>
                </CardContent>
            </Card>
        </section>
    )
}