class Logger {
  static info(message, ...args) {
    console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${message}`, ...args);
  }

  static success(message, ...args) {
    console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${message}`, ...args);
  }

  static warning(message, ...args) {
    console.warn(`⚠️ [WARNING] ${new Date().toISOString()} - ${message}`, ...args);
  }

  static error(message, ...args) {
    console.error(`❌ [ERROR] ${new Date().toISOString()} - ${message}`, ...args);
  }

  static debug(message, ...args) {
    if (process.env.DEBUG === 'true') {
      console.log(`🐛 [DEBUG] ${new Date().toISOString()} - ${message}`, ...args);
    }
  }

  static trade(message, ...args) {
    console.log(`💰 [TRADE] ${new Date().toISOString()} - ${message}`, ...args);
  }
}

module.exports = Logger;
