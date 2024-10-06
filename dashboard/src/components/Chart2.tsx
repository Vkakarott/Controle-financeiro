"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
    alimentos: {
        color: "var(--chart-1)"
    },
    eletronicos: {
        color: "var(--chart-1)"
    },
    roupas: {
        color: "var(--chart-1)"
    },
    lazer: {
        color: "var(--chart-1)"
    },
    bebidas: {
        color: "var(--chart-1)"
    },
    outros: {
        color: "var(--chart-1)"
    }
} satisfies ChartConfig

interface ChartData {
    label: string;
    value: number;
}

interface ChartTrackingProps {
    chartData: ChartData[];
}

export function ChartTracking({ chartData }: ChartTrackingProps) {
  return (
    <Card className="w-full h-60 mt-8 rounded-2xl">
      <CardContent className="p-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
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
  )
}
