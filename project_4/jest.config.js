module.exports = {
  roots: ["tests/unit"],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testEnvironment: 'jsdom'
};