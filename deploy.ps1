# Quick Deployment Script for Windows
# Run this in PowerShell from your project directory

Write-Host "🚀 Building your portfolio for deployment..." -ForegroundColor Green

# Install dependencies if needed
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Build the static site
Write-Host "🔨 Building static site..." -ForegroundColor Yellow
npm run export

# Create deployment package
Write-Host "📋 Creating deployment package..." -ForegroundColor Yellow
Compress-Archive -Path "out\*" -DestinationPath "portfolio-build.zip" -Force

Write-Host "✅ Build complete!" -ForegroundColor Green
Write-Host "📁 Upload portfolio-build.zip to your Digital Ocean droplet" -ForegroundColor Cyan
Write-Host "📖 Follow the instructions in deploy-instructions.md" -ForegroundColor Cyan
