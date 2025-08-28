import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config([
    // Ignore build and cache folders
    globalIgnores(['.next', 'dist', 'node_modules', '.turbo']),
    // Recommended for NextJS, TS
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        extends: [
            js.configs.recommended, 
            tseslint.configs.recommended, 
            reactHooks.configs['recommended-latest'], 
            reactRefresh.configs.vite, 
            'next/core-web-vitals',
            'next/typescript',
            'prettier',
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        rules: {
            'react/react-in-jsx-scope': 'off', 
            'react/no-unknown-property': ['error', { ignore: ['fetchPriority'] }], 
            'react/display-name': 'off',
            'react-hooks/exhaustive-deps': 'warn',
            'react/prop-types': 'off',
            '@next/next/no-html-link-for-pages': 'off',
            'import/no-anonymous-default-export': 'off', 
            indent: ['error', 4, { SwitchCase: 1 }], 
        },
    },
    { ignores: ['.next/**', 'node_modules/**', 'dist/**', 'bun.lockb', 'bun.lock'] }, 
])