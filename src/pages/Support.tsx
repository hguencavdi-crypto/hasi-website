import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Download, Monitor } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  { q: 'Mein PC startet nicht mehr – was soll ich tun?', a: 'Trennen Sie alle externen Geräte (USB, externe Festplatten) und versuchen Sie den Neustart. Wenn das nicht hilft, rufen Sie uns an: 07042 16391. Wir diagnostizieren das Problem oft telefonisch.' },
  { q: 'Wie starte ich die Fernwartung?', a: 'Laden Sie AnyDesk von anydesk.com herunter und führen Sie es aus. Geben Sie uns die angezeigte 9-stellige ID per Telefon durch. Wir verbinden uns dann sicher mit Ihrem PC.' },
  { q: 'Ich habe einen Virus – was tun?', a: 'Trennen Sie sofort die Internetverbindung (WLAN aus, LAN-Kabel ziehen). Rufen Sie uns an: 07042 16391. Öffnen Sie keine E-Mails und klicken Sie auf nichts mehr.' },
  { q: 'Kann ich Daten verloren gegangene Dateien retten?', a: 'In vielen Fällen ja! Bringen Sie das Gerät umgehend zu uns – je weniger danach auf dem Gerät geschrieben wird, desto besser die Chancen. Rufen Sie vorher an: 07042 16391.' },
  { q: 'Wie lange dauert eine Reparatur?', a: 'Einfache Reparaturen (Virenentfernung, Software-Probleme) oft noch am selben Tag. Hardware-Reparaturen je nach Ersatzteilverfügbarkeit 1-3 Werktage. Wir geben immer eine konkrete Zeitangabe nach der Diagnose.' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-700 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors">
        <span className="text-white font-semibold text-sm pr-4">{q}</span>
        <span className={`text-accent flex-shrink-0 text-lg transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-gray-700/50 pt-4">{a}</div>}
    </div>
  )
}

export default function Support() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1e3a8a 50%, #111827 100%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="section-label">SUPPORT</span>
          <h1 className="text-5xl font-black text-white mt-3 mb-4">
            Schnelle <span className="gradient-text">IT-Hilfe</span> für Sie
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Remote-Support, Notfall-Kontakt und häufige Probleme – alles an einem Ort.
          </p>
        </div>
      </section>

      {/* Remote Support */}
      <section className="py-24 bg-[#1f2937]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-label">FERNWARTUNG</span>
            <h2 className="text-4xl font-black text-white mt-2">Remote-Support mit AnyDesk</h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
              Wir helfen Ihnen direkt an Ihrem PC – ohne dass Sie das Haus verlassen müssen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', icon: '⬇️', title: 'AnyDesk herunterladen', desc: 'Laden Sie AnyDesk kostenlos von anydesk.com herunter und starten Sie das Programm.' },
              { step: '2', icon: '🔢', title: 'ID mitteilen', desc: 'Teilen Sie uns die angezeigte 9-stellige ID per Telefon mit: 07042 16391.' },
              { step: '3', icon: '✅', title: 'Verbindung herstellen', desc: 'Wir verbinden uns sicher. Sie sehen alles, was wir tun, und können jederzeit abbrechen.' },
            ].map((step) => (
              <div key={step.step} className="highlight-card text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-black text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="text-white font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="https://anydesk.com/de/downloads"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
            >
              <Download size={18} /> AnyDesk herunterladen
            </a>
            <a href="tel:+4970421639 1" className="btn-outline text-base px-8 py-4">
              <Phone size={18} /> 07042 16391 anrufen
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-danger/20 to-[#111827] border-y border-danger/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-6xl flex-shrink-0">🚨</div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-black text-white mb-2">IT-Notfall?</h2>
              <p className="text-gray-400 mb-4">
                Server ausgefallen, Daten verloren, Virus entdeckt? Rufen Sie sofort an!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+4970421639 1" className="btn-primary bg-danger border-danger hover:bg-red-600 px-6 py-3">
                  <Phone size={16} /> 07042 16391
                </a>
                <a href="tel:+491601236060" className="btn-outline border-danger text-danger px-6 py-3">
                  <Phone size={16} /> 0160 1236060 (Mobil)
                </a>
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
            <h2 className="text-4xl font-black text-white mt-2">Häufige Fragen & Probleme</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-400 mb-4">Problem nicht gelöst? Wir helfen persönlich.</p>
            <Link to="/kontakt" className="btn-primary">
              Kontakt aufnehmen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
