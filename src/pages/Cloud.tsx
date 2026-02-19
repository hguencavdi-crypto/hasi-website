import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ChevronDown, ArrowRight, X } from 'lucide-react'

const features = [
  { icon: '🇩🇪', title: 'DSGVO-konform', desc: 'Deutsche Rechenzentren. AV-Vertrag nach Art. 28 DSGVO inklusive. Ihre Daten gehören Ihnen.' },
  { icon: '👥', title: 'Unbegrenzte Benutzer', desc: 'Beliebig viele Benutzer in Gruppen organisieren. Keine Zusatzkosten pro Person.' },
  { icon: '📱', title: 'Mobile Apps', desc: 'Apps für iOS, Android, Windows, Mac und Linux. Überall Zugriff auf Ihre Daten.' },
  { icon: '🔗', title: 'Einfaches Teilen', desc: 'Links mit Passwortschutz und Ablaufdatum. Kontrolliertes Teilen ohne Kontoverlust.' },
  { icon: '🔄', title: 'Automatische Backups', desc: 'Mehrmals täglich gesichert. Versionierung bis zu 30 Tage. Ihre Daten sind sicher.' },
  { icon: '🤝', title: 'Persönlicher Support', desc: 'Telefon, E-Mail und Vor-Ort-Service. Kein anonymes Ticket-System.' },
  { icon: '📅', title: 'Kalender & Kontakte', desc: 'Integrierter Kalender und Kontakte. Alle Geräte automatisch synchronisiert.' },
  { icon: '💬', title: 'Nextcloud Talk', desc: 'Sichere Videoanrufe und Chat intern. DSGVO-konform, keine US-Server.' },
  { icon: '🌐', title: 'Eigene Domain', desc: 'cloud.ihre-firma.de möglich. Professioneller Auftritt für Ihr Unternehmen.' },
]

const plans = [
  {
    name: 'Starter',
    price: '9,90',
    setup: '49',
    storage: '100 GB',
    users: '3',
    popular: false,
    features: ['E-Mail-Support', 'Automatische Backups', 'Mobile Apps', 'Kalender & Kontakte'],
  },
  {
    name: 'Business',
    price: '29,90',
    setup: '99',
    storage: '500 GB',
    users: '10',
    popular: true,
    features: ['Telefonischer Support', 'Eigene Domain möglich', 'Kalender & Kontakte', 'Nextcloud Talk', 'Prioritäts-Support', 'Benutzer-Verwaltung'],
  },
  {
    name: 'Professional',
    price: '59,90',
    setup: '199',
    storage: '1 TB',
    users: '25',
    popular: false,
    features: ['Premium-Support', 'Nextcloud Talk', '2h Schulung inklusive', 'Eigene Domain', 'Advanced Sharing', 'Office-Integration'],
  },
  {
    name: 'Enterprise',
    price: '149',
    setup: '399',
    storage: '5 TB',
    users: 'Unbegrenzt',
    popular: false,
    features: ['SLA-Garantie', '4h Schulung inklusive', 'Quartals-Check', 'Dedicated Support', 'Custom Integration', 'DSGVO-Audit'],
  },
]

const comparison = [
  { feature: 'Server-Standort', hasi: '🇩🇪 Deutschland', google: '🇺🇸 USA', dropbox: '🇺🇸 USA', onedrive: '🇺🇸 USA' },
  { feature: 'DSGVO-konform', hasi: '✅ Ja', google: '⚠️ Eingeschränkt', dropbox: '⚠️ Eingeschränkt', onedrive: '⚠️ Eingeschränkt' },
  { feature: 'Persönlicher Support', hasi: '✅ Vor Ort', google: '❌ Kein', dropbox: '❌ Kein', onedrive: '❌ Kein' },
  { feature: 'Daten-Analyse durch Anbieter', hasi: '✅ Nein', google: '❌ Ja', dropbox: '❌ Ja', onedrive: '❌ Ja' },
  { feature: 'Open Source', hasi: '✅ Nextcloud', google: '❌ Nein', dropbox: '❌ Nein', onedrive: '❌ Nein' },
  { feature: 'Eigene Domain', hasi: '✅ Inklusive', google: '💰 Business', dropbox: '💰 Business', onedrive: '❌ Nein' },
  { feature: 'AV-Vertrag (Art. 28)', hasi: '✅ Inklusive', google: '⚠️ Aufwändig', dropbox: '⚠️ Aufwändig', onedrive: '⚠️ Aufwändig' },
]

const faqs = [
  {
    q: 'Was ist Nextcloud?',
    a: 'Nextcloud ist eine Open-Source-Software für sichere Datenspeicherung und Zusammenarbeit. Hasi Cloud basiert auf Nextcloud und läuft auf unseren eigenen Servern in Deutschland – ohne fremde Cloud-Anbieter.',
  },
  {
    q: 'Wo werden meine Daten gespeichert?',
    a: 'Ausschließlich in deutschen Rechenzentren in Falkenstein (Sachsen). Keine Daten werden an US-amerikanische oder andere ausländische Server übertragen. 100% DSGVO-konform.',
  },
  {
    q: 'Kann ich die Cloud auf meinem Smartphone nutzen?',
    a: 'Ja! Nextcloud-Apps sind für iOS und Android verfügbar. Außerdem gibt es Desktop-Clients für Windows, Mac und Linux mit automatischer Synchronisation.',
  },
  {
    q: 'Wie sicher sind meine Daten?',
    a: 'Ihre Daten werden mit SSL/TLS verschlüsselt übertragen und auf RAID-Systemen gespeichert. Es gibt keine Werbeschaltungen und keine Datenanalyse durch Dritte.',
  },
  {
    q: 'Kann ich das Paket wechseln?',
    a: 'Ja! Sie können jederzeit upgrades oder downgraden. Unsere Verträge sind monatlich kündbar. Kein Jahresvertrag erforderlich.',
  },
  {
    q: 'Sind Schulungen im Preis enthalten?',
    a: 'Im Professional-Paket sind 2 Stunden Schulung inklusive, im Enterprise-Paket 4 Stunden. Für andere Pakete bieten wir Schulungen für 49€/Person/Stunde an.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-blue-900/50 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-blue-900/20 transition-colors"
      >
        <span className="text-white font-semibold text-sm pr-4">{q}</span>
        <ChevronDown size={18} className={`text-accent flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-blue-900/30 pt-4">{a}</div>
      )}
    </div>
  )
}

export default function Cloud() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', paket: '', message: '' })

  return (
    <div className="bg-[#050d1f]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated grid */}
        <div className="absolute inset-0 animated-grid opacity-100" />
        {/* Gradient overlay */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(5,13,31,0.95) 0%, rgba(14,30,70,0.9) 50%, rgba(5,13,31,0.95) 100%)' }}
        />
        {/* Floating shapes */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite' }} />
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-blue-600/5 rounded-full blur-3xl" style={{ animation: 'float 10s ease-in-out infinite reverse' }} />

        <div className="relative max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-8">
              DSGVO-konform • Server in Deutschland
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Sichere Cloud-Lösungen für Ihr{' '}
              <span className="gradient-text">Unternehmen</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Mit Hasi Cloud speichern und teilen Sie Ihre Daten sicher – ohne amerikanische Tech-Giganten. Powered by Nextcloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#pakete" className="btn-primary text-base px-8 py-4">
                Pakete ansehen <ArrowRight size={18} />
              </a>
              <Link to="/kontakt" className="btn-outline text-base px-8 py-4">
                Beratung anfordern
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
              <span className="flex items-center gap-1"><CheckCircle size={14} className="text-success" /> 14 Tage kostenlos testen</span>
              <span className="flex items-center gap-1"><CheckCircle size={14} className="text-success" /> Keine Kreditkarte nötig</span>
              <span className="flex items-center gap-1"><CheckCircle size={14} className="text-success" /> Monatlich kündbar</span>
            </div>
          </div>

          {/* Hero Card */}
          <div className="hidden lg:block">
            <div
              className="rounded-2xl p-8 border border-accent/20"
              style={{
                background: 'rgba(59,130,246,0.05)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 0 60px rgba(59,130,246,0.1)',
              }}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">☁️</div>
                <h3 className="text-white font-black text-2xl">Hasi Cloud</h3>
                <p className="text-accent text-sm mt-1">Powered by Nextcloud</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: '100% DSGVO', sub: 'konform' },
                  { label: 'Server', sub: 'in Deutschland' },
                  { label: '24/7', sub: 'Verfügbarkeit' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 rounded-xl p-3 text-center">
                    <p className="text-white font-bold text-sm">{s.label}</p>
                    <p className="text-gray-400 text-xs">{s.sub}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-2.5">
                {['Keine Werbung & keine Datenanalyse', 'Automatische Backups täglich', 'SSL/TLS verschlüsselte Übertragung'].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-success flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#060f25]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-label">FUNKTIONEN</span>
            <h2 className="text-4xl font-black text-white mt-2">Alles was Sie brauchen</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="card-hover rounded-2xl p-6 border border-blue-900/30 hover:border-accent/30 transition-all"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pakete" className="py-24 bg-[#050d1f]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-label">PREISE</span>
            <h2 className="text-4xl font-black text-white mt-2">Transparente Pakete</h2>
            <p className="text-gray-400 mt-3">Alle Preise zzgl. MwSt. • Monatlich kündbar</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`pricing-card flex flex-col relative ${plan.popular ? 'popular' : ''}`}
                style={{
                  background: plan.popular
                    ? 'linear-gradient(135deg, rgba(30,58,138,0.6), rgba(6,13,37,0.8))'
                    : 'rgba(255,255,255,0.02)',
                  border: plan.popular ? '2px solid #3b82f6' : '1px solid rgba(59,130,246,0.15)',
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="popular-badge text-white text-xs font-bold px-4 py-1 rounded-full">EMPFOHLEN</span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-white font-black text-xl mb-1">{plan.name}</h3>
                  <div className="flex items-end gap-1 my-4">
                    <span className="text-4xl font-black text-white">{plan.price}€</span>
                    <span className="text-gray-400 text-sm mb-1">/Monat</span>
                  </div>
                  <p className="text-gray-500 text-xs mb-2">Einrichtung: {plan.setup}€ einmalig</p>
                  <div className="flex gap-3 mb-5 text-sm">
                    <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-md text-xs">{plan.storage}</span>
                    <span className="bg-white/5 text-gray-300 px-2 py-0.5 rounded-md text-xs">{plan.users} User</span>
                  </div>
                  <div className="blue-divider mb-5"></div>
                  <ul className="space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle size={12} className="text-success flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <Link
                    to="/kontakt"
                    className={`w-full text-center text-sm font-bold py-3 rounded-lg transition-all block ${
                      plan.popular ? 'btn-primary justify-center' : 'btn-outline justify-center'
                    }`}
                  >
                    Jetzt starten
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-[#060f25]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-label">VERGLEICH</span>
            <h2 className="text-4xl font-black text-white mt-2">Hasi Cloud vs. Alternativen</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4 text-gray-400 text-sm font-normal">Kriterium</th>
                  <th className="p-4 text-center">
                    <div className="text-accent font-black text-sm">Hasi Cloud</div>
                    <div className="text-gray-500 text-xs">🇩🇪 Deutschland</div>
                  </th>
                  <th className="p-4 text-center text-gray-400 text-sm font-normal">Google Drive</th>
                  <th className="p-4 text-center text-gray-400 text-sm font-normal">Dropbox</th>
                  <th className="p-4 text-center text-gray-400 text-sm font-normal">OneDrive</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-t ${i % 2 === 0 ? 'bg-white/2' : ''} border-blue-900/20`}
                  >
                    <td className="p-4 text-gray-300 text-sm">{row.feature}</td>
                    <td className="p-4 text-center text-sm font-medium text-success">{row.hasi}</td>
                    <td className="p-4 text-center text-sm text-gray-400">{row.google}</td>
                    <td className="p-4 text-center text-sm text-gray-400">{row.dropbox}</td>
                    <td className="p-4 text-center text-sm text-gray-400">{row.onedrive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#050d1f]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-label">FAQ</span>
            <h2 className="text-4xl font-black text-white mt-2">Häufige Fragen zur Hasi Cloud</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-[#060f25]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="section-label">KONTAKT</span>
            <h2 className="text-4xl font-black text-white mt-2">14 Tage kostenlos testen!</h2>
            <p className="text-gray-400 mt-3">Kein Risiko, keine Kreditkarte, jederzeit kündbar.</p>
          </div>

          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="space-y-5 p-8 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(59,130,246,0.15)' }}
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-gray-300 mb-2 font-medium">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="form-input"
                  placeholder="Ihr vollständiger Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2 font-medium">E-Mail *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="form-input"
                  placeholder="ihre@email.de"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-gray-300 mb-2 font-medium">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="Ihre Telefonnummer"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2 font-medium">Gewünschtes Paket</label>
                <select
                  name="paket"
                  className="form-input"
                  value={formData.paket}
                  onChange={(e) => setFormData({ ...formData, paket: e.target.value })}
                >
                  <option value="">Bitte wählen...</option>
                  <option value="starter">Starter (9,90€/Monat)</option>
                  <option value="business">Business (29,90€/Monat)</option>
                  <option value="professional">Professional (59,90€/Monat)</option>
                  <option value="enterprise">Enterprise (149€/Monat)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2 font-medium">Nachricht</label>
              <textarea
                name="message"
                rows={4}
                className="form-input resize-none"
                placeholder="Ihre Fragen oder Anmerkungen..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button type="submit" className="btn-primary flex-1 justify-center text-base py-4">
                Jetzt kostenlos starten <ArrowRight size={18} />
              </button>
              <Link to="/kontakt" className="btn-outline text-base py-4 px-6 justify-center">
                Rückruf anfordern
              </Link>
            </div>
            <p className="text-xs text-gray-500 text-center">
              Mit dem Absenden stimmen Sie unserer{' '}
              <Link to="/datenschutzerklaerung" className="text-accent hover:underline">Datenschutzerklärung</Link> zu.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}
