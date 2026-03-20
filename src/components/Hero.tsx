import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(76,110,245,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(76,110,245,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      {/* Radial glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-paradigm-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-paradigm-500/20 bg-paradigm-500/5 px-4 py-1.5 text-sm text-paradigm-300">
            <Sparkles size={14} />
            Now in Private Beta
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
            Autonomous AI for{' '}
            <span className="bg-gradient-to-r from-paradigm-400 to-accent-400 bg-clip-text text-transparent">
              Every Enterprise Domain
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-dark-400 md:text-xl">
            Paradigm AI deploys intelligent agents across Sales, Marketing, Product,
            Engineering, and Operations — transforming how large organizations
            navigate the future of work.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-xl bg-paradigm-600 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-paradigm-500 hover:shadow-lg hover:shadow-paradigm-600/25"
            >
              Request Enterprise Demo
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#platform"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-base font-medium text-dark-300 transition-all hover:border-white/20 hover:text-white"
            >
              Explore the Platform
            </a>
          </div>
        </motion.div>

        {/* Hero visual — abstract dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-1">
            <div className="rounded-xl border border-white/[0.04] bg-dark-950/80 p-6 md:p-10">
              {/* Fake dashboard header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-accent-500/80" />
                  <span className="text-sm font-medium text-dark-400">Paradigm Command Center</span>
                </div>
                <div className="flex gap-2">
                  {['Sales', 'Marketing', 'Product', 'Engineering', 'Ops'].map((d) => (
                    <span key={d} className="rounded-md bg-white/5 px-3 py-1 text-xs text-dark-500">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              {/* Fake metrics row */}
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  { label: 'Active AI Agents', value: '847' },
                  { label: 'Tasks Automated / hr', value: '12.4K' },
                  { label: 'Decision Accuracy', value: '97.3%' },
                  { label: 'Cost Reduction', value: '62%' },
                ].map((m) => (
                  <div key={m.label} className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                    <p className="text-2xl font-bold text-white">{m.value}</p>
                    <p className="mt-1 text-xs text-dark-500">{m.label}</p>
                  </div>
                ))}
              </div>
              {/* Fake activity bars */}
              <div className="mt-6 space-y-2">
                {[85, 72, 93, 68, 88].map((w, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-20 text-xs text-dark-600">
                      {['Sales', 'Marketing', 'Product', 'Eng', 'Ops'][i]}
                    </span>
                    <div className="h-2 flex-1 rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${w}%` }}
                        transition={{ duration: 1.2, delay: 0.6 + i * 0.1 }}
                        className="h-2 rounded-full bg-gradient-to-r from-paradigm-600 to-accent-500"
                      />
                    </div>
                    <span className="w-10 text-right text-xs text-dark-500">{w}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
