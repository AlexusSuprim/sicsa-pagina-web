# CLAUDE.md — Sitio Web Institucional con Astro

> Leído automáticamente por Claude en cada sesión dentro de Cursor.
> Define el stack, convenciones y contexto del proyecto para mantener consistencia.

---

## Contexto del Proyecto

**Tipo:** Sitio web institucional estático
**Hosting:** Namecheap shared hosting (cPanel + FTP)
**Output:** Archivos HTML/CSS/JS puros generados en `/dist` — sin servidor Node.js
**Deploy:** Subir `/dist` por FTP a `public_html/`

---

## Stack

| Capa | Tecnología |
|---|---|
| Generador | **Astro 4+** — `output: 'static'` |
| Lenguaje | **TypeScript strict** |
| Estilos | **Tailwind CSS v3+** |
| Íconos | **astro-icon** + Iconify |
| Animaciones | **AOS** + CSS nativo |
| Formulario de contacto | **PHP nativo** (`public/contact.php`) |
| Imágenes | **`<Image>` de Astro** (WebP automático) |
| Fuentes | Locales en `/public/fonts/` (.woff2) |

**No usar:** Next.js, React con estado, Node.js como servidor, bases de datos, JWT, sesiones.

---

## Estructura del Proyecto

```
src/
├── components/
│   ├── layout/       # Header, Footer, Nav, MobileMenu
│   ├── sections/     # Hero, About, Services, Team, Testimonials, Contact, CTA
│   └── ui/           # Button, Card, SectionTitle, Badge (componentes reutilizables)
├── layouts/
│   └── BaseLayout.astro   # Layout base con SEO completo
├── pages/            # Una página = un archivo .astro
├── data/             # Contenido estático en TypeScript (services.ts, team.ts…)
└── styles/
    └── globals.css   # Tailwind base + CSS variables + animaciones globales
public/
├── images/           # Imágenes optimizadas
├── fonts/            # Fuentes .woff2
├── contact.php       # Formulario (PHP ejecutado en Namecheap)
└── robots.txt
```

---

## Convenciones

### Naming
| Elemento | Convención | Ejemplo |
|---|---|---|
| Componentes Astro | PascalCase | `HeroSection.astro`, `ServiceCard.astro` |
| Archivos TypeScript | kebab-case | `services.ts`, `nav-links.ts` |
| Páginas | kebab-case | `nosotros.astro`, `nuestros-servicios.astro` |
| Variables/funciones | camelCase | `serviceItems`, `formatPhone` |
| Interfaces | PascalCase | `ServiceItem`, `TeamMember` |
| Constantes | UPPER_SNAKE_CASE | `SITE_NAME`, `CONTACT_EMAIL` |

### Imports — usar alias de path
```typescript
import Hero from '@components/sections/Hero.astro';
import { services } from '@data/services';
import BaseLayout from '@layouts/BaseLayout.astro';
```

---

## Reglas que Claude debe seguir

### Componentes
1. Cada componente `.astro` tiene sus `Props` tipadas con `interface` en el frontmatter
2. El contenido dinámico (servicios, equipo, testimonios) siempre en `src/data/*.ts` — nunca hardcodeado en el componente
3. Las secciones reciben datos vía `Astro.props` o importan directamente de `src/data/`
4. Un componente = una responsabilidad (no mezclar sección de servicios con formulario)

### Tailwind
5. **Mobile-first siempre** — `flex-col md:flex-row`, nunca al revés
6. Container estándar en todas las secciones: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
7. Colores solo del design system (`brand-*`) o neutros de Tailwind (`gray-*`) — sin hex hardcodeados
8. Padding vertical de secciones consistente: `py-16 sm:py-20 lg:py-24`

### Rendimiento
9. `<Image>` de Astro para todas las imágenes que vienen de `/src/assets/`
10. `loading="lazy"` en todas las imágenes excepto el hero (`loading="eager"`)
11. AOS solo para elementos que entran en viewport al hacer scroll — no animar el hero con AOS
12. No cargar librerías JS externas sin justificación (objetivo: mínimo JS en cliente)

### SEO
13. Cada página debe pasar `title`, `description` e `image` al `BaseLayout`
14. Un solo `<h1>` por página
15. Jerarquía de headings: `h1` → `h2` → `h3` sin saltarse niveles
16. URLs en español y descriptivas: `/servicios/`, `/nosotros/`

### Accesibilidad
17. `lang="es"` en `<html>`
18. Skip link al inicio del `<body>`
19. `alt` en todas las imágenes con contenido; `alt=""` + `aria-hidden="true"` en decorativas
20. `focus-visible` en todos los elementos interactivos

---

## Lo que Claude NO debe hacer

- ❌ Proponer Next.js, Nuxt, SvelteKit u otros frameworks con servidor — no funciona en Namecheap shared hosting
- ❌ Proponer bases de datos (MySQL directo desde JS, Prisma, etc.) — no aplica para sitio estático
- ❌ Usar `client:load` en componentes que no necesitan JavaScript en el browser
- ❌ Hardcodear texto de contenido en componentes — siempre extraer a `src/data/`
- ❌ Hardcodear colores fuera de Tailwind (`style="color: #123"`)
- ❌ Olvidar tipar las `Props` de componentes Astro
- ❌ Usar `<img>` nativo para imágenes locales — usar `<Image>` de Astro
- ❌ Dejar `console.log` en el código de producción
- ❌ Proponer librerías pesadas (jQuery, Bootstrap, Lodash) cuando Tailwind o JS nativo lo resuelven

---

## Variables de Entorno

Astro en modo estático no usa `.env` en tiempo de ejecución, pero sí en build time.

```
# .env (solo para build — no se expone al cliente salvo VITE_ o PUBLIC_)
PUBLIC_SITE_URL=https://tudominio.com
PUBLIC_CONTACT_EMAIL=contacto@tudominio.com
```

Acceso en componentes:
```astro
---
const siteUrl = import.meta.env.PUBLIC_SITE_URL;
---
```

---

## Comandos

```bash
npm run dev       # Servidor de desarrollo en localhost:4321
npm run build     # Genera /dist — esto se sube a Namecheap
npm run preview   # Preview del /dist antes de subir
```

### Deploy manual por FTP
1. `npm run build`
2. Conectar a Namecheap por FTP (FileZilla o cPanel File Manager)
3. Subir contenido de `/dist` a `public_html/`
4. Verificar que `contact.php` esté en la raíz de `public_html/`

---

## Cursor Rules cargadas en este proyecto

| Archivo `.mdc` | Cobertura |
|---|---|
| `cursor-rules-astro.mdc` | Componentes, Tailwind, AOS, formulario PHP, SEO, a11y |
| `stack-overview.mdc` | Referencia del stack, arquitectura, deploy, checklist |

---

## Notas para Claude

- **Idioma de respuesta:** siempre en **español**
- **Código:** variables, funciones e interfaces en **inglés**
- Cuando generes una sección nueva, incluir siempre: datos en `src/data/`, componente en `src/components/sections/`, y uso en la página correspondiente
- Cuando sugieras una animación, usar AOS o CSS nativo — nunca GSAP o librerías pesadas salvo que haya una razón muy específica
- Cuando el formulario tenga problemas, recordar que `contact.php` debe estar en `/public/` para que Astro lo copie al `/dist`
- Priorizar siempre **rendimiento y simplicidad** sobre características avanzadas — es un sitio institucional, no una aplicación
