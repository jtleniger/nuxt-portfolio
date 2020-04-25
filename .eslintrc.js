/*
 * Created by Martin Dünkelmann on 14.05.18 18:58
 * Copyright (c) 2018. All rights reserved.
 *
 * Last modified 14.05.18 18:41
 */
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'semi': 'never'
  },
  globals: {}
};
