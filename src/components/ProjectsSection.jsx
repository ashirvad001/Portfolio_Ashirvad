import { motion } from "framer-motion";

const cards = [
  {
    title: "AgriPrice Sentinel",
    accent: "from-neon-violet to-neon-cyan",
    github: "https://github.com/ashirvad001/AgriPrice_Sentinel",
    desc: "Crop Price Forecasting Platform — Developed a BiLSTM model with attention mechanism to forecast MSP and mandi crop prices, ingesting 5+ live data sources: IMD weather data, CBOT futures, e-NAM API feeds, and freight indices.",
    tags: ["Python", "BiLSTM", "FastAPI", "Next.js", "Redis"],
    metrics: [
      "~12% MAPE on 3-year mandi price forecasts",
      "REST API with Redis caching & Celery async queue",
      "Next.js dashboard + WhatsApp bot for farmer alerts"
    ]
  },
  {
    title: "NexIPO",
    accent: "from-neon-cyan to-neon-green",
    github: "https://github.com/ashirvad001/NexIPO",
    desc: "ML-Powered IPO Intelligence & Risk Analysis Platform — Engineered a multi-factor IPO risk scorer with an explainability layer; trained a BERT+LSTM volatility model on 200+ IPO prospectuses with NLP-based red flag extraction.",
    tags: ["Python", "BERT", "LSTM", "FastAPI", "Next.js"],
    metrics: [
      "Multi-factor IPO risk scoring with explainability",
      "NLP-based red flag extraction on 200+ prospectuses",
      "Interactive React/Next.js dashboards"
    ]
  },
  {
    title: "Ordinare",
    accent: "from-neon-violet to-neon-pink",
    github: "https://github.com/ashirvad001/ordinare_final_project",
    desc: "AI-Powered Academic Planning & Performance Prediction — Built an academic management system with real-time attendance analytics, automated GPA computation, and an ML-driven class-skip risk estimator with threshold alerts.",
    tags: ["Python", "scikit-learn", "FastAPI", "React"],
    metrics: [
      "85%+ accuracy on held-out test sets across 3 semesters",
      "ML-driven class-skip risk estimator",
      "Automated GPA/percentage computation"
    ]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-wrap">
      <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-mono text-neon-cyan text-xl mb-8">git log --oneline --projects</h2>
        <div className="space-y-6">
          {cards.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ scale: 1.02, rotateX: 4, rotateY: -4, transformPerspective: 1200 }}
              className="glass-card overflow-hidden"
            >
              <div className={`h-1.5 bg-gradient-to-r ${project.accent}`} />
              <div className="p-6 bg-[radial-gradient(circle_at_10%_10%,rgba(124,58,237,.14),transparent_40%)]">
                <h3 className="font-heading text-2xl">{project.title}</h3>
                <p className="text-slate-300 mt-3">{project.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full border border-white/15 bg-white/5">{tag}</span>
                  ))}
                </div>
                {project.metrics.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.metrics.map((m) => (
                      <span key={m} className="px-3 py-1 rounded-lg text-xs bg-neon-violet/20 border border-neon-violet/40">{m}</span>
                    ))}
                  </div>
                )}
                <div className="mt-5 flex gap-3">
                  <motion.a whileTap={{ scale: 0.95 }} whileHover={{ boxShadow: "0 0 24px #7C3AED" }} href={project.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border border-white/15 font-mono">
                    [GitHub]
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
