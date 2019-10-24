/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  extends: ['./node_modules/eslint-config-hackreactor/index.js', 'airbnb'],
  rules: {
    'jsx-a11y/click-events-have-key-events' : 'off',
      "react/prop-types": 0
  },
  //defines document
  env: {
    "browser": true
  }
};