"use client";

import * as React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive bar chart";

const chartData = [
  {
    date: "2024-04-01",
    desktop: 222,
    mobile: 150,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-02",
    desktop: 97,
    mobile: 180,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-03",
    desktop: 167,
    mobile: 120,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-04",
    desktop: 242,
    mobile: 260,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-05",
    desktop: 373,
    mobile: 290,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-06",
    desktop: 301,
    mobile: 340,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-07",
    desktop: 245,
    mobile: 180,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-08",
    desktop: 409,
    mobile: 320,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-09",
    desktop: 59,
    mobile: 110,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-10",
    desktop: 261,
    mobile: 190,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-11",
    desktop: 327,
    mobile: 350,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-12",
    desktop: 292,
    mobile: 210,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-13",
    desktop: 342,
    mobile: 380,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-14",
    desktop: 137,
    mobile: 220,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-15",
    desktop: 120,
    mobile: 170,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-16",
    desktop: 138,
    mobile: 190,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-17",
    desktop: 446,
    mobile: 360,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-18",
    desktop: 364,
    mobile: 410,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-19",
    desktop: 243,
    mobile: 180,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-20",
    desktop: 89,
    mobile: 150,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-21",
    desktop: 137,
    mobile: 200,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-22",
    desktop: 224,
    mobile: 170,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-23",
    desktop: 138,
    mobile: 230,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-24",
    desktop: 387,
    mobile: 290,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-25",
    desktop: 215,
    mobile: 250,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-26",
    desktop: 75,
    mobile: 130,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-27",
    desktop: 383,
    mobile: 420,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-28",
    desktop: 122,
    mobile: 180,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-29",
    desktop: 315,
    mobile: 240,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-04-30",
    desktop: 454,
    mobile: 380,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-01",
    desktop: 165,
    mobile: 220,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-02",
    desktop: 293,
    mobile: 310,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-03",
    desktop: 247,
    mobile: 190,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-04",
    desktop: 385,
    mobile: 420,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-05",
    desktop: 481,
    mobile: 390,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-06",
    desktop: 498,
    mobile: 520,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-07",
    desktop: 388,
    mobile: 300,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-08",
    desktop: 149,
    mobile: 210,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-09",
    desktop: 227,
    mobile: 180,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-10",
    desktop: 293,
    mobile: 330,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-11",
    desktop: 335,
    mobile: 270,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-12",
    desktop: 197,
    mobile: 240,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-13",
    desktop: 197,
    mobile: 160,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-14",
    desktop: 448,
    mobile: 490,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-15",
    desktop: 473,
    mobile: 380,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-16",
    desktop: 338,
    mobile: 400,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-17",
    desktop: 499,
    mobile: 420,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-18",
    desktop: 315,
    mobile: 350,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-19",
    desktop: 235,
    mobile: 180,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-20",
    desktop: 177,
    mobile: 230,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-21",
    desktop: 82,
    mobile: 140,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-22",
    desktop: 81,
    mobile: 120,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-23",
    desktop: 95,
    mobile: 180,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-24",
    desktop: 64,
    mobile: 140,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-25",
    desktop: 87,
    mobile: 160,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-26",
    desktop: 111,
    mobile: 190,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
  {
    date: "2024-05-27",
    desktop: 92,
    mobile: 170,
    desktopColor: "#FFA500",
    mobileColor: "#0000FF",
  },
];

const chartConfig: ChartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "#FFA500",
  },
  mobile: {
    label: "Mobile",
    color: "#28A745",
  },
};

export function BigChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("desktop");

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  );

  const color = chartConfig[activeChart].color;

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Bar Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["desktop", "mobile"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />
              <Tooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    nameKey="views"
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      });
                    }}
                  />
                }
              />
              <Bar
                dataKey={activeChart}
                fill={color} // Set the color dynamically based on activeChart
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
