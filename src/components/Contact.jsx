import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { useState } from 'react'
import { siteData } from '../data/siteData'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', service: '', message: '' }) }, 3000)
  }

  return (
    <section id="contact" className="section bg-surface">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="eyebrow">Contact Us</span>
            <h2 className="font-heading text-[48px] leading-[1.05] tracking-[0px] font-light text-on-surface mb-4">Let's Fix Your Plumbing</h2>
            <p className="text-secondary text-[18px] leading-[1.5] tracking-[-0.24px] mb-8">Have a question? Need emergency service? Fill out the form or call us directly — we're here to help 24/7.</p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: 'Phone', value: siteData.company.phone, href: `tel:${siteData.company.phone.replace(/\D/g, '')}` },
                { icon: Mail, label: 'Email', value: siteData.company.email, href: `mailto:${siteData.company.email}` },
                { icon: MapPin, label: 'Address', value: siteData.company.address, href: '#' },
                { icon: Clock, label: 'Hours', value: siteData.company.hours, href: '#' },
              ].map((item, i) => (
                <a key={i} href={item.href} className="flex items-start gap-4 p-4 bg-neutral rounded-md border border-border hover:border-primary/40 transition-colors group">
                  <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[12px] font-medium text-secondary">{item.label}</div>
                    <div className="text-on-surface text-[14px] font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-4 bg-neutral rounded-md border border-border">
              <p className="text-[14px] text-secondary/80"><strong>Emergency?</strong> Call <a href="tel:5551234567" className="text-primary font-medium hover:underline">{siteData.company.phone}</a> — we answer 24/7/365.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-neutral rounded-xl p-6 border border-border space-y-5 h-fit shadow-[0_8px_24px_rgba(26,23,22,0.08)]" noValidate>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-[14px] font-medium text-on-surface mb-1">Name *</label>
                <input type="text" id="name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="field" placeholder="John Smith" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[14px] font-medium text-on-surface mb-1">Phone *</label>
                <input type="tel" id="phone" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="field" placeholder="(555) 123-4567" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-[14px] font-medium text-on-surface mb-1">Email *</label>
                <input type="email" id="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="field" placeholder="john@email.com" />
              </div>
              <div>
                <label htmlFor="service" className="block text-[14px] font-medium text-on-surface mb-1">Service Needed</label>
                <select id="service" value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="field">
                  <option value="">Select a service</option>
                  <option value="emergency">Emergency Repair</option>
                  <option value="drain">Drain Cleaning</option>
                  <option value="fixtures">Fixture Installation</option>
                  <option value="water-heater">Water Heater</option>
                  <option value="repiping">Repiping</option>
                  <option value="leak">Leak Detection</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-[14px] font-medium text-on-surface mb-1">Details *</label>
              <textarea id="message" rows={4} required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="field-area" placeholder="Describe the issue, location, urgency, etc."></textarea>
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto group inline-flex items-center justify-center gap-2" disabled={submitted}>
              <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
            {submitted && <p className="text-[14px] text-secondary text-center sm:text-left">Thanks! We'll contact you within 15 minutes during business hours.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
