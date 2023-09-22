export default {
  all: true,
  'check-coverage': true,
  exclude: ['src/__tests__/**/*.*'],
  extends: '@istanbuljs/nyc-config-typescript',
  include: ['src/**/*'],
  reporter: ['html', 'lcov', 'text', 'text-summary'],
}
