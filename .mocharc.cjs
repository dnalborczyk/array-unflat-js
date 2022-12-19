'use strict'

module.exports = {
  exclude: '**/node_modules/**/*',
  extensions: ['ts'],
  loader: 'ts-node/esm',
  spec: ['./src/**/*.test.ts'],
}
