module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  plugins: ['react', '@typescript-eslint', 'prettier'],

  rules: {
    'prettier/prettier': ['warn'],
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
};
