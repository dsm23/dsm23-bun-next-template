# syntax=docker.io/docker/dockerfile:1@sha256:4c68376a702446fc3c79af22de146a148bc3367e73c25a5803d453b6b3f722fb

FROM oven/bun:1.2.6-alpine@sha256:039a0f94f9b59fb0cef929cc66b7199c3af5ca384eab2af9284a3a61b322135c AS base
FROM oven/bun:1.2.6-slim@sha256:90c7eede765bc68be893b9bf19acb57aaf9a47ba6bf44931faaddc7c3fd3e05a AS slim
# FROM oven/bun:1.2.3-slim AS base

# Install dependencies only when needed
FROM slim AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat
WORKDIR /app

ENV HUSKY=0

# Install dependencies based on the preferred package manager
COPY package.json bun.lock ./
# for the sake of the prepare script
COPY .husky/ ./.husky/

RUN bun install --frozen-lockfile

# Rebuild the source code only when needed
FROM slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED=1

RUN bun run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED=1

# RUN addgroup --system --gid 1001 bun
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:bun /app/.next/standalone ./
COPY --from=builder --chown=nextjs:bun /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
