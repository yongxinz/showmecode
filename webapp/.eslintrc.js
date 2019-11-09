module.exports = {
  root: true,
  globals: {
    __VERSION__: false,
    __DEV__: false,
    __PUBLIC_PATH__: false,
    ErrorCodeManager: false,
    ErrorCodes: false,
    ErrorAssert: false,
    BusinessError: false,
    DataProtocolError: false,
    NetworkError: false
  },
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'standard'],
  rules: {
    //"camelcase": ["error", {"allow": ["aa_bb"]}], 
    // Identifier is not a camel case (camelcase)报错解决
    'vue/no-parsing-error': [2, {
      "x-invalid-end-tag": false
    }],
    "no-spaced-func": 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    semi: ['error', 'always'],
    'vue/no-parsing-error': [
      'error',
      {
        'x-invalid-end-tag': false
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      legacyDecorators: true
    }
  }
};
