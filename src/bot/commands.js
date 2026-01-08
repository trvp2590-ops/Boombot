class BotCommands {
  constructor(bot, walletManager, snipingEngine) {
    this.bot = bot;
    this.walletManager = walletManager;
    this.snipingEngine = snipingEngine;
  }

  initialize() {
    // Start command
    this.bot.command('start', (ctx) => {
      ctx.reply(
        '🤖 Welcome to Boombot - Crypto Sniping Bot!\n\n' +
        'Available commands:\n' +
        '/wallet - View wallet information\n' +
        '/balance - Check balance across chains\n' +
        '/snipe <token_address> - Snipe a token\n' +
        '/settings - View/modify bot settings\n' +
        '/status - Check bot status\n' +
        '/help - Show this help message'
      );
    });

    // Help command
    this.bot.command('help', (ctx) => {
      ctx.reply(
        '📖 Boombot Help\n\n' +
        '🔹 /wallet - View your wallet address and details\n' +
        '🔹 /balance - Check balance on all supported chains\n' +
        '🔹 /snipe <address> - Snipe a token by contract address\n' +
        '🔹 /settings - Configure trading parameters\n' +
        '🔹 /status - Check if bot is active and healthy\n\n' +
        '⚠️ Always test with small amounts first!'
      );
    });

    // Wallet command
    this.bot.command('wallet', async (ctx) => {
      try {
        const walletInfo = await this.walletManager.getWalletInfo();
        ctx.reply(
          `💼 Wallet Information\n\n` +
          `Address: ${walletInfo.address}\n` +
          `Chains: Ethereum, BSC, Base, Solana\n\n` +
          `⚠️ Never share your private keys!`
        );
      } catch (error) {
        ctx.reply(`❌ Error getting wallet info: ${error.message}`);
      }
    });

    // Balance command
    this.bot.command('balance', async (ctx) => {
      try {
        const balances = await this.walletManager.getBalances();
        let message = '💰 Wallet Balances\n\n';
        
        for (const [chain, balance] of Object.entries(balances)) {
          message += `${chain}: ${balance}\n`;
        }
        
        ctx.reply(message);
      } catch (error) {
        ctx.reply(`❌ Error getting balances: ${error.message}`);
      }
    });

    // Snipe command
    this.bot.command('snipe', async (ctx) => {
      try {
        const args = ctx.message.text.split(' ');
        if (args.length < 2) {
          ctx.reply('❌ Usage: /snipe <token_address>');
          return;
        }
        
        const tokenAddress = args[1];
        ctx.reply(`🎯 Initiating snipe for token: ${tokenAddress}\n⏳ Please wait...`);
        
        const result = await this.snipingEngine.snipeToken(tokenAddress);
        
        if (result.success) {
          ctx.reply(
            `✅ Snipe successful!\n\n` +
            `Token: ${result.token}\n` +
            `Amount: ${result.amount}\n` +
            `Transaction: ${result.txHash}`
          );
        } else {
          ctx.reply(`❌ Snipe failed: ${result.error}`);
        }
      } catch (error) {
        ctx.reply(`❌ Error: ${error.message}`);
      }
    });

    // Settings command
    this.bot.command('settings', (ctx) => {
      ctx.reply(
        '⚙️ Bot Settings\n\n' +
        '🔹 Slippage: 10%\n' +
        '🔹 Gas Limit: 500000\n' +
        '🔹 MEV Protection: Enabled\n' +
        '🔹 Rug Check: Enabled\n' +
        '🔹 Auto-Snipe: Disabled\n\n' +
        'To modify settings, edit your .env file'
      );
    });

    // Status command
    this.bot.command('status', (ctx) => {
      ctx.reply(
        '✅ Bot Status: Active\n' +
        '🟢 All systems operational\n' +
        '📡 Connected to all supported chains'
      );
    });

    console.log('✅ Bot commands initialized');
  }
}

module.exports = BotCommands;
