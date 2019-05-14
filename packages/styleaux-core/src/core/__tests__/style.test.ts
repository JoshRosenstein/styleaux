import { Unit } from '@styleaux/types';
import { style, extendStyle, StyleFn } from '../style';
import { snapshot, createPicker } from '../../__testutils__';

type Media = { sm: string; md: string };
const media: Media = {
  sm: '40em',
  md: '52em',
};

const colors = {
  blue: '#07c',
  black: '#111',
};
const spaceAsArray = [0, '10px', '20px'];

const theme = {
  media,
  space: spaceAsArray,
  colors,
};
const pickTheme = createPicker(theme);
type Theme = Partial<typeof theme>;
const themeArr = {
  media: ['40em', '52em'],
  space: spaceAsArray,
  colors,
};
type ThemeArr = Partial<typeof themeArr>;

const testWidth = snapshot(
  style as StyleFn<{ width: Unit }, Theme | ThemeArr, Media>,
  {
    prop: 'width',
  },
);

const testWidthArr = snapshot(
  style as StyleFn<{ width: Unit }, ThemeArr, string[]>,
  {
    prop: 'width',
  },
);

const testBg = snapshot(
  style as StyleFn<
    { backgroundColor: string; bg: string },
    Theme | ThemeArr,
    Media
  >,
  {
    prop: 'backgroundColor',
    alias: 'bg',
    key: 'colors',
  },
);

const testMargin = snapshot(style as StyleFn<{ margin: Unit }>, {
  prop: 'margin',
  cssProp: 'margin',
  transform: (n) => n + 'px',
  key: 'space',
});

const testmarginY = snapshot(
  style as StyleFn<{ marginY: Unit; my: Unit }, Theme, Media>,
  {
    cssProp: ['marginTop', 'marginBottom'],
    prop: ['marginY', 'my'],
    key: 'space',
  },
);

describe('Style', () => {
  test('returns values from theme', () => {
    const testProps = snapshot(
      style as StyleFn<{ color: string }, Theme, Media>,
      {
        prop: 'color',
        key: 'colors',
      },
    );
    testProps({ color: 'blue', theme: pickTheme('colors') });
  });

  test('handles aliased props', () => {
    testBg({
      bg: 'blue',
      theme: pickTheme('colors'),
    });
  });

  test('returns 0', () => {
    testWidth({ width: 0 });
  });

  test('returns responsive style objects', () => {
    testWidth({ theme: pickTheme('media'), width: { all: '100%', sm: '50%' } });
  });

  test('returns responsive style objects from array with media as array', () => {
    testWidthArr({
      width: ['100%', '50%'],
      theme: { media: themeArr.media },
    });
  });

  test('returns responsive style objects from array with media as object', () => {
    testWidth({ theme: pickTheme('media'), width: ['100%', '50%'] });
  });

  test('skips undefined responsive values', () => {
    testWidth({ theme: pickTheme('media'), width: ['100%', , '50%'] });
  });

  test('looksup from array Theme', () => {
    testMargin({ margin: 1, theme: { space: [0, 11, 22, 33, 44] } });
  });

  test('looksup from array Theme with Negative', () => {
    testMargin({ margin: -1, theme: { space: [0, 11, 22, 33, 44] } });
  });

  test('looksup from Object Theme', () => {
    testMargin({ margin: 'sm', theme: { space: { sm: 11 } } });
  });

  test('looksup from Object Theme with negative', () => {
    testMargin({ margin: '-sm', theme: { space: { sm: 11 } } });
  });

  test('uses input if not themeKey', () => {
    testMargin({ margin: 20 });
  });

  test('Can Handle Multiple PropKeys', () => {
    const testcolor = snapshot(
      style as StyleFn<{ color: string; fg: string }>,
      {
        cssProp: 'color',
        prop: ['color', 'fg'],
        key: 'colors',
      },
    );
    testcolor({ fg: 'blue' }, 'fg');
    testcolor({ color: 'black' }, 'color');
    testcolor({ color: 'black', fg: 'blue' }, 'First Prop');
  });

  test('Can Handle Multiple PropKeys & cssKeys', () => {
    testmarginY({ marginY: '1px' }, 'marginY');
    testmarginY({ marginY: '1px' }, 'my');
  });
  test('Can Handle Multiple PropKeys & cssKeys Responsive', () => {
    const theme = pickTheme('media', 'space');
    testmarginY({ marginY: { sm: 1, md: 2 }, theme }, 'marginY');
    testmarginY({ my: { sm: 1, md: 2 }, theme }, 'my');
  });
});

describe('Extends', () => {
  test('returns style object array', () => {
    const testProps = snapshot(extendStyle({}) as any, { prop: ['a', 'b'] });
    testProps({ a: 'foo' });
    testProps({ b: 'bar' });
  });

  test('overrides base options', () => {
    const styleFact = extendStyle({
      prop: ['a', 'b'],
      cssProp: ['x', 'y'],
    });

    const testProps = snapshot(styleFact as any, {
      prop: ['c', 'd'],
    });
    testProps({ c: 'C' });
    testProps({ d: 'D' });
  });
});
