module.exports = {
  roots: ['<rootDir>/src'],

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFiles: ['./jest.setup.js'],

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/helpers/assets-tests.js',
    '\\.(css|scss|svg)$': '<rootDir>/src/helpers/assets-tests.js',
    '@components': '<rootDir>/src/components',
    '@pages': '<rootDir>/src/pages',
    '@styles': '<rootDir>/src/styles',
    '@services': '<rootDir>/src/services',
    '@store': '<rootDir>/src/store',
    '@store/actions': '<rootDir>/src/store/actions',
    '@store/actions/cart/types': '<rootDir>/src/store/actions/cart/types',
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
