import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! I\'ll get back to you shortly.')
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Get in touch</h2>
        <p className="text-slate-400 mt-2 text-center">Have a project in mind or just want to say hi?</p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm backdrop-blur">
          <div>
            <label className="block text-sm font-medium text-slate-200">Name</label>
            <input className="mt-1 w-full rounded-md bg-slate-900/60 border-white/10 text-slate-100 placeholder-slate-400 focus:border-fuchsia-400 focus:ring-fuchsia-400" placeholder="Your name" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-200">Email</label>
            <input type="email" className="mt-1 w-full rounded-md bg-slate-900/60 border-white/10 text-slate-100 placeholder-slate-400 focus:border-fuchsia-400 focus:ring-fuchsia-400" placeholder="you@example.com" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-200">Message</label>
            <textarea rows="4" className="mt-1 w-full rounded-md bg-slate-900/60 border-white/10 text-slate-100 placeholder-slate-400 focus:border-fuchsia-400 focus:ring-fuchsia-400" placeholder="Tell me a bit about your project" required />
          </div>
          <button className="w-full rounded-md bg-white text-slate-900 py-2 font-medium hover:bg-slate-200 transition-colors">Send</button>
          {status && <p className="text-center text-emerald-400 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  )
}
