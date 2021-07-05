const env = {
  es6: true,
};

const extend = [
  'react-app',
  'eslint:recommended',
  'plugin:jsx-a11y/recommended',
  // 'plugin:jsdoc/recommended',
];

const parserOptions = {
  ecmaversion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
};

const ignorePatterns = ['src/lib/'];

const plugins = ['prettier', 'react'];

const rules = {
  'comma-dangle': ['error', 'always-multiline'],
  'linebreak-style': ['error', 'unix'],
  'prettier/prettier': 'error',
  quotes: [
    'error',
    'single',
    {
      avoidEscape: true,
    },
  ],
  semi: ['error', 'always'],
  'no-console': [
    'warn',
    {
      allow: ['warn', 'error'],
    },
  ],
  'jsx-a11y/anchor-is-valid': 'off',
  'jsx-a11y/no-autofocus': 'off',
  'jsx-a11y/no-onchange': 'off',
  'jsx-a11y/label-has-for': [
    2,
    {
      components: ['Label'],
      required: {
        every: ['id'],
      },
      allowChildren: false,
    },
  ],
  'no-unused-expressions': 0,
  'no-undef': ['error'],
  // 'react/prop-types': ['error'],
  'no-eval': ['error'],
  'no-unused-vars': ['warn'],
};

const settings = {
  react: {
    version: 'detect',
  },
};

module.exports = {
  ignorePatterns,
  env,
  extends: extend,
  parserOptions,
  plugins,
  rules,
  settings,
};
