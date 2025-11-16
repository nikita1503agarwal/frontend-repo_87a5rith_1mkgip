import { motion } from 'framer-motion'
import Tilt from './Tilt'

const projects = [
  {
    title: 'Interactive Dashboard',
    desc: 'A modular analytics dashboard with real-time data and custom widgets.',
    tags: ['React', 'Tailwind', 'Charts'],
    link: '#'
  },
  {
    title: 'E-commerce UI Kit',
    desc: 'A reusable component library for modern e-commerce experiences.',
    tags: ['TypeScript', 'Design System'],
    link: '#'
  },
  {
    title: '3D Product Showcase',
    desc: 'WebGL-powered product explorer with smooth transitions.',
    tags: ['Three.js', 'Spline'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Work</h2>
          <p className="text-slate-400 mt-2">A selection of projects that highlight my focus on craft and performance.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.01 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow-lg/30 hover:shadow-cyan-500/10 transition-all"
            >
              <Tilt className="[transform-style:preserve-3d] will-change-transform">
                <div className="h-40 rounded-xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/30 to-cyan-500/30 mb-4 group-hover:scale-[1.02] transition-transform" />
              </Tilt>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map(t => (
                  <span key={t} className="text-xs bg-white/5 text-slate-200 px-2 py-1 rounded-full border border-white/10">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
