#!/bin/bash
set -euo pipefail

cert_source=/srv/cacert.pem
cert_target=/usr/local/share/ca-certificates/stalin-ca.crt

if [ "$(id -u)" = "0" ] && [ -f "$cert_source" ]; then
  install -m 0644 "$cert_source" "$cert_target"

  if command -v update-ca-certificates >/dev/null 2>&1; then
    update-ca-certificates
  fi
fi

exec /opt/hermes/docker/entrypoint.sh "$@"
