# Build the React App.
FROM node:16 AS builder
WORKDIR /app
# COPY package.json pnpm-lock.yaml ./
COPY . ./
RUN npm install -g pnpm && pnpm install
ENV VITE_API=
RUN pnpm build

# Set up the nginx server.
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD [ "nginx", "-g", "daemon off;" ]
