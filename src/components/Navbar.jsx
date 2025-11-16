import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm md:text-base text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/5"
  >
    {children}
  </a>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-950/70 border-b border-slate-800' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-semibold tracking-tight text-lg">
            <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">MyPortfolio</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <div className="w-px h-5 bg-slate-800 mx-2" />
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/5 rounded-md text-slate-300 hover:text-white">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/5 rounded-md text-slate-300 hover:text-white">
              <Linkedin size={18} />
            </a>
            <a href="#contact" className="p-2 hover:bg-white/5 rounded-md text-slate-300 hover:text-white">
              <Mail size={18} />
            </a>
          </div>
          <button className="md:hidden p-2 rounded-md hover:bg-white/5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            <NavLink href="#projects" onClick={() => setOpen(false)}>Projects</NavLink>
            <NavLink href="#about" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink href="#contact" onClick={() => setOpen(false)}>Contact</NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}
