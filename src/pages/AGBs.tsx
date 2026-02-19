export default function AGBs() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1e3a8a 50%, #111827 100%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="section-label">RECHTLICHES</span>
          <h1 className="text-5xl font-black text-white mt-3">Allgemeine Geschäftsbedingungen</h1>
        </div>
      </section>
      <section className="py-16 bg-[#1f2937]">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          {[
            {
              title: '§ 1 Geltungsbereich',
              content: 'Diese Allgemeinen Geschäftsbedingungen gelten für alle Leistungen von Hasi Elektronic, Inhaber Hamdi Güncavdi, Grabenstraße 18, 71665 Vaihingen an der Enz, gegenüber Verbrauchern und Unternehmern.',
            },
            {
              title: '§ 2 Vertragsschluss',
              content: 'Die Darstellung unserer Leistungen stellt kein rechtlich bindendes Angebot dar. Durch Ihre Auftragserteilung geben Sie ein verbindliches Angebot ab, das wir durch Auftragsbestätigung oder Beginn der Leistungserbringung annehmen.',
            },
            {
              title: '§ 3 Preise und Zahlung',
              content: 'Alle Preise verstehen sich in Euro zzgl. der gesetzlichen Mehrwertsteuer. Reparaturen werden nach Abschluss der Arbeiten in Rechnung gestellt. Bei Reparaturen über 100€ netto behalten wir uns eine Anzahlung vor.',
            },
            {
              title: '§ 4 Haftung',
              content: 'Wir haften für Schäden, die durch grobe Fahrlässigkeit oder Vorsatz entstehen. Eine Haftung für Datenverluste ist ausgeschlossen, sofern der Kunde keine aktuelle Datensicherung vorgehalten hat. Wir empfehlen stets eine Datensicherung vor Reparaturbeginn.',
            },
            {
              title: '§ 5 Datensicherung',
              content: 'Der Kunde wird darauf hingewiesen, dass vor Reparaturarbeiten eine vollständige Datensicherung empfehlenswert ist. Hasi Elektronic übernimmt keine Haftung für Datenverluste, die im Rahmen der Reparatur entstehen können.',
            },
            {
              title: '§ 6 Gewährleistung',
              content: 'Für unsere Reparaturleistungen gilt eine Gewährleistung von 6 Monaten auf die erbrachte Arbeitsleistung. Für neue Hardware gelten die gesetzlichen Gewährleistungsfristen von 2 Jahren.',
            },
            {
              title: '§ 7 Gerichtsstand',
              content: 'Gerichtsstand ist Vaihingen an der Enz. Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.',
            },
          ].map((section) => (
            <div key={section.title} className="highlight-card">
              <h2 className="text-white font-bold text-lg mb-3">{section.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{section.content}</p>
            </div>
          ))}
          <p className="text-gray-500 text-xs text-center">Stand: Februar 2026 – Hasi Elektronic, Vaihingen an der Enz</p>
        </div>
      </section>
    </>
  )
}
