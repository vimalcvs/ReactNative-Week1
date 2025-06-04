module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-native', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-native/no-inline-styles': 'warn',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    'react-native/react-native': true,
  },
};
