import { motion } from 'framer-motion'
import { Brain, Layers, Shield, Zap, Network, LineChart } from 'lucide-react'

const capabilities = [
  {
    icon: Brain,
    title: 'Autonomous Agents',
    description:
      'Self-directed AI agents that understand context, make decisions, and execute across your entire business stack.',
  },
  {
    icon: Layers,
    title: 'Domain-Native Intelligence',
    description:
      'Purpose-built models for each business function — not generic AI retrofitted to enterprise workflows.',
  },
  {
    icon: Network,
    title: 'Cross-Domain Orchestration',
    description:
      'Agents collaborate across departments. A sales insight automatically informs product strategy and engineering priorities.',
  },
  {
    icon: Shield,
    title: 'Enterprise Governance',
    description:
      'Full audit trails, role-based access, constitutional AI guardrails, and human-in-the-loop controls at every level.',
  },
  {
    icon: Zap,
    title: 'Real-Time Adaptation',
    description:
      'Continuous learning from your organization\'s data. Agents evolve with your business — no manual retraining.',
  },
  {
    icon: LineChart,
    title: 'Measurable ROI',
    description:
      'Built-in impact tracking across productivity, cost reduction, decision quality, and time-to-market.',
  },
]

export function Platform() {
  return (
    <section id="platform" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-paradigm-400">
            The Platform
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            AI infrastructure built for the enterprise
          </h2>
          <p className="mt-4 text-lg text-dark-400">
            A unified intelligence layer that deploys autonomous agents across
            every business domain — with the governance large organizations require.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-paradigm-500/20 hover:bg-white/[0.04]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-paradigm-600/10">
                <cap.icon size={20} className="text-paradigm-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dark-400">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
