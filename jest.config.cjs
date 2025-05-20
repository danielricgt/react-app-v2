module.exports = {
    transform: { '^.+\\.[jt]sx?$': 'babel-jest',},
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.cjs'],
    // Add any other Jest configuration options here
    // For example, if you want to use a custom test environment:
    // testEnvironment: 'node',
    // testEnvironment: 'jsdom',
    transformIgnorePatterns: [
        '/node_modules/(?!(uuid)/)'
      ]
}