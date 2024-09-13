"use client";

import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardHeader, CardContent } from "../../../../components/ui/card";
import { BigChart } from "./_components/chart";
import { Donut } from "./_components/donut";
import { BarChartt } from "./_components/bar";
import { LineChartt } from "./_components/line";

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b shadow-md">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>Card Title 1</CardHeader>
          <CardContent>
            <p>Some cool stats here...</p>
            <LineChartt />
            <Button>Action</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>Card Title 2</CardHeader>
          <CardContent>
            <p>More data...</p>
            <BarChartt />
            <Button variant="secondary">More Info</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>Card Title 3</CardHeader>
          <CardContent>
            <p>Another set of details...</p>
            <Donut />
            <Button>See More</Button>
          </CardContent>
        </Card>
      </div>
      <BigChart />
    </div>
  );
};

export default DashboardPage;
