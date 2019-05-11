import {linear,linearRepeating,radial,repeatingRadial} from '..'

const steps=[ {position: '0%', color: 'rgba(2,0,36,1)'},
{position: '35%', color: 'rgba(9,9,121,1)'},
{position: '100%', color: 'rgba(0,212,255,1)'}]

test('linear-gradient single', () => {
  const r = linear({
    direction:'90deg',
    steps
  }
  )

  expect(r).toEqual(
    'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
  )
})

test('linear-gradient multi', () => {
  const r = linear(
    '90deg',
    ...steps
  )

  expect(r).toEqual(
    'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
  )
})


test('repeating-linear-gradient singleArg', () => {
  const r = linearRepeating(
    {
      direction:'90deg',
      steps
    }
  )

  expect(r).toEqual(
    'repeating-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
  )
})

test('repeating-linear-gradient multi', () => {
  const r = linearRepeating(
    '90deg',
    ...steps
  )

  expect(r).toEqual(
    'repeating-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
  )
})



test('radial-gradient singleArg', () => {
  const r = radial(
 {steps}
  )

  expect(r).toEqual(
    'radial-gradient(rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
  )
})

test('radial-gradient multi', () => {
  const r = radial(
...steps
  )

  expect(r).toEqual(
    'radial-gradient(rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
  )
})


test('repeating-radial-gradient singleArg', () => {
  const r = repeatingRadial(
    {steps}
  )

  expect(r).toEqual(
    'repeating-radial-gradient(rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
  )
})

test('repeating-radial-gradient multi', () => {
  const r = radial(
    ...steps
  )

  expect(r).toEqual(
    'radial-gradient(rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
  )
})
