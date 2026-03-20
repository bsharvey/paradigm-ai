import { motion } from 'framer-motion'

const stats = [
  { value: '8', label: 'Business Domains', suffix: '' },
  { value: '10', label: 'Enterprise Verticals', suffix: '+' },
  { value: '97', label: 'Decision Accuracy', suffix: '%' },
  { value: '60', label: 'Cost Reduction', suffix: '%' },
]

export function Metrics() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-paradigm-950/50 to-dark-950 p-10 md:p-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-white md:text-5xl">
                  {stat.value}
                  <span className="text-paradigm-400">{stat.suffix}</span>
                </p>
                <p className="mt-2 text-sm text-dark-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
