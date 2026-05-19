# C.V Diego Reyes — Plan de Ejecución

**Propósito:** Portafolio/CV profesional de Diego Fernando Reyes en GitHub Pages.
**URL:** https://maximmxxii.github.io
**Stack:** HTML5 + CSS3 + JS vanilla + Font Awesome CDN
**Repo:** https://github.com/Maximmxxii/Maximmxxii.github.io (rama: Page)

---

## Estado actual (2026-04-26)

- ✅ Dominio `diegoreyes.site` expirado — CNAME eliminado, sitio accesible en GitHub Pages
- ❌ Contenido desactualizado (~2023) — no refleja skills ni proyectos actuales
- ❌ Bugs de datos: email roto, link web incorrecto

---

## Bugs a corregir

| # | Archivo | Línea | Bug | Fix |
|---|---|---|---|---|
| B1 | index.html | 2 | `lang="en"` | → `lang="es"` |
| B2 | index.html | 262-263 | Email roto: `maximilianommiv@ gmail.com` + mailto malformado `[...]` | → `maximilianommiv@gmail.com` sin espacios ni corchetes |
| B3 | index.html | 269 | Link web: `href="http://diegoreyes.co"` texto `diegoreyes.site` | → `href="https://maximmxxii.github.io"` texto `maximmxxii.github.io` |
| B4 | index.html | 108 | Typo: `Deborador` | → `Devorador` |

---

## Mejoras de contenido

### Título profesional (línea 47-48)
```html
<!-- Antes -->
<h2>Tecnologo TIC's - Desarrollador Web</h2>

<!-- Después -->
<h2>Desarrollador Web Full Stack & Automatización IA</h2>
```

### Skills — agregar (sección habilidades, línea 121)
Tecnologías actuales a agregar junto a HTML/CSS/JS/Python:
- **PHP / Laravel** — sistema B2B completo (396 archivos, Laravel 11)
- **React** — SearchCOP.co (React 19 + Vite)
- **MySQL** — base de datos de todos los proyectos
- **n8n** — automatización IA, chatbots WhatsApp/Telegram
- **Docker** — VPS con n8n, WordPress, Zabbix, Vtiger
- **WordPress** — santacocoa.com (tema custom PHP)

Usar logos via devicons CDN:
```html
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" alt="WordPress">
```

### Experiencia — agregar (sección resumen)
```
DFR Tech Solutions (2023 - Presente)
Freelance — Desarrollador Web & Automatización IA
- Desarrollo de sistemas B2B con Laravel 11 para distribuidoras
- Sitios web para clientes: santacocoa.com, benditopastel.shop
- Chatbots WhatsApp/Telegram con n8n + OpenAI
- Gestión de infraestructura VPS con Docker
```

### Sección Proyectos — NUEVA (entre Habilidades y Resumen)
```
santacocoa.com     — Sitio WordPress custom, cafetería Cali
SearchCOP.co       — SaaS buscador contratos SECOP II (React + Supabase)
Distribuidora B2B  — Sistema ventas + facturación DIAN (Laravel 11)
AlphaHunter        — Plataforma análisis financiero (Python + FastAPI)
```

### Intereses — actualizar (línea 107-114)
Eliminar "deseos fervientes de ser parte de un Team Developer" — ya ES el developer.
Actualizar con: automatización IA, sistemas SaaS, emprendimiento tech LATAM.

---

## Módulos

| # | Módulo | Estado |
|---|---|---|
| M1 | Fix bugs (email, lang, web link, typo) | ⏳ Pendiente |
| M2 | Actualizar título + about me + intereses | ⏳ Pendiente |
| M3 | Agregar skills actuales (Laravel, React, MySQL, n8n, Docker, WordPress) | ⏳ Pendiente |
| M4 | Agregar experiencia DFR Tech Solutions | ⏳ Pendiente |
| M5 | Nueva sección Proyectos con cards | ⏳ Pendiente |
| M6 | Push a GitHub + verificar live | ⏳ Pendiente |

**Progreso total: 0%**

---

## Deploy

```bash
cd "/home/maximo/PROYECTOS/C.V Diego Reyes"
git add -A
git commit -m "update CV 2026 - skills, projects, fix bugs"
git push origin Page
```

GitHub Pages actualiza en ~1 minuto en https://maximmxxii.github.io
