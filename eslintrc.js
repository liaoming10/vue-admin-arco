import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import oxlint from 'eslint-plugin-oxlint'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  oxlint.configs['flat/recommended'],
  skipFormatting,
  {
    overrides: [
      {
        files: ['*.vue'],
        rules: {
          // 禁用 vue/multi-word-component-names 规则
          'vue/multi-word-component-names': 'off',
        },
      },
    ],
  },
]
