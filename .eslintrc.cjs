module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:import/recommended' // ***1.解决引入问题
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'import/no-unresolved': 'off',
    semi: [2, 'never'], // 禁止尾部使用分号
    'no-var': 'error', // 禁止使用 var 声明变量
    indent: ['error', 2], // 缩进2格
    'no-mixed-spaces-and-tabs': 'error', // 不能空格与 tab 混用
    quotes: [2, 'single'], // 使用单引号
    'vue/html-closing-bracket-newline': 'off', // 不强制换行
    'vue/singleline-html-element-content-newline': 'off', // 不强制换行
    'vue/max-attributes-per-line': ['error', {
      singleline: { max: 5 },
      multiline: { max: 5 }
    }],
    // 自定义规则开始
    'no-unused-vars': 'warn', // 允许定义但未使用的变量，只警告不报错
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生产环境禁止使用 console
    'no-undef': 'error', // 禁止使用未声明的变量
    'no-extra-semi': 'error', // 禁止不必要的分号
    eqeqeq: 'error', // 要求使用严格等于和严格不等于
    'no-trailing-spaces': 'error', // 禁用行尾空格
    'no-multiple-empty-lines': ['error', { max: 2 }], // 禁止多行空行，最多允许2行
    'object-curly-spacing': ['error', 'always'], // 强制在花括号内使用一致的空格
    'comma-dangle': ['error', 'never']// 要求或禁止使用拖尾逗号
    // 自定义规则结束
  }
}
