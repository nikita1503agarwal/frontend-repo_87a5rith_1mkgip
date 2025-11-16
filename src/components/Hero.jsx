import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])

  return (
    <section ref={ref} id="home" className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950/80 pointer-events-none" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 shadow-sm backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-slate-200">Available for work</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Building delightful digital experiences
          </h1>
          <p className="text-slate-300 text-lg max-w-prose">
            I’m a frontend developer who loves crafting interactive, accessible, and high-performance products with React, TypeScript, and modern design systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow hover:bg-slate-200 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-slate-900/60 text-white px-4 py-2 text-sm font-medium shadow border border-white/10 hover:bg-slate-900/70 transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.ul
          initial="hidden"
          animate="show"
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-2 gap-4"
        >
          {["React", "TypeScript", "Node.js", "Tailwind", "Framer Motion", "Three.js"].map((skill) => (
            <motion.li key={skill} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 shadow-sm hover:translate-y-[-2px] hover:bg-white/10 transition-all">
              <p className="text-sm font-medium text-slate-200">{skill}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
