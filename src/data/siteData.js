// All site copy — single source of truth for content.
// Visual styling of this content is governed by DESIGN.md (§6 Sections).
export const siteData = {
  company: {
    name: 'FlowRight Plumbing',
    tagline: 'Your Trusted Local Plumbing Experts',
    phone: '(555) 123-4567',
    email: 'service@flowrightplumbing.com',
    address: '123 Main Street, Anytown, ST 12345',
    hours: 'Mon–Fri 7am–7pm • Sat 8am–4pm • Sun Emergency Only',
    license: 'Licensed • Bonded • Insured • License #PL-12345',
  },
  services: [
    { icon: 'Wrench', title: 'Emergency Repairs', desc: '24/7 burst pipes, leaks, and clogs. We arrive fast and fix it right.' },
    { icon: 'ShowerHead', title: 'Drain Cleaning', desc: 'Hydro-jetting, snaking, and camera inspection for clear, flowing drains.' },
    { icon: 'Home', title: 'Fixture Installation', desc: 'Toilets, faucets, sinks, showers, and garbage disposals installed professionally.' },
    { icon: 'Thermometer', title: 'Water Heaters', desc: 'Tank and tankless installation, repair, and maintenance for endless hot water.' },
    { icon: 'Pipe', title: 'Repiping', desc: 'Whole-home copper and PEX repiping with minimal disruption to your daily life.' },
    { icon: 'Search', title: 'Leak Detection', desc: 'Advanced electronic leak detection to find hidden leaks before damage occurs.' },
  ],
  features: [
    { icon: 'ShieldCheck', title: 'Licensed & Insured', desc: 'Fully certified technicians protecting your home and investment.' },
    { icon: 'Clock', title: '24/7 Emergency', desc: 'Round-the-clock service when you need it most — no extra fees.' },
    { icon: 'DollarSign', title: 'Upfront Pricing', desc: 'Transparent quotes before any work begins. No surprises, ever.' },
    { icon: 'Star', title: 'Satisfaction Guaranteed', desc: "We're not done until you're 100% happy with the results." },
  ],
  testimonials: [
    { name: 'Sarah M.', role: 'Homeowner', text: 'FlowRight saved us when our water heater failed on Christmas Eve. Technician arrived in 45 minutes, had it fixed by morning. Incredible service!', rating: 5 },
    { name: 'James R.', role: 'Property Manager', text: 'I manage 12 rental units and FlowRight is my go-to. Reliable, honest pricing, and they always show up on time. Highly recommended.', rating: 5 },
    { name: 'Lisa K.', role: 'Homeowner', text: 'Best plumbing experience ever. They found a slab leak other companies missed, fixed it cleanly, and explained everything. True professionals.', rating: 5 },
  ],
}