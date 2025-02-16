// https://eslint.org/docs/latest/use/configure/

import react from 'eslint-plugin-react';
import reactCompiler from 'eslint-plugin-react-compiler';

export default [
  reactCompiler.configs.recommended,
  {
    plugins: {
      react,
    },
    ignores: ['dist/'],
  },
];
