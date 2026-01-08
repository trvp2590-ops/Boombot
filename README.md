# 🤖 Boombot - Crypto Sniping Bot

A Bloom-style cryptocurrency sniping bot for automated trading on decentralized exchanges (DEXs). This bot enables high-speed token sniping across multiple blockchain networks including Ethereum, Binance Smart Chain (BSC), Base, and Solana.

## ✨ Features

- 🎯 **Token Sniping**: Instant buying of newly launched tokens
- 🔗 **Multi-Chain Support**: Ethereum, BSC, Base, and Solana
- 🛡️ **MEV Protection**: Protection against Miner Extractable Value attacks
- 🔍 **Rug Check**: Automatic detection of potential scam tokens
- ⚡ **High-Speed Execution**: Optimized for sub-millisecond trading
- 📱 **Telegram Integration**: Easy control via Telegram bot interface
- 💼 **Wallet Management**: Secure wallet integration across multiple chains
- ⚙️ **Configurable Settings**: Customizable slippage, gas limits, and trading parameters

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn
- Telegram Bot Token (from [@BotFather](https://t.me/botfather))
- Blockchain RPC URLs (Alchemy, Infura, or public endpoints)
- Private key for your trading wallet

### Installation

1. Clone the repository:
```bash
git clone https://github.com/trvp2590-ops/Boombot.git
cd Boombot
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

4. Edit `.env` file with your credentials:
```env
TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
PRIVATE_KEY=your_private_key_here
ETHEREUM_RPC_URL=https://eth-mainnet.g.alchemy.com/v2/your-api-key
# ... other configurations
```

5. Start the bot:
```bash
npm start
```

## 📋 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `TELEGRAM_BOT_TOKEN` | Your Telegram bot token from BotFather | Yes |
| `PRIVATE_KEY` | Your wallet private key | Yes |
| `ETHEREUM_RPC_URL` | Ethereum RPC endpoint | Optional |
| `BSC_RPC_URL` | Binance Smart Chain RPC endpoint | Optional |
| `SOLANA_RPC_URL` | Solana RPC endpoint | Optional |
| `BASE_RPC_URL` | Base chain RPC endpoint | Optional |
| `DEFAULT_SLIPPAGE` | Default slippage tolerance (%) | No (default: 10) |
| `ENABLE_MEV_PROTECTION` | Enable MEV protection | No (default: true) |
| `ENABLE_RUG_CHECK` | Enable rug pull checking | No (default: true) |

### Trading Settings

Configure your trading parameters in the `.env` file:
- **Slippage**: Maximum acceptable slippage percentage
- **Gas Limit**: Maximum gas to use per transaction
- **Max Gas Price**: Maximum gas price in Gwei

## 💬 Telegram Commands

Once the bot is running, interact with it via Telegram:

- `/start` - Initialize the bot and see welcome message
- `/wallet` - View your wallet address and information
- `/balance` - Check balance across all supported chains
- `/snipe <token_address>` - Snipe a specific token
- `/settings` - View current bot settings
- `/status` - Check bot status and connectivity
- `/help` - Display help message

## 🔧 Development

Run in development mode with auto-reload:
```bash
npm run dev
```

## 📁 Project Structure

```
Boombot/
├── src/
│   ├── bot/
│   │   └── commands.js          # Telegram bot commands
│   ├── core/
│   │   ├── walletManager.js     # Wallet management
│   │   └── snipingEngine.js     # Token sniping logic
│   ├── config/
│   │   └── config.js            # Configuration loader
│   ├── utils/
│   │   ├── helpers.js           # Helper functions
│   │   └── logger.js            # Logging utility
│   └── index.js                 # Main entry point
├── .env.example                 # Environment template
├── .gitignore                   # Git ignore rules
├── package.json                 # Dependencies
└── README.md                    # Documentation
```

## ⚠️ Security Warnings

1. **Never share your private keys** - Keep your `.env` file secure and never commit it to version control
2. **Start with small amounts** - Test the bot with minimal funds before scaling up
3. **Use separate wallets** - Consider using a dedicated wallet for bot trading
4. **Enable security features** - Keep MEV protection and rug checks enabled
5. **Monitor actively** - Always monitor your bot's activity, especially initially

## 🛡️ Risk Disclaimer

Cryptocurrency trading involves substantial risk of loss. This bot is provided as-is without any warranties. The developers are not responsible for any financial losses incurred through the use of this software. Key risks include:

- Market volatility
- Smart contract vulnerabilities
- Failed transactions
- Gas fee losses
- Potential scams and rug pulls

**Always do your own research and never invest more than you can afford to lose.**

## 📝 License

MIT License - see LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues and questions:
- Open an issue on GitHub
- Check existing documentation

## 🔗 Resources

- [Ethers.js Documentation](https://docs.ethers.org/)
- [Telegraf Documentation](https://telegraf.js.org/)
- [Ethereum Development](https://ethereum.org/developers)

---

**Note**: This is a deployment configuration for a crypto sniping bot. Make sure you understand the risks and comply with all applicable laws and regulations in your jurisdiction.