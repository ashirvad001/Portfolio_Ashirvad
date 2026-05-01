import { motion } from "framer-motion";

const entries = [
  `{
  "degree": "B.Tech Computer Science",
  "institution": "IMS Engineering College",
  "location": "Ghaziabad, Uttar Pradesh",
  "period": "2023 – 2027",
  "focus": ["AI", "ML", "Data Science", "Systems"]
}`,
  `{
  "event": "Phantasia 2026 — Top 10 Finalist",
  "venue": "Bennett University, Greater Noida",
  "track": "AI/ML Track",
  "scale": "800+ teams (Online) & 70+ teams (Offline)"
}`,
  `{
  "event": "Manthan'25 — Participant",
  "venue": "COER University, Roorkee, 2025",
  "domain": "Hackathon & Tech Competition"
}`
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-wrap">
      <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-mono text-neon-cyan text-xl mb-8">training_log.json</h2>
        <div className="relative pl-8">
          <motion.div initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.3 }} className="absolute left-2 top-2 h-[92%] w-[2px] origin-top bg-gradient-to-b from-neon-violet via-neon-cyan to-neon-green" />
          <div className="space-y-5">
            {entries.map((entry, idx) => (
              <motion.pre key={idx} whileHover={{ scale: 1.02 }} className="glass-card p-4 font-mono text-xs md:text-sm text-slate-300 whitespace-pre-wrap relative before:absolute before:left-[-1.9rem] before:top-6 before:w-3 before:h-3 before:rounded-full before:bg-neon-cyan before:shadow-cyan">
                {entry}
              </motion.pre>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
