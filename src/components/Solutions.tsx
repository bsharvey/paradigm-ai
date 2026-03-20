import { motion } from 'framer-motion'
import { Building2, Factory, Landmark, HeartPulse, ShoppingBag, GraduationCap } from 'lucide-react'

const verticals = [
  {
    icon: Building2,
    name: 'Financial Services',
    description: 'Risk modeling, compliance automation, fraud detection, and algorithmic trading intelligence.',
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Predictive maintenance, supply chain optimization, quality assurance, and production planning.',
  },
  {
    icon: Landmark,
    name: 'Government & Defense',
    description: 'Mission-critical analytics, cybersecurity operations, intelligence processing, and workforce modernization.',
  },
  {
    icon: HeartPulse,
    name: 'Healthcare & Life Sciences',
    description: 'Clinical decision support, drug discovery acceleration, patient journey optimization, and regulatory compliance.',
  },
  {
    icon: ShoppingBag,
    name: 'Retail & E-Commerce',
    description: 'Demand forecasting, personalization engines, inventory optimization, and omnichannel orchestration.',
  },
  {
    icon: GraduationCap,
    name: 'Education & Research',
    description: 'Adaptive learning platforms, research synthesis, institutional analytics, and grant optimization.',
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-paradigm-400">
            Industry Solutions
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Vertical depth, horizontal reach
          </h2>
          <p className="mt-4 text-lg text-dark-400">
            Purpose-built AI solutions for the industries that matter most —
            each grounded in deep domain expertise and enterprise-grade governance.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {verticals.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03]">
                <v.icon size={20} className="text-paradigm-400" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">{v.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-dark-400">
                  {v.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
