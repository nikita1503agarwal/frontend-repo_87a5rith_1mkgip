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
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Get in touch</h2>
        <p className="text-slate-600 mt-2 text-center">Have a project in mind or just want to say hi?</p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input className="mt-1 w-full rounded-md border-slate-200 focus:border-slate-400 focus:ring-slate-400" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border-slate-200 focus:border-slate-400 focus:ring-slate-400" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea rows="4" className="mt-1 w-full rounded-md border-slate-200 focus:border-slate-400 focus:ring-slate-400" required />
          </div>
          <button className="w-full rounded-md bg-slate-900 text-white py-2 font-medium hover:bg-slate-800 transition-colors">Send</button>
          {status && <p className="text-center text-emerald-600 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  )
}
