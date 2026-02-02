# Hackàra - Rural Innovation Hub

Sito web statico per Hackàra, il Rural Innovation Hub di Pignola (PZ).

## Struttura del Progetto

```
hackara-website/
├── index.html          # Homepage del sito
├── spazi.html          # Pagina Spazi e Servizi
├── images/             # Cartella immagini
│   ├── hero-pignola.jpg
│   ├── office-rustic.jpg
│   ├── coworking-space.jpg
│   ├── maker-space.jpg
│   ├── relax-area.jpg
│   ├── come-to-code.jpg
│   └── pignola-blues.jpg
├── css/                # Cartella CSS (vuota, usa Tailwind CDN)
├── js/                 # Cartella JavaScript (vuota)
└── README.md           # Questo file
```

## Tecnologie Utilizzate

- **HTML5**: Markup semantico
- **CSS3**: Styling con Tailwind CSS (via CDN)
- **Tailwind CSS**: Framework CSS utility-first
- **Google Fonts**: Font Inter
- **Material Symbols**: Icone Google

## Caratteristiche

- Design moderno e responsive
- Ottimizzato per SEO/SEM
- Dark mode support
- Animazioni e transizioni fluide
- Palette colori personalizzata:
  - Primary: #2beead (verde acqua)
  - Background Light: #f6f8f7
  - Background Dark: #10221c
  - Earthy Green: #1a3a2f

## SEO

Il sito è ottimizzato per i motori di ricerca con:
- Meta tag title e description personalizzati per ogni pagina
- Keywords strategiche
- Struttura semantica HTML5
- Alt text per le immagini
- URL puliti e descrittivi

## Come Visualizzare

1. Apri `index.html` in un browser web moderno
2. Oppure usa un server locale:
   ```bash
   python3 -m http.server 8000
   ```
   Poi visita `http://localhost:8000`

## Pagine

### Homepage (index.html)
- Hero section con call-to-action
- Sezione "Chi Siamo"
- Community
- Eventi
- Contatti

### Spazi e Servizi (spazi.html)
- Griglia degli spazi disponibili
- Filtri per membership
- Dettagli infrastruttura tecnologica
- The Forge (Maker Space)
- The Agora (Coworking)
- The Zen Garden (Area Relax)

## Personalizzazione

Per personalizzare i colori, modifica la configurazione Tailwind nel tag `<script id="tailwind-config">` presente in ogni file HTML.

## Crediti

- Progetto: Associazione Culturale PLUG APS
- Design: Basato su esempi forniti
- Contenuti: Progetto Hackàra
- Anno: 2025
