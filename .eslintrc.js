const sortingRules = {
  'import/order': [
    'error',
    {
      groups: [
        ['builtin', 'external'],
        'internal',
        ['parent', 'sibling', 'index'],
        'object',
        'type',
      ],
      alphabetize: { order: 'asc' },
      'newlines-between': 'always',
    },
  ],
  'sort-imports': [
    'error',
    {
      ignoreDeclarationSort: true, // Prevent conlict with rule 'import/order'
    },
  ],
}

const importRules = {
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        './vite.config.js',
      ],
      optionalDependencies: false,
    },
  ],
  // Prefer named-export for better tree-shaking and enforcing style:
  // > default import / default export: vue components & css
  // > named-import / named-export: others
  'import/prefer-default-export': 'off',
}

module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    defineProps: 'readonly',
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  plugins: ['import'],
  reportUnusedDisableDirectives: true,
  rules: {
    'vue/multi-word-component-names': 'off',
    ...sortingRules,
    ...importRules,
  },
}
