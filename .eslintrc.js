// module.exports = {
//   parser: 'babel-eslint',
//   extends: [
//     'google',
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'prettier',
//     'prettier/react',
//   ],
//   plugins: ['react', 'prettier'],
//   env: {
//     browser: true,
//   },
//   rules: {
//     'no-console': 'off',
//     'no-inner-declarations': 'off',
//     'valid-jsdoc': 'off',
//     'require-jsdoc': 'off',
//     quotes: ['error', 'single', { allowTemplateLiterals: true }],
//     'consistent-return': ['error'],
//     'arrow-body-style': [
//       'error',
//       'as-needed',
//       { requireReturnForObjectLiteral: true },
//     ],
//     'jsx-quotes': ['error', 'prefer-double'],
//     semi: ['error', 'never'],
//     'object-curly-spacing': ['error', 'always'],
//     'comma-dangle': [
//       'error',
//       {
//         arrays: 'always-multiline',
//         objects: 'always-multiline',
//         imports: 'always-multiline',
//         exports: 'always-multiline',
//         functions: 'ignore',
//       },
//     ],
//   },
// }

module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb'],
  plugins: [],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    // No semi
    semi: ['error', 'never'],

    // Prevent error with no semi
    'no-unexpected-multiline': ['error'],

    // So you can use semi at start, for lines beginning with [ ( `
    'semi-style': ['off'],

    // setting max line length to 80
    'max-len': ['error', { code: 80 }],

    // always require parens around arrow function params
    'arrow-parens': ['error', 'always'],

    // prefer single, but backticks ok
    quotes: ['error', 'single', { allowTemplateLiterals: true }],

    // This rule requires return statements to either always or never specify values
    'consistent-return': ['error'],

    // .js for React is ok
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],

    // self explanatory
    // 'react/prefer-stateless-function': ['off'],

    // self explanatory
    'react/prop-types': ['off'],

    // "as-needed" enforces no braces where they can be omitted
    // If option set to true, it requires braces and an explicit return for object literals.
    'arrow-body-style': [
      'error',
      'as-needed',
      { requireReturnForObjectLiteral: true },
    ],

    // Allows "to" as valid alternative to href
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
  },
}
