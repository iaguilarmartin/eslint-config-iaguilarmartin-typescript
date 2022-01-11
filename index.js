const localRules = ['./rules/shared'].map(require.resolve)

module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'prettier',
    ...localRules,
  ],
}
