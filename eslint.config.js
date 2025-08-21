// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
    rules: {
      // Keep React in scope for JSX
      "react/react-in-jsx-scope": "error",
      "react/jsx-uses-react": "error"
    }
  },
]);
