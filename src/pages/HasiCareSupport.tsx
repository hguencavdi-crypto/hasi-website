import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Shield } from 'lucide-react'

const benefits = [
  { icon: '🛠️', title: 'Updates & Wartung', desc: 'Regelmäßige System-Updates, Treiber-Aktualisierungen und Wartung ohne Extra-Kosten.' },
  { icon: '⚙️', title: 'Einrichtung & Setup', desc: 'Neue Software einrichten, Geräte konfigurieren, Drucker anschließen – wir übernehmen das.' },
  { icon: '🐛', title: 'Problemlösung', desc: 'Technische Probleme schnell beheben. Kein langes Warten, direkter Ansprechpartner.' },
  { icon: '💻', title: 'Leihgerät inklusive', desc: 'Bei selbst verursachten Fehlern: kostenloser Leihgerät während der Reparatur.' },
  { icon: '📞', title: 'Direkter Kontakt', desc: 'Persönliche Betreuung durch Hamdi Güncavdi. Keine Hotlines, kein Call-Center.' },
  { icon: '🔒', title: 'IT-Sicherheit', desc: 'Regelmäßige Sicherheitsüberprüfungen und Virenschutz inklusive.' },
]

export default function HasiCareSupport() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #060d1a 0%, #1e40af 50%, #111827 100%)' }}
        />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-8">
            🛡️ NEU
          </div>
          <h1 className="text-6xl font-black text-white mb-6">
            Hasi Care <span className="gradient-text">Support</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-8">
            IT-Hilfe ohne Garantie-Verantwortung. Professionelle Betreuung für alle, die einfach sorgenfrei arbeiten wollen.
          </p>
          <div className="flex items-center justify-center gap-2 mb-10">
            <span className="text-5xl font-black text-white">ab 19,90€</span>
            <span className="text-gray-400">/Monat</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="btn-primary text-base px-8 py-4">
              Jetzt starten <ArrowRight size={18} />
            </Link>
            <Link to="/digital-hausmeister" className="btn-outline text-base px-8 py-4">
              Alle Support-Pakete
            </Link>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="py-24 bg-[#1f2937]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">WAS IST HASI CARE SUPPORT?</span>
              <h2 className="text-4xl font-black text-white mt-2 mb-6">
                IT-Betreuung ohne Komplikationen
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Hasi Care Support ist unser Service für alle, die professionelle IT-Betreuung wünschen – auch wenn kein Garantieanspruch besteht. Ob ältere Geräte, Fremdschäden oder einfach allgemeiner Support: Wir helfen.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Besonders praktisch: Bei selbst verursachten Schäden stellen wir Ihnen während der Reparatur ein Leihgerät zur Verfügung, damit Sie arbeitsfähig bleiben.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Ohne Garantiepflicht',
                  'Mit Leihgerät-Service',
                  'Monatlich kündbar',
                  'Persönliche Betreuung',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-success" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {[
                { title: 'Wer ist das richtig für?', text: 'Für alle, die ältere Geräte nutzen, Schäden selbst verursacht haben oder einfach flexible IT-Betreuung ohne Hersteller-Garantie benötigen.' },
                { title: 'Was ist NICHT abgedeckt?', text: 'Hardware-Ausfälle durch Herstellungsfehler – dafür nutzen Sie den Hersteller-Garantieservice. Hasi Care Support ist für alles drumherum.' },
                { title: 'Wie funktioniert der Leihgeräte-Service?', text: 'Bei Schäden durch eigenes Verschulden stellen wir ein gleichwertiges Leihgerät für die Dauer der Reparatur zur Verfügung.' },
              ].map((item) => (
                <div key={item.title} className="highlight-card">
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-label">LEISTUNGEN</span>
            <h2 className="text-4xl font-black text-white mt-2">Was Sie erhalten</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="highlight-card">
                <div className="service-icon-card">{b.icon}</div>
                <h3 className="text-white font-bold mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Shield size={48} className="text-white mx-auto mb-4 opacity-80" />
          <h2 className="text-4xl font-black text-white mb-4">Sorgenfrei arbeiten – ab 19,90€/Monat</h2>
          <p className="text-gray-300 mb-8">Monatlich kündbar. Keine Mindestlaufzeit. Persönliche Betreuung.</p>
          <Link to="/kontakt" className="btn-primary text-base px-10 py-4 inline-flex items-center gap-2">
            Jetzt abonnieren <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
