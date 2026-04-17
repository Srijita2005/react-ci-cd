# Use Node
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build React app
RUN npm run build

# Install serve
RUN npm install -g serve

# Run app
CMD ["serve", "-s", "build", "-l", "3000"]