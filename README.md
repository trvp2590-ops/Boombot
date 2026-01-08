# Boombot

A Bloom sniping bot for cryptocurrency trading on Solana.

## Configuration

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Solana wallet with private key

### Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Edit `.env` and fill in your configuration:
     - `PRIVATE_KEY`: Your wallet private key
     - `RPC_ENDPOINT`: Solana RPC endpoint
     - Other settings as needed

3. **Configure bot settings**
   - Copy `config.json.example` to `config.json`:
     ```bash
     cp config.json.example config.json
     ```
   - Edit `config.json` to customize:
     - Trading parameters (slippage, amounts, etc.)
     - Monitoring settings
     - Notification preferences
     - Security settings (stop loss, take profit)

4. **Start the bot**
   ```bash
   npm start
   ```

   For development with auto-restart:
   ```bash
   npm run dev
   ```

## Configuration Files

- `.env` - Environment variables (not committed to git)
- `config.json` - Bot configuration (not committed to git)
- `.env.example` - Template for environment variables
- `config.json.example` - Template for bot configuration

## Security

⚠️ **Important**: Never commit your `.env` or `config.json` files to version control. They contain sensitive information like your private keys.

The `.gitignore` file is configured to exclude these files automatically.