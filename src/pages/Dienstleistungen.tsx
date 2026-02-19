import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react'
import CTASection from '../components/ui/CTASection'

const mainServices = [
  {
    icon: '🔧',
    title: 'Reparatur-Service',
    features: ['PC & Laptop Reparatur', 'Display-Tausch', 'Hardware-Upgrades', 'Express-Service', 'Lüfter-Reinigung', 'Akku-Tausch'],
    path: '/digital-hausmeister',
    gradient: 'from-blue-900 to-indigo-900',
  },
  {
    icon: '💻',
    title: 'PCs & Laptops',
    features: ['Business-Laptops', 'Individuelle Konfiguration', 'Einrichtung & Setup', 'Datenübertragung', 'Refurbished Hardware', 'Markengeräte'],
    path: '/dienstleistungen',
    gradient: 'from-indigo-900 to-blue-900',
  },
  {
    icon: '🖨️',
    title: 'Drucker & Scanner',
    features: ['Multifunktionsgeräte', 'Netzwerk-Integration', 'Treiber-Installation', 'Wartung & Reparatur', 'Tintenpatronen & Toner', 'Scannereinrichtung'],
    path: '/dienstleistungen',
    gradient: 'from-cyan-900 to-blue-900',
  },
  {
    icon: '🛡️',
    title: 'Daten & Sicherheit',
    features: ['Datenrettung', 'Virenentfernung', 'IT-Security Audit', 'Hasi Safe Stick', 'Backup-Lösungen', 'Firewall-Konfiguration'],
    path: '/hasi-safe-stick',
    gradient: 'from-blue-900 to-cyan-900',
  },
  {
    icon: '☁️',
    title: 'Cloud & IT-Services',
    features: ['Hasi Cloud (DSGVO)', 'Microsoft 365', 'Server-Administration', 'Netzwerk-Setup', 'Remote-Support', 'VPN-Einrichtung'],
    path: '/cloud',
    gradient: 'from-sky-900 to-blue-900',
  },
  {
    icon: '📷',
    title: 'Smart Home & Zubehör',
    features: ['Überwachungskameras', 'Smart Home Setup', 'Monitore & Bildschirme', 'Kabel & Adapter', 'WLAN-Repeater', 'IoT-Geräte'],
    path: '/dienstleistungen',
    gradient: 'from-indigo-900 to-sky-900',
  },
  {
    icon: '📞',
    title: 'Support & Beratung',
    features: ['Digitaler Hausmeister', 'Hasi Care Support', 'IT-Schulungen', 'Kaufberatung', 'Senioren-Service', '24/7 Notfall*'],
    path: '/digital-hausmeister',
    gradient: 'from-blue-900 to-indigo-900',
  },
]

const highlights = [
  {
    icon: '🤝',
    title: 'Digitaler Hausmeister',
    badge: 'BELIEBT',
    badgeColor: 'bg-success/20 text-success border-success/30',
    price: 'ab 9,90€/Monat',
    desc: 'Monatliche IT-Betreuung mit Remote-Support. Ihr persönlicher IT-Kümmerer.',
    path: '/digital-hausmeister',
  },
  {
    icon: '💻',
    title: 'Hasi Care Support',
    badge: 'NEU',
    badgeColor: 'bg-accent/20 text-accent border-accent/30',
    price: 'ab 19,90€/Monat',
    desc: 'IT-Hilfe ohne Garantie-Verantwortung. Für alle, die professionelle Betreuung möchten.',
    path: '/hasi-care-support',
  },
  {
    icon: '🛡️',
    title: 'Garantieverlängerung',
    badge: 'NEU',
    badgeColor: 'bg-accent/20 text-accent border-accent/30',
    price: 'ab 79€ einmalig',
    desc: 'Bis zu 5 Jahre Hardware-Garantie. Schützen Sie Ihre Investition langfristig.',
    path: '/dienstleistungen',
  },
  {
    icon: '☁️',
    title: 'Hasi Cloud',
    badge: 'DSGVO',
    badgeColor: 'bg-success/20 text-success border-success/30',
    price: 'ab 9,90€/Monat',
    desc: 'DSGVO-konforme Cloud auf Nextcloud-Basis. Ihre Daten bleiben in Deutschland.',
    path: '/cloud',
  },
  {
    icon: '🔐',
    title: 'Hasi Safe Stick',
    badge: 'PREMIUM',
    badgeColor: 'bg-warning/20 text-warning border-warning/30',
    price: 'ab 59€',
    desc: 'Doppelt verschlüsselter USB-Stick (VeraCrypt + KeePass). Militärsicher.',
    path: '/hasi-safe-stick',
  },
]

const allServices = [
  '💻 PC & Laptop Reparatur',
  '💾 Datenrettung',
  '🦠 Virenentfernung',
  '🔄 Windows Installation',
  '🌐 Netzwerk-Einrichtung',
  '🖨️ Drucker-Service',
  '📱 Smart Home Setup',
  '🎓 IT-Schulungen',
  '🏢 Business IT-Support',
  '🔐 IT-Security Audit',
  '📧 E-Mail Konfiguration',
  '⚡ Express-Reparatur',
]

export default function Dienstleistungen() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1e3a8a 50%, #111827 100%)' }}
        />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <span className="section-label">UNSERE DIENSTLEISTUNGEN</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mt-3 mb-6">
            Professionelle IT-Dienstleistungen für Sie
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Von der einfachen Reparatur bis zur komplexen Unternehmens-IT – wir haben die passende Lösung.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { label: '38+ Jahre', sub: 'Erfahrung' },
              { label: '1000+', sub: 'Zufriedene Kunden' },
              { label: '24/7*', sub: 'Notfall-Support' },
            ].map((s) => (
              <div key={s.label} className="glass px-6 py-3 rounded-xl">
                <p className="text-white font-black text-xl">{s.label}</p>
                <p className="text-gray-400 text-xs">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-label">SERVICE-KATEGORIEN</span>
            <h2 className="text-4xl font-black text-white mt-2">Unser Leistungsspektrum</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {mainServices.map((s) => (
              <div
                key={s.title}
                className={`card-hover bg-gradient-to-br ${s.gradient} rounded-2xl border border-white/5 hover:border-accent/30 transition-all p-6`}
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">{s.title}</h3>
                <div className="blue-divider mb-4"></div>
                <ul className="space-y-1.5 mb-5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle size={12} className="text-success flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={s.path}
                  className="flex items-center gap-1 text-accent text-xs font-semibold hover:text-accent-light transition-colors"
                >
                  Details ansehen <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Offers */}
      <section className="py-24 bg-[#1f2937]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-label">BESONDERE ANGEBOTE</span>
            <h2 className="text-4xl font-black text-white mt-2">
              Unsere Highlight-Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="highlight-card relative">
                <div className={`absolute top-4 right-4 text-xs font-bold px-2 py-0.5 rounded-full border ${h.badgeColor}`}>
                  {h.badge}
                </div>
                <div className="service-icon-card">{h.icon}</div>
                <h3 className="text-white font-bold text-xl mb-2">{h.title}</h3>
                <p className="text-accent font-bold text-lg mb-3">{h.price}</p>
                <div className="blue-divider mb-4"></div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{h.desc}</p>
                <Link to={h.path} className="btn-primary text-xs">
                  Mehr erfahren <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-label">ALLE LEISTUNGEN</span>
            <h2 className="text-4xl font-black text-white mt-2">Unser komplettes Service-Portfolio</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allServices.map((s) => (
              <div
                key={s}
                className="flex items-center gap-3 p-4 bg-white/3 rounded-xl border border-white/5 hover:border-accent/20 hover:bg-accent/5 transition-all cursor-pointer group"
              >
                <span className="text-2xl">{s.split(' ')[0]}</span>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {s.split(' ').slice(1).join(' ')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with contact */}
      <section className="py-16 bg-[#1f2937]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Haben Sie eine spezifische Anfrage?
          </h2>
          <p className="text-gray-400 mb-8">
            Rufen Sie uns an oder schreiben Sie uns – wir antworten schnell!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4970421639 1" className="btn-primary text-base px-8 py-4">
              <Phone size={18} /> 07042 16391
            </a>
            <a href="mailto:info@hasi-elektronic.de" className="btn-outline text-base px-8 py-4">
              <Mail size={18} /> E-Mail schreiben
            </a>
          </div>
          <p className="text-gray-500 text-xs mt-6">
            * 24/7 Notfall-Support im Enterprise-Paket. Normaler Support: Mo/Di/Do/Fr 9–18 Uhr, Sa 10–13 Uhr
          </p>
        </div>
      </section>

      <CTASection />
    </>
  )
}
