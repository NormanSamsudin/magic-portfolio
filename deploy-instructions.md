# Digital Ocean Deployment Instructions

## Prerequisites
- Digital Ocean Droplet (Ubuntu 20.04 or later recommended)
- SSH access to your droplet
- Your droplet's IP address

## Step 1: Build Your Site Locally

Run the following commands in your project directory:

```bash
npm install
npm run export
```

This will create an `out` folder with your static site.

## Step 2: Connect to Your Digital Ocean Droplet

```bash
ssh root@YOUR_DROPLET_IP
```

## Step 3: Install Required Software on Your Droplet

```bash
# Update system packages
apt update && apt upgrade -y

# Install nginx
apt install nginx -y

# Install certbot for SSL (Let's Encrypt)
apt install snapd -y
snap install core && snap refresh core
snap install --classic certbot

# Create a symbolic link for certbot
ln -s /snap/bin/certbot /usr/bin/certbot

# Start and enable nginx
systemctl start nginx
systemctl enable nginx
```

## Step 4: Configure Firewall

```bash
# Allow SSH, HTTP, and HTTPS
ufw allow ssh
ufw allow 'Nginx Full'
ufw --force enable
```

## Step 5: Upload Your Site

### Option A: Using SCP (from your local machine)
```bash
# Create the tar file locally
tar -czf portfolio-build.tar.gz out/

# Upload to your droplet
scp portfolio-build.tar.gz root@YOUR_DROPLET_IP:/tmp/
```

### Option B: Using Git (on your droplet)
```bash
# Clone your repository
git clone YOUR_REPO_URL /tmp/portfolio
cd /tmp/portfolio

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# Build the site
npm install
npm run export
```

## Step 6: Deploy the Site

```bash
# Create web directory
mkdir -p /var/www/portfolio

# Extract or copy the built site
cd /tmp
tar -xzf portfolio-build.tar.gz
cp -r out/* /var/www/portfolio/

# Set proper permissions
chown -R www-data:www-data /var/www/portfolio
chmod -R 755 /var/www/portfolio
```

## Step 7: Configure Nginx

Create nginx configuration:

```bash
cat > /etc/nginx/sites-available/portfolio << 'EOF'
server {
    listen 80;
    server_name YOUR_DROPLET_IP;
    
    root /var/www/portfolio;
    index index.html;
    
    # Handle client-side routing for Next.js
    location / {
        try_files $uri $uri/ $uri.html /index.html;
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
ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default

# Test nginx configuration
nginx -t

# Restart nginx
systemctl restart nginx
```

## Step 8: Set Up SSL Certificate

```bash
# Generate SSL certificate using Let's Encrypt
certbot --nginx -d YOUR_DROPLET_IP

# Or if you want to use a domain later, use:
# certbot --nginx -d yourdomain.com

# Set up automatic renewal
systemctl enable certbot.timer
systemctl start certbot.timer
```

## Step 9: Verify Deployment

1. Visit `http://YOUR_DROPLET_IP` to see your site
2. Visit `https://YOUR_DROPLET_IP` to verify SSL is working

## Updating Your Site

To update your site in the future:

1. Build locally: `npm run export`
2. Upload new build: `scp -r portfolio-build.tar.gz root@YOUR_DROPLET_IP:/tmp/`
3. On the droplet:
   ```bash
   cd /tmp
   tar -xzf portfolio-build.tar.gz
   rm -rf /var/www/portfolio/*
   cp -r out/* /var/www/portfolio/
   chown -R www-data:www-data /var/www/portfolio
   ```

## Troubleshooting

### Check nginx status
```bash
systemctl status nginx
```

### Check nginx logs
```bash
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log
```

### Check SSL certificate status
```bash
certbot certificates
```

### Test SSL certificate renewal
```bash
certbot renew --dry-run
```

## Security Recommendations

1. **Disable root login** and create a non-root user
2. **Change SSH port** from default 22
3. **Set up fail2ban** to prevent brute force attacks
4. **Regular updates**: `apt update && apt upgrade`
5. **Monitor logs** regularly

## Performance Optimization

1. **Enable Gzip compression** (already configured)
2. **Set up caching headers** (already configured)
3. **Consider using a CDN** like Cloudflare for better global performance
4. **Monitor resource usage** with `htop` or similar tools

Your portfolio should now be accessible at your droplet's IP address with SSL encryption!
