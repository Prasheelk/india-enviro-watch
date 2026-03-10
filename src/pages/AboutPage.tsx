import { motion } from "framer-motion";
import { Satellite, Database, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Satellite,
    title: "Satellite Data Aggregation",
    desc: "Combines data from multiple ISRO satellite missions including IRS series, INSAT, and Resourcesat for comprehensive environmental coverage.",
  },
  {
    icon: Database,
    title: "Multi-Source Integration",
    desc: "Integrates data from Bhuvan, MOSDAC, NRSC, VEDAS, and India WRIS to provide a unified view of India's environment.",
  },
  {
    icon: BarChart3,
    title: "Advanced Visualization",
    desc: "Presents complex environmental datasets through intuitive charts, heatmaps, and state-level breakdowns for easy analysis.",
  },
  {
    icon: Shield,
    title: "Data Integrity",
    desc: "Uses validated datasets cross-referenced with ground station measurements to ensure accuracy and reliability.",
  },
];

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-display font-bold mb-2">About This Project</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The Satellite-Based Environmental Monitoring Aggregator for India is a conceptual platform
            that demonstrates how satellite-derived data from Indian space missions can be aggregated
            and visualized to monitor the nation's environmental health.
          </p>
        </motion.div>

        <section className="mb-12">
          <h2 className="text-xl font-display font-semibold mb-4">Objective</h2>
          <p className="text-muted-foreground leading-relaxed">
            India faces significant environmental challenges — from hazardous air pollution in the
            Indo-Gangetic plains to accelerating glacier retreat in the Himalayas. This platform
            aggregates environmental indicators from multiple satellite sources to provide a unified
            monitoring dashboard that can support policy decisions, research, and public awareness.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-display font-semibold mb-6">Technical Capabilities</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="p-2 rounded-lg bg-primary/10 w-fit mb-3">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-display font-semibold mb-4">Data Coverage</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left p-3 font-semibold">Parameter</th>
                  <th className="text-left p-3 font-semibold">Source</th>
                  <th className="text-left p-3 font-semibold">Coverage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Air Quality", "MOSDAC / SAFAR", "30+ cities"],
                  ["Temperature", "MOSDAC / IMD", "All India"],
                  ["Forest Cover", "Bhuvan / FSI", "36 states & UTs"],
                  ["Glacier Health", "NRSC / VEDAS", "Himalayan region"],
                  ["Rainfall", "MOSDAC / IMD", "All India"],
                  ["Sea Level", "NRSC / INCOIS", "Coastal regions"],
                ].map(([param, source, coverage]) => (
                  <tr key={param}>
                    <td className="p-3 font-medium">{param}</td>
                    <td className="p-3 text-muted-foreground">{source}</td>
                    <td className="p-3 text-muted-foreground">{coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-display font-semibold mb-4">Disclaimer</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This is a demonstration project using sample data inspired by real Indian satellite
            programs. The data presented is static and for visualization purposes only. For
            actual environmental data, please refer to the official ISRO portals listed in the
            Data Sources section.
          </p>
        </section>
      </div>
    </div>
  );
}
