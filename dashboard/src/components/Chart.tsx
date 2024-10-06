"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

const chartConfig = {
    incomes: {
        label: "Incomes",
        color: "var(--chart-1)",
    },
    expenses: {
        label: "Expenses",
        color: "var(--chart-2)",
    },
    balance: {
        label: "Balance",
        color: "var(--chart-3)",
    }
} satisfies ChartConfig;

interface ChatData {
    month: string;
    incomes: number;
    expenses: number;
    balance: number;
}

const currentMonth = new Date().toLocaleString("default", { month: "long" });

export function Chart({ chartData }: { chartData: ChatData[] }) {
    return (
        <Card className="border-none w-full rounded-2xl">
            <CardHeader className="py-3">
                <CardTitle className="flex items-center justify-center text-zinc-400">overview</CardTitle>
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
                        <linearGradient id="fillBalace" x1="0" y1="0" x2="0" y2="1">
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
                        fill="url(#fillBalance)"
                        fillOpacity={0.4}
                        stroke="var(--chart-3)"
                        stackId="a"
                    />
                </AreaChart>
                </ChartContainer>
                <CardFooter className="p-0 pt-2">
                    <div className="flex w-full items-center bg-[var(--cards)] p-3 px-6 rounded-lg gap-6 text-lg font-medium">
                        {
                            chartData[chartData.length - 1].balance > 0 ? (
                                <TrendingUp size={16} className="text-green-500" />
                            ) : (
                                <TrendingUp size={16} className="text-red-500" />
                            )}
                            $ {chartData[chartData.length - 1].balance}
                    </div>
                </CardFooter>
            </CardContent>
        </Card>
    )
}