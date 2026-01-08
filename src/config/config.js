const config = {
  telegram: {
    botToken: process.env.TELEGRAM_BOT_TOKEN || '',
    adminId: process.env.ADMIN_TELEGRAM_ID || '',
  },
  
  blockchain: {
    ethereum: {
      rpcUrl: process.env.ETHEREUM_RPC_URL || '',
      chainId: 1,
    },
    bsc: {
      rpcUrl: process.env.BSC_RPC_URL || '',
      chainId: 56,
    },
    solana: {
      rpcUrl: process.env.SOLANA_RPC_URL || '',
    },
    base: {
      rpcUrl: process.env.BASE_RPC_URL || '',
      chainId: 8453,
    },
  },
  
  wallet: {
    privateKey: process.env.PRIVATE_KEY || '',
  },
  
  trading: {
    defaultSlippage: parseFloat(process.env.DEFAULT_SLIPPAGE) || 10,
    defaultGasLimit: parseInt(process.env.DEFAULT_GAS_LIMIT) || 500000,
    maxGasPrice: parseFloat(process.env.MAX_GAS_PRICE) || 100,
  },
  
  features: {
    enableAutoSnipe: process.env.ENABLE_AUTO_SNIPE === 'true',
    enableMevProtection: process.env.ENABLE_MEV_PROTECTION === 'true',
    enableRugCheck: process.env.ENABLE_RUG_CHECK === 'true',
  },
  
  apiKeys: {
    etherscan: process.env.ETHERSCAN_API_KEY || '',
    bscscan: process.env.BSCSCAN_API_KEY || '',
  },
};

module.exports = config;
