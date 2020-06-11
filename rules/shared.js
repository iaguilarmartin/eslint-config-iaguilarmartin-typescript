module.exports = {
  ignorePatterns: ['lib/*', 'dist/*'],
  rules: {
    strict: 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        alphabetize: {
          order: 'asc'
        },
        'newlines-between': 'always-and-inside-groups'
      }
    ],
    'import/prefer-default-export': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',
    'no-continue': 'off',
    'no-restricted-syntax': 'off',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ]
  },
  plugins: ['prettier', 'jest'],
  env: {
    browser: true,
    node: true,
    jest: true
  }
};
