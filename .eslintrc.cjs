module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:recommended", "plugin:node/recommended", "plugin:vue/vue3-recommended"
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'vue'
    ],
    rules: {
        "vue/no-unused-vars": "warn",
        "vue/multi-word-component-names": "off",
        "vue/component-name-in-template-casing": [
            "warn",
            "kebab-case",
            {
                registeredComponentsOnly: false,
                ignores: [],
            },
        ],
        "vue/html-indent": [
            "warn",
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: ["VExpressionContainer"],
            },
        ],
        "vue/script-indent": [
            "warn",
            4,
            {
                baseIndent: 0,
                switchCase: 0,
                ignores: [],
            },
        ],
        semi: ["warn", "always"],
        indent: ["warn", 4],
        "vue/max-attributes-per-line": [
            "warn",
            {
                singleline: {
                    max: 2,
                },
                multiline: {
                    max: 1,
                },
            },
        ],
        "vue/html-self-closing": [
            "warn",
            {
                html: {
                    void: "always",
                    normal: "always",
                    component: "always",
                },
            },
        ],
        "node/no-unsupported-features/es-syntax": "off",
        "node/file-extension-in-import": [
            "warn",
            "always",
            {
                "tryExtensions": [".js", ".vue"],
                ".vue": "always",
            },
        ],
        "node/no-missing-import": "off",
        "node/no-missing-require": "off",
        "vue/no-v-html": "off",
        "no-prototype-builtins": "off",
        "vue/require-prop-types": "off",
        "vue/new-line-between-multi-line-property": [
            "warn",
        ],
        "keyword-spacing": ["warn"],
        "vue/keyword-spacing": ["warn"],
        "no-trailing-spaces": ["warn"],
        "vue/comma-dangle": ["warn", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
        }],
        "comma-dangle": ["warn", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
        }],
        "comma-spacing": ["warn"],
        "node/no-unpublished-import": "off",
    }
}
