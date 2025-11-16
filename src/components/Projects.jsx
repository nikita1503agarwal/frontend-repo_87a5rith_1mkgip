import { motion } from 'framer-motion'

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
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-white via-indigo-50/40 to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Work</h2>
          <p className="text-slate-600 mt-2">A selection of projects that highlight my focus on craft and performance.</p>
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
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-40 rounded-xl bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-cyan-200 mb-4 group-hover:scale-[1.01] transition-transform" />
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map(t => (
                  <span key={t} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full border border-slate-200">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
