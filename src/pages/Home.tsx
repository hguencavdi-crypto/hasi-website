import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Star, ChevronRight } from 'lucide-react'
import { useIntersectionObserver, useCounter } from '../hooks/useIntersectionObserver'
import CTASection from '../components/ui/CTASection'

const services = [
  {
    emoji: '🛒',
    title: 'Verkauf & Beratung',
    desc: 'Neuer PC, Laptop oder Drucker? Wir beraten ehrlich – ohne Fachchinesisch.',
    features: ['Geprüfte Markenqualität', 'Individuelle Zusammenstellung', 'Einrichtung inklusive'],
    path: '/dienstleistungen',
    bg: 'from-blue-900/60 to-gray-900',
  },
  {
    emoji: '🔧',
    title: 'Reparatur & Wartung',
    desc: 'Computer streikt? Wir helfen schnell und zuverlässig.',
    features: ['Datenrettung & Virenentfernung', 'Hardware-Reparatur', 'Fernwartung möglich'],
    path: '/dienstleistungen',
    bg: 'from-indigo-900/60 to-gray-900',
  },
  {
    emoji: '🛡️',
    title: 'Sicherheit & Virenschutz',
    desc: 'Professioneller Schutz vor Viren, Malware und Cyberangriffen.',
    features: ['Antiviren-Software', 'Firewalls & IT-Sicherheit', 'Phishing-Schutz'],
    path: '/dienstleistungen',
    bg: 'from-blue-800/60 to-gray-900',
  },
  {
    emoji: '💾',
    title: 'Datenrettung & Backup',
    desc: 'Verlorene Dateien oder beschädigte Festplatte? Wir retten Ihre Daten.',
    features: ['DSGVO-konform', 'Backup-Lösungen', 'Professionelle Analyse'],
    path: '/dienstleistungen',
    bg: 'from-cyan-900/60 to-gray-900',
  },
  {
    emoji: '🖨️',
    title: 'Drucker & Zubehör',
    desc: 'Einrichtung, Wartung und Reparatur von Druckern und Multifunktionsgeräten.',
    features: ['Tintenpatronen & Toner', 'Netzwerk-Integration', 'Ersatzteile im Laden'],
    path: '/dienstleistungen',
    bg: 'from-blue-900/60 to-gray-900',
  },
  {
    emoji: '☁️',
    title: 'IT-Service & Support',
    desc: 'Fernwartung und professioneller IT-Support für Ihr Unternehmen.',
    features: ['Remote-Support', 'Wartungsverträge', '24/7 Notfall-Service'],
    path: '/support',
    bg: 'from-indigo-900/60 to-gray-900',
  },
]

const testimonials = [
  {
    name: 'Max Müller',
    text: 'Hasi Elektronic hat meinen Laptop schnell repariert und mir klar erklärt, was passiert ist. Sehr empfehlenswert!',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    name: 'Anna Schmidt',
    text: 'Der Service war hervorragend! Schnelle Hilfe und freundliche Mitarbeiter. Ich werde definitiv wiederkommen.',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    name: 'Tim Becker',
    text: 'Dank Hasi Elektronic konnte ich meine wichtigen Daten retten. Ausgezeichneter Service und sehr kompetent.',
    rating: 5,
    avatar: '👨‍💻',
  },
  {
    name: 'Laura Wagner',
    text: 'Sehr zufrieden mit der Beratung! Hasi Elektronic hat mir viele nützliche Tipps gegeben.',
    rating: 5,
    avatar: '👩‍💼',
  },
]

function StatCard({ target, label, suffix = '' }: { target: number; label: string; suffix?: string }) {
  const { ref, isVisible } = useIntersectionObserver()
  const count = useCounter(target, isVisible)
  return (
    <div ref={ref} className="text-center">
      <div className="stat-number">
        {count}{suffix}
      </div>
      <p className="text-gray-400 text-sm mt-2 font-medium">{label}</p>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0a1628 0%, #1e3a8a 40%, #0f172a 100%)',
          }}
        />
        {/* Animated circles */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-10 bg-accent"></div>
              <span className="text-accent text-xs font-bold tracking-widest uppercase">IHR ZUVERLÄSSIGER PARTNER</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Ihr IT-Experte in{' '}
              <span className="gradient-text">Vaihingen Enz</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              Hasi Elektronic bietet professionelle IT-Dienstleistungen für private und gewerbliche Kunden seit 1986. Vertrauen Sie auf unsere Expertise!
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {['Kostenlose Erstdiagnose', 'Keine versteckten Kosten', 'Erfahrenes Team'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-gray-200">
                  <CheckCircle size={15} className="text-success" />
                  {badge}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/kontakt" className="btn-primary text-base px-8 py-4">
                JETZT KONTAKTIEREN <ArrowRight size={18} />
              </Link>
              <Link to="/dienstleistungen" className="btn-outline text-base px-8 py-4">
                Alle Services
              </Link>
            </div>
          </div>

          {/* Right: Info Card */}
          <div className="hidden lg:block">
            <div className="glass rounded-2xl p-8 border border-accent/20 shadow-2xl">
              <div className="text-6xl mb-4 text-center">🏪</div>
              <h3 className="text-white font-bold text-xl mb-4 text-center">Hasi Elektronic</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="text-white text-sm font-medium">Grabenstraße 18</p>
                    <p className="text-gray-400 text-xs">71665 Vaihingen an der Enz</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="text-white text-sm font-medium">07042 16391</p>
                    <p className="text-gray-400 text-xs">Mo–Fr & Sa geöffnet</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <span className="text-xl">⏰</span>
                  <div>
                    <p className="text-white text-sm font-medium">Mo/Di/Do/Fr: 9–13 & 15:30–18 Uhr</p>
                    <p className="text-gray-400 text-xs">Sa: 10–13 Uhr | Mi: Geschlossen</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg border border-success/20">
                  <span className="text-xl">✅</span>
                  <p className="text-success text-sm font-medium">Seit 1986 in Vaihingen!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-accent/50 to-transparent"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#1f2937]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <div className="relative">
              <div className="img-placeholder rounded-2xl overflow-hidden" style={{ paddingBottom: '70%' }}>
                <div className="absolute inset-0 flex items-center justify-center text-8xl">🏪</div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-5 -right-5 bg-accent rounded-xl p-4 shadow-xl shadow-accent/30">
                <p className="text-white font-black text-3xl">38+</p>
                <p className="text-white/80 text-xs font-medium">Jahre Erfahrung</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="section-label">ÜBER UNS</span>
              <h2 className="text-4xl font-black text-white mb-6">
                Wir sind Hasi Elektronic –{' '}
                <span className="gradient-text">Ihr IT-Spezialist</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Seit 1986 bietet Hasi Elektronic in Vaihingen an der Enz erstklassigen IT-Service und technische Unterstützung. Unser Unternehmen spezialisiert sich auf PC- und Laptop-Reparaturen, Datenrettung, Virenentfernung sowie Fernwartung über AnyDesk.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Wir verkaufen sowohl refurbished als auch neue Hardware und sind stolz auf unseren Hasi Safe Stick, der sicheres Passwortmanagement gewährleistet. Unsere jahrelange Erfahrung und hohe Kundenzufriedenheit zeichnen uns aus.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: '🏆', text: '38+ Jahre Expertise' },
                  { icon: '👥', text: '1000+ zufriedene Kunden' },
                  { icon: '⚡', text: 'Schnelle Reaktionszeit' },
                  { icon: '🔒', text: 'DSGVO-konformer Service' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <span className="text-xl">{item.icon}</span>
                    <p className="text-gray-300 text-sm font-medium">{item.text}</p>
                  </div>
                ))}
              </div>

              <Link to="/ueber-uns" className="btn-primary">
                MEHR ERFAHREN <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-label">UNSERE DIENSTLEISTUNGEN</span>
            <h2 className="text-4xl font-black text-white mt-2 mb-4">
              Vielfältige IT-Lösungen für Sie
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Von Reparaturen bis zu IT-Beratung – wir haben alles für Ihr IT-Bedürfnis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className={`card-hover bg-gradient-to-br ${s.bg} rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-300`}
              >
                <div className="p-8">
                  <div className="service-icon-card">{s.emoji}</div>
                  <h3 className="text-white font-bold text-xl mb-2">{s.title}</h3>
                  <div className="blue-divider mb-4"></div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle size={14} className="text-success flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={s.path}
                    className="flex items-center gap-1 text-accent text-sm font-semibold hover:text-accent-light transition-colors"
                  >
                    MEHR ERFAHREN <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/dienstleistungen" className="btn-primary text-base px-10">
              Alle Dienstleistungen ansehen <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            <StatCard target={100} label="Kundenzufriedenheit" suffix="%" />
            <StatCard target={1000} label="Zufriedene Kunden" suffix="+" />
            <StatCard target={38} label="Jahre Erfahrung" suffix="+" />
            <StatCard target={3} label="Auszeichnungen" suffix="+" />
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-[#1f2937]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">UNSERE GESCHICHTE</span>
              <h2 className="text-4xl font-black text-white mt-2 mb-6">
                Über 40 Jahre{' '}
                <span className="gradient-text">IT-Expertise</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Hasi Elektronic wurde 1986 gegründet und hat sich seither zu einem vertrauenswürdigen Partner in der IT-Branche entwickelt. Mit jahrzehntelanger Erfahrung und kontinuierlicher Weiterbildung sind wir immer auf dem neuesten Stand der Technik.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Unter der Leitung von Hamdi Güncavdi (seit 01.05.2023) verbinden wir die bewährten Werte des Unternehmens mit modernen IT-Lösungen und einem frischen Blick auf die Digitalisierung.
              </p>

              {/* Timeline */}
              <div className="space-y-4">
                {[
                  { year: '1986', text: 'Gründung von Hasi Elektronic in Vaihingen/Enz' },
                  { year: '2000er', text: 'Erweiterung in den PC- und Laptop-Service-Bereich' },
                  { year: '2023', text: 'Übernahme durch Hamdi Güncavdi, neue digitale Ausrichtung' },
                  { year: '2024', text: 'Launch des Hasi Safe Sticks & Cloud-Services' },
                ].map((item) => (
                  <div key={item.year} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-16 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                      <span className="text-accent text-xs font-bold">{item.year}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="img-placeholder rounded-2xl" style={{ paddingBottom: '80%', position: 'relative' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <span className="text-8xl">💻</span>
                <p className="text-gray-500 text-sm">Laptop-Reparatur & Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-label">WAS UNSERE KUNDEN SAGEN</span>
            <h2 className="text-4xl font-black text-white mt-2">
              Kundenbewertungen und Erfahrungen
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="card-hover highlight-card"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-2xl">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-bold">{t.name}</p>
                    <div className="flex gap-0.5 mt-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={13} className="fill-warning text-warning" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-[#1f2937]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="img-placeholder rounded-2xl" style={{ paddingBottom: '70%', position: 'relative' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="text-8xl">🔧</span>
                <p className="text-gray-500 text-sm">Professionelle Reparatur</p>
              </div>
            </div>

            <div>
              <span className="section-label">WARUM WIR ANDERS SIND</span>
              <h2 className="text-4xl font-black text-white mt-2 mb-8">
                Einzigartige Vorteile unserer{' '}
                <span className="gradient-text">Dienstleistungen</span>
              </h2>

              {[
                {
                  num: '01',
                  title: 'Erfahrung seit 1986',
                  desc: 'Über 40 Jahre Erfahrung in der IT-Branche. Wir kennen alle Probleme und haben bewährte Lösungen.',
                },
                {
                  num: '02',
                  title: 'Individuelle Beratung',
                  desc: 'Jeder Kunde erhält eine persönliche Beratung. Keine Standard-Lösungen, sondern passgenaue Empfehlungen.',
                },
                {
                  num: '03',
                  title: 'Schnelle Reaktionszeiten',
                  desc: 'Wir garantieren schnelle Hilfe – oft noch am selben Tag. Ihr IT-Problem bleibt nicht lange ungelöst.',
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-5 mb-7 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent font-black text-lg group-hover:bg-accent group-hover:text-white transition-all">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1.5">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}

              <Link to="/ueber-uns" className="btn-primary mt-2">
                Mehr über uns <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  )
}
