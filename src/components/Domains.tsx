import { motion } from 'framer-motion'
import {
  TrendingUp,
  Megaphone,
  Package,
  Code2,
  Settings,
  Users,
  BarChart3,
  FileText,
} from 'lucide-react'

const domains = [
  {
    icon: TrendingUp,
    name: 'Sales',
    tagline: 'Close faster. Forecast accurately.',
    capabilities: [
      'Autonomous lead scoring & qualification',
      'AI-generated proposals & contracts',
      'Pipeline forecasting with 94%+ accuracy',
      'Competitive intelligence monitoring',
    ],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Megaphone,
    name: 'Marketing',
    tagline: 'Create, target, optimize — autonomously.',
    capabilities: [
      'Multi-channel campaign orchestration',
      'Content generation at enterprise scale',
      'Audience segmentation & personalization',
      'Attribution modeling & budget optimization',
    ],
    color: 'from-violet-500 to-purple-400',
  },
  {
    icon: Package,
    name: 'Product',
    tagline: 'From insight to roadmap in hours, not quarters.',
    capabilities: [
      'Feature prioritization from customer signals',
      'Automated competitive analysis',
      'User research synthesis',
      'Roadmap generation & stakeholder alignment',
    ],
    color: 'from-emerald-500 to-green-400',
  },
  {
    icon: Code2,
    name: 'Engineering',
    tagline: 'Ship 10x faster with AI pair teams.',
    capabilities: [
      'Autonomous code generation & review',
      'Architecture design & optimization',
      'Incident detection & auto-remediation',
      'Technical debt identification & resolution',
    ],
    color: 'from-orange-500 to-amber-400',
  },
  {
    icon: Settings,
    name: 'Operations',
    tagline: 'Run the machine. Optimize the machine.',
    capabilities: [
      'Process mining & automation',
      'Supply chain optimization',
      'Resource allocation & scheduling',
      'Compliance monitoring & reporting',
    ],
    color: 'from-rose-500 to-pink-400',
  },
  {
    icon: Users,
    name: 'Human Resources',
    tagline: 'Talent intelligence at scale.',
    capabilities: [
      'Candidate sourcing & screening',
      'Employee engagement analysis',
      'Workforce planning & skills gap identification',
      'Policy compliance & HR analytics',
    ],
    color: 'from-teal-500 to-emerald-400',
  },
  {
    icon: BarChart3,
    name: 'Finance',
    tagline: 'Every number, understood and acted on.',
    capabilities: [
      'Automated financial modeling',
      'Expense optimization & fraud detection',
      'Revenue forecasting & scenario planning',
      'Regulatory compliance automation',
    ],
    color: 'from-indigo-500 to-blue-400',
  },
  {
    icon: FileText,
    name: 'Legal',
    tagline: 'Contracts, compliance, risk — handled.',
    capabilities: [
      'Contract analysis & generation',
      'Regulatory change monitoring',
      'Risk assessment & mitigation',
      'IP portfolio management',
    ],
    color: 'from-slate-400 to-gray-300',
  },
]

export function Domains() {
  return (
    <section id="domains" className="border-t border-white/5 bg-white/[0.01] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-paradigm-400">
            Domain Coverage
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            AI agents for every business function
          </h2>
          <p className="mt-4 text-lg text-dark-400">
            Horizontal platform, vertical depth. Each domain gets purpose-built
            intelligence that understands the nuances of the function.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl border border-white/[0.06] bg-dark-950/60 p-5 transition-all hover:border-white/10 hover:bg-white/[0.03]"
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${domain.color} bg-opacity-10`}
                style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))` }}
              >
                <domain.icon size={18} className="text-dark-300" />
              </div>
              <h3 className="mt-3 text-base font-semibold text-white">{domain.name}</h3>
              <p className="mt-1 text-xs text-dark-500">{domain.tagline}</p>
              <ul className="mt-3 space-y-1.5">
                {domain.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2 text-xs text-dark-400">
                    <div className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-paradigm-500/50" />
                    {cap}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
