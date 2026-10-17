import next from 'eslint-config-next'

const config = [
  { ignores: ['.next/**', 'out/**', '.claude/**', 'public/_optimized/**'] },
  ...next,
  {
    rules: {
      'no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ]
    }
  }
]

export default config
