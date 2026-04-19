#!/bin/bash
# ─────────────────────────────────────────────────────────────────
# Consult Dr B — Project Setup Script
# Run this once after unzipping the project folder
# ─────────────────────────────────────────────────────────────────

set -e

echo ""
echo "╔════════════════════════════════════════╗"
echo "║       Consult Dr B — Setup Script      ║"
echo "╚════════════════════════════════════════╝"
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
  echo "❌  Node.js not found. Please install Node.js 18+ from https://nodejs.org"
  exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
  echo "❌  Node.js 18+ is required. You have $(node -v). Please upgrade."
  exit 1
fi

echo "✅  Node.js $(node -v) detected"

# Install dependencies
echo ""
echo "📦  Installing dependencies..."
npm install

echo ""
echo "✅  Dependencies installed"
echo ""
echo "🚀  Starting development server..."
echo ""
echo "  → Local:  http://localhost:3000"
echo "  → Press Ctrl+C to stop"
echo ""

npm run dev
