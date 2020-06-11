const localRules = ['./rules/shared'].map(require.resolve)

module.exports = {
  extends: [
    'airbnb-typescript/base',
    'prettier',
    'prettier/@typescript-eslint',
    ...localRules,
  ],
}
