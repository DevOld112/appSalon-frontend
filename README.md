# 🎨 Frontend - AppSalon

![Vue.js](https://img.shields.io/badge/Vue.js-3.3-4FC08D?logo=vuedotjs)
![Vite](https://img.shields.io/badge/Vite-4.4-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-06B6D4?logo=tailwindcss)
![Pinia](https://img.shields.io/badge/Pinia-2.1-FFD02F)
![License](https://img.shields.io/badge/License-MIT-blue)

Frontend moderno construido con Vue 3, Vite y TailwindCSS para [breve descripción del proyecto].

## ✨ Características Principales
- ⚡️ **Rendimiento optimizado** con Vite 4
- 🎨 **Diseño responsive** con TailwindCSS 3
- 🗃️ **Gestión de estado** con Pinia
- 📅 **Componentes de fecha** con Vue Tailwind Datepicker
- 📱 **Formularios avanzados** con FormKit + Themes
- 📊 **Notificaciones** con Vue Toast Notification
- 🔄 **Fetching de datos** con Axios

## 🚀 Instalación Rápida

### Requisitos previos
- Node.js 18+
- npm 9+ o yarn 1.22+

```bash
# Clonar repositorio (si es parte de un monorepo)
git clone https://github.com/tu-usuario/repo-frontend.git
cd repo-frontend

# Instalar dependencias
npm install

# Variables de entorno (crear archivo .env)
cp .env.example .env
```

## 🛠 Comandos Básicos

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo (http://localhost:5173) |
| `npm run build` | Crea versión para producción en `/dist` |
| `npm run preview` | Previsualiza build de producción localmente |

## 📂 Estructura del Proyecto

```
src/
├── assets/           # Recursos estáticos
├── components/       # Componentes reutilizables
├── composables/      # Composables Vue
├── router/           # Configuración de rutas
├── stores/           # Stores de Pinia
├── styles/           # Estilos globales
├── utils/            # Utilidades/helpers
├── views/            # Vistas/páginas
├── App.vue           # Componente raíz
└── main.js           # Punto de entrada
```

## 🌐 Configuración de Entorno

```env
# .env.example
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME="Mi App"
```

## 🎨 Guía de Estilos

### TailwindCSS Config
```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: '#3a86ff',
      secondary: '#8338ec'
    }
  }
}
```

### Componente Ejemplo
```vue
<script setup>
import { useStore } from '@/stores/main'

const store = useStore()
</script>

<template>
  <main class="bg-gray-50 min-h-screen">
    <RouterView />
  </main>
</template>
```

## 🔌 Integración con Backend

```javascript
// Ejemplo usando Axios
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

export const fetchUsers = () => api.get('/users')
```

## 🤝 Contribución

1. Crea un fork del proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcion`)
3. Haz commit de tus cambios (`git commit -m 'Add some feature'`)
4. Haz push a la rama (`git push origin feature/nueva-funcion`)
5. Abre un Pull Request

## 📄 Licencia
MIT License - Ver [LICENSE](LICENSE) para más detalles.

---

**Nota**: Este proyecto usa [Conventional Commits](https://www.conventionalcommits.org/) para mensajes de commit.  
Ejemplo: `feat: add login component` o `fix: resolve auth token issue`
