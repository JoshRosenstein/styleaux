import createSwitchProp from '../switchProp'

describe('Basics', () => {
  const switchProp = createSwitchProp()
  it('switch Props Uses default key', () => {
    const e = switchProp(
      {
        primary: 'primary',
        secondary: v => v,
        default: 'defaultValue',
      },
      {cssProp: 'key'},
    )({primary: null, secondary: null})

    const r = {key: 'defaultValue'}

    expect(e).toEqual(r)
  })
  it('switchProps you can reference other props', () => {
    const e = switchProp(
      {
        height: (heightPropValue, {heightScaleFactor}) =>
          heightScaleFactor
            ? heightPropValue * heightScaleFactor
            : heightPropValue,
        default: 'defaultValue',
      },
      {
        cssProp: 'height',
        //  key: 'space',
        // responsive: true,
        //  responsiveBool: true
      },
    )({height: 2, heightScaleFactor: 2})
    const r = {height: 4}

    expect(e).toEqual(r)
  })
})

describe('Basics', () => {
  const theme = {sm: 0.5 + 'rem'}
  const switchProp = createSwitchProp(
    undefined,
    undefined,
    ({value}) => props => theme[value] || value,
  )

  it('switchProp uses ComputeOptions', () => {
    const e = switchProp(
      {
        height: v => v,
      },
      {
        cssProp: 'height',

        transformConfig: {
          key: 'space',
          postFn: v => `${v / 16}rem`,
        },

        //  key: 'space',
        // responsive: true,
        //  responsiveBool: true
      },
    )({height: 'sm'})
    const r = {height: '0.5rem'}

    expect(e).toEqual(r)
  })
})
