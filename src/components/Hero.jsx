import { Suspense, lazy } from 'react'
import { ArrowRight, Phone, ShieldCheck, Clock, DollarSign } from 'lucide-react'
import { siteData } from '../data/siteData'

const HeroVideo = lazy(() => import('./HeroVideo'))

export default function Hero() {
  const features = [
    { icon: ShieldCheck, label: 'Licensed & Insured' },
    { icon: Clock, label: '24/7 Emergency Service' },
    { icon: DollarSign, label: 'Upfront Pricing' },
  ]

  return (
    <section className="relative bg-cream pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container relative max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center md:text-left max-w-3xl mx-auto md:mx-0">
          <span className="chip mb-6">Serving Anytown & Surrounding Areas Since 2005</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-charcoal mb-6">
            Professional Plumbing{' '}
            <span className="text-olive">Done Right</span>
            {' '}The First Time
          </h1>
          <p className="text-lg text-charcoal/70 leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
            Licensed, bonded, and insured plumbers providing reliable repairs, installations, and maintenance.
            Fast response, fair prices, guaranteed satisfaction.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12">
            <a href="tel:5551234567" className="btn-primary group w-full sm:w-auto">
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span>Call Now: {siteData.company.phone}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-secondary w-full sm:w-auto">Schedule Service</a>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-6 mx-auto md:mx-0 max-w-xl">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center justify-center gap-2.5 text-[13px] text-charcoal/70 bg-white rounded-xl px-4 py-3 border border-olive/10 shadow-sm">
                <feature.icon className="w-5 h-5 text-olive" aria-hidden="true" />
                <span className="font-medium">{feature.label}</span>
              </div>
            ))}
          </div>
          </div>
          <div className="mx-auto w-full max-w-xl lg:max-w-none">
            <Suspense
              fallback={
                <div className="flex aspect-square w-full max-w-[520px] items-center justify-center rounded-3xl border border-olive/10 bg-white/60 text-sm font-medium text-charcoal/50">
                  Loading showcase…
                </div>
              }
            >
              <HeroVideo />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}
