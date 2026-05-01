import { motion } from "framer-motion";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";

const data = [
  { skill: "ML/AI", value: 88 },
  { skill: "Frontend", value: 80 },
  { skill: "Backend", value: 85 },
  { skill: "Data", value: 90 },
  { skill: "SQL/DB", value: 82 },
  { skill: "DSA", value: 85 }
];

const groups = [
  {
    title: "Languages",
    color: "hover:shadow-neon",
    items: [
      { label: "Python", icon: "https://cdn.simpleicons.org/python" },
      { label: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
      { label: "Java", icon: "https://cdn.simpleicons.org/openjdk" },
      { label: "HTML", icon: "https://cdn.simpleicons.org/html5" },
      { label: "CSS", icon: "https://cdn.simpleicons.org/css3" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    color: "hover:shadow-cyan",
    items: [
      { label: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
      { label: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi" },
      { label: "Flask", icon: "https://cdn.simpleicons.org/flask" },
      { label: "Streamlit", icon: "https://cdn.simpleicons.org/streamlit" },
      { label: "pandas", icon: "https://cdn.simpleicons.org/pandas" },
      { label: "NumPy", icon: "https://cdn.simpleicons.org/numpy" },
      { label: "scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn" }
    ]
  },
  {
    title: "AI & APIs",
    color: "hover:shadow-pink",
    items: [
      { label: "Anthropic Claude", icon: "https://cdn.simpleicons.org/anthropic" },
      { label: "Google Gemini", icon: "https://cdn.simpleicons.org/googlegemini" },
      { label: "LLM APIs", icon: "https://img.icons8.com/color/48/artificial-intelligence.png" },
      { label: "REST APIs", icon: "https://cdn.simpleicons.org/openapiinitiative" }
    ]
  },
  {
    title: "Databases",
    color: "hover:shadow-yellow-400/40",
    items: [
      { label: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" }
    ]
  },
  {
    title: "Tools & Platforms",
    color: "hover:shadow-green",
    items: [
      { label: "Git", icon: "https://cdn.simpleicons.org/git" },
      { label: "GitHub", icon: "https://cdn.simpleicons.org/github" },
      { label: "Docker", icon: "https://cdn.simpleicons.org/docker" },
      { label: "Celery", icon: "https://cdn.simpleicons.org/celery" },
      { label: "Jupyter", icon: "https://cdn.simpleicons.org/jupyter" },
      { label: "Google Colab", icon: "https://cdn.simpleicons.org/googlecolab" }
    ]
  },
  {
    title: "CS Fundamentals",
    color: "hover:shadow-neon",
    items: [
      { label: "DSA", icon: "https://cdn.simpleicons.org/leetcode" },
      { label: "OOP", icon: "https://cdn.simpleicons.org/java" },
      { label: "DBMS", icon: "https://cdn.simpleicons.org/databricks" },
      { label: "OS", icon: "https://cdn.simpleicons.org/linux" }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-wrap">
      <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-mono text-neon-cyan text-xl mb-8">model.skills_report()</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass-card p-5 h-[360px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={data}>
                <PolarGrid stroke="rgba(255,255,255,.2)" />
                <PolarAngleAxis dataKey="skill" stroke="#e5e7eb" />
                <PolarRadiusAxis stroke="rgba(255,255,255,.2)" />
                <Radar dataKey="value" stroke="#7C3AED" fill="#7C3AED" fillOpacity={0.45} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {groups.map((group) => (
              <div key={group.title} className="glass-card p-4">
                <h3 className="font-heading text-neon-cyan mb-2">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.span key={item.label} whileHover={{ y: -2 }} className={`px-3 py-1.5 rounded-full border border-white/10 bg-neural-card/90 text-sm inline-flex items-center gap-2 ${group.color}`}>
                      <img
                        src={item.icon}
                        alt={`${item.label} logo`}
                        className="w-4 h-4 object-contain"
                        loading="lazy"
                      />
                      {item.label}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
