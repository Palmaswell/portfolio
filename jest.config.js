const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test))\\.(jsx?|js?|tsx?|ts?)$'

module.exports = {
  globals: {
    'ts-jest': {
			isolatedModules: true
		},
    setupFiles: ['./testing-setup.ts'],
  },
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testEnvironment: 'jsdom',
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testRegex: TEST_REGEX,
  testMatch: null,
  testPathIgnorePatterns: ['/node_modules/', '/.cache/', '/public/']
}
