module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true
  },
  extends: ['prettier'],
  plugins: ['prettier', '@typescript-eslint/plugin-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'error'
  }
}
