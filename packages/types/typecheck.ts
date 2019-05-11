// tslint:disable

import { CSSObj } from './';

const a: CSSObj = { a: { color: 'red' } };
a;

const css: CSSObj = {
  borderTopColor: 'saddlebrown',

  gridColumnStart: '',
  grid: '',
  ':hover': {
    gridColumnStart: '',
    grid: '',

    border: '',
  },
};

// Avoid unread variables type error
css;
