#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -gt 0 ]; then
  exec "$@"
fi

vault_path="${OBSIDIAN_VAULT_PATH:-/srv/obsidian/vault}"

exec ob sync --path "$vault_path" --continuous
