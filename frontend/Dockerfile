# Dockerfile

FROM node:20

WORKDIR /app

# Only copy dependency files first to cache installs
COPY package.json package-lock.json* ./

# Clean install inside Docker
RUN npm ci --legacy-peer-deps

# Now copy the source files
COPY . .
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL
# Build production version
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
