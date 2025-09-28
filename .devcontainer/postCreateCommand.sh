#!/usr/bin/env bash

set -euo pipefail

git config --global --add safe.directory /workspaces/refined-chatgpt

pnpm install --force
