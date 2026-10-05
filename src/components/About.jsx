import { ShieldCheck, Clock, DollarSign, Star, Truck, Users } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'Licensed & Insured', desc: 'Fully certified technicians protecting your home and investment.' },
  { icon: Clock, title: '24/7 Emergency', desc: 'Round-the-clock service when you need it most — no extra fees.' },
  { icon: DollarSign, title: 'Upfront Pricing', desc: 'Transparent quotes before any work begins. No surprises, ever.' },
  { icon: Star, title: 'Satisfaction Guaranteed', desc: "We're not done until you're 100% happy with the results." },
  { icon: Truck, title: 'Fully Stocked Vans', desc: 'Most repairs completed in a single visit — saving you time and money.' },
  { icon: Users, title: 'Local Family Owned', desc: 'Serving our community for 18+ years with integrity and pride.' },
]

const chipTones = [
  'bg-teal/25 text-ink',
  'bg-[#D8C3A5]/40 text-ink',
  'bg-stone/40 text-ink',
  'bg-[#B5BFA0]/30 text-ink',
  'bg-teal/25 text-ink',
  'bg-[#D8C3A5]/40 text-ink',
]

export default function About() {
  return (
    <section id="about" className="section bg-neutral border-y border-border">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="chip mb-4">About Us</span>
            <h2 className="font-heading text-[34px] leading-[1.2] tracking-[-0.8px] font-normal text-heading mb-6">Plumbing Done Right, Since 2005</h2>
            <div className="space-y-4 text-secondary text-base leading-[1.5]">
              <p>FlowRight Plumbing has been the trusted choice for residential and commercial plumbing in Anytown for over 18 years. Founded by Master Plumber Mike Henderson, we built our reputation on three simple principles: show up on time, do the job right, and treat every customer like family.</p>
              <p>Today, our team of licensed journeymen and apprentices continues that tradition. We invest in ongoing training, modern equipment, and the latest techniques — from trenchless sewer repair to tankless water heater installations — so you get the best solution, not just the easiest one.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-[22px]">
              {['18+ Years Experience', '500+ 5-Star Reviews', '2,000+ Jobs Completed', '100% Satisfaction'].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-tertiary rounded-none border border-border shadow-ledger-sm">
                  <div className="font-heading text-[27px] leading-[1.19] tracking-[-0.64px] font-normal text-heading">{stat.split('+')[0]}+</div>
                  <div className="text-[13px] text-muted mt-1">{stat.replace(/^[\d,+]+\s/, '')}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[22px]">
            {features.map((feature, i) => (
              <div key={i} className="card bg-tertiary shadow-ledger-sm">
                <span className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${chipTones[i % chipTones.length]}`}>
                  <feature.icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-[19px] leading-[1.21] font-normal text-heading mb-1">{feature.title}</h3>
                <p className="text-[13px] leading-[1.54] text-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
