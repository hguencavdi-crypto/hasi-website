import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  label?: string
  title?: string
  subtitle?: string
  buttonText?: string
  buttonPath?: string
}

export default function CTASection({
  label = 'KONTAKTIEREN SIE UNS',
  title = 'Holen Sie sich Unterstützung für Ihre IT-Anliegen!',
  subtitle = 'Unser Team steht bereit, um Ihnen mit Fachwissen und Freundlichkeit zu helfen.',
  buttonText = 'JETZT KONTAKTIEREN',
  buttonPath = '/kontakt',
}: CTASectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0f2460 0%, #1e3a8a 40%, #111827 100%)',
        }}
      />
      {/* Circuit pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #60a5fa 0%, transparent 50%)`,
        }}
      />
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <span className="section-label">{label}</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 mt-2">{title}</h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">{subtitle}</p>
        <Link to={buttonPath} className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2">
          {buttonText} <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
