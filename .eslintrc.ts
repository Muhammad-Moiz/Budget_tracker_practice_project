module.exports = {
  root: true,
  plugins: [
    'react',
    '@typescript-eslint',
    'eslint-plugin-prettier',
    'react-hooks',
    'testing-library'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'eslint-config-prettier',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  ignorePatterns: ['.next/**', 'packages/**', 'jest.config.js'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-console': 'error',
    'prettier/prettier': 2,
    'react/react-in-jsx-scope': 'off', // only allows jsx in .jsx ( we need to use jsx in tsx)
    'react/require-default-props': 'off', // we don't need default props for optional props
    'react/jsx-props-no-spreading': 'off', // we need spreading as we are extending mui library props
    'no-underscore-dangle': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'block' },
      { blankLine: 'always', prev: 'block', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' }
    ],
    'import/newline-after-import': ['error', { count: 1 }],
    'newline-before-return': 'error',
    'no-var': 'error',
    'newline-after-var': 'error',
    'prefer-const': 'error',
    'space-before-blocks': 'error',
    'no-trailing-spaces': ['error', { ignoreComments: true }],
    'brace-style': 'error'
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react']
    }
  ]
};
