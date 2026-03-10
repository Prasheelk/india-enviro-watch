import { useState } from "react";
import {
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { historicalTrends } from "@/data/environmentData";

type TrendKey = keyof typeof historicalTrends;

const trendConfig: Record<TrendKey, { label: string; unit: string; color: string; dataKey: string }> = {
  temperature: { label: "Avg Temperature", unit: "°C", color: "hsl(var(--chart-3))", dataKey: "avg" },
  forestCover: { label: "Forest Cover", unit: "sq km", color: "hsl(var(--chart-2))", dataKey: "area" },
  airQuality: { label: "Avg Air Quality Index", unit: "AQI", color: "hsl(var(--chart-4))", dataKey: "avgAqi" },
  seaLevel: { label: "Sea Level Rise", unit: "mm", color: "hsl(var(--chart-1))", dataKey: "rise" },
};

export default function TrendsPage() {
  const [active, setActive] = useState<TrendKey>("temperature");
  const config = trendConfig[active];
  const data = historicalTrends[active];

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-display font-bold mb-2">Historical Trends</h1>
      <p className="text-muted-foreground mb-8">Environmental changes in India from 2010–2025 based on satellite observations.</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {(Object.keys(trendConfig) as TrendKey[]).map((k) => (
          <button
            key={k}
            onClick={() => setActive(k)}
            className={`px-4 py-1.5 text-sm rounded-full font-medium transition-colors ${
              active === k ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {trendConfig[k].label}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="font-display font-semibold mb-6">
          {config.label} ({config.unit}) — 2010 to 2025
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={config.color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={config.color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                color: "hsl(var(--foreground))",
              }}
            />
            <Area
              type="monotone"
              dataKey={config.dataKey}
              name={config.label}
              stroke={config.color}
              strokeWidth={2.5}
              fill="url(#areaGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
