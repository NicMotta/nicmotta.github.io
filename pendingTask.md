# Tareas Pendientes

Lista de posibles mejoras de código, buenas prácticas y mantenimiento para el proyecto.

---

## Mejoras de Rendimiento

- **Dividir el bundle de p5.js**: El archivo `src/libs/p5.min.js` (1 MB) se incluye en el bundle. Considerar importarlo dinámicamente o usar un CDN para reducir el tamaño del bundle principal y mejorar el tiempo de carga inicial.
- **Lazy loading de scripts**: Los scripts de p5.js en las páginas `/works/*` se cargan de forma sincrónica. Usar `import()` dinámico o `<script type="module">` con carga diferida mejoraría el rendimiento.
- **Optimización de imágenes**: Usar el componente `<Image />` de Astro (`astro:assets`) en lugar de etiquetas `<img>` directas para obtener optimización automática de imágenes (WebP, lazy loading, tamaños responsivos).

---

## Buenas Prácticas de Código

- **Tipado TypeScript estricto**: Agregar tipos explícitos a los archivos de constantes (`.ts`) para aprovechar mejor el soporte de TypeScript. Actualmente algunos archivos usan `any` implícito.
- **Separar scripts de p5 de los componentes**: Los scripts de p5.js están acoplados directamente a las páginas. Considerar una arquitectura de componentes más limpia que permita reutilización.
- **Eliminar `src/libs/p5.min.js`**: Dado que `p5` ya es una dependencia de npm, el archivo `src/libs/p5.min.js` es redundante. Se puede eliminar y usar el paquete npm directamente, reduciendo el tamaño del repositorio.
- **Consistencia en el idioma del código**: El código mezcla comentarios en inglés y español. Definir un idioma estándar para los comentarios del código.

---

## Mantenimiento

- **Actualizar `@astrojs/tailwind` cuando soporte Astro 6**: La versión actual de `@astrojs/tailwind` (6.0.2) solo soporta hasta Astro 5. Cuando se publique soporte oficial para Astro 6, considerar actualizar para acceder a las últimas funcionalidades.
- **Migrar a Tailwind CSS v4**: Tailwind CSS 4.x tiene una nueva arquitectura. Cuando `@astrojs/tailwind` (o un reemplazo oficial) soporte Tailwind v4, evaluar la migración. Tailwind v4 elimina el archivo de configuración `.cjs` en favor de configuración CSS nativa.
- **Agregar un archivo `.nvmrc` o campo `engines`**: Especificar la versión de Node.js requerida en `package.json` (`"engines": { "node": ">=18.0.0" }`) para asegurar consistencia entre entornos de desarrollo.
- **Revisar y limpiar el campo `shamefully-hoist` en `.npmrc`**: Esta opción es específica de `pnpm` y genera advertencias al usar `npm`. Si el proyecto usa `npm`, este campo puede removerse del `.npmrc`.

---

## Seguridad

- **Auditoría periódica de dependencias**: Ejecutar `npm audit` regularmente para detectar vulnerabilidades en las dependencias. Considerar integrar este chequeo en el workflow de CI.
- **Content Security Policy (CSP)**: Agregar encabezados de seguridad (Content Security Policy, X-Frame-Options, etc.) para mejorar la postura de seguridad del sitio. Esto puede configurarse en `astro.config.mjs` o en el servidor de hosting.
- **Subresource Integrity (SRI)**: Si se cargan recursos externos (fuentes de Google Fonts, etc.), considerar usar SRI para verificar su integridad.

---

## Accesibilidad

- **Revisar contrastes de color**: Verificar que los colores usados cumplan con los estándares WCAG 2.1 AA para contraste de texto.
- **Atributos `alt` en imágenes**: Asegurar que todas las imágenes tengan atributos `alt` descriptivos para lectores de pantalla.
- **Navegación por teclado**: Verificar que todos los elementos interactivos sean accesibles mediante teclado.

---

## SEO y Metadatos

- **Open Graph y Twitter Cards**: Agregar metaetiquetas de Open Graph y Twitter Card en el layout principal para mejorar cómo se comparte el sitio en redes sociales.
- **Sitemap**: Considerar agregar la integración `@astrojs/sitemap` para generar automáticamente un sitemap XML.
- **Favicon**: Verificar que exista un favicon y considerar agregar iconos para diferentes plataformas (Apple Touch Icon, etc.).

---

## Testing

- **Agregar tests de integración/e2e**: Actualmente el proyecto no tiene tests automatizados. Considerar agregar tests con Playwright o Vitest para validar que las páginas se renderizan correctamente.
- **Verificación de links rotos**: Agregar un paso en CI que verifique que no haya links rotos en el sitio generado.
