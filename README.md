# Mi Portafolio — React + Vite + Three.js

Sitio web de portafolio personal con secciones de Inicio, Sobre mí, Servicios, Habilidades, Proyectos y Contacto. Incluye animaciones fluidas, fondo de estrellas 3D y una esfera interactiva en el hero, con carga diferida de secciones para mejorar el rendimiento.

## Descripción
- **Stack:** React + Vite, Three.js con `@react-three/fiber` y `@react-three/drei`, animaciones con `framer-motion` y `gsap`, estilos con Bootstrap y CSS.
- **Estructura principal:**
	- [index.html](index.html): metadatos, accesibilidad y punto de montaje.
	- [src/main.jsx](src/main.jsx): arranque de React y estilos globales.
	- [src/App.jsx](src/App.jsx): layout de secciones, lazy loading y `IntersectionObserver`.
	- [src/components/Hero3D.jsx](src/components/Hero3D.jsx): Canvas 3D con estrellas y `Sphere` interactiva.
	- [src/components/SectionStars.jsx](src/components/SectionStars.jsx) y [src/components/FloatingStars.jsx](src/components/FloatingStars.jsx): fondo de estrellas con activación por visibilidad.
	- [src/components/Projects.jsx](src/components/Projects.jsx): carrusel de proyectos con auto‑avance.
	- [src/components/Skills.jsx](src/components/Skills.jsx) y [src/components/Services.jsx](src/components/Services.jsx): datos y visualización de habilidades/servicios.
	- [src/components/Header.jsx](src/components/Header.jsx), [src/components/Footer.jsx](src/components/Footer.jsx), [src/components/CustomCursor.jsx](src/components/CustomCursor.jsx), [src/components/ErrorBoundary.jsx](src/components/ErrorBoundary.jsx).
	- [src/styles/global.css](src/styles/global.css), [src/index.css](src/index.css): estilos globales.
	- [vite.config.js](vite.config.js): optimización de build y división de chunks.

## Cómo funciona
- **Carga diferida de secciones:** En [src/App.jsx](src/App.jsx), `React.lazy` + `Suspense` y `IntersectionObserver` montan `Servicios`, `Skills` y `Proyectos` solo cuando son visibles, reduciendo el costo inicial.
- **Fondo de estrellas por sección:** [src/components/SectionStars.jsx](src/components/SectionStars.jsx) observa la visibilidad del contenedor y ajusta dinámicamente la densidad (`count`) según el tamaño de pantalla; monta el `Canvas` únicamente cuando la sección está activa.
- **Hero 3D interactivo:** [src/components/Hero3D.jsx](src/components/Hero3D.jsx) renderiza `Sphere` con `MeshDistortMaterial` de `@react-three/drei`; la distorsión y velocidad reaccionan al movimiento del cursor en [src/components/Sphere.jsx](src/components/Sphere.jsx).
- **Carrusel de proyectos:** [src/components/Projects.jsx](src/components/Projects.jsx) rota automáticamente cada 4.5s y permite navegación con botones; imágenes se cargan en lazy y con `decoding="async"`.
- **Accesibilidad:** [index.html](index.html) incluye `skip-link`, atributos `aria`, `role`, y navegación clara en [src/components/Header.jsx](src/components/Header.jsx).
- **Rendimiento:** [vite.config.js](vite.config.js) define `manualChunks` (vendor/three), desactiva `sourcemap` en producción, y `esbuild.drop` elimina `console`/`debugger`.

## Requisitos
- **Node.js:** 18 o superior recomendado.
- **NPM** (o pnpm/yarn) para gestionar dependencias.

## Instalación y ejecución
```bash
# Instalar dependencias
npm install

# Entorno de desarrollo
npm run dev

# Linter
npm run lint

# Construir producción
npm run build

# Previsualizar build local
npm run preview
```

## Scripts disponibles
- **dev:** inicia el servidor de desarrollo de Vite.
- **build:** genera la carpeta `dist` optimizada.
- **preview:** sirve el contenido de `dist` para ver el build.
- **lint:** ejecuta ESLint sobre el proyecto.

## Personalización rápida
- **Proyectos:** edita el arreglo en [src/components/Projects.jsx](src/components/Projects.jsx) para cambiar `title`, `image` y `link`.
- **Habilidades:** ajusta las categorías y porcentajes en [src/components/Skills.jsx](src/components/Skills.jsx).
- **Estrellas por sección:** cambia `count` en el uso de `SectionStars` dentro de [src/components/Services.jsx](src/components/Services.jsx), [src/components/Skills.jsx](src/components/Skills.jsx) y [src/components/Projects.jsx](src/components/Projects.jsx).
- **Metadatos y favicon:** edita [index.html](index.html) (título, descripción, Open Graph, icono).
- **Optimización de build:** modifica `manualChunks` y opciones en [vite.config.js](vite.config.js) según tus necesidades.

## Despliegue
- El build genera archivos estáticos en `dist`. Puedes desplegar en servicios como Vercel, Netlify, GitHub Pages o cualquier hosting de contenido estático.
- Para probar localmente el build: `npm run preview`.

## Créditos y dependencias principales
- React, Vite, Three.js, `@react-three/fiber`, `@react-three/drei`, `framer-motion`, `gsap`, Bootstrap.
