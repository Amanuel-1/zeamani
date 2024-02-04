/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: `./tsconfig.json`
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  rules: {
    // These opinionated rules are enabled in stylistic-type-checked above.
    // Feel free to reconfigure them to your own preference.
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-unsafe-assignment":'warn',
    "@typescript-eslint/consistent-indexed-object-style":'warn',
    "@typescript-eslint/no-explicit-any":'warn',
    "@typescript-eslint/non-nullable-type-assertion-style":'warn',
    "@typescript-eslint/prefer-optional-chain":'warn',
    "@typescript-eslint/no-unsafe-argument":'warn',
    "@typescript-eslint/no-unsafe-member-access":'warn',
    "@typescript-eslint/no-unsafe-call":'warn',
    "@typescript-eslint/no-empty-interface":'warn',
    '@typescript-eslint/no-async-without-await':'warn',

    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        checksVoidReturn: { attributes: false },
      },
    ],
  },
};

module.exports = config;
