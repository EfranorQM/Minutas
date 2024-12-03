# Usar la imagen base de Node.js
FROM node:16-alpine

# Establecer el entorno a desarrollo
ENV NODE_ENV=development
ENV QUIET=true 

# Instalar Git y otras herramientas necesarias
RUN apk add --no-cache git openssh-client

# Crear el directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json yarn.lock ./

# Cambiar el registro de Yarn y configurar Git
RUN yarn config set registry https://registry.yarnpkg.com && \
    git config --global url."https://".insteadOf "ssh://git@" && \
    yarn install && \
    yarn cache clean

# Instalar Quasar CLI globalmente
RUN npm install -g @quasar/cli --unsafe-perm

# Copiar el código de la aplicación
COPY . .

# Exponer el puerto 8888
EXPOSE 8888

# Comando de inicio
CMD ["quasar", "dev", "--hostname", "0.0.0.0", "--port", "8888"]
