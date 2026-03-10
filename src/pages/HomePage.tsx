import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wind, Thermometer, TreePine, Mountain, ArrowRight, Satellite } from "lucide-react";
import StatCard from "@/components/StatCard";
import { quickStats } from "@/data/environmentData";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
              <Satellite className="h-4 w-4" />
              Powered by ISRO Satellite Programs
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight leading-tight">
              Satellite-Based{" "}
              <span className="text-gradient">Environmental Monitoring</span>{" "}
              for India
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Aggregating real-time satellite data from Bhuvan, MOSDAC, and NRSC to monitor India's
              air quality, temperature trends, forest cover, and glacial health across all states.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                View Dashboard <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/map"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card font-medium hover:bg-secondary transition-colors"
              >
                Explore India Map
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-display font-bold text-center mb-10">Key Environmental Indicators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Average Air Quality Index"
              value={`${quickStats.avgAqi}`}
              subtitle="Unhealthy (national avg)"
              icon={Wind}
              trend="up"
              delay={0}
            />
            <StatCard
              title="Avg Temperature (2024)"
              value={`${quickStats.avgTemp}°C`}
              subtitle="+0.5°C from 2020"
              icon={Thermometer}
              trend="up"
              delay={0.1}
            />
            <StatCard
              title="Forest Cover Change"
              value={`${quickStats.forestCoverChange}%`}
              subtitle="Year-over-year decline"
              icon={TreePine}
              trend="down"
              delay={0.2}
            />
            <StatCard
              title="Glacier Melt Index"
              value={`${quickStats.glacierMeltIndex}%`}
              subtitle="Total mass loss since 2010"
              icon={Mountain}
              trend="up"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-t border-border/50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-Time Monitoring",
                desc: "Track air quality, temperature, and forest cover changes across Indian states using satellite-derived data.",
              },
              {
                title: "Historical Analysis",
                desc: "Analyze environmental trends from 2010 to 2025 with comprehensive datasets from ISRO missions.",
              },
              {
                title: "State-Level Insights",
                desc: "Drill down to state-level data with interactive maps and detailed environmental indicators.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-display font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
