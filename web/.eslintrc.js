module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "noe": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": 0,
        "react/display-name": 0
    },
    "ignorePatterns": [
        ".eslintrc.js",
        "webpack.config.js"
    ]
}
