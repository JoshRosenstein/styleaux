import { WithTheme } from '../types';
import { Arg1, AnyFunc } from '../../types';
import { style, extendStyle } from '../style';
import { prop, merge, pick } from '@roseys/futils';
type Media = { sm: string; md: string };
const media: Media = {
  sm: '40em',
  md: '52em',
};

const theme = {
  media,
  space: [0, '10px', '20px'],
  colors: {
    blue: '#07c',
    black: '#111',
  },
};
type Theme = typeof theme;
const themeArr = {
  media: ['40em', '52em'],
  colors: {
    blue: '#07c',
    black: '#111',
  },
};
type ThemeArr = typeof themeArr;

export function snapshot<Fn extends AnyFunc>(fn: Fn, pickthemeKeys?: string[]) {
  return (props: Arg1<Fn>, label?: string) => {
    const NewProps = props.theme
      ? merge(props, {
          theme: pick(
            pickthemeKeys === undefined
              ? ['media']
              : pickthemeKeys.concat('media'),
            prop('theme', props),
          ),
        })
      : props;

    let snapshotName = JSON.stringify(NewProps, null, 2);
    if (label) {
      snapshotName = `[${label}] ${snapshotName}`;
    }
    expect(fn(props)).toMatchSnapshot(snapshotName);
  };
}

const width = style<
  WithTheme<{ width: number | string }, Theme | ThemeArr, Media>
>({
  prop: 'width',
});
const testWidth = snapshot(width);
const widthArr = style<
  WithTheme<{ width: number | string }, ThemeArr, string[]>
>({
  prop: 'width',
});
const testWidthArr = snapshot(widthArr);
const backgroundColor = style<
  WithTheme<{ backgroundColor: string; bg: string }, Theme | ThemeArr, Media>
>({
  prop: 'backgroundColor',
  alias: 'bg',
  key: 'colors',
});

const testBg = snapshot(backgroundColor, ['colors']);

const margin = style<{ margin: string | number }>({
  prop: 'margin',
  cssProp: 'margin',
  transformValue: (n) => n + 'px',
  key: 'space',
});
const testMargin = snapshot(margin, ['space']);

const testmarginY = snapshot(
  style<{ marginY: string | number; my: string | number }, Theme, Media>({
    cssProp: ['marginTop', 'marginBottom'],
    prop: ['marginY', 'my'],
    key: 'space',
  }),
  ['space'],
);

describe('Style', () => {
  test('returns values from theme', () => {
    const styleFn = style<
      WithTheme<{ color: string }, Theme | ThemeArr, Media>
    >({
      prop: 'color',
      key: 'colors',
    });
    const testProps = snapshot(styleFn, ['colors']);
    testProps({ theme, color: 'blue' });
  });

  test('handles aliased props', () => {
    testBg({
      theme,
      bg: 'blue',
    });
  });

  test('returns 0', () => {
    testWidth({ width: 0 });
  });

  test('returns responsive style objects', () => {
    testWidth({
      theme,
      width: { all: '100%', sm: '50%' },
    });
  });

  test('returns responsive style objects from array with media as array', () => {
    testWidthArr({
      theme: themeArr,
      width: ['100%', '50%'],
    });
  });

  test('returns responsive style objects from array with media as object', () => {
    testWidth({
      theme,
      width: ['100%', '50%'],
    });
  });

  test('skips undefined responsive values', () => {
    testWidth({
      theme,
      width: ['100%', , '50%'],
    });
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
      style<{ color: string; fg: string }>({
        cssProp: 'color',
        prop: ['color', 'fg'],
        key: 'colors',
      }),
      ['colors'],
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
    testmarginY({ marginY: { sm: 1, md: 2 }, theme }, 'marginY');
    testmarginY({ my: { sm: 1, md: 2 }, theme }, 'my');
  });
});

describe('Extends', () => {
  test('returns style object array', () => {
    const styleFunc = extendStyle({})({ prop: ['a', 'b'] });
    const testProps = snapshot(styleFunc);
    testProps({ a: 'foo' });
    testProps({ b: 'bar' });
  });

  test('overrides base options', () => {
    const styleFact = extendStyle({
      prop: ['a', 'b'],
      cssProp: ['x', 'y'],
    });
    const styleFunc = styleFact({
      prop: ['c', 'd'],
    });
    const testProps = snapshot(styleFunc);
    testProps({ c: 'C' });
    testProps({ d: 'D' });
  });
});
