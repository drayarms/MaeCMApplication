# Build React app and serve with Nginx
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --silent
COPY . .
RUN npm run build 

FROM nginx:stable-alpine
# Copy built static files
COPY --from=build /app/build /usr/share/nginx/html                          # build is the alias we gave to the React container using directive AS
# Replace default nginx config with our app config (routes /api to backend)
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80                                                                   # Nginx uses port 80 to serve files
CMD ["nginx", "-g", "daemon off;"]
