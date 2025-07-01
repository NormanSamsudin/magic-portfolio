#!/bin/bash

# Server Setup Script for Digital Ocean Droplet
# Run this script on your Digital Ocean droplet as root

echo "🔧 Setting up server for portfolio deployment..."

# Update system
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install nginx
echo "🌐 Installing nginx..."
apt install nginx -y

# Install certbot for SSL
echo "🔒 Installing certbot for SSL..."
apt install snapd -y
snap install core && snap refresh core
snap install --classic certbot
ln -s /snap/bin/certbot /usr/bin/certbot

# Configure firewall
echo "🔥 Configuring firewall..."
ufw allow ssh
ufw allow 'Nginx Full'
ufw --force enable

# Start and enable nginx
echo "🚀 Starting nginx..."
systemctl start nginx
systemctl enable nginx

# Create web directory
echo "📁 Creating web directory..."
mkdir -p /var/www/portfolio

# Set proper permissions
chown -R www-data:www-data /var/www/portfolio
chmod -R 755 /var/www/portfolio

# Get droplet IP
DROPLET_IP=$(curl -s http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/address)

# Create nginx configuration
echo "⚙️ Configuring nginx..."
cat > /etc/nginx/sites-available/portfolio << EOF
server {
    listen 80;
    server_name $DROPLET_IP;
    
    root /var/www/portfolio;
    index index.html;
    
    # Handle client-side routing for Next.js
    location / {
        try_files \$uri \$uri/ \$uri.html /index.html;
    }
    
    # Optimize static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss;
}
EOF

# Enable the site
ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test nginx configuration
nginx -t

# Restart nginx
systemctl restart nginx

echo "✅ Server setup complete!"
echo "🌐 Your server is ready at: http://$DROPLET_IP"
echo ""
echo "Next steps:"
echo "1. Upload your portfolio files to /var/www/portfolio/"
echo "2. Run: certbot --nginx -d $DROPLET_IP (for SSL)"
echo "3. Test your site at: http://$DROPLET_IP"
