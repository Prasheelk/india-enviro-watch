import { useState } from "react";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from "recharts";
import { airQualityData, temperatureData, deforestationData, glacierData } from "@/data/environmentData";

const regionOptions = ["All", "North", "South", "East", "West", "Central"] as const;

export default function DashboardPage() {
  const [region, setRegion] = useState<string>("All");

  const filteredTempData = temperatureData.map((d) => {
    if (region === "All") return d;
    const key = region.toLowerCase() as keyof typeof d;
    return { month: d.month, [region.toLowerCase()]: d[key] };
  });

  const tempLines =
    region === "All"
      ? ["north", "south", "east", "west", "central"]
      : [region.toLowerCase()];

  const lineColors: Record<string, string> = {
    north: "hsl(200, 80%, 45%)",
    south: "hsl(38, 92%, 50%)",
    east: "hsl(152, 60%, 40%)",
    west: "hsl(340, 65%, 50%)",
    central: "hsl(270, 50%, 50%)",
  };

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-display font-bold mb-2">Environmental Dashboard</h1>
      <p className="text-muted-foreground mb-8">Interactive charts with Indian environmental data from satellite sources.</p>

      {/* Region Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {regionOptions.map((r) => (
          <button
            key={r}
            onClick={() => setRegion(r)}
            className={`px-4 py-1.5 text-sm rounded-full font-medium transition-colors ${
              region === r
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Air Pollution */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-display font-semibold mb-4">Air Pollution Levels — Major Cities</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={airQualityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="city" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                }}
              />
              <Legend />
              <Bar dataKey="pm25" name="PM 2.5" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="pm10" name="PM 10" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Temperature Trends */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-display font-semibold mb-4">Temperature Trends by Region (°C)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={filteredTempData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                }}
              />
              <Legend />
              {tempLines.map((key) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  name={key.charAt(0).toUpperCase() + key.slice(1)}
                  stroke={lineColors[key]}
                  strokeWidth={2}
                  dot={false}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Deforestation */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-display font-semibold mb-4">Deforestation — Key States (sq km)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={deforestationData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
              <YAxis dataKey="state" type="category" width={130} tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                }}
              />
              <Legend />
              <Bar dataKey="forestArea2020" name="2020" fill="hsl(var(--chart-2))" radius={[0, 4, 4, 0]} />
              <Bar dataKey="forestArea2024" name="2024" fill="hsl(var(--chart-1))" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Glacier Melt */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-display font-semibold mb-4">Himalayan Glacier Mass Index (% of 2010)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={glacierData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
              <YAxis domain={[70, 100]} stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="gangotri" name="Gangotri" stroke="hsl(var(--chart-1))" strokeWidth={2} />
              <Line type="monotone" dataKey="siachen" name="Siachen" stroke="hsl(var(--chart-2))" strokeWidth={2} />
              <Line type="monotone" dataKey="zemu" name="Zemu" stroke="hsl(var(--chart-3))" strokeWidth={2} />
              <Line type="monotone" dataKey="pindari" name="Pindari" stroke="hsl(var(--chart-4))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
