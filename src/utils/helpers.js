const { ethers } = require('ethers');

/**
 * Format token amount with proper decimals
 */
function formatTokenAmount(amount, decimals = 18) {
  try {
    return ethers.formatUnits(amount, decimals);
  } catch (error) {
    console.error('Error formatting token amount:', error);
    return '0';
  }
}

/**
 * Parse token amount to BigInt
 */
function parseTokenAmount(amount, decimals = 18) {
  try {
    return ethers.parseUnits(amount, decimals);
  } catch (error) {
    console.error('Error parsing token amount:', error);
    return BigInt(0);
  }
}

/**
 * Validate Ethereum address
 */
function isValidAddress(address) {
  try {
    return ethers.isAddress(address);
  } catch (error) {
    return false;
  }
}

/**
 * Calculate gas price with priority
 */
function calculateGasPrice(baseGasPrice, priorityMultiplier = 1.1) {
  return BigInt(Math.floor(Number(baseGasPrice) * priorityMultiplier));
}

/**
 * Sleep utility
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Format timestamp to readable date
 */
function formatTimestamp(timestamp) {
  return new Date(timestamp * 1000).toLocaleString();
}

/**
 * Shorten address for display
 */
function shortenAddress(address) {
  if (!address || address.length < 10) return address;
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
}

module.exports = {
  formatTokenAmount,
  parseTokenAmount,
  isValidAddress,
  calculateGasPrice,
  sleep,
  formatTimestamp,
  shortenAddress,
};
