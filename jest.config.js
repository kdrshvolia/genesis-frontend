/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.ts?(x)$': [
      "ts-jest",
      {
        diagnostics: {
          exclude: ['**'],
        },
      },
    ],
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"]
};
