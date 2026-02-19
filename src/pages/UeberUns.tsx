import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, CheckCircle } from 'lucide-react'
import CTASection from '../components/ui/CTASection'

const faqs = [
  {
    q: 'Wie schnell kann ich Unterstützung erhalten?',
    a: 'In den meisten Fällen helfen wir Ihnen noch am selben Tag. Bei dringenden Problemen rufen Sie uns einfach an – 07042 16391. Für Fernwartungs-Probleme können wir oft sofort helfen. Bei Hardware-Reparaturen erhalten Sie nach der Diagnose eine konkrete Zeitangabe.',
  },
  {
    q: 'Bieten Sie auch Fernsupport an?',
    a: 'Ja! Wir bieten professionellen Fernwartungs-Service über AnyDesk an. So können wir viele Probleme lösen, ohne dass Sie zu uns kommen müssen – besonders praktisch für Software-Probleme, Virenbefall oder allgemeine Einstellungen.',
  },
  {
    q: 'Verkaufen Sie auch neue Hardware?',
    a: 'Ja, wir verkaufen sowohl neue als auch geprüfte refurbished Hardware. Von Laptops und PCs über Drucker bis hin zu Netzwerk-Equipment – wir beraten Sie ehrlich und ohne Fachchinesisch bei der Wahl des richtigen Produkts.',
  },
  {
    q: 'Was ist der Hasi Safe Stick?',
    a: 'Der Hasi Safe Stick ist unser exklusives Premium-Produkt: Ein doppelt verschlüsselter USB-Stick (AES-256 mit VeraCrypt + KeePass) für sicheres Passwortmanagement auf Militär-Sicherheitsniveau. Preis: ab 59€.',
  },
  {
    q: 'Haben Sie kostenlose Parkplätze?',
    a: 'Ja! Direkt vor unserem Laden in der Grabenstraße 18 (Eingang über Heilbronner Straße) stehen kostenlose Parkplätze zur Verfügung. Vom Bahnhof Vaihingen sind es ca. 10 Minuten zu Fuß.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
        aria-expanded={open}
      >
        <span className="text-white font-semibold text-sm pr-4">{q}</span>
        <ChevronDown
          size={20}
          className={`text-accent flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-gray-700/50 pt-4">
          {a}
        </div>
      )}
    </div>
  )
}

export default function UeberUns() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1e3a8a 50%, #111827 100%)' }}
        />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-6">
            IHR VERTRAUENSWÜRDIGER IT-DIENSTLEISTER
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Erfahren, lokal und{' '}
            <span className="gradient-text">technisch versiert</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Seit über 38 Jahren bieten wir zuverlässige IT-Lösungen in Vaihingen an der Enz. Persönlich, kompetent und immer nah am Kunden.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-[#1f2937]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="img-placeholder rounded-2xl" style={{ paddingBottom: '75%', position: 'relative' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="text-8xl">👨‍💻</span>
                <p className="text-gray-500 text-sm">Ihr IT-Experte</p>
              </div>
              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                <div className="bg-black/60 backdrop-blur rounded-xl p-3 text-center">
                  <p className="text-accent font-black text-2xl">38+</p>
                  <p className="text-gray-400 text-xs">Jahre</p>
                </div>
                <div className="bg-black/60 backdrop-blur rounded-xl p-3 text-center">
                  <p className="text-accent font-black text-2xl">1000+</p>
                  <p className="text-gray-400 text-xs">Kunden</p>
                </div>
              </div>
            </div>

            <div>
              <span className="section-label">ÜBER UNS</span>
              <h2 className="text-4xl font-black text-white mt-2 mb-6">
                Ihr IT-Partner seit 1986
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Seit 1986 bietet Hasi Elektronic in Vaihingen an der Enz erstklassigen IT-Service und technische Unterstützung. Unser Unternehmen spezialisiert sich auf PC- und Laptop-Reparaturen, Datenrettung, Virenentfernung sowie Fernwartung über AnyDesk.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Wir verkaufen sowohl refurbished als auch neue Hardware und sind stolz auf unseren Hasi Safe Stick, der sicheres Passwortmanagement gewährleistet. Unter der Führung von Hamdi Güncavdi verbinden wir jahrzehntelange Tradition mit modernsten IT-Lösungen.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Kostenlose Erstdiagnose',
                  'Transparente Preisgestaltung',
                  'Schnelle Reparaturzeiten',
                  'DSGVO-konformer Service',
                  'Persönliche Beratung',
                  'Nachhaltige IT-Lösungen',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={15} className="text-success flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-label">UNSER LEITBILD</span>
            <h2 className="text-4xl font-black text-white mt-2">Mission & Werte</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="highlight-card">
              <div className="service-icon-card">🎯</div>
              <h3 className="text-white font-bold text-xl mb-3">Unsere Mission</h3>
              <div className="blue-divider mb-4"></div>
              <h4 className="text-accent font-semibold mb-2">"Ihnen die besten IT-Lösungen bieten"</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Die Mission von Hasi Elektronic ist es, qualitativ hochwertigen IT-Service zu liefern, der echtes Vertrauen schafft. Wir erklären Technik verständlich und lösen Probleme nachhaltig – ohne versteckte Kosten oder unnötige Zusatz-Verkäufe.
              </p>
            </div>

            <div className="highlight-card">
              <div className="service-icon-card">💎</div>
              <h3 className="text-white font-bold text-xl mb-3">Unsere Werte</h3>
              <div className="blue-divider mb-4"></div>
              <h4 className="text-accent font-semibold mb-2">"Vertrauen, Qualität und Kundenorientierung"</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Wir glauben an die Bedeutung von Vertrauen und Qualität in jeder Kundenbeziehung. Ehrliche Beratung, saubere Arbeit und respektvoller Umgang – das sind die Grundpfeiler von Hasi Elektronic.
              </p>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🤝', title: 'Ehrlichkeit', desc: 'Wir empfehlen nur, was Sie wirklich brauchen – transparent und ohne versteckte Kosten.' },
              { icon: '⚡', title: 'Schnelligkeit', desc: 'Ihr Problem wartet nicht. Wir auch nicht. Oft noch am selben Tag gelöst.' },
              { icon: '🔐', title: 'Datensicherheit', desc: 'Ihre Daten sind bei uns sicher. DSGVO-konformer Umgang ist für uns selbstverständlich.' },
              { icon: '📚', title: 'Kompetenz', desc: 'Kontinuierliche Weiterbildung und jahrzehntelange Praxiserfahrung zum Wohle unserer Kunden.' },
              { icon: '🌍', title: 'Lokalität', desc: 'Als lokaler Betrieb kennen wir unsere Kunden persönlich. Kein Call-Center, keine Anonymität.' },
              { icon: '♻️', title: 'Nachhaltigkeit', desc: 'Reparieren statt wegwerfen. Wir verlängern die Lebensdauer Ihrer Geräte.' },
            ].map((v) => (
              <div key={v.title} className="text-center p-6 bg-white/3 rounded-xl border border-white/5 hover:border-accent/20 transition-colors">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="text-white font-bold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Inhaber */}
      <section className="py-24 bg-[#1f2937]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-label">UNSER TEAM</span>
            <h2 className="text-4xl font-black text-white mt-2">Der Mensch hinter Hasi Elektronic</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="highlight-card text-center p-10">
              <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center text-5xl mx-auto mb-6">
                👨‍💼
              </div>
              <h3 className="text-white font-black text-2xl mb-1">Hamdi Güncavdi</h3>
              <p className="text-accent font-semibold mb-4">Inhaber & IT-Experte</p>
              <div className="blue-divider mx-auto mb-6"></div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Mit einem Hintergrund in Metalltechnik (Sakarya Universität, 2004) und jahrelanger praktischer Erfahrung in allen Bereichen der IT – von Netzwerk und Server über Datenrettung bis zu System-Administration – steht Hamdi Güncavdi für Kompetenz und Verlässlichkeit.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Netzwerk & Server', 'Datenrettung', 'System-Administration', 'IT-Sicherheit', 'Cloud-Services'].map((skill) => (
                  <span key={skill} className="text-xs bg-accent/10 text-accent border border-accent/20 px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-label">FAQ</span>
            <h2 className="text-4xl font-black text-white mt-2">Häufige Fragen</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-400 mb-4">Noch mehr Fragen? Wir helfen gerne!</p>
            <Link to="/kontakt" className="btn-primary">
              Jetzt Kontakt aufnehmen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
