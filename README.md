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

En el servidor Namecheap, configurar `TURNSTILE_SECRET_KEY` para `contact.php`.

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
├── fonts/          # Montserrat (+ Gilroy si está licenciado)
└── contact.php     # Formulario de contacto
```

## Deploy en Namecheap

1. `npm run build`
2. Subir contenido de `/dist` a `public_html/` por FTP
3. Verificar que `contact.php` esté en la raíz
4. Configurar `TURNSTILE_SECRET_KEY` en el servidor
5. Probar formulario de contacto en producción

## Fuentes tipográficas

- **Montserrat** — incluida (Bunny Fonts, SIL Open Font License)
- **Gilroy** — fuente comercial; colocar archivos `.woff2` en `public/fonts/` si tiene licencia

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Preview del build |
