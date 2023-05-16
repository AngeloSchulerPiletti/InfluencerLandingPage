module.exports = {
  extends: [
    'stylelint-config-recess-order',
    'stylelint-config-css-modules',
    'stylelint-config-standard-scss',
    'stylelint-config-tailwindcss/scss',
    'stylelint-config-recommended-vue',
  ],
  rules: {
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreRules: ['tailwind'],
      },
    ],
  },
  ignoreFiles: ['/builds/**/*'],
}
