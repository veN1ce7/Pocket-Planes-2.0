#!/usr/bin/env bash
set -euo pipefail

IMAGE_NAME="${IMAGE_NAME:-pocket-planes-pages:local}"
CONTAINER_NAME="pocket-planes-pages-export-$$"

cleanup() {
  podman rm -f "$CONTAINER_NAME" >/dev/null 2>&1 || true
}

trap cleanup EXIT

echo "Building GitHub Pages image..."
podman build \
  --file Containerfile.pages \
  --tag "$IMAGE_NAME" \
  .

echo "Creating export container..."
podman create \
  --name "$CONTAINER_NAME" \
  "$IMAGE_NAME" \
  >/dev/null

echo "Replacing docs/ with the generated static site..."
rm -rf docs
mkdir -p docs

podman cp "${CONTAINER_NAME}:/site/." ./docs/

test -f docs/index.html

echo
echo "GitHub Pages bundle generated successfully:"
find docs -maxdepth 3 -type f | sort
