# Deployment Guide

This guide will walk you through deploying the Boombot sniping bot.

## Prerequisites Checklist

- [ ] Node.js v18+ installed
- [ ] Git installed
- [ ] Telegram account
- [ ] Blockchain wallet with private key
- [ ] RPC endpoints for desired chains
- [ ] Initial funding in wallet for gas fees

## Step-by-Step Deployment

### 1. Create Telegram Bot

1. Open Telegram and search for [@BotFather](https://t.me/botfather)
2. Send `/newbot` command
3. Follow prompts to name your bot
4. Save the bot token provided
5. Get your Telegram user ID:
   - Message [@userinfobot](https://t.me/userinfobot)
   - Save the user ID shown

### 2. Set Up RPC Endpoints

#### Option A: Use Public Endpoints (Free, Rate Limited)
- Ethereum: `https://eth.llamarpc.com`
- BSC: `https://bsc-dataseed.binance.org/`
- Base: `https://mainnet.base.org`
- Solana: `https://api.mainnet-beta.solana.com`

#### Option B: Use Private Endpoints (Recommended)
- **Alchemy**: [https://www.alchemy.com/](https://www.alchemy.com/)
  - Create account and get API key
  - Supports: Ethereum, Polygon, Arbitrum
- **Infura**: [https://infura.io/](https://infura.io/)
  - Create project and get endpoints
  - Supports: Ethereum, Polygon, Optimism
- **QuickNode**: [https://www.quicknode.com/](https://www.quicknode.com/)
  - Supports multiple chains

### 3. Clone and Configure

```bash
# Clone repository
git clone https://github.com/trvp2590-ops/Boombot.git
cd Boombot

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Edit configuration
nano .env  # or use your preferred editor
```

### 4. Configure Environment Variables

Open `.env` and fill in your credentials:

```env
# Required
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
ADMIN_TELEGRAM_ID=123456789
PRIVATE_KEY=0xYourPrivateKeyHere

# RPC URLs (at least one required)
ETHEREUM_RPC_URL=https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY
BSC_RPC_URL=https://bsc-dataseed.binance.org/
BASE_RPC_URL=https://mainnet.base.org
SOLANA_RPC_URL=https://api.mainnet-beta.solana.com

# Trading settings
DEFAULT_SLIPPAGE=10
DEFAULT_GAS_LIMIT=500000
MAX_GAS_PRICE=100

# Security features
ENABLE_MEV_PROTECTION=true
ENABLE_RUG_CHECK=true
ENABLE_AUTO_SNIPE=false
```

### 5. Fund Your Wallet

Before starting, ensure your wallet has:
- **Ethereum**: At least 0.1 ETH for gas fees
- **BSC**: At least 0.1 BNB for gas fees
- **Base**: At least 0.05 ETH for gas fees
- **Solana**: At least 0.1 SOL for transaction fees

### 6. Start the Bot

```bash
# Start in production mode
npm start

# Or start in development mode (auto-reload)
npm run dev
```

### 7. Test the Bot

1. Open Telegram
2. Search for your bot by username
3. Send `/start` command
4. Verify bot responds
5. Test commands:
   ```
   /wallet   - Check wallet is connected
   /balance  - Verify chain connections
   /status   - Confirm bot is operational
   ```

## Production Deployment Options

### Option 1: VPS Deployment

Deploy on a Virtual Private Server for 24/7 operation:

1. **Choose a VPS provider**:
   - DigitalOcean
   - Linode
   - Vultr
   - AWS EC2

2. **SSH into your server**:
```bash
ssh root@your-server-ip
```

3. **Install Node.js**:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

4. **Clone and setup bot** (follow steps 3-6 above)

5. **Use PM2 for process management**:
```bash
npm install -g pm2
pm2 start src/index.js --name boombot
pm2 save
pm2 startup
```

### Option 2: Docker Deployment

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
CMD ["npm", "start"]
```

Create `docker-compose.yml`:
```yaml
version: '3.8'
services:
  boombot:
    build: .
    env_file: .env
    restart: unless-stopped
```

Deploy:
```bash
docker-compose up -d
```

### Option 3: Cloud Platforms

- **Heroku**: Simple deployment with git push
- **Railway**: Modern platform with easy setup
- **Render**: Free tier available
- **Google Cloud Run**: Serverless container deployment

## Monitoring and Maintenance

### View Logs

```bash
# If using PM2
pm2 logs boombot

# If using Docker
docker-compose logs -f

# Standard output
npm start
```

### Update the Bot

```bash
git pull origin main
npm install
pm2 restart boombot  # if using PM2
```

### Backup Important Data

Regularly backup:
- `.env` file (encrypted)
- Private keys (securely stored)
- Configuration files

## Troubleshooting

### Bot doesn't respond
- Check Telegram bot token is correct
- Verify bot is running: `pm2 status`
- Check logs for errors

### Wallet errors
- Verify private key format (should start with 0x)
- Ensure wallet has gas funds
- Check RPC endpoints are accessible

### RPC errors
- Try alternative RPC endpoints
- Check rate limits
- Verify API keys are valid

### Transaction failures
- Increase gas limit in `.env`
- Adjust slippage tolerance
- Check wallet balance sufficient

## Security Best Practices

1. **Protect your .env file**
   ```bash
   chmod 600 .env
   ```

2. **Use dedicated wallet**
   - Don't use your main wallet
   - Only fund with amounts you're willing to risk

3. **Enable firewall**
   ```bash
   sudo ufw allow 22/tcp
   sudo ufw enable
   ```

4. **Regular updates**
   ```bash
   npm audit fix
   ```

5. **Monitor activity**
   - Set up alerts for large transactions
   - Review bot logs daily

## Support

If you encounter issues:
1. Check the troubleshooting section
2. Review logs for error messages
3. Verify all configuration is correct
4. Open an issue on GitHub with details

---

**Remember**: Always test with small amounts first!
