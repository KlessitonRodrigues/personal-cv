# Use official Node
FROM node:20-slim

# Install system deps for ChromeDriver communication
RUN apt-get update && apt-get install -y \
    wget gnupg unzip \
    && rm -rf /var/lib/apt/lists/*

# Set workdir
WORKDIR /app

# Copy package manifests
COPY package*.json tsconfig.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Default command: run prod tests
CMD ["npm", "run", "test-prod"]
