require('dotenv').config();
const { Telegraf } = require('telegraf');
const BotCommands = require('./bot/commands');
const WalletManager = require('./core/walletManager');
const SnipingEngine = require('./core/snipingEngine');
const config = require('./config/config');

class BoombotApp {
  constructor() {
    this.bot = new Telegraf(config.telegram.botToken);
    this.walletManager = new WalletManager();
    this.snipingEngine = new SnipingEngine(this.walletManager);
    this.commands = new BotCommands(this.bot, this.walletManager, this.snipingEngine);
  }

  async start() {
    try {
      console.log('🚀 Starting Boombot...');
      
      // Initialize bot commands
      this.commands.initialize();
      
      // Start the bot
      await this.bot.launch();
      
      console.log('✅ Boombot is running!');
      console.log('📱 Bot is ready to receive commands via Telegram');
      
      // Enable graceful stop
      process.once('SIGINT', () => this.bot.stop('SIGINT'));
      process.once('SIGTERM', () => this.bot.stop('SIGTERM'));
      
    } catch (error) {
      console.error('❌ Failed to start Boombot:', error);
      process.exit(1);
    }
  }
}

// Start the bot
const app = new BoombotApp();
app.start();
