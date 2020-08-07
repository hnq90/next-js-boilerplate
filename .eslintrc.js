module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react-native/no-inline-styles': 0,
    'space-before-function-paren': 0,
    'react-hooks/exhaustive-deps': 0,
  },
}
