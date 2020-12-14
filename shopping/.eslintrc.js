module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'semi': 0,
    "indent": ["off", 2],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0,
    'space-before-blocks': 0,
    'key-spacing': 0,
    'no-trailing-spaces': 0,
    'quotes':[1,"single"],
    "no-tabs":"off"
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
