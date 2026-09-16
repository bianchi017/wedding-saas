# Wedding SaaS

Base inicial para una plataforma de invitaciones digitales de casamiento. Incluye una portada responsive de ejemplo para **Sofía & Tomás**.

## Tecnologías

- Next.js con App Router
- React y TypeScript
- Tailwind CSS

La integración con Supabase, PostgreSQL, Prisma y autenticación queda deliberadamente fuera de esta primera etapa.

## Requisitos

- Node.js 20.9 o superior
- npm

## Ejecutar el proyecto

```bash
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el navegador.

Para comprobar la calidad de código y crear una versión de producción:

```bash
npm run lint
npm run build
```

## Publicación gratuita

El proyecto está configurado para publicar una versión estática con GitHub Pages cada vez que se envían cambios a `main`.

En el repositorio, abrí **Settings > Pages** y, en **Build and deployment**, elegí **GitHub Actions** como fuente. Tras el siguiente push, la invitación quedará disponible en `https://bianchi017.github.io/wedding-saas/`.

GitHub Pages es adecuado para esta invitación estática. Las funciones futuras que necesiten servidor —autenticación, RSVP persistente, administración y estadísticas— se desplegarán en una plataforma compatible con Next.js y Supabase.

## Estructura

```text
src/
  app/
    globals.css            # Estilos globales y Tailwind
    layout.tsx             # Metadatos y estructura HTML principal
    page.tsx               # Ruta inicial (/)
  components/
    invitation-card.tsx    # Componente visual de la invitación
public/                    # Recursos estáticos para futuras invitaciones
```

## Siguientes pasos sugeridos

1. Modelar eventos, parejas e invitados con Prisma y Supabase.
2. Incorporar autenticación para administradores.
3. Crear rutas dinámicas para cada invitación (`/invitaciones/[slug]`).
