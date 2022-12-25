module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx,vue}',
    '!src/main.ts',
    '!src/consts/index.ts',
  ]
}
