import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Shield } from 'lucide-react'

const features = [
  { icon: '🔐', title: 'AES-256 Verschlüsselung', desc: 'Militärstandard-Verschlüsselung mit VeraCrypt. Nahezu unknackbar.' },
  { icon: '🗝️', title: 'KeePass Integration', desc: 'Sicherer Passwort-Manager direkt auf dem Stick. Keine Cloud nötig.' },
  { icon: '🔒', title: 'Doppelte Sicherheit', desc: 'Zwei Sicherheitsebenen: Verschlüsselung + Passwort-Manager kombiniert.' },
  { icon: '💼', title: 'Portabel', desc: 'Passt in jede Tasche. Ihre sicheren Passwörter immer dabei.' },
  { icon: '🛡️', title: 'Offline-Sicherheit', desc: 'Keine Cloud-Abhängigkeit. Ihre Daten bleiben lokal und sicher.' },
  { icon: '⚡', title: 'Sofort einsatzbereit', desc: 'Voreingerichtet und mit Einführungsschulung von Hasi Elektronic.' },
]

export default function HasiSafeStick() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #060d1a 0%, #1e3a8a 50%, #111827 100%)' }}
        />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-8">
            🔐 PREMIUM PRODUKT
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6">
            Hasi <span className="gradient-text">Safe Stick</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-8">
            Der doppelt verschlüsselte USB-Stick für maximale Datensicherheit. AES-256 mit VeraCrypt + KeePass Passwort-Manager.
          </p>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="text-center">
              <p className="text-5xl font-black text-white">59€</p>
              <p className="text-gray-400 text-sm">ab diesem Preis</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="btn-primary text-base px-8 py-4">
              Jetzt bestellen <ArrowRight size={18} />
            </Link>
            <a href="tel:+4970421639 1" className="btn-outline text-base px-8 py-4">
              Mehr Infos anfragen
            </a>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-24 bg-[#1f2937]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Product visual */}
            <div className="relative">
              <div className="img-placeholder rounded-2xl" style={{ paddingBottom: '80%', position: 'relative' }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <span className="text-8xl">🔐</span>
                  <p className="text-gray-400 text-sm">Hasi Safe Stick</p>
                </div>
              </div>
              {/* Security level badge */}
              <div className="absolute top-4 right-4 bg-danger/20 border border-danger/30 rounded-xl p-4 text-center">
                <Shield size={24} className="text-danger mx-auto mb-1" />
                <p className="text-white font-bold text-xs">Militär-</p>
                <p className="text-white font-bold text-xs">Standard</p>
              </div>
            </div>

            <div>
              <span className="section-label">PRODUKTDETAILS</span>
              <h2 className="text-4xl font-black text-white mt-2 mb-6">
                Ihr Passwort-Safe für die Hosentasche
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Der Hasi Safe Stick kombiniert zwei bewährte Sicherheitstechnologien: VeraCrypt für AES-256 Festplattenverschlüsselung auf Militärniveau und KeePass als offline Passwort-Manager. Das Ergebnis ist der sicherste Weg, Ihre Passwörter zu speichern.
              </p>

              {/* Specs */}
              <div className="space-y-3 mb-8">
                {[
                  { label: 'Verschlüsselung', value: 'AES-256 (VeraCrypt)' },
                  { label: 'Passwort-Manager', value: 'KeePass (offline)' },
                  { label: 'Sicherheitsniveau', value: 'Militärstandard' },
                  { label: 'Preis', value: 'ab 59€' },
                  { label: 'Lieferung', value: 'Vor-Ort in Vaihingen' },
                  { label: 'Einrichtung', value: 'Mit persönlicher Schulung' },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-400 text-sm">{s.label}</span>
                    <span className="text-white text-sm font-medium">{s.value}</span>
                  </div>
                ))}
              </div>

              <Link to="/kontakt" className="btn-primary">
                Jetzt anfragen <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-label">FUNKTIONEN</span>
            <h2 className="text-4xl font-black text-white mt-2">Warum der Hasi Safe Stick?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="highlight-card">
                <div className="service-icon-card">{f.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Sichern Sie Ihre digitale Identität</h2>
          <p className="text-gray-300 mb-8">
            Ab 59€ – mit persönlicher Einrichtung und Schulung direkt in unserem Laden.
          </p>
          <Link to="/kontakt" className="btn-primary text-base px-10 py-4 inline-flex items-center gap-2">
            Jetzt bestellen <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
