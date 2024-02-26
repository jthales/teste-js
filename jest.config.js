/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  // collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  coverageProvider: "v8",
  roots: [
    "<rootDir>"
  ],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
};

module.exports = config;
