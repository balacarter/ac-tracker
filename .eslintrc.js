module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    es6: true,
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'jsx-a11y'],
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            moduleDirectory: ['src', 'node_modules'],
          },
        },
      },
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'prefer-const': 'warn',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-empty-interface': 'warn',
        'import/extensions': 'warn',
        'consistent-return': 'warn', // Keep consistent-return set to warn: https://gitlab.covergenius.biz/xdashboard/xcover-go-plugin-monorepo/-/merge_requests/233#note_173932
        'no-restricted-syntax': 'warn',
        '@typescript-eslint/no-unused-expressions': 'warn',
        'import/no-cycle': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn',
        'import/no-unresolved': 'warn', // possible issue with vite: https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-unresolved.md#when-not-to-use-it
      },
    },
  ],
};
