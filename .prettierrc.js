/** @type {import("prettier").Config} */
module.exports = {
  plugins: [
    require('prettier-plugin-tailwindcss'),
    // 非 package manager 不是 pnpm 請直接使用 require 就好
    require.resolve('prettier-plugin-organize-imports'),
  ],
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
};
