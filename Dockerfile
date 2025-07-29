# Multi-stage Dockerfile for Vite React TypeScript app

# Build stage
FROM node:18-alpine AS builder

# Enable corepack and install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm run build

# Production stage
FROM node:18-alpine AS production

# Enable corepack and install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install serve globally as root
RUN npm install -g serve

# Add non-root user for security
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001 -G nodejs

# Set working directory and change ownership
WORKDIR /app
RUN chown nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Copy built application from builder stage
COPY --chown=nextjs:nodejs --from=builder /app/dist ./dist

# Expose port 4173
EXPOSE 4173

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:4173/ || exit 1

# Start the static file server
CMD ["serve", "-s", "dist", "-l", "4173"]
