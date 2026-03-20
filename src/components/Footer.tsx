export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-paradigm-500 to-paradigm-700">
              <span className="text-xs font-bold text-white">P</span>
            </div>
            <span className="text-sm font-semibold text-dark-300">
              Paradigm AI
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-dark-500">
            <a href="#platform" className="transition-colors hover:text-white">Platform</a>
            <a href="#domains" className="transition-colors hover:text-white">Domains</a>
            <a href="#solutions" className="transition-colors hover:text-white">Solutions</a>
            <a href="#team" className="transition-colors hover:text-white">Team</a>
            <a href="mailto:ben@paradigm-ai.com" className="transition-colors hover:text-white">Contact</a>
          </div>

          <p className="text-xs text-dark-600">
            &copy; {new Date().getFullYear()} Paradigm AI, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
