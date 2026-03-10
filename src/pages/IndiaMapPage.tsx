import { useState } from "react";
import { motion } from "framer-motion";
import { stateEnvironmentData } from "@/data/environmentData";

type Metric = "aqi" | "temp" | "forestPercent" | "rainfall";

const metricConfig: Record<Metric, { label: string; unit: string; colorScale: (v: number) => string }> = {
  aqi: {
    label: "Air Quality Index",
    unit: "AQI",
    colorScale: (v) =>
      v > 250 ? "hsl(0, 70%, 45%)" : v > 150 ? "hsl(30, 80%, 50%)" : v > 100 ? "hsl(45, 90%, 50%)" : "hsl(120, 50%, 45%)",
  },
  temp: {
    label: "Avg Temperature",
    unit: "°C",
    colorScale: (v) =>
      v > 27 ? "hsl(0, 70%, 50%)" : v > 24 ? "hsl(30, 80%, 50%)" : v > 20 ? "hsl(45, 90%, 50%)" : "hsl(200, 60%, 50%)",
  },
  forestPercent: {
    label: "Forest Cover",
    unit: "%",
    colorScale: (v) =>
      v > 50 ? "hsl(140, 60%, 35%)" : v > 25 ? "hsl(120, 50%, 45%)" : v > 10 ? "hsl(80, 50%, 50%)" : "hsl(45, 80%, 55%)",
  },
  rainfall: {
    label: "Annual Rainfall",
    unit: "mm",
    colorScale: (v) =>
      v > 2500 ? "hsl(220, 70%, 40%)" : v > 1500 ? "hsl(200, 60%, 50%)" : v > 1000 ? "hsl(190, 50%, 55%)" : "hsl(45, 70%, 55%)",
  },
};

const stateEntries = Object.entries(stateEnvironmentData);

export default function IndiaMapPage() {
  const [metric, setMetric] = useState<Metric>("aqi");
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const config = metricConfig[metric];

  const sorted = [...stateEntries].sort((a, b) => b[1][metric] - a[1][metric]);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-display font-bold mb-2">India Environmental Map</h1>
      <p className="text-muted-foreground mb-8">State-level environmental indicators visualized as a heatmap.</p>

      {/* Metric selector */}
      <div className="flex flex-wrap gap-2 mb-8">
        {(Object.keys(metricConfig) as Metric[]).map((m) => (
          <button
            key={m}
            onClick={() => setMetric(m)}
            className={`px-4 py-1.5 text-sm rounded-full font-medium transition-colors ${
              metric === m ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {metricConfig[m].label}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Map grid */}
        <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6">
          <h3 className="font-display font-semibold mb-4">{config.label} by State</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
            {sorted.map(([code, data]) => (
              <motion.div
                key={code}
                onMouseEnter={() => setHoveredState(code)}
                onMouseLeave={() => setHoveredState(null)}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-lg p-3 text-center cursor-pointer transition-all"
                style={{ backgroundColor: config.colorScale(data[metric]), color: "#fff" }}
              >
                <p className="text-xs font-bold">{code}</p>
                <p className="text-sm font-display font-bold">
                  {data[metric]}
                  <span className="text-[10px] ml-0.5">{config.unit}</span>
                </p>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
            <span>Low</span>
            <div className="flex-1 h-2 rounded-full bg-gradient-to-r from-success via-warning to-danger" />
            <span>High</span>
          </div>
        </div>

        {/* Detail panel */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-display font-semibold mb-4">State Details</h3>
          {hoveredState && stateEnvironmentData[hoveredState] ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
              <h4 className="text-xl font-display font-bold">{stateEnvironmentData[hoveredState].name}</h4>
              {(Object.keys(metricConfig) as Metric[]).map((m) => (
                <div key={m} className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">{metricConfig[m].label}</span>
                  <span className="font-semibold">
                    {stateEnvironmentData[hoveredState][m]} {metricConfig[m].unit}
                  </span>
                </div>
              ))}
            </motion.div>
          ) : (
            <p className="text-sm text-muted-foreground">Hover over a state tile to see details.</p>
          )}
        </div>
      </div>
    </div>
  );
}
