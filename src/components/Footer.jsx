import { MapPin, Phone, Mail, CheckCircle, Globe, Share2, Link2 } from 'lucide-react'
import { siteData } from '../data/siteData'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface text-secondary border-t border-border">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          <div className="lg:col-span-1">
            <a href="#" className="font-heading text-2xl font-normal tracking-[-0.02em] text-on-surface flex items-center gap-2 mb-4" aria-label="FlowRight Plumbing Home">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>{siteData.company.name}</span>
            </a>
            <p className="text-[14px] leading-[20px] mb-6">Professional plumbing services with integrity, expertise, and fair pricing. Serving Anytown since 2005.</p>
            <div className="flex gap-4">
              {[
                { icon: Globe, href: '#', label: 'Website' },
                { icon: Share2, href: '#', label: 'Share' },
                { icon: Link2, href: '#', label: 'Contact' },
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded bg-neutral border border-border flex items-center justify-center text-secondary hover:bg-primary hover:text-neutral transition-colors" aria-label={social.label}>
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-[19px] font-normal text-on-surface mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {['Services', 'About Us', 'Emergency Plumbing', 'Financing', 'Careers'].map((link, i) => (
                  <li key={i}><a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-[14px] hover:text-primary transition-colors">{link}</a></li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-heading text-[19px] font-normal text-on-surface mb-4">Services</h3>
            <ul className="space-y-3">
              {siteData.services.slice(0, 4).map((service, i) => (
                <li key={i}><a href="#services" className="text-[14px] hover:text-primary transition-colors">{service.title}</a></li>
              ))}
              <li><a href="#services" className="text-[14px] hover:text-primary transition-colors">View All Services →</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-[19px] font-normal text-on-surface mb-4">Contact Info</h3>
            <ul className="space-y-3 text-[14px]">
              {[
                { icon: MapPin, text: siteData.company.address },
                { icon: Phone, text: siteData.company.phone, href: `tel:${siteData.company.phone.replace(/\D/g, '')}` },
                { icon: Mail, text: siteData.company.email, href: `mailto:${siteData.company.email}` },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  {item.href ? (
                    <a href={item.href} className="hover:text-primary transition-colors">{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-tertiary">© {currentYear} {siteData.company.name}. All rights reserved. {siteData.company.license}</p>
            <div className="flex items-center gap-6 text-[13px] text-tertiary">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-success" aria-hidden="true" /> Licensed</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-success" aria-hidden="true" /> Bonded</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-success" aria-hidden="true" /> Insured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
