/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    cache: false,
    testEnvironment: 'node',
    testTimeout: 150_000,
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.(t|j)sx?$': '@swc/jest',
    },
};
