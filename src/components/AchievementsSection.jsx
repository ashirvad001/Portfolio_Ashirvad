import { motion } from "framer-motion";

const ticker = ["Phantasia Top 10", "AWS Certified", "100+ DSA Solved", "Deloitte Simulation", "ML Builder"];
const cards = [
  "🏅 Phantasia 2026 — Top 10 Finish (AI/ML Track) among 800+ teams | Bennett University, Greater Noida",
  "🏆 Manthan'25 — Participant | COER University, Roorkee, 2025",
  "💻 LeetCode — Solved 100+ problems across Easy, Medium, and Hard difficulty levels",
  "☁️ AWS Cloud Practitioner Essentials — Amazon Web Services, 2026",
  "🔧 Deloitte Australia Technology Job Simulation — Forage, 2025"
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-wrap">
      <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-mono text-neon-cyan text-xl mb-8">model.evaluate()</h2>
        <div className="glass-card overflow-hidden py-3 mb-8">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="flex gap-6 whitespace-nowrap">
            {[...ticker, ...ticker, ...ticker].map((item, idx) => (
              <span key={`${item}-${idx}`} className="px-3 py-1 rounded-full border border-white/10 bg-neural-card/80 text-sm">{item}</span>
            ))}
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-5 hover:shadow-neon"
            >
              {card}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
