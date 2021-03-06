module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:lodash/recommended",
    "plugin:sonarjs/recommended",
    "airbnb",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "lodash", "sonarjs"],
  rules: {},
  settings: {
    "import/resolver": "webpack",
  },
};
