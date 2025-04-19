module.exports = {
  extends: [
    'react-app',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'no-unused-vars': 'error',
    'no-undef': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
    'no-console': 'warn',
    'react/jsx-no-bind': 'off',
    'import/prefer-default-export': 'off',
    'react/style-prop-object': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-cycle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
