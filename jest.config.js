module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    },
    testRegex: 'src/.*\\.test.ts$',
    coverageReporters: ['json', 'lcov', 'text'],
    reporters: ['default', ['jest-junit', { outputDirectory: 'jest_output' }]],
};
