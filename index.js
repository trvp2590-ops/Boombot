require('dotenv').config();
const fs = require('fs');
const path = require('path');

// Load configuration
function loadConfig() {
  const configPath = path.join(__dirname, 'config.json');
  
  if (!fs.existsSync(configPath)) {
    console.error('❌ Config file not found. Please copy config.json.example to config.json');
    process.exit(1);
  }
  
  try {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    return config;
  } catch (error) {
    console.error('❌ Error loading config.json:', error.message);
    process.exit(1);
  }
}

// Check environment variables
function checkEnvironment() {
  const required = ['PRIVATE_KEY', 'RPC_ENDPOINT'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error('❌ Missing required environment variables:', missing.join(', '));
    console.error('Please check your .env file');
    process.exit(1);
  }
  
  // Check for placeholder values
  if (process.env.PRIVATE_KEY === 'your_private_key_here') {
    console.error('❌ PRIVATE_KEY is still set to the example value');
    console.error('Please update .env with your actual private key');
    process.exit(1);
  }
}

// Main function
async function main() {
  console.log('🚀 Starting Boombot...');
  
  // Check environment variables
  checkEnvironment();
  
  // Load configuration
  const config = loadConfig();
  
  console.log('✅ Configuration loaded successfully');
  console.log(`Bot Name: ${config.bot.name}`);
  console.log(`Version: ${config.bot.version}`);
  console.log(`RPC Endpoint: ${process.env.RPC_ENDPOINT}`);
  console.log(`Debug Mode: ${process.env.DEBUG_MODE || 'false'}`);
  
  if (!config.bot.enabled) {
    console.log('⚠️  Bot is disabled in config.json');
    process.exit(0);
  }
  
  console.log('\n⏳ Bot is ready to start trading...');
  console.log('(Add your trading logic here)');
  
  // Keep the process running
  process.on('SIGINT', () => {
    console.log('\n\n👋 Shutting down Boombot...');
    process.exit(0);
  });
}

// Start the bot
main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
