import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import pluginImport from 'eslint-plugin-import';
import preferArrow from 'eslint-plugin-prefer-arrow';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    plugins: { js },
    extends: ['js/recommended'],
  },

  {
    plugins: {
      import: pluginImport,
      'prefer-arrow': preferArrow,
    },
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'no-console': 'warn',
      'prefer-arrow/prefer-arrow-functions': 'warn',
      'no-var': 'error',
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
]);
