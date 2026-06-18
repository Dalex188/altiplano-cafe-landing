# Altiplano Café — Landing Page

Demo de landing page B2B para **Altiplano Café**, una exportadora de café guatemalteco ficticia. Proyecto frontend construido como portafolio / showcase técnico.

## Quick start

```bash
npm install
npx vite --host        # dev server
npx vite build         # producción
```

No requiere backend — los leads se capturan vía Formspree.

---

## Tech Stack

| Capa           | Elección                        |
|----------------|---------------------------------|
| Framework      | React 18 + TypeScript           |
| Build tool     | Vite 5                          |
| Estilos        | CSS plano (custom properties)   |
| Formulario     | Formspree (serverless)          |
| Fuentes        | Inter via Google Fonts          |
| Iconos         | SVGs inline en TSX              |
| Imágenes       | Unsplash (locales en `public/images/`) |

---

## Estructura del proyecto

```
Landing page/
├── public/images/             # Imágenes estáticas (servidas en /images/)
├── src/
│   ├── AltiplanoCafeLanding.tsx   # Componente React principal
│   ├── AltiplanoCafeLanding.css   # Todos los estilos (~1250 líneas)
│   ├── main.tsx                   # Punto de montaje React
│   └── vite-env.d.ts              # Type shims de Vite
├── index.html                 # HTML de entrada (OG tags, fuentes)
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
└── .gitignore
```

---

## Secciones de la página

| Sección         | Comportamiento / Notas                                         |
|-----------------|----------------------------------------------------------------|
| **Hero**        | Full-viewport con overlay oscuro, CTA, propuestas de valor     |
| **About**       | Grid historia de empresa: texto + imagen + tarjetas con stats  |
| **Quality**     | Fondo oscuro (texto claro), 4 pilares de calidad + imagen      |
| **Export**      | Grilla de 4 cards: distribución, blending, pricing, visibilidad|
| **Certifications** | Overlay claro sobre imagen de fondo, 4 certificaciones      |
| **Process**     | Fondo oscuro, timeline vertical con pasos numerados + imágenes |
| **Testimonials**| Fondo verde oscuro, 3 reseñas con estrellas                    |
| **Contact**     | Formulario con validación, consent checkbox, envío a Formspree |
| **Footer**      | Grid de 4 columnas con enlaces y copyright                     |

---

## UX & Navegación

- **Header sticky** con marca, links de navegación y hamburguesa en mobile.
- **Mobile nav overlay** — menú full-screen verde oscuro al abrir la hamburguesa.
- **URL hash** se actualiza automáticamente vía Intersection Observer al scrollear.
- **Smooth scrolling** en todos los anchor links.
- **Botón "volver arriba"** flotante (esquina inferior derecha).
- **Estados del formulario** — submitting, success, error.
- **`:focus-visible`** outlines para accesibilidad por teclado.

---

## Paleta de colores

| Token                   | Hex       | Uso                         |
|-------------------------|-----------|-----------------------------|
| `--primary-dark-green`  | `#1A3C34` | Encabezados, secciones oscuras |
| `--accent-gold`         | `#C8A951` | CTAs, acentos, iconos       |
| `--text-dark`           | `#2D2D2D` | Texto corporal              |
| `--text-light`          | `#FFFFFF` | Texto sobre fondos oscuros  |
| `--bg-light`            | `#F9F7F4` | Fondos de secciones claras  |
| `--bg-dark`             | `#1A1A1A` | Sección Process timeline    |

---

## Verificación

- [ ] `npm install` sin errores
- [ ] Dev server arranca con `npx vite --host`
- [ ] Todas las secciones renderizan correctamente en desktop (≥ 1024px)
- [ ] Todas las secciones renderizan correctamente en mobile (< 768px)
- [ ] Menú hamburguesa abre y navega a cada sección
- [ ] URL hash se actualiza al scrollear
- [ ] Formulario envía a Formspree con validación
- [ ] Consent checkbox es requerido antes de enviar
- [ ] Imágenes cargan con lazy loading
- [ ] Build de producción completa (`npx vite build`)
- [ ] `dist/` contiene `images/` con todos los assets

---

> Proyecto demo — la empresa Altiplano Café es ficticia. Las imágenes son de Unsplash y los datos mostrados son ilustrativos.
