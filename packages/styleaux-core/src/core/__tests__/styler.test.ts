import { styler } from '../styler';
import { ResponsiveProp } from '../types';
import { createStyles } from '../createStyles';

const media = {
  small: '@media (min-width: 30em)',
  medium: '@media (min-width: 40em)',
  large: '@media (min-width: 50em)',
};
type Media = typeof media;

const theme = {
  media,
  space: {
    all: [0, 10, 20, 30, 60],
    M: [0, 5, 10, 20, 20],
  },
  myValue: 100,
};
type Theme = typeof theme;

type StyleProps = {
  w: true;
  many: ResponsiveProp<string, Media>;
  gap: ResponsiveProp<string, Media>;
  theme: Theme;
};
const style = createStyles<Partial<StyleProps>>({
  w: { width: '1px' },
  gap: styler({
    getStyle: (val) => ({ margin: val, padding: val }),
  }),
  many: styler({
    cssProp: ['margin', 'padding'],
  }),
});

//console.log("styles", t);

test('Works', () => {
  const t = style({ w: true, gap: { small: '10px' }, theme });

  expect(t).toEqual([
    { width: '1px' },
    { '@media (min-width: 30em)': { margin: '10px', padding: '10px' } },
  ]);
});

test('Many Css Properties', () => {
  const t = style({ many: '10px', theme });

  expect(t).toEqual([
    {
      margin: '10px',
      padding: '10px',
    },
  ]);
});

test('Many Css Properties Responsive', () => {
  const t = style({ many: { medium: '5px', small: '10px' }, theme });
  expect(t).toEqual([
    {
      '@media (min-width: 40em)': { margin: '5px', padding: '5px' },
      '@media (min-width: 30em)': { margin: '10px', padding: '10px' },
    },
  ]);
});
