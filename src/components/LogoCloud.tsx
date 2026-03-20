export function LogoCloud() {
  const logos = [
    'Fortune 500 Ready',
    'SOC 2 Type II',
    'GDPR Compliant',
    'ISO 27001',
    'HIPAA Eligible',
    'FedRAMP Pathway',
  ]

  return (
    <section className="border-y border-white/5 bg-white/[0.01] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-dark-600">
          Enterprise-Grade Compliance & Security
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 text-sm font-medium text-dark-500"
            >
              <div className="h-2 w-2 rounded-full bg-accent-500/40" />
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
