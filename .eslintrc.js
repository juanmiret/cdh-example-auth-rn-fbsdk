module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [ "react" ],
  "rules": {
    "indent": [
      "error", 2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error", "unix"
    ],
    "quotes": [
      "error", "single"
    ],
    "semi": [
      "error", "never"
    ],
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "no-console": "off"
  }
};