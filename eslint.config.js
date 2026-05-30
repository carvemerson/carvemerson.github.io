import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
    {
        ignores: ['dist/**', 'node_modules/**'],
    },
    js.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/require-prop-types': 'off',
            'vue/no-v-html': 'off',
            'vue/component-name-in-template-casing': ['warn', 'kebab-case', {
                registeredComponentsOnly: false,
                ignores: [],
            }],
            'vue/html-indent': ['warn', 4, {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
            }],
            'vue/script-indent': ['warn', 4, {
                baseIndent: 0,
                switchCase: 0,
            }],
            'vue/max-attributes-per-line': ['warn', {
                singleline: { max: 2 },
                multiline: { max: 1 },
            }],
            'vue/html-self-closing': ['warn', {
                html: { void: 'always', normal: 'always', component: 'always' },
            }],
            'vue/comma-dangle': ['warn', { arrays: 'always-multiline', objects: 'always-multiline' }],
            semi: ['warn', 'always'],
            indent: ['warn', 4],
            'comma-dangle': ['warn', { arrays: 'always-multiline', objects: 'always-multiline' }],
            'no-trailing-spaces': 'warn',
            'keyword-spacing': 'warn',
            'comma-spacing': 'warn',
        },
    },
];
