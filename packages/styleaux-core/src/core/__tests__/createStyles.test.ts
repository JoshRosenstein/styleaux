import { WithTheme } from '../types';
import { DeepSimplify } from '../../types';
import { toStyles } from '../../__testutils__';
import { createStyles } from '../createStyles';
const media = {
  small: '@media (min-width: 30em)',
  medium: '@media (min-width: 40em)',
  large: '@media (min-width: 50em)',
};

const theme = {
  media,
  space: {
    all: [0, 10, 20, 30, 60],
    M: [0, 5, 10, 20, 20],
  },
  myValue: 100,
};
//type ITheme = typeof theme
type IMedia = typeof media;
type Theme = typeof theme;
type TestTuple = [string, ResponsiveStyleProps, any][];

type StyleProps = {
  h: boolean;
  w: string | number;
  width: string | number;
  size: string | number;
};
type ResponsiveStyleProps = DeepSimplify<
  WithTheme<StyleProps, typeof theme, IMedia>
>;

const styles = createStyles<StyleProps, Theme, IMedia>({
  h: { height: '100vh' },
  w: (input: number | string) => ({ width: input }),
  width: (input: number | string) => ({ width: input }),
  size: [
    (input: number | string) => ({ width: input }),
    (input: number | string) => ({ height: input }),
  ],
});

const THEME = theme;

describe('basics', () => {
  const basicData: TestTuple = [
    ['boolean height', { h: true }, [{ height: '100vh' }]],
    ['width px', { w: '10px' }, [{ width: '10px' }]],
    [
      'w px & bool h',
      { w: '10px', h: true },
      [{ height: '100vh' }, { width: '10px' }],
    ],
  ];

  test.each(basicData)(
    '%s',
    (_testName: string, props: any, expected: any, theme: any = THEME) => {
      //expect(theme).toEqual( THEME);
      expect(styles({ theme, ...props })).toEqual(expected);
    },
  );
});

describe('responsive', () => {
  const data: TestTuple = [
    [
      'boolean height ',
      { h: { medium: true } },
      [{ '@media (min-width: 40em)': { height: '100vh' } }],
    ],
    [
      'width px',
      { w: { medium: '10px' } },
      [{ '@media (min-width: 40em)': { width: '10px' } }],
    ],
    [
      'w px & bool h',
      { w: { medium: '10px' }, h: { medium: true } },
      [
        { '@media (min-width: 40em)': { height: '100vh' } },
        { '@media (min-width: 40em)': { width: '10px' } },
      ],
    ],
  ];

  test.each(data)('%s', (_testName: string, props, expected) => {
    //expect(theme).toEqual( THEME);
    expect(styles({ ...props, theme: THEME })).toEqual(expected);
  });
});

describe('Misc', () => {
  test('Can handle Array of Functions', () => {
    expect(styles({ size: { medium: '10px' }, theme: THEME })).toEqual([
      { '@media (min-width: 40em)': { width: '10px' } },
      { '@media (min-width: 40em)': { height: '10px' } },
    ]);
  });
});

test('Prop Order doesnt Matter', () => {
  const one = toStyles(styles({ w: '10px', width: '11px' }));
  const two = toStyles(styles({ width: '11px', w: '10px' }));
  expect(one).toEqual(two);
});

test('Prop Order doesnt Matter2', () => {
  const styles = createStyles<{ aw: boolean; bw: boolean }>({
    aw: { width: '100%' },
    bw: { width: '50%' },
  });
  const styles2 = createStyles<{ aw: boolean; bw: boolean }>({
    bw: { width: '50%' },
    aw: { width: '100%' },
  });

  const one = toStyles(styles({ aw: true, bw: true }));
  const two = toStyles(styles({ bw: true, aw: true }));
  expect(one).toEqual(two);

  const one2 = toStyles(styles2({ aw: true, bw: true }));
  const two2 = toStyles(styles2({ bw: true, aw: true }));
  expect(one2).toEqual(two2);
  expect(one2).not.toEqual(one);
});

describe('General statics or functions for Rest args', () => {
  test('Static', () => {
    const styles = createStyles({}, { margin: 1 })({});

    expect(styles).toEqual([{ margin: 1 }]);
  });
});

test('as Function', () => {
  const styles = createStyles({}, (props: any) => ({ margin: props.size }))({
    size: 1,
  });

  const nostyles = createStyles<{ size: number }>({}, (props) => ({
    margin: props.size,
  }))({});

  expect(styles).toEqual([{ margin: 1 }]);
  expect(nostyles).toEqual([{ margin: undefined }]);
});

test('as Function2', () => {
  const styles = createStyles({}, (props: { size: number }) => ({
    margin: props.size,
  }))({ size: 1 });

  expect(styles).toEqual([{ margin: 1 }]);
});
