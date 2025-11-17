# Configuración SEO - Poder Judicial de Guinea Ecuatorial

## Instalación del Plugin de Sitemap

Para que el sitemap funcione correctamente, necesitas instalar el plugin de Astro:

```bash
npm install @astrojs/sitemap
```

## Configuraciones Implementadas

### 1. Meta Tags Completos
- **SEO Básico**: title, description, keywords, canonical URL
- **Open Graph**: Para compartir en Facebook, LinkedIn, WhatsApp
- **Twitter Cards**: Para compartir en Twitter/X
- **Geo Tags**: Información de ubicación (Malabo, Guinea Ecuatorial)

### 2. Schema.org (JSON-LD)
- Marcado estructurado para Google
- Tipo: GovernmentOrganization
- Incluye logo, dirección, área de servicio

### 3. Archivos Importantes

#### robots.txt
- Ubicado en `/public/robots.txt`
- Permite el rastreo de todos los contenidos
- Define la ubicación del sitemap

#### Sitemap
- Generado automáticamente por `@astrojs/sitemap`
- Actualización semanal configurada
- Incluye todas las páginas del sitio

### 4. Imagen Open Graph

**IMPORTANTE**: Necesitas crear una imagen Open Graph en:
```
/public/images/og-image.jpg
```

**Dimensiones recomendadas**: 1200x630px

**Contenido sugerido**:
- Logo del Poder Judicial
- Nombre de la institución
- Fondo con colores institucionales

### 5. Logo para Schema

Asegúrate de tener un logo en:
```
/public/images/logo.png
```

## Cómo Usar en Páginas

### MainLayout (Páginas generales)

```astro
<MainLayout
    title="Título de la Página | Poder Judicial de Guinea Ecuatorial"
    description="Descripción específica de la página para SEO"
    keywords="palabra1, palabra2, palabra3"
    image="/images/pagina-especifica.jpg"
/>
```

### NewsLayout (Artículos/Noticias)

```astro
<NewsLayout
    title="Título de la Noticia"
    description="Resumen de la noticia"
    image="/images/noticia-imagen.jpg"
    date="2024-01-15T10:00:00Z"
    author="Redacción Poder Judicial"
/>
```

## URL del Sitio

El sitio está configurado como: `https://poderjudicial-gq.com`

**Actualizar en**:
- `astro.config.mjs` - campo `site`
- `src/layouts/MainLayout.astro` - URL por defecto
- `src/layouts/NewsLayout.astro` - URL por defecto

## Verificaciones Post-Despliegue

### 1. Google Search Console
- Registrar el sitio en https://search.google.com/search-console
- Subir el sitemap: `https://poderjudicial-gq.com/sitemap-index.xml`
- Verificar indexación

### 2. Facebook Debugger
- Verificar Open Graph: https://developers.facebook.com/tools/debug/
- Probar URL del sitio
- Limpiar caché si es necesario

### 3. Twitter Card Validator
- Verificar Twitter Cards: https://cards-dev.twitter.com/validator
- Probar URL del sitio

### 4. Prueba de Datos Estructurados de Google
- Verificar Schema: https://search.google.com/test/rich-results
- Validar JSON-LD

## Mejores Prácticas para Contenido

### Títulos
- Máximo 60 caracteres
- Incluir palabras clave principales
- Formato: "Página | Poder Judicial de Guinea Ecuatorial"

### Descripciones
- Entre 150-160 caracteres
- Incluir llamado a la acción
- Resumir el contenido de la página

### Imágenes
- Usar imágenes descriptivas
- Tamaño óptimo: 1200x630px para OG
- Formato: JPG o PNG
- Optimizar para web (< 200KB)

### URLs
- Usar guiones en lugar de guiones bajos
- Mantener URLs cortas y descriptivas
- Evitar caracteres especiales

## Monitoreo SEO

### Herramientas Recomendadas
1. **Google Analytics**: Seguimiento de tráfico
2. **Google Search Console**: Rendimiento en búsqueda
3. **Lighthouse**: Auditoría de rendimiento y SEO
4. **GTmetrix**: Velocidad de carga

### Métricas Importantes
- Posicionamiento en palabras clave
- Tráfico orgánico
- Tiempo de carga de página
- Core Web Vitals
- Tasa de rebote
- Páginas por sesión

## Palabras Clave Objetivo

### Principales
- Poder Judicial Guinea Ecuatorial
- Corte Suprema Guinea Ecuatorial
- Justicia Guinea Ecuatorial
- Tribunales Guinea Ecuatorial

### Secundarias
- Consejo Superior Poder Judicial
- Magistrados Guinea Ecuatorial
- Audiencias Provinciales
- Servicios judiciales
- Biblioteca jurídica
- Legislación Guinea Ecuatorial

## Redes Sociales

Actualizar las URLs de redes sociales en:
- `src/layouts/MainLayout.astro` (JSON-LD)
- `src/components/Footer.astro` (si aplica)

Actualmente configuradas:
- Facebook: `https://www.facebook.com/poderjudicialGQ`
- Twitter: `https://twitter.com/poderjudicialGQ`

## Notas Importantes

1. **SSL/HTTPS**: Asegurarse de que el sitio use HTTPS
2. **Mobile-First**: El diseño ya es responsive
3. **Velocidad**: Optimizar imágenes y recursos
4. **Contenido**: Actualizar regularmente las noticias
5. **Enlaces Internos**: Crear estructura de enlaces entre páginas
6. **Enlaces Externos**: Solo a fuentes confiables y relevantes

## Próximos Pasos

1. Instalar @astrojs/sitemap
2. Crear imagen og-image.jpg
3. Registrar en Google Search Console
4. Configurar Google Analytics
5. Compartir en redes sociales para probar
6. Monitorear indexación en Google
