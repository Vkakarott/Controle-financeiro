"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartConfig = {
    food: { color: "var(--chart-1)" },
    electronics: { color: "var(--chart-1)" },
    clothes: { color: "var(--chart-1)" },
    leisure: { color: "var(--chart-1)" },
    drinks: { color: "var(--chart-1)" },
    others: { color: "var(--chart-1)" }
} satisfies ChartConfig

interface TrackingProps {
    email: string;
}

interface Labels {
    label: string;
    value: number;
}

export default function Tracking({ email }: TrackingProps) {
    const [chartData, setChartData] = useState<Labels[]>([]);

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`/api/tracking?email=${email}`);
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