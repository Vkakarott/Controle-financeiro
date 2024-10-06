"use client";

import React from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent 
} from "@/components/ui/chart";

const chartConfig = {
    food: { color: "var(--chart-1)" },
    electronics: { color: "var(--chart-1)" },
    clothes: { color: "var(--chart-1)" },
    leisure: { color: "var(--chart-1)" },
    drinks: { color: "var(--chart-1)" },
    others: { color: "var(--chart-1)" }
} satisfies ChartConfig

interface ChartData {
    label: string;
    value: number;
}

interface ChartTrackingProps {
    chartData: ChartData[];
}

export default function Tracking({ chartData }: ChartTrackingProps) {
    return (
        <div className="flex justify-center items-center h-56 rounded-3xl col-start-5 col-end-7 row-start-3 row-end-5 bg-[var(--cards)] border-[var(--zinc)] border shadow-md">
            <Card className="w-full h-full bg-transparent rounded-2xl border-none">
                <CardContent className="p-0">
                    <ChartContainer
                        config={chartConfig}
                        className="m-auto aspect-square mt-3 max-h-[200px] text-[10px]"
                    >
                        <RadarChart data={chartData}>
                            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                            <PolarAngleAxis dataKey="label" />
                            <PolarGrid />
                            <Radar
                                dataKey="value"
                                fill="var(--chart-4)"
                                fillOpacity={0.6}
                            />
                        </RadarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
    );
}