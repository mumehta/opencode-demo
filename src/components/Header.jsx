import { Menu, X, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'
import { siteData } from '../data/siteData'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navLinks = ['Services', 'About', 'Contact', 'Reviews']

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border">
      <nav className="container flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
        <a href="#" className="font-heading text-xl md:text-2xl font-light tracking-[-0.02em] text-on-surface flex items-center gap-2" aria-label="FlowRight Plumbing Home">
          <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>{siteData.company.name}</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-[14px] font-normal text-secondary/70 hover:text-primary transition-colors">{link}</a>
          ))}
          <a href="tel:5551234567" className="btn-compact hidden sm:inline-flex">Call Now</a>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <a href="tel:5551234567" className="btn-compact">Call</a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-on-surface hover:text-primary" aria-expanded={mobileOpen} aria-controls="mobile-menu" aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden py-4 border-t border-border animate-slide-down">
          <div className="container flex flex-col gap-4">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-base font-normal text-secondary/70 hover:text-primary transition-colors py-2" onClick={() => setMobileOpen(false)}>{link}</a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <a href="tel:5551234567" className="btn-accent text-center">Call Now</a>
              <div className="flex items-center gap-3 text-sm text-secondary/70 px-2">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0" /><span>{siteData.company.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-secondary/70 px-2">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" /><span>{siteData.company.hours}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-down { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slide-down { animation: slide-down 0.2s ease-out; }
      `}</style>
    </header>
  )
}
