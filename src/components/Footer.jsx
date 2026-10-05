import { MapPin, Phone, Mail, CheckCircle, Globe, Share2, Link2 } from 'lucide-react'
import { siteData } from '../data/siteData'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white/80 rounded-none">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          <div className="lg:col-span-1">
            <a href="#" className="font-heading text-2xl font-medium tracking-[-0.02em] text-white flex items-center gap-2 mb-4" aria-label="FlowRight Plumbing Home">
              <svg className="w-8 h-8 text-midblue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>{siteData.company.name}</span>
            </a>
            <p className="text-[14.4px] leading-[1.5] mb-6 text-white/70">Professional plumbing services with integrity, expertise, and fair pricing. Serving Anytown since 2005.</p>
            <div className="flex gap-4">
              {[
                { icon: Globe, href: '#', label: 'Website' },
                { icon: Share2, href: '#', label: 'Share' },
                { icon: Link2, href: '#', label: 'Contact' },
              ].map((social, i) => (
                <a key={i} href={social.href} className="h-[27px] px-[10.8px] inline-flex items-center justify-center rounded-full bg-white/[0.05] border border-white/15 text-white/80 hover:bg-white/10 transition-colors text-[10.8px] font-medium" aria-label={social.label}>
                  <social.icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-[18px] font-normal text-white mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {['Services', 'About Us', 'Emergency Plumbing', 'Financing', 'Careers'].map((link, i) => (
                  <li key={i}><a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-[14.4px] text-white/70 hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-heading text-[18px] font-normal text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {siteData.services.slice(0, 4).map((service, i) => (
                <li key={i}><a href="#services" className="text-[14.4px] text-white/70 hover:text-white transition-colors">{service.title}</a></li>
              ))}
              <li><a href="#services" className="text-[14.4px] text-accent font-medium hover:underline">View All Services →</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-[18px] font-normal text-white mb-4">Contact Info</h3>
            <ul className="space-y-3 text-[14.4px] text-white/70">
              {[
                { icon: MapPin, text: siteData.company.address },
                { icon: Phone, text: siteData.company.phone, href: `tel:${siteData.company.phone.replace(/\D/g, '')}` },
                { icon: Mail, text: siteData.company.email, href: `mailto:${siteData.company.email}` },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-midblue flex-shrink-0 mt-0.5" aria-hidden="true" />
                  {item.href ? (
                    <a href={item.href} className="hover:text-white transition-colors">{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-white/60">© {currentYear} {siteData.company.name}. All rights reserved. {siteData.company.license}</p>
            <div className="flex items-center gap-6 text-[13px] text-white/60">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-teal" aria-hidden="true" /> Licensed</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-teal" aria-hidden="true" /> Bonded</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-teal" aria-hidden="true" /> Insured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
