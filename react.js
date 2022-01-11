const localRules = ['./rules/shared'].map(require.resolve);

module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'prettier',
    ...localRules
  ]
};
