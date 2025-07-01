#!/bin/bash

# Digital Ocean Deployment Script for Magic Portfolio
# Make sure to run this script from your project root directory

echo "🚀 Starting deployment to Digital Ocean..."

# Build the static site
echo "📦 Building the static site..."
npm run export

# Create a tar file of the out directory
echo "📋 Creating deployment package..."
tar -czf portfolio-build.tar.gz out/

echo "✅ Build complete! Upload portfolio-build.tar.gz to your Digital Ocean droplet."
echo "📝 Follow the deployment instructions in deploy-instructions.md"
