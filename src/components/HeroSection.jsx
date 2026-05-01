import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Typewriter from "typewriter-effect";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import NeuralBackground from "./NeuralBackground";

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || prefersReducedMotion) return undefined;
    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [prefersReducedMotion]);

  const terminalLines = [
    "> initializing_portfolio.py",
    "> loading model weights...",
    "> identity: Ashirvad Kumar Singh",
    "> status: seeking_ds_sde_internships"
  ];

  return (
    <section id="hero" className="min-h-[92vh] md:min-h-screen section-wrap relative flex items-center overflow-hidden">
      {!prefersReducedMotion && <div ref={cursorRef} className="ai-cursor" />}
      <NeuralBackground />
      <Particles
        className="absolute inset-0 z-0 opacity-50"
        id="particles"
        init={loadSlim}
        options={{
          fullScreen: false,
          particles: { number: { value: 55 }, links: { enable: true, color: "#7C3AED" }, move: { enable: true, speed: 0.7 }, size: { value: 2 }, color: { value: "#06B6D4" } }
        }}
      />
      <div className="section-inner relative z-10 pt-16 md:pt-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center"
        >
          <div className="lg:col-span-8">
            <div className="glass-card p-5 max-w-2xl font-mono text-xs md:text-sm text-neon-green space-y-2">
              {terminalLines.map((line, idx) => (
                <motion.p key={line} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.4 }}>
                  {line}
                </motion.p>
              ))}
            </div>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.95] mt-8 bg-gradient-to-r from-neon-violet to-neon-cyan bg-clip-text text-transparent">
              Data Into Decisions.
            </h1>

            <div className="mt-4 text-xl md:text-2xl text-slate-200 font-medium min-h-[2.25rem]">
              <Typewriter options={{ strings: ["ML Engineer", "Data Scientist", "Full-Stack Developer", "Problem Solver"], autoStart: true, loop: true }} />
            </div>

            <p className="text-slate-300 mt-5 max-w-3xl text-lg">
              Ashirvad Kumar Singh | IMS Engineering College (B.Tech CS, 2023–2027) | Building production-grade ML systems that turn raw data into real-world impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a whileTap={{ scale: 0.95 }} whileHover={{ boxShadow: "0 0 24px #7C3AED" }} href="#projects" className="px-6 py-3 font-mono glass-card bg-neon-violet/20 border-neon-violet/40">
                view.projects()
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.95 }}
                whileHover={{ boxShadow: "0 0 24px #06B6D4" }}
                href="/Ashirvad-Resume.pdf"
                download
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 font-mono glass-card"
              >
                resume.download()
              </motion.a>
            </div>

            <div className="mt-8 flex gap-3 text-neon-cyan">
              <a href="https://github.com/ashirvad001" target="_blank" rel="noreferrer" className="glass-card p-3 hover:shadow-neon transition">
                <Github />
              </a>
              <a href="https://linkedin.com/in/ashirvadsingh01" target="_blank" rel="noreferrer" className="glass-card p-3 hover:shadow-cyan transition">
                <Linkedin />
              </a>
              <a href="mailto:ashirvadimsec@gmail.com" className="glass-card p-3 hover:shadow-pink-500/40 transition">
                <Mail />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="glass-card p-5 space-y-4">
              <p className="font-mono text-neon-cyan text-sm">system.status()</p>
              <div className="space-y-3 text-sm">
                <p className="px-3 py-2 rounded-lg bg-neon-violet/15 border border-neon-violet/35 text-slate-200">Seeking Data Science / SDE internships</p>
                <p className="px-3 py-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/35 text-slate-200">Focus: ML systems, FastAPI, Next.js, full-stack</p>
                <p className="px-3 py-2 rounded-lg bg-neon-green/10 border border-neon-green/35 text-slate-200">Location: Ghaziabad, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
