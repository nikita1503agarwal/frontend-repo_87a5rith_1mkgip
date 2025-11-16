import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <p className="text-slate-300 mt-4 leading-relaxed">
            I’m a product-minded developer focused on building polished, accessible interfaces. My approach blends strong UX instincts with modern engineering practices like type-safe APIs, component-driven design, and performance budgets.
          </p>
          <ul className="mt-6 space-y-2 text-slate-200/90">
            <li>• 5+ years building with React and TypeScript</li>
            <li>• Passion for motion design and 3D on the web</li>
            <li>• Advocate for clean design systems and documentation</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20" />
          <div className="absolute inset-4 rounded-2xl border-2 border-white/10" />
        </motion.div>
      </div>
    </section>
  )
}
