#!/usr/bin/env bash
set -euo pipefail

IMAGE_NAME="pocket-planes-lockfile:local"
CONTAINER_NAME="pocket-planes-lockfile-export-$$"

cleanup() {
  podman rm -f "$CONTAINER_NAME" >/dev/null 2>&1 || true
}

trap cleanup EXIT

cat <<'CONTAINERFILE' | podman build --tag "$IMAGE_NAME" --file - .
FROM docker.io/library/node:20-bookworm-slim

WORKDIR /app

COPY package.json ./
RUN npm install --package-lock-only
CONTAINERFILE

podman create --name "$CONTAINER_NAME" "$IMAGE_NAME" >/dev/null
podman cp "${CONTAINER_NAME}:/app/package-lock.json" ./package-lock.json

echo "Generated package-lock.json"
