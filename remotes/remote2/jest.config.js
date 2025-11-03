import packageJson from './package.json' with { type: 'json' };

export default {
  coverageDirectory: '<rootDir>/coverage',
  rootDir: './',
  verbose: true,
  testResultsProcessor: 'jest-sonar-reporter',

  globals: {
    __IS_SERVER__: false,
    __NAME__: packageJson.name,
  },

  moduleDirectories: ['node_modules', 'src'],

  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.d.ts',
    '!src/test/**/*',
    '!src/**/types.ts',
    '!src/**/*.test.ts',
    '!src/**/*.test.tsx',
    '!src/**/__mocks__/**/*',
    '!src/**/__test__/**/*',
    '!src/**/mixins/**/*',
    '!src/**/index.ts',
    '!src/**/styles.ts',
    '!src/**/*.stories.*',
    '!**/node_modules/**',
  ],

  coveragePathIgnorePatterns: [
    'manifest.ts',
    'example.tsx',
    'analytics-utils.ts',
    'use-isomorphic-layout-effect.ts',
    'api.ts',
    'slice.ts',
    'saga.ts',
    'memo.tsx',
    'with-helmet.tsx',
  ],

  setupFiles: ['react-app-polyfill/jsdom'],
  setupFilesAfterEnv: ['<rootDir>/src/test/setup-tests.ts'],

  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': ['babel-jest', { configFile: './config/jest/babel.config.js' }],
    '^.+\\.css$': '<rootDir>/config/jest/css-transform.js',
    '^(?!.*\\.(t|j)sx?|css|json)$': '<rootDir>/config/jest/file-transform.js',
  },

  transformIgnorePatterns: [],

  moduleNameMapper: {
    '.+\\.(css|scss|png|jpg|jpeg|ttf|woff|woff2)$': 'jest-transform-stub',
    '\\.svg': '<rootDir>/src/test/svg-mock.ts',
    '^react($|/.+)': '<rootDir>/node_modules/react$1',
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],

  resetMocks: true,
};
