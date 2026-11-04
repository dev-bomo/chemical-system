# Chemical System Corporation

Site de prezentare B2B (română) pentru **S.C. Chemical System Corporation SRL** — producător de diluanți, solvenți și antigel.

Publicat static pe GitHub Pages:

**https://dev-bomo.github.io/chemical-system/**

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Export static (`output: 'export'`)
- `basePath` / `assetPrefix`: `/chemical-system`

## Rulare locală

```bash
npm install
cp .env.example .env.local   # opțional
npm run dev
```

Deschide [http://localhost:3000/chemical-system/ro/](http://localhost:3000/chemical-system/ro/) (basePath este activ și în development).

## Build static

```bash
NEXT_PUBLIC_BASE_PATH=/chemical-system npm run build
```

Rezultatul este în folderul `out/` (gata pentru GitHub Pages).

## Formulare contact / ofertă

Setați `NEXT_PUBLIC_FORM_ENDPOINT` (Formspree, Web3Forms etc.) în `.env.local` sau în secrets CI.

Dacă lipsește, formularele folosesc fallback `mailto:office.cscm@gmail.com`.

Vezi `.env.example`.

## Deploy

Workflow: `.github/workflows/deploy-github-pages.yml`

La push pe `main` construiește site-ul și publică artifactul `out/` pe GitHub Pages.

În setările repo: **Settings → Pages → Source: GitHub Actions**.

## Structură pagini

| Rută | Descriere |
|------|-----------|
| `/ro/` | Acasă |
| `/ro/prod/` | Catalog |
| `/ro/prod/{categorie}/` | Categorie |
| `/ro/prod/{slug}/{segment}/` | Produs (cale ca pe chemicalsystem.ro) |
| `/ro/date-contact/` | Contact |
| `/ro/cerere-oferta/` | Cerere ofertă |

## Companie

- **S.C. Chemical System Corporation SRL**
- Margina nr. 63, Jud. Timiș
- Cristian Moldovean — 0744.317.074 / 0256/326.022
- office.cscm@gmail.com
- CUI 11332692 / J35/1270/1998
