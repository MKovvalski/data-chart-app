module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/react",
        "prettier/@typescript-eslint",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "react/jsx-props-no-spreading": 2,
        "react/prop-types": 2,
        "react/jsx-boolean-value": [2, "always"],
        "import/prefer-default-export": 2,
    },
};
