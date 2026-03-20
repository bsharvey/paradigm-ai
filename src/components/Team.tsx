import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

const team = [
  {
    name: 'Dr. Benjamin Harvey',
    role: 'Co-Founder & CEO',
    image: '/team/ben.jpg',
    initials: 'BH',
    linkedin: 'https://www.linkedin.com/in/benjaminsharvey/',
    bio: 'Former Chief of Operations Data Science at the NSA. Founder of AI Squared (~$200M valuation, $20M+ raised). D.Sc. in Computer Science. Research appointments at Harvard Medical School, Johns Hopkins, NIH, and George Washington University. Former Director of Data Science at Maxar (CIA programs). Featured on CNBC and Forbes.',
    gradient: 'from-paradigm-600 to-paradigm-800',
  },
  {
    name: 'Stanford Wilkinson',
    role: 'Co-Founder & COO',
    image: '/team/stan.jpg',
    initials: 'SW',
    linkedin: 'https://www.linkedin.com/in/stanford-wilkinson-a738331a6/',
    bio: 'Seasoned executive leader with deep expertise in organizational management, strategy, and business development. Executive Director at DEFY and Chief DEI Officer at STARC Inc. President of JHR Investment Ventures. Board member of the Detroit Association of Black Organizations. Economics background with advanced study in organizational management.',
    gradient: 'from-accent-500 to-accent-600',
  },
  {
    name: 'Ivan McClerkin',
    role: 'Co-Founder & CRO',
    image: '/team/ivan.jpg',
    initials: 'IM',
    linkedin: 'https://www.linkedin.com/in/ivan-mcclerkin/',
    bio: 'Serial entrepreneur and revenue leader with an MBA and deep sales expertise. Built and scaled mortgage operations exceeding $2M/month in closings. Former Executive Mortgage Loan Officer at Quicken Loans, consistently exceeding quotas by 40%+. Expert in consultative selling, team leadership, and go-to-market strategy.',
    gradient: 'from-rose-500 to-orange-500',
  },
]

export function Team() {
  return (
    <section id="team" className="border-t border-white/5 bg-white/[0.01] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-paradigm-400">
            Leadership
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Built by operators, not observers
          </h2>
          <p className="mt-4 text-lg text-dark-400">
            Our founding team combines deep technical AI expertise, enterprise
            operations leadership, and proven revenue generation at scale.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-xl border border-white/[0.06] bg-dark-950/60 p-6 transition-all hover:border-white/10"
            >
              {/* Photo or initials */}
              <div className="mb-5 flex justify-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const fallback = target.nextElementSibling as HTMLElement
                      if (fallback) fallback.style.display = 'flex'
                    }}
                  />
                  <div
                    className={`absolute inset-0 hidden items-center justify-center bg-gradient-to-br ${member.gradient}`}
                    style={{ display: 'none' }}
                  >
                    <span className="text-3xl font-bold text-white/90">
                      {member.initials}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="mt-0.5 text-sm font-medium text-paradigm-400">{member.role}</p>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-dark-400">
                {member.bio}
              </p>

              <div className="mt-5 flex justify-center">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-dark-500 transition-colors hover:text-paradigm-400"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
