import { Link } from 'react-router-dom'
import { CheckCircle, X, ArrowRight, Phone, Star } from 'lucide-react'
import CTASection from '../components/ui/CTASection'

const packages = [
  {
    name: 'Basic',
    price: '9,90',
    period: '/Monat',
    target: 'Für Gelegenheitsnutzer',
    popular: false,
    features: [
      { text: 'Telefonischer Support', included: true },
      { text: 'E-Mail-Beratung (24h Antwort)', included: true },
      { text: 'Kaufberatung Hardware', included: true },
      { text: '1x Vor-Ort-Termin/Jahr', included: false },
      { text: 'Remote-Support', included: false },
      { text: 'Software-Updates', included: false },
      { text: 'Backup-Check', included: false },
      { text: 'Sicherheits-Scan', included: false },
      { text: '10% Rabatt auf Reparaturen', included: false },
    ],
  },
  {
    name: 'Standard',
    price: '19,90',
    period: '/Monat',
    target: 'Für die meisten Nutzer',
    popular: true,
    features: [
      { text: 'Telefonischer Support', included: true },
      { text: 'E-Mail-Beratung (24h Antwort)', included: true },
      { text: 'Kaufberatung Hardware', included: true },
      { text: '1x Vor-Ort-Termin/Jahr', included: true },
      { text: 'Remote-Support', included: true },
      { text: 'Priorisierte Bearbeitung', included: true },
      { text: 'Software-Updates', included: true },
      { text: 'Backup-Check', included: false },
      { text: 'Sicherheits-Scan', included: false },
    ],
  },
  {
    name: 'Premium',
    price: '39,90',
    period: '/Monat',
    target: 'Für anspruchsvolle Nutzer',
    popular: false,
    features: [
      { text: 'Alle Standard-Leistungen', included: true },
      { text: '2x Vor-Ort-Termin/Jahr', included: true },
      { text: 'Monatlicher Backup-Check', included: true },
      { text: 'Sicherheits-Scan', included: true },
      { text: 'WLAN-Optimierung', included: true },
      { text: '10% Rabatt auf Reparaturen', included: true },
      { text: 'Express-Service 4h', included: true },
      { text: 'Netzwerk-Betreuung', included: false },
      { text: 'Auto-Backup-System', included: false },
    ],
  },
  {
    name: 'Business',
    price: '79,90',
    period: '/Monat',
    target: 'Selbstständige & KMU',
    popular: false,
    features: [
      { text: 'Alle Premium-Leistungen', included: true },
      { text: 'Netzwerk-Betreuung', included: true },
      { text: 'Automatisches Backup-System', included: true },
      { text: 'Drucker-Wartung', included: true },
      { text: 'E-Mail-Konfiguration', included: true },
      { text: '15% Rabatt auf Reparaturen', included: true },
      { text: '2h Reaktionszeit', included: true },
      { text: 'IT-Security-Audit', included: false },
      { text: 'Server-Wartung', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: '149',
    period: '/Monat',
    target: 'Für große Unternehmen',
    popular: false,
    features: [
      { text: 'Alle Business-Leistungen', included: true },
      { text: 'IT-Security-Audit', included: true },
      { text: 'Cloud-Beratung', included: true },
      { text: 'Server-Wartung', included: true },
      { text: 'DSGVO-Archivierung', included: true },
      { text: '20% Rabatt auf Reparaturen', included: true },
      { text: '24/7 Hotline', included: true },
      { text: 'Quartals-Beratung', included: true },
      { text: 'Individuelles SLA', included: true },
    ],
  },
]

const detailServices = [
  { icon: '🖥️', title: 'PC & Laptop Reparatur', desc: 'Hardware-Diagnose, Komponenten-Austausch, Display & Tastatur, Lüfter-Reinigung, SSD-Upgrades – wir halten Ihre Geräte am Laufen.' },
  { icon: '🛡️', title: 'Virenentfernung & IT-Sicherheit', desc: 'Malware-Entfernung, Antivirus-Setup, Firewall-Konfiguration, Adware-Beseitigung, Browser-Sicherheit & Phishing-Schulung.' },
  { icon: '💾', title: 'Datenrettung & Backup', desc: 'HDD, SSD, USB, SD-Karten – wir retten verlorene Daten und richten professionelle Backup-Strategien ein (NAS, Synology, QNAP).' },
  { icon: '🔄', title: 'Windows Installation & Updates', desc: 'Windows 10/11 Installation, Treiber-Setup, Office-Einrichtung, System-Optimierung & reibungslose Daten-Migration.' },
  { icon: '🌐', title: 'Netzwerk & WLAN', desc: 'Router-Einrichtung, Mesh-WLAN, Geschwindigkeits-Analyse, Gastnetzwerk & Smart-Home-Integration für stabile Verbindungen.' },
  { icon: '📱', title: 'Smart Home & IoT', desc: 'Smart-TV, Streaming-Dienste, WLAN-Drucker, Thermostate, Überwachungskameras & Sprachassistenten – alles vernetzt.' },
  { icon: '☁️', title: 'Cloud-Services & E-Mail', desc: 'Google Drive, OneDrive, Dropbox, Outlook, Thunderbird, Microsoft 365, Passwort-Manager & DSGVO-konformer Datentransfer.' },
  { icon: '🎓', title: 'Schulungen', desc: 'Windows-Grundlagen, Smartphone (auch für Senioren!), Online-Banking, Videotelefonie, Fotoverwaltung, Word & Excel.' },
  { icon: '🏢', title: 'Business IT-Services', desc: 'KMU-Infrastruktur, Windows Server, Active Directory, VPN, Kassensysteme, DSGVO-Compliance & Disaster Recovery.' },
  { icon: '⚡', title: 'Remote-Support', desc: 'Sofortige Hilfe über TeamViewer/AnyDesk. Software-Installation, Fehlerdiagnose & Konfiguration – von überall.' },
  { icon: '🚨', title: 'Express & Notfall-Service', desc: 'Same-Day-Service, kritische Datenrettung, Server-Notfälle. Im Enterprise-Paket: 24/7 Notfall-Hotline & Vor-Ort.' },
  { icon: '🛒', title: 'Hardware-Verkauf & Beratung', desc: 'Ehrliche Kaufberatung, Business-Laptops, Refurbished Hardware, Komplett-Systeme, Zubehör & 10–20% Paket-Rabatt.' },
]

export default function DigitalHausmeister() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #060d1a 0%, #0f2460 40%, #1e3a8a 70%, #111827 100%)' }}
        />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/4 right-1/6 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-8">
            🔧 Seit 1986 in Vaihingen
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
            Ihr Digitaler{' '}
            <span className="gradient-text">Hausmeister</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-10">
            Professioneller IT-Service für Ihr Zuhause und Büro. Persönlich, zuverlässig und vor Ort in Vaihingen & Umgebung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#pakete" className="btn-primary text-base px-8 py-4">
              Pakete ansehen <ArrowRight size={18} />
            </a>
            <a href="tel:+4970421639 1" className="btn-outline text-base px-8 py-4">
              <Phone size={18} /> Jetzt anrufen
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: '⚡', text: '38 Jahre Erfahrung' },
              { icon: '📍', text: 'Regional Vor-Ort-Service' },
              { icon: '⭐', text: '4.8/5 Kundenbewertung' },
            ].map((t) => (
              <div key={t.text} className="glass px-5 py-3 rounded-xl flex items-center gap-2">
                <span>{t.icon}</span>
                <span className="text-white text-sm font-medium">{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pakete" className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-label">PREISPAKETE</span>
            <h2 className="text-4xl font-black text-white mt-2">
              Das richtige Paket für Sie
            </h2>
            <p className="text-gray-400 mt-3">Monatlich kündbar • Keine versteckten Kosten • Persönliche Betreuung</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`pricing-card relative flex flex-col ${
                  pkg.popular
                    ? 'popular bg-gradient-to-b from-[#1e3a8a] to-[#1f2937]'
                    : 'bg-[#1f2937]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="popular-badge text-white text-xs font-bold px-4 py-1 rounded-full">
                      ⭐ BELIEBT
                    </span>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-white font-black text-lg mb-1">{pkg.name}</h3>
                  <p className="text-gray-400 text-xs mb-4">{pkg.target}</p>
                  <div className="mb-5">
                    <span className="text-3xl font-black text-white">{pkg.price}€</span>
                    <span className="text-gray-400 text-xs">{pkg.period}</span>
                  </div>
                  <div className="blue-divider mb-4"></div>
                  <ul className="space-y-2 mb-5">
                    {pkg.features.map((f) => (
                      <li key={f.text} className={`flex items-start gap-2 text-xs ${f.included ? 'text-gray-300' : 'text-gray-600'}`}>
                        {f.included
                          ? <CheckCircle size={12} className="text-success flex-shrink-0 mt-0.5" />
                          : <X size={12} className="text-gray-700 flex-shrink-0 mt-0.5" />
                        }
                        {f.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 pt-0 mt-auto">
                  <Link
                    to="/kontakt"
                    className={`w-full text-center text-xs font-bold py-2.5 rounded-lg transition-all block ${
                      pkg.popular
                        ? 'btn-primary justify-center'
                        : 'btn-outline justify-center'
                    }`}
                  >
                    Paket wählen
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Services */}
      <section className="py-24 bg-[#1f2937]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-label">LEISTUNGEN IM DETAIL</span>
            <h2 className="text-4xl font-black text-white mt-2">Was wir für Sie tun</h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
              Alle Leistungen aus einer Hand – persönlich, zuverlässig und mit jahrzehntelanger Erfahrung.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailServices.map((s) => (
              <div key={s.title} className="highlight-card">
                <div className="service-icon-card">{s.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">{s.title}</h3>
                <div className="blue-divider mb-4"></div>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-[#111827]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="section-label">SERVICE-GEBIET</span>
          <h2 className="text-3xl font-black text-white mt-2 mb-6">Wir kommen zu Ihnen</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['📍 Vaihingen/Enz', '🏙️ Mühlacker', '🌆 Pforzheim', '🌇 Stuttgart', '🗺️ & Umgebung'].map((city) => (
              <span key={city} className="bg-white/5 border border-white/10 text-gray-300 px-5 py-2 rounded-xl text-sm font-medium">
                {city}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4970421639 1" className="btn-primary px-8 py-4 text-base">
              <Phone size={18} /> 07042 16391
            </a>
            <Link to="/kontakt" className="btn-outline px-8 py-4 text-base">
              Kontaktformular <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-0.5 mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="fill-warning text-warning" />
            ))}
          </div>
          <p className="text-white text-xl font-medium italic mb-5">
            "Seit ich den Digitalen Hausmeister nutze, habe ich keine IT-Probleme mehr. Hamdi ist immer erreichbar und hilft sofort. Absolut empfehlenswert!"
          </p>
          <p className="text-accent font-bold">– Klaus M., Vaihingen/Enz</p>
        </div>
      </section>

      <CTASection />
    </>
  )
}
