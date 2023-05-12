/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
    'plugin:vue/vue3-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: false,
    },
  },
  plugins: ['@typescript-eslint', 'unused-imports', 'prettier'],
  rules: {
    'vue/max-len': [
      'error',
      {
        code: 80,
        ignoreHTMLAttributeValues: true,
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],
  },
}
