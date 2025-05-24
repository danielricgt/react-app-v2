module.exports = {
  transform: { '^.+\\.[jt]sx?$': 'babel-jest' },
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['<rootDir>/jest.setup.cjs'],
  transformIgnorePatterns: ['/node_modules/(?!(uuid)/)'],
  moduleNameMapper: {
    '^@/config/apiKey$': '<rootDir>/test/mocks/apiKey.js',
    '^../config/apiKey$': '<rootDir>/test/mocks/apiKey.js'
  }
};