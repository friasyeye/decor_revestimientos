# ── Etapa 1: Build ──────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Generar imágenes optimizadas (public/optimized/)
RUN node scripts/optimize.js

# Compilar la aplicación (genera dist/)
RUN npm run build

# ── Etapa 2: Servidor Nginx ──────────────────────────────────────
FROM nginx:alpine

# Copiar el build al directorio que sirve Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar la configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
