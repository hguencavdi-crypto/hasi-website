# Hasi Elektronic Website

Komplette, professionelle Website für Hasi Elektronic – Ihr IT-Experte in Vaihingen an der Enz.

## Tech-Stack
- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Build-Tool:** Vite

## Seiten (13)
| Route | Seite |
|-------|-------|
| `/` | Startseite |
| `/ueber-uns` | Über uns |
| `/dienstleistungen` | Dienstleistungen |
| `/digital-hausmeister` | Digital Hausmeister |
| `/cloud` | Hasi Cloud |
| `/hasi-safe-stick` | Hasi Safe Stick |
| `/hasi-care-support` | Hasi Care Support |
| `/it-ratgeber` | IT-Ratgeber |
| `/support` | Support |
| `/kontakt` | Kontakt |
| `/datenschutzerklaerung` | Datenschutz |
| `/agbs` | AGBs |
| `/impressum` | Impressum |

## Setup & Start

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Production Build
npm run build

# Build-Preview
npm run preview
```

## Deployment (Lovable / Netlify / Vercel)
1. Repository auf GitHub pushen
2. Auf Lovable.dev oder Netlify/Vercel verbinden
3. Build command: `npm run build`
4. Publish directory: `dist`

## Formspree Konfiguration
In `src/pages/Cloud.tsx` und `src/pages/Kontakt.tsx` die Formspree-URL anpassen:
```
https://formspree.io/f/YOUR_FORM_ID
```

## Kontakt
- **Hasi Elektronic** | Grabenstraße 18 | 71665 Vaihingen an der Enz
- Tel: 07042 16391 | info@hasi-elektronic.de
