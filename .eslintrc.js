module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 11,
      "sourceType": "module",
      project: './tsconfig.json',
  },
    plugins: [
      "react",
      "react-hooks",
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
    ],
    "rules": {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off"
    },
  };
  