module.exports = {
  '*.{ts,tsx}': ['eslint', 'prettier --check'],
  '*.yml': ['prettier --write'],
  '*.json': ['prettier --write'],
}
