# Personal Portfolio Website — Mursyid Nur Fahmi

Modern, intellectual, and responsive personal portfolio website for **Mursyid Nur Fahmi**, Undergraduate Mathematics Student at Universitas Andalas specializing in Applied Mathematics, Mathematical Modeling, Optimization, and Cryptography.

---

## 🚀 Live Preview & Development

The project is built with **React 18**, **TypeScript**, and **Tailwind CSS**, bundled with **Vite**.

### 1. Run Development Server
```bash
npm run dev
```
Accessible at `http://127.0.0.1:3000/`.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 🎨 Design System & Visual Identity
- **Primary Color**: `#0300e1` (Electric Academic Blue)
- **Primary Background**: `#FFFFFF` (Default Light Mode)
- **Accent Background**: `#F3F4FF`
- **Border Color**: `#E8E8EE`
- **Text**: Primary `#111111`, Muted `#666666`
- **Typography**: 
  - Headings: `Space Grotesk` / `Sora`
  - Body: `Plus Jakarta Sans` / `Inter`
  - Code & Math: `JetBrains Mono`
- **Dark Mode**: Fully supported via top-right theme switcher (`class` strategy with `#090A0F` dark theme).

---

## 📚 Highlight Features
1. **Interactive Ebbinghaus Forgetting Curve Simulator**:
   Live mathematical simulator directly calculating the memory decay differential equation:
   $$\frac{dR(t)}{dt} = -\lambda R(t) + \sum \alpha_k \delta(t - t_k)$$
   Empirically demonstrates the optimal review window ($t^* \approx 1.098$ days $\approx$ 26h 32m) from his peer-reviewed publication.
2. **Academic Publication Showcase**:
   - Full citation generator (BibTeX, APA, IEEE, and `.bib` file download).
   - Direct DOI link (`10.33086/atcsj.v8i2.8491`) and Google Scholar integration.
3. **Interactive Project Modal**:
   Deep-dive cards for KKN Reguler 2 Unand 2026 (Nagari Limo Koto), Linear Programming Simplex Solver, 1D Saint-Venant Shallow Water Flood PDE model, and Cryptography Suite.
4. **Digital Printable Curriculum Vitae**:
   Dedicated academic CV viewer modal with instant print to PDF and Markdown export.
5. **Interactive Contact Form**:
   With validation, feedback state, and direct copy-to-clipboard academic email routing.

---

## 📂 Project Structure
```
porto/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Sticky navigation with theme toggle & CV trigger
│   │   ├── Hero.tsx               # Academic hero with live rotating ODE formulas
│   │   ├── About.tsx              # Narrative, 3 pillars & personal philosophy
│   │   ├── Education.tsx          # Unand degree timeline & academic interest tags
│   │   ├── Research.tsx           # ATCSJ journal article, preprints & interests
│   │   ├── EbbinghausSimulator.tsx# Interactive SVG ODE memory decay simulator
│   │   ├── Organizations.tsx      # HIMATIKA, BEM FMIPA, FSI verified records
│   │   ├── Projects.tsx           # Filterable portfolio cards
│   │   ├── ProjectModal.tsx       # Detailed popup for each project
│   │   ├── Skills.tsx             # 4-tier skill matrix with honest proficiency levels
│   │   ├── Contact.tsx            # Validated collaboration form & channels
│   │   ├── Footer.tsx             # Signature, sitemap & smooth back-to-top
│   │   ├── CVModal.tsx            # Formatted printable academic CV
│   │   └── CitationModal.tsx      # BibTeX / APA / IEEE citation exporter
│   ├── data/
│   │   └── portfolioData.ts       # Central verified data store
│   ├── types/
│   │   └── index.ts               # Strict TypeScript definitions
│   ├── App.tsx                    # Main app container & dark mode state
│   ├── main.tsx                   # React root entry
│   └── index.css                  # Tailwind directives & math grid patterns
├── index.html                     # Semantic SEO meta tags & Google fonts
├── tailwind.config.js             # Brand palette & typography
├── tsconfig.json                  # TypeScript compiler settings
└── package.json                   # Project dependencies & scripts
```

© 2026 Mursyid Nur Fahmi — Universitas Andalas. Built with curiosity, logic, and purpose.
