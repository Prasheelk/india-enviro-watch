import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
  delay?: number;
}

export default function StatCard({ title, value, subtitle, icon: Icon, trend, delay = 0 }: StatCardProps) {
  const trendColor = trend === "up" ? "text-danger" : trend === "down" ? "text-success" : "text-muted-foreground";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="rounded-xl border border-border bg-card p-6 card-glow hover:scale-[1.02] transition-transform"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-display font-bold mt-1">{value}</p>
          <p className={`text-sm mt-1 ${trendColor}`}>{subtitle}</p>
        </div>
        <div className="p-3 rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
    </motion.div>
  );
}
