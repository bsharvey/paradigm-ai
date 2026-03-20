import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-paradigm-500/20 bg-gradient-to-br from-paradigm-950 via-dark-950 to-paradigm-950/50 p-10 text-center md:p-20"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute top-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-paradigm-600/15 blur-[100px]" />

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to redefine how your
              <br className="hidden md:block" /> organization works?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-dark-400">
              Join the enterprises already using Paradigm AI to deploy autonomous
              intelligence across every business function.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:ben@paradigm-ai.com"
                className="group flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-dark-950 transition-all hover:bg-dark-100"
              >
                Request Enterprise Demo
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:ben@paradigm-ai.com"
                className="flex items-center gap-2 rounded-xl border border-white/10 px-8 py-4 text-base font-medium text-dark-300 transition-all hover:border-white/20 hover:text-white"
              >
                Contact Sales
              </a>
            </div>

            <p className="mt-6 text-xs text-dark-600">
              SOC 2 Type II certified. GDPR compliant. Enterprise SLAs available.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
