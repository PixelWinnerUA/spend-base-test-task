module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },

    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "no-console": 0,
    "no-shadow": 0,
    // Means warning
    "prettier/prettier": 0,
    // Means no warning
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/no-shadow": [
      "warn",
      {
        "ignoreFunctionTypeParameterNameValueShadow": true,
        "ignoreTypeValueShadow": true
      }
    ],
    "no-debugger": "warn"
  },
}
