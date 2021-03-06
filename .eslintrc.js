module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    "sort-imports-es6-autofix"
  ],
  'rules': {
    'array-bracket-spacing': 'error',
    'array-callback-return': 'error',
    'arrow-parens': 'error',
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'constructor-super': 'error',
    'curly': 'error',
    'eol-last': 'error',
    'eqeqeq': 'error',
    'func-call-spacing': 'error',
    'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }],
    'indent': ['error', 2],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': 'error',
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
    'new-parens': 'error',
    'no-extra-bind': 'error',
    'no-extra-parens': ['error', 'all', { 'ignoreJSX': 'multi-line' }],
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-shadow': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-unsafe-negation': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'quotes': ['error','single'],
    'semi': ['error','never'],
    'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never' }],

    'sort-imports-es6-autofix/sort-imports-es6': [2, {
      'ignoreCase': false,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['all', 'single', 'multiple', 'none']
    }],
  }
}