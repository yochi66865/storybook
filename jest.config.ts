const config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleNameMapper: {
    '@shared(.*)': '<rootDir>/src/app/shared/$1',
    '@models(.*)': '<rootDir>/src/app/models/$1',
  },
};

export default config;
