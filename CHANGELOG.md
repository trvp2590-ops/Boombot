# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-08

### Added
- Initial release of Boombot
- Telegram bot integration with command interface
- Multi-chain support (Ethereum, BSC, Base, Solana)
- Wallet management system
- Token sniping engine with core functionality
- MEV protection configuration option
- Rug check feature for scam detection
- Configurable trading parameters (slippage, gas limits)
- Comprehensive documentation (README, DEPLOYMENT guide)
- Environment configuration template
- Security best practices in documentation
- Utility helpers for token formatting and validation
- Logging system for bot operations

### Security
- Updated axios to 1.12.0 (patched DoS and SSRF vulnerabilities)
- Updated ws to 8.17.1 (patched DoS vulnerability)
- Added .gitignore to prevent committing sensitive files
- Included security warnings in documentation

## [Unreleased]

### Planned Features
- Real-time token monitoring with WebSocket connections
- Advanced rug pull detection algorithms
- Support for additional blockchains
- Trading history and analytics
- Automated profit-taking strategies
- Copy trading functionality
- Multi-wallet management
- Price alerts and notifications
- Contract verification tools
- Gas optimization strategies
