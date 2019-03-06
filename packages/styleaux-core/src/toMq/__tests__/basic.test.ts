import createToMq from '../createToMq'

describe('Basics', () => {
  const toMq = createToMq()
//@ts-ignorets-ignore
  const toMqEm = createToMq((x: number) => x / 16 + 'em')
  test('Object with String', () => {
    expect(toMq({min: '1px'})).toEqual('@media (min-width:1px)')
  })

  test('Numbers Convert', () => {
    expect(toMqEm({min: 16})).toEqual('@media (min-width:1em)')
  })

  test('defaults to screen and min Width', () => {
    expect(toMq('1em')).toEqual('@media screen and (min-width:1em)')
    expect(toMqEm(16)).toEqual('@media screen and (min-width:1em)')
  })

  test('Returns self if string and atRule', () => {
    expect(toMq('@media screen and (min-width:1em)')).toEqual(
      '@media screen and (min-width:1em)',
    )
  })

  test('Is Array', () => {
    expect(toMq([{min: '1em'}])).toEqual('@media (min-width:1em)')
  })

  test('False', () => {
    expect(toMq([{min: '1em', handheld: false}])).toEqual(
      '@media (min-width:1em) and not handheld',
    )
  })

  it('should return comma seperated query string for multiple media queries', () => {
    expect(
      toMq([{minWidth: '100px'}, {handheld: true, orientation: 'landscape'}]),
    ).toEqual('@media (min-width:100px), handheld and (orientation:landscape)')
  })
})
