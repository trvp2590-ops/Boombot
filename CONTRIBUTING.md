# Contributing to Boombot

Thank you for your interest in contributing to Boombot! This document provides guidelines for contributing to the project.

## Code of Conduct

Please be respectful and constructive in all interactions. We aim to maintain a welcoming community.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:
1. Check if the issue already exists
2. Create a new issue with a clear description
3. Include steps to reproduce (for bugs)
4. Add relevant labels

### Submitting Changes

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Test your changes thoroughly
5. Commit with clear messages: `git commit -m "Add feature X"`
6. Push to your fork: `git push origin feature/your-feature-name`
7. Create a Pull Request

### Pull Request Guidelines

- Keep PRs focused on a single feature or fix
- Update documentation if needed
- Ensure all tests pass
- Follow existing code style
- Add comments for complex logic

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Boombot.git
cd Boombot

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Run in development mode
npm run dev
```

## Code Style

- Use consistent indentation (2 spaces)
- Add meaningful variable names
- Comment complex logic
- Follow existing patterns in the codebase

## Testing

Before submitting:
- Test with real blockchain interactions (use testnet)
- Verify all commands work
- Check for memory leaks
- Test error handling

## Security

- Never commit private keys or sensitive data
- Report security issues privately
- Follow best practices for crypto operations
- Validate all user inputs

## Questions?

Feel free to open an issue for questions or clarifications.

Thank you for contributing! 🚀
