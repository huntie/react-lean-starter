// https://eslint.org/docs/latest/use/configure/

import react from 'eslint-plugin-react';

export default [
  {
    plugins: {
      react,
    },
    ignores: ['dist/'],
  },
];
