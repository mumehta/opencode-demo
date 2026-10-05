import { ShieldCheck, Clock, DollarSign, Star, Truck, Users } from 'lucide-react'
import { siteData } from '../data/siteData'

const features = [
  { icon: ShieldCheck, title: 'Licensed & Insured', desc: 'Fully certified technicians protecting your home and investment.' },
  { icon: Clock, title: '24/7 Emergency', desc: 'Round-the-clock service when you need it most — no extra fees.' },
  { icon: DollarSign, title: 'Upfront Pricing', desc: 'Transparent quotes before any work begins. No surprises, ever.' },
  { icon: Star, title: 'Satisfaction Guaranteed', desc: "We're not done until you're 100% happy with the results." },
  { icon: Truck, title: 'Fully Stocked Vans', desc: 'Most repairs completed in a single visit — saving you time and money.' },
  { icon: Users, title: 'Local Family Owned', desc: 'Serving our community for 18+ years with integrity and pride.' },
]

export default function About() {
  return (
    <section id="about" className="section bg-cream">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="chip mb-4">About Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-6">Plumbing Done Right, Since 2005</h2>
            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>FlowRight Plumbing has been the trusted choice for residential and commercial plumbing in Anytown for over 18 years. Founded by Master Plumber Mike Henderson, we built our reputation on three simple principles: show up on time, do the job right, and treat every customer like family.</p>
              <p>Today, our team of licensed journeymen and apprentices continues that tradition. We invest in ongoing training, modern equipment, and the latest techniques — from trenchless sewer repair to tankless water heater installations — so you get the best solution, not just the easiest one.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {['18+ Years Experience', '500+ 5-Star Reviews', '2,000+ Jobs Completed', '100% Satisfaction'].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-white rounded-xl border border-olive/10 shadow-sm">
                  <div className="font-heading text-3xl font-bold text-charcoal">{stat.split('+')[0]}+</div>
                  <div className="text-sm text-charcoal/70 mt-1">{stat.replace(/^[\d,+]+\s/, '')}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="card group">
                <div className="w-14 h-14 rounded-xl bg-olive/10 text-olive flex items-center justify-center mb-3 group-hover:bg-olive group-hover:text-white transition-colors duration-300">
                  <feature.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-1">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
