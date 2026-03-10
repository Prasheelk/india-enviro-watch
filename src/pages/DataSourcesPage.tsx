import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { satellitePrograms } from "@/data/environmentData";

export default function DataSourcesPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-display font-bold mb-2">Data Sources</h1>
      <p className="text-muted-foreground mb-10 max-w-2xl">
        This platform aggregates environmental data inspired by India's leading satellite missions
        and environmental monitoring programs operated by ISRO and affiliated agencies.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {satellitePrograms.map((prog, i) => (
          <motion.div
            key={prog.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-display font-bold text-lg">{prog.name}</h3>
                <p className="text-sm text-primary font-medium">{prog.org}</p>
              </div>
              <a
                href={prog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{prog.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {prog.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                >
                  {cap}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
