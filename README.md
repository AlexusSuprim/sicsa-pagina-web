# SICSA GROUP — Sitio Web Institucional

Sitio web institucional estático para SICSA GROUP y SANTAL GROUP. Generado con Astro y desplegado en Namecheap shared hosting.

## Requisitos previos

- Node.js 22+
- npm 10+

## Instalación

```bash
npm install
```

## Variables de entorno

Copiar `.env.example` a `.env` y completar los valores:

| Variable | Descripción |
|---|---|
| `PUBLIC_SITE_URL` | URL del sitio (`https://sicsagroup.com.gt`) |
| `PUBLIC_TURNSTILE_SITE_KEY` | Site key de Cloudflare Turnstile |
| `PUBLIC_GOOGLE_SITE_VERIFICATION` | Opcional — código de verificación de Google Search Console |

En el servidor Namecheap, configurar la **Secret Key** de Turnstile **fuera de `public_html/`**:

1. En cPanel → File Manager, ir a `/home/tu_usuario/` (un nivel arriba de `public_html/`)
2. Copiar `contact.config.php.example` → `contact.config.php` en esa carpeta
3. Pegar la Secret Key de [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile)
4. Alternativa: variable de entorno `TURNSTILE_SECRET_KEY` en cPanel

```
/home/tu_usuario/
├── contact.config.php    ← Secret Key aquí (no accesible por URL)
└── public_html/
    ├── contact.php
    └── index.html
```

## Desarrollo

```bash
npm run dev
```

Servidor en `http://localhost:4321`

## Build

```bash
npm run build
```

Genera la carpeta `/dist` lista para subir por FTP.

## Preview del build

```bash
npm run preview
```

## Estructura del proyecto

```
src/
├── components/
│   ├── layout/     # Header, Footer, Nav, WhatsApp
│   ├── sections/   # Hero, Nosotros, Servicios, Contacto
│   └── ui/         # Button, Cards, SectionTitle
├── data/           # Contenido estático tipado
├── layouts/        # BaseLayout con SEO
├── pages/          # index.astro, 404.astro
└── styles/         # globals.css + design tokens

public/
├── images/         # Logos e imágenes
├── fonts/          # Plus Jakarta Sans y Source Sans 3
└── contact.php     # Formulario de contacto
```

## Deploy en Namecheap

1. Copiar `.env.example` a `.env` y completar las variables
2. `npm run build`
3. Subir contenido de `/dist` a `public_html/` por FTP
4. Verificar que `contact.php` esté en la raíz de `public_html/`
5. Crear `contact.config.php` en `/home/tu_usuario/` (fuera de `public_html/`) con la Secret Key de Turnstile
6. Eliminar `public_html/contact.config.php` si existía de un deploy anterior
7. Probar formulario de contacto en producción (incluida verificación anti-bot)

## Deploy en Netlify

**Opción A — Arrastrar carpeta:** ejecutar `npm run build` y subir el contenido de `/dist`.

**Opción B — Git conectado:** el repo incluye `netlify.toml`. Configurar `PUBLIC_SITE_URL` y `PUBLIC_TURNSTILE_SITE_KEY` en el panel de Netlify.

> El formulario de contacto (`contact.php`) no envía correos en Netlify; solo funciona en Namecheap con PHP.

## Checklist de entrega

- [x] Diseño final con imágenes de servicios actualizadas
- [x] Navegación por anclas (Inicio, Nosotros, Servicios, Contacto)
- [x] SEO: meta tags, Open Graph, JSON-LD, sitemap, robots.txt, imagen OG
- [ ] Enviar sitemap a Google Search Console tras deploy en producción
- [ ] Turnstile configurado en producción (anti-bot del formulario)
- [ ] Prueba de envío del formulario en Namecheap
- [ ] Google Search Console + sitemap tras deploy final

## Fuentes tipográficas

- **Plus Jakarta Sans** — títulos y display (`public/fonts/`)
- **Source Sans 3** — cuerpo y navegación (`public/fonts/`)

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Preview del build |
