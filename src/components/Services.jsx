import { siteData } from '../data/siteData'

const iconMap = {
  Wrench: () => <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3 3l-1.2-1.2a2.12 2.12 0 0 1 0-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
  ShowerHead: () => <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16"/><path d="M4 8h16"/><path d="M8 12h8"/><path d="M8 16h8"/><path d="M12 20h.01"/></svg>,
  Home: () => <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Thermometer: () => <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>,
  Pipe: () => <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v18H3z"/><path d="m15 9 6 6"/><path d="m9 15 6 6"/></svg>,
  Search: () => <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
}

export default function Services() {
  return (
    <section id="services" className="section bg-surface">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="chip mb-4">Our Services</span>
          <h2 className="font-serif text-[32px] leading-[1.19] font-normal text-on-surface mb-4 md:text-[51px] md:leading-[1.2]">Comprehensive Plumbing Solutions</h2>
          <p className="text-secondary font-serif text-[20px] leading-[1.5]">From emergency repairs to full-home repiping, we handle every plumbing need with expertise and care.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.services.map((service, i) => (
            <article key={service.title} className="card group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-muted-surface border border-border flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-inverse transition-colors duration-300 flex-shrink-0">
                {iconMap[service.icon]()}
                </div>
                <h3 className="font-heading text-[19px] leading-[1.21] font-medium text-on-surface">{service.title}</h3>
              </div>
              <p className="text-secondary text-[16px] leading-[1.5]">{service.desc}</p>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            View All Services
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
