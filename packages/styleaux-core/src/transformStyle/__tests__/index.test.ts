import {createTransformStyle, OPTIONSKEYS} from '../'
import {path} from '@roseys/futils'

const TARGETCSSPROP = 'backgroundColor'
const TARGETTHEMEKEY = 'colors'
const TARGETPROP = 'red'
const TARGETVALUE = 'redColor'
const TARGETPROPVARIATION = 'redHovered'
const TARGETPROPVARIATIONVALUE = 'redHoveredColor'

const testTheme = {
  [TARGETTHEMEKEY]: {
    [TARGETPROP]: TARGETVALUE,
    [TARGETPROPVARIATION]: TARGETPROPVARIATIONVALUE,
  },
  someComponentTheme: {
    colors: {
      primary: 'someComponentPrimaryColor',
    },
  },
}
const themeGetter = (v: string) => path(v, testTheme)

const transformStyle = createTransformStyle(themeGetter, {})

describe('feature:themeGetter', () => {
  const transformStyle = createTransformStyle(themeGetter, {})
  it('Returns THeme Value', () => {
    expect(transformStyle({value: 'red', path: 'colors'})).toEqual('redColor')
  })

  it('Returns theme Value in Object', () => {
    expect(
      transformStyle({
        cssProp: TARGETCSSPROP,
        value: TARGETPROP,
        path: TARGETTHEMEKEY,
      }),
    ).toEqual({backgroundColor: 'redColor'})
  })

  it('Defaults to Orginal if doesnt exist in theme', () => {
    expect(
      transformStyle({
        cssProp: TARGETCSSPROP,
        value: 'originalBlue',
        path: TARGETTHEMEKEY,
      }),
    ).toEqual({[TARGETCSSPROP]: 'originalBlue'})
  })

  it('Doesnt perform lookup without a key', () => {
    expect(
      transformStyle({
        cssProp: TARGETCSSPROP,
        value: TARGETPROP,
      }),
    ).toEqual({[TARGETCSSPROP]: TARGETPROP})
  })
})

describe('feature:defaultKeysLookup', () => {
  const transformStyle = createTransformStyle(themeGetter, {
    [OPTIONSKEYS.keys]: {[TARGETCSSPROP]: TARGETTHEMEKEY},
    [OPTIONSKEYS.defaultLookup]: true,
  })
  it('Do not need path option if cssProp matches keyMap', () => {
    expect(
      transformStyle({
        cssProp: TARGETCSSPROP,
        value: TARGETPROP,
      }),
    ).toEqual({[TARGETCSSPROP]: TARGETVALUE})
  })
})

describe('feature:preFn', () => {
  it('preFn manipulates value before looking up theme', () => {
    expect(
      transformStyle({
        value: 'blah',
        path: TARGETTHEMEKEY,
        preFn: v => TARGETPROP,
      }),
    ).toEqual(TARGETVALUE)
  })

  it('Can be useful to conditionaly alter value based on other props (mostly for transformStyleP)', () => {
    const dynamicStyle = isHovered =>
      transformStyle({
        cssProp: TARGETCSSPROP,
        value: TARGETPROP,
        path: TARGETTHEMEKEY,
        preFn: (v, p) => (p && p.isHovered ? TARGETPROPVARIATION : v),
        props: {isHovered: isHovered},
      })
    expect(dynamicStyle(true)).toEqual({
      [TARGETCSSPROP]: TARGETPROPVARIATIONVALUE,
    })
    expect(dynamicStyle(false)).toEqual({[TARGETCSSPROP]: TARGETVALUE})
  })
})

describe('feature:postFn', () => {
  it('postFn manipulates value after performing themeLookup', () => {
    expect(
      transformStyle({
        value: 'blah',
        path: TARGETTHEMEKEY,
        postFn: v => TARGETVALUE,
      }),
    ).toEqual(TARGETVALUE)
  })

  it('Can be useful to conditionaly alter value based on other props (mostly for transformStyleP)', () => {
    const darken = (color: string) => color + 'darkened'

    const dynamicStyle = isHovered =>
      transformStyle({
        cssProp: TARGETCSSPROP,
        value: TARGETPROP,
        path: TARGETTHEMEKEY,
        postFn: (v, p) => (p && p.isHovered ? darken(v as string) : v),
        props: {isHovered: isHovered},
      })
    expect(dynamicStyle(true)).toEqual({
      [TARGETCSSPROP]: darken(TARGETVALUE),
    })
    expect(dynamicStyle(false)).toEqual({[TARGETCSSPROP]: TARGETVALUE})
  })
})

describe('feature:defaultFunctionLookup', () => {
  const darken = color => color + 'darkened'

  const FUNCTIONNAME = 'darken'
  const transformStyle = createTransformStyle(themeGetter, {
    [OPTIONSKEYS.defaultTransform]: true,
    [OPTIONSKEYS.functions]: {
      [FUNCTIONNAME]: darken,
    },
  })
  it('You can pass string from your function dictionary', () => {
    expect(
      transformStyle({
        cssProp: TARGETCSSPROP,
        path: TARGETTHEMEKEY,
        value: TARGETPROP,
        postFn: FUNCTIONNAME,
      }),
    ).toEqual({[TARGETCSSPROP]: darken(TARGETVALUE)})
  })
})
