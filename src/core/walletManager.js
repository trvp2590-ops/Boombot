const { ethers } = require('ethers');
const config = require('../config/config');

class WalletManager {
  constructor() {
    this.wallet = null;
    this.providers = {};
    this.initialize();
  }

  initialize() {
    try {
      // Initialize providers for each chain
      if (config.blockchain.ethereum.rpcUrl) {
        this.providers.ethereum = new ethers.JsonRpcProvider(config.blockchain.ethereum.rpcUrl);
      }
      
      if (config.blockchain.bsc.rpcUrl) {
        this.providers.bsc = new ethers.JsonRpcProvider(config.blockchain.bsc.rpcUrl);
      }
      
      if (config.blockchain.base.rpcUrl) {
        this.providers.base = new ethers.JsonRpcProvider(config.blockchain.base.rpcUrl);
      }

      // Initialize wallet with private key
      if (config.wallet.privateKey) {
        this.wallet = new ethers.Wallet(config.wallet.privateKey);
        console.log('✅ Wallet initialized successfully');
      } else {
        console.warn('⚠️ No private key found in configuration');
      }
    } catch (error) {
      console.error('❌ Failed to initialize wallet:', error.message);
    }
  }

  getWalletInfo() {
    if (!this.wallet) {
      throw new Error('Wallet not initialized');
    }

    return {
      address: this.wallet.address,
      chains: ['Ethereum', 'BSC', 'Base', 'Solana'],
    };
  }

  async getBalances() {
    if (!this.wallet) {
      throw new Error('Wallet not initialized');
    }

    const balances = {};

    try {
      // Get Ethereum balance
      if (this.providers.ethereum) {
        const ethBalance = await this.providers.ethereum.getBalance(this.wallet.address);
        balances.Ethereum = `${ethers.formatEther(ethBalance)} ETH`;
      }

      // Get BSC balance
      if (this.providers.bsc) {
        const bscBalance = await this.providers.bsc.getBalance(this.wallet.address);
        balances.BSC = `${ethers.formatEther(bscBalance)} BNB`;
      }

      // Get Base balance
      if (this.providers.base) {
        const baseBalance = await this.providers.base.getBalance(this.wallet.address);
        balances.Base = `${ethers.formatEther(baseBalance)} ETH`;
      }

      // Solana balance would require different library
      balances.Solana = 'Not configured';

    } catch (error) {
      console.error('Error fetching balances:', error);
      throw new Error('Failed to fetch balances');
    }

    return balances;
  }

  getProvider(chain) {
    const provider = this.providers[chain.toLowerCase()];
    if (!provider) {
      throw new Error(`Provider not found for chain: ${chain}`);
    }
    return provider;
  }

  getWallet() {
    if (!this.wallet) {
      throw new Error('Wallet not initialized');
    }
    return this.wallet;
  }

  connectWalletToProvider(chain) {
    const provider = this.getProvider(chain);
    return this.wallet.connect(provider);
  }
}

module.exports = WalletManager;
