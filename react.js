const localRules = ['./rules/shared'].map(require.resolve);

module.exports = {
  extends: [
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    ...localRules
  ]
};
