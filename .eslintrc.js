module.exports = {
  root: true,
  env: {
    node: true,
    browser: true // 新增浏览器环境支持
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/prettier' // 新增 prettier 支持
  ],
  parserOptions: {
    parser: '@babel/eslint-parser', // 更新解析器
    requireConfigFile: false, // 新增：不需要 babel 配置文件
    sourceType: 'module', // 新增：使用 ES 模块
    ecmaVersion: 2020 // 新增：支持 ES2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        printWidth: 100
      }
    ]
  }
}
