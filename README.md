# Portafolio profesional — Max Malebrán Cortés

Sitio web personal desarrollado con Next.js, TypeScript y Tailwind CSS. Presenta mi perfil profesional como Ingeniero en Tecnologías de Información, con foco en Data Integration, ETL, desarrollo de software y ciberseguridad OT.

🌐 **Sitio publicado:** [portafolio-max-ten.vercel.app](https://portafolio-max-ten.vercel.app)

---

## Stack tecnológico

- **Framework:** Next.js 15 con App Router
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Despliegue:** Vercel (CD automático desde GitHub)

---

## Correr localmente

```bash
# Clonar el repositorio
git clone https://github.com/MaxStee1/portfolio-max.git

# Entrar al directorio
cd portfolio-max

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000`.

---

## Cómo agregar un proyecto nuevo

1. Abre `src/data/projects.ts`
2. Agrega un nuevo objeto al array `projects` siguiendo esta estructura:

```ts
{
  name: "Nombre del proyecto",
  description: "Descripción breve del proyecto.",
  status: "En planificación", // "En planificación" | "En desarrollo" | "Publicado"
  technologies: ["Tech 1", "Tech 2"],
  repoUrl: "https://github.com/...", // opcional
  liveUrl: "https://...",            // opcional
}
```

3. Guarda el archivo, haz commit y push. Vercel publicará los cambios automáticamente.

---

## Estructura del proyecto

```
src/
  app/
    page.tsx        ← página principal
    layout.tsx      ← layout global con nav y footer
    globals.css     ← tokens de diseño y estilos base
  components/
    layout/         ← Nav y Footer
    sections/       ← Hero, About, Experience, Skills, Projects, Education, Contact
  data/
    projects.ts     ← contenido de proyectos
    skills.ts       ← habilidades agrupadas por área
    experience.ts   ← experiencia profesional
public/
  cv.pdf            ← CV descargable
```