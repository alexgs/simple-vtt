/* eslint-env node */

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'next/core-web-vitals', // Must be last
  ],
  plugins: ['@typescript-eslint'],
};
