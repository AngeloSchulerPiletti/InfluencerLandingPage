module.exports = {
  extends: [
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order',
    'stylelint-config-css-modules',
    'stylelint-config-standard-scss',
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
