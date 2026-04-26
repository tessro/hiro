#!/usr/bin/env bash
set -euo pipefail

vault_path="${OBSIDIAN_VAULT_PATH:-/srv/vaults}"

exec ob sync --path "$vault_path" --continuous
