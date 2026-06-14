# LF Clinic

Pagina web profesional para **LF Clinic**, centro de enfermeria y medicina estetica en Pamplona.

El proyecto esta construido con React y Vite, con una direccion visual limpia, moderna y centrada en transmitir confianza: tonos blanco/beis, detalles en rosa palo/cobre segun el color del logo, imagen de Laura Fuentes en el primer bloque, secciones de servicios, metodologia, testimonios, preguntas frecuentes y contacto.

## Repositorio

Repositorio remoto previsto:

```bash
https://github.com/p0lixs/lfclinic.git
```

## Stack

- React 19
- Vite
- JavaScript
- CSS personalizado
- lucide-react para iconografia

## Estructura

```text
lfclinic/
+-- public/
|   +-- laura-fuentes.png
|   +-- lf-logo.png
+-- src/
|   +-- App.css
|   +-- App.jsx
|   +-- main.jsx
+-- index.html
+-- package.json
+-- package-lock.json
+-- .gitignore
+-- README.md
```

## Contenido principal

La pagina incluye:

- Cabecera fija con logo, navegacion e Instagram/CTA de reserva.
- Hero moderno con mensaje principal, CTA, imagen de Laura Fuentes y bloque de confianza.
- Introduccion de posicionamiento de marca.
- Servicios principales:
  - Tratamientos faciales
  - Tratamientos corporales
  - Tratamientos capilares
- Seccion de metodologia y valores:
  - Valoracion individual
  - Criterio sanitario
  - Naturalidad
  - Seguimiento
- Testimonios de pacientes.
- Preguntas frecuentes.
- Contacto con telefono, email, WhatsApp, Instagram y enlace a Google Maps.
- Footer con logo e identificacion de la clinica.

## Instalacion

Requisitos:

- Node.js
- npm

Instalar dependencias:

```bash
npm install
```

## Desarrollo

Levantar la aplicacion en local:

```bash
npm run dev
```

Vite mostrara la URL local en consola, normalmente:

```text
http://localhost:5173/
```

## Build de produccion

Generar la version optimizada:

```bash
npm run build
```

La salida se genera en:

```text
dist/
```

## Previsualizar build

```bash
npm run preview
```

## Scripts disponibles

```bash
npm run dev
```

Inicia el servidor de desarrollo.

```bash
npm run build
```

Compila la aplicacion para produccion.

```bash
npm run preview
```

Sirve localmente la build generada.

## Identidad visual

La direccion visual usa:

- Fondo principal blanco calido y beis.
- Acentos rosa palo/cobre inspirados en el logo.
- Tipografia serif para titulares de marca y sans-serif para lectura.
- Componentes sin exceso de tarjetas, con bordes finos y sombras suaves.
- Imagen de Laura Fuentes en el primer viewport para reforzar confianza y cercania.

## Activos

Los activos principales estan en `public/`:

- `public/lf-logo.png`: logo de LF Clinic.
- `public/laura-fuentes.png`: imagen principal de Laura Fuentes.

Al estar en `public/`, se referencian desde React con rutas absolutas:

```jsx
<img src="/lf-logo.png" alt="LF Clinic" />
<img src="/laura-fuentes.png" alt="Laura Fuentes en LF Clinic" />
```

## Datos de contacto usados en la web

- Clinica: LF Clinic
- Ciudad: Pamplona, Navarra
- Direccion: Av. de Sancho el Fuerte, 6, 31007 Pamplona
- Telefono: +34 628 843 013
- Email: lfclinic.info@gmail.com
- Instagram: @lfclinicc
- Atencion: con cita previa

## Mantenimiento

Para modificar textos, servicios, testimonios o preguntas frecuentes, editar principalmente:

```text
src/App.jsx
```

Para modificar colores, responsive, espaciados y composicion visual:

```text
src/App.css
```

Para cambiar imagenes o logo:

```text
public/
```

Mantener los nombres de archivo actuales evita tener que cambiar las rutas en el codigo.

## Despliegue

El proyecto se puede desplegar en cualquier hosting compatible con aplicaciones estaticas generadas por Vite, por ejemplo:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- Hosting tradicional sirviendo el contenido de `dist/`

Configuracion habitual:

```text
Build command: npm run build
Output directory: dist
```

## Git

Inicializar y conectar con el remoto:

```bash
git init
git remote add origin https://github.com/p0lixs/lfclinic.git
```

Primer commit sugerido:

```bash
git add .
git commit -m "Initial LF Clinic website"
git branch -M main
git push -u origin main
```

## Estado actual

La web es una landing page completa, preparada para desarrollo local y build de produccion. No incluye backend ni CMS; todo el contenido esta definido en componentes React y estilos CSS locales.
